import Link from "next/link";

const projects = [
  {
    title: "Kitchen & Shower Remodel",
    desc: "Full kitchen and shower renovation",
    before: "/images/shower-before.PNG",
    after: "/images/shower-after.PNG",
  },
  {
    title: "Enclosed Back Patio",
    desc: "Back porch converted to enclosed patio addition",
    before: "/images/patio-before.jpg",
    after: "/images/patio-after.jpg",
  },
  {
    title: "Built-In Entertainment Center",
    desc: "Custom wall-built entertainment center",
    before: "/images/entertainment-before.jpg",
    after: "/images/entertainment-after.jpg",
  },
];

export default function ProjectsPage() {
  return (
    <main>
      {/* ===== HERO ===== */}
      <section
        className="hero-bg flex w-full items-center justify-center px-4 sm:px-6 lg:px-8"
        style={{
          minHeight: "45vh",
          borderBottom: "1px solid #2A2A2A",
          paddingTop: 80,
          paddingBottom: 96,
        }}
      >
        <div className="flex max-w-3xl flex-col items-center text-center">
          <p className="eyebrow mb-5">Our Work</p>

          <h1
            className="mb-6 text-[44px] md:text-[72px]"
            style={{ color: "#E8E8E8", fontWeight: 700, lineHeight: 1.05 }}
          >
            Recent projects
          </h1>

          <p
            className="hero-subtext mb-0"
            style={{
              color: "#999",
              fontSize: 16,
              lineHeight: 1.8,
              maxWidth: 560,
            }}
          >
            A look at recent renovations — before and after.
          </p>
        </div>
      </section>

      {/* ===== PROJECT SHOWCASES ===== */}
      <section
        className="w-full px-4 sm:px-6 lg:px-8"
        style={{
          backgroundColor: "#0F0F0F",
          paddingTop: 60,
          paddingBottom: 96,
        }}
      >
        <div className="mx-auto max-w-6xl">
          {projects.map((p) => (
            <div key={p.title} style={{ marginBottom: 80 }}>
              <h2
                style={{
                  fontFamily: "var(--font-oswald), system-ui, sans-serif",
                  color: "#D0D0D0",
                  fontSize: 22,
                  fontWeight: 700,
                }}
              >
                {p.title}
              </h2>
              <p
                className="mt-2"
                style={{
                  fontFamily: "var(--font-source-sans), system-ui, sans-serif",
                  color: "#777",
                  fontSize: 14,
                }}
              >
                {p.desc}
              </p>

              <div
                className="mt-6 grid grid-cols-2"
                style={{ gap: 8 }}
              >
                {[
                  { label: "BEFORE", src: p.before },
                  { label: "AFTER", src: p.after },
                ].map((slot) => (
                  <div key={slot.label}>
                    <p
                      style={{
                        fontFamily:
                          "var(--font-source-sans), system-ui, sans-serif",
                        color: "#555",
                        fontSize: 10,
                        fontWeight: 600,
                        letterSpacing: 2,
                        marginBottom: 8,
                      }}
                    >
                      {slot.label}
                    </p>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={slot.src}
                      alt={`${p.title} — ${slot.label.toLowerCase()}`}
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                        borderRadius: 4,
                        ...(slot.src.includes("shower")
                          ? { objectPosition: "center bottom" }
                          : {}),
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CONTACT CTA STRIP ===== */}
      <section
        className="w-full px-4 text-center"
        style={{
          backgroundColor: "#111",
          borderTop: "1px solid #1E1E1E",
          paddingTop: 96,
          paddingBottom: 96,
        }}
      >
        <h2 style={{ color: "#D0D0D0", fontSize: 36, fontWeight: 700 }}>
          Ready to start your project?
        </h2>
        <p
          className="mt-4"
          style={{
            fontFamily: "var(--font-oswald), system-ui, sans-serif",
            color: "#B0B0B0",
            fontSize: 28,
            fontWeight: 400,
            letterSpacing: 2,
          }}
        >
          407-408-4806
        </p>
        <Link href="/contact" className="cta-link mt-4 inline-block">
          Or request a quote online →
        </Link>
      </section>
    </main>
  );
}
