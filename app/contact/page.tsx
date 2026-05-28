"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  description: string;
  preferredContact: "Call" | "Text" | "Email";
};

const projectTypes = [
  "Kitchen Remodel",
  "Bathroom Renovation",
  "Room Addition",
  "Interior Renovation",
  "Repair",
  "Permitting",
  "Other",
];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [errorMsg, setErrorMsg] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      projectType: "Kitchen Remodel",
      description: "",
      preferredContact: "Call",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(body.error ?? `Request failed (${res.status})`);
      }
      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  return (
    <main>
      {/* ===== HERO ===== */}
      <section
        className="w-full px-4 text-center sm:px-6 lg:px-8"
        style={{
          backgroundColor: "#0D0D0D",
          paddingTop: "80px",
          paddingBottom: "60px",
          borderBottom: "1px solid #2A2A2A",
        }}
      >
        <div className="mx-auto flex max-w-3xl flex-col items-center">
          <p className="eyebrow mb-5">Get In Touch</p>

          <h1
            className="mb-6 text-[44px] md:text-[72px]"
            style={{ color: "#E8E8E8", fontWeight: 700, lineHeight: 1.05 }}
          >
            Request a free quote
          </h1>

          <p
            className="hero-subtext"
            style={{
              color: "#999",
              fontSize: 16,
              lineHeight: 1.8,
              maxWidth: 600,
            }}
          >
            Tell us a little about your project — we typically respond within
            one business day.
          </p>
        </div>
      </section>

      {/* ===== FORM + INFO ===== */}
      <section
        className="w-full px-4 sm:px-6 lg:px-8"
        style={{
          backgroundColor: "#141414",
          paddingTop: 96,
          paddingBottom: 96,
        }}
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[2fr_1fr]">
          {/* ===== Form ===== */}
          <div
            style={{
              backgroundColor: "#1A1A1A",
              border: "1px solid #2A2A2A",
              borderRadius: 4,
              padding: 36,
            }}
          >
            {status === "success" && (
              <div
                role="status"
                className="mb-6"
                style={{
                  backgroundColor: "#142014",
                  border: "1px solid #2C4A2C",
                  color: "#9CC09C",
                  padding: "12px 16px",
                  borderRadius: 3,
                  fontSize: 14,
                }}
              >
                Thanks — your request was sent. We&apos;ll be in touch within one
                business day.
              </div>
            )}
            {status === "error" && (
              <div
                role="alert"
                className="mb-6"
                style={{
                  backgroundColor: "#201414",
                  border: "1px solid #4A2C2C",
                  color: "#C09C9C",
                  padding: "12px 16px",
                  borderRadius: 3,
                  fontSize: 14,
                }}
              >
                {errorMsg || "Something went wrong. Please try again or call us directly."}
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="field-label" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="field-input"
                    autoComplete="name"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <p className="field-error">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label className="field-label" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="field-input"
                    autoComplete="tel"
                    {...register("phone", { required: "Phone is required" })}
                  />
                  {errors.phone && (
                    <p className="field-error">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              <div className="mt-5">
                <label className="field-label" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="field-input"
                  autoComplete="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="field-error">{errors.email.message}</p>
                )}
              </div>

              <div className="mt-5">
                <label className="field-label" htmlFor="projectType">
                  Project Type
                </label>
                <select
                  id="projectType"
                  className="field-input"
                  {...register("projectType", { required: true })}
                >
                  {projectTypes.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-5">
                <label className="field-label" htmlFor="description">
                  Brief Description
                </label>
                <textarea
                  id="description"
                  rows={5}
                  className="field-input"
                  placeholder="A few sentences about the project, timeline, or anything we should know."
                  {...register("description")}
                />
              </div>

              <fieldset className="mt-6">
                <legend className="field-label" style={{ marginBottom: 12 }}>
                  Preferred Contact Method
                </legend>
                <div className="flex flex-wrap gap-6">
                  {(["Call", "Text", "Email"] as const).map((opt) => (
                    <label
                      key={opt}
                      className="flex cursor-pointer items-center gap-2"
                      style={{
                        fontFamily:
                          "var(--font-source-sans), system-ui, sans-serif",
                        color: "#D0D0D0",
                        fontSize: 14,
                      }}
                    >
                      <input
                        type="radio"
                        value={opt}
                        {...register("preferredContact")}
                        style={{ accentColor: "#B0B0B0" }}
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </fieldset>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="form-submit mt-8"
              >
                {status === "submitting" ? "Sending..." : "Send Request"}
              </button>
            </form>
          </div>

          {/* ===== Info column ===== */}
          <aside className="flex flex-col gap-5">
            <div
              style={{
                backgroundColor: "#1A1A1A",
                border: "1px solid #2A2A2A",
                borderRadius: 4,
                padding: 28,
              }}
            >
              <p className="eyebrow">Direct Contact</p>
              <p
                className="mt-4"
                style={{
                  fontFamily: "var(--font-oswald), system-ui, sans-serif",
                  color: "#E0E0E0",
                  fontSize: 26,
                  fontWeight: 500,
                  letterSpacing: 1,
                }}
              >
                407-408-4806
              </p>
              <p
                className="mt-2"
                style={{ color: "#777", fontSize: 14, fontWeight: 400 }}
              >
                Call or text — we respond promptly.
              </p>
              <hr
                className="my-5"
                style={{ border: 0, borderTop: "1px solid #2A2A2A" }}
              />
              <p className="eyebrow">Service Area</p>
              <p
                className="mt-3"
                style={{ color: "#D0D0D0", fontSize: 15, fontWeight: 400 }}
              >
                Orlando and greater Central Florida
              </p>
            </div>

            <div
              style={{
                backgroundColor: "#1A1A1A",
                border: "1px solid #2A2A2A",
                borderRadius: 4,
                padding: 28,
              }}
            >
              <p className="eyebrow">License</p>
              <p
                className="mt-3"
                style={{
                  fontFamily: "var(--font-oswald), system-ui, sans-serif",
                  color: "#E0E0E0",
                  fontSize: 20,
                  fontWeight: 500,
                  letterSpacing: 1,
                }}
              >
                CBC1265964
              </p>
              <p
                className="mt-1"
                style={{ color: "#999", fontSize: 13, fontWeight: 400 }}
              >
                Certified Building Contractor
              </p>
              <p
                className="mt-1"
                style={{ color: "#999", fontSize: 13, fontWeight: 400 }}
              >
                Fully Insured
              </p>
            </div>

            <p
              style={{
                color: "#777",
                fontSize: 13,
                fontWeight: 400,
                lineHeight: 1.6,
              }}
            >
              We typically respond within 1 business day.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
