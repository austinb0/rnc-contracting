import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name?: string;
  phone?: string;
  email?: string;
  projectType?: string;
  description?: string;
  preferredContact?: string;
};

const REQUIRED_FIELDS: (keyof ContactPayload)[] = [
  "name",
  "phone",
  "email",
  "projectType",
];

function formatBody(p: ContactPayload): string {
  return [
    `New quote request from rnccontracting.net`,
    ``,
    `Name:               ${p.name}`,
    `Phone:              ${p.phone}`,
    `Email:              ${p.email}`,
    `Preferred Contact:  ${p.preferredContact ?? "Not specified"}`,
    `Project Type:       ${p.projectType}`,
    ``,
    `Description:`,
    p.description?.trim() || "(none provided)",
  ].join("\n");
}

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 },
    );
  }

  const missing = REQUIRED_FIELDS.filter((f) => !payload[f]);
  if (missing.length > 0) {
    return NextResponse.json(
      { error: `Missing required fields: ${missing.join(", ")}` },
      { status: 400 },
    );
  }

  const subject = `New Quote Request — ${payload.projectType} — ${payload.name}`;
  const body = formatBody(payload);

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey) {
    console.warn(
      "[/api/contact] RESEND_API_KEY not set — skipping email send. Payload received:",
      { subject },
    );
    return NextResponse.json({ ok: true, delivered: false, reason: "no-api-key" });
  }

  if (!to || !from) {
    console.warn(
      "[/api/contact] CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL not set — skipping email send.",
    );
    return NextResponse.json({ ok: true, delivered: false, reason: "no-addresses" });
  }

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from,
      to,
      replyTo: payload.email,
      subject,
      text: body,
    });

    if (error) {
      console.error("[/api/contact] Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true, delivered: true, id: data?.id });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("[/api/contact] Unexpected error:", err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
