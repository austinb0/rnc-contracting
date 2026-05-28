import Link from "next/link";

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
            Photos coming soon — check back as we document completed work.
          </p>
        </div>
      </section>

      {/* ===== PHOTO GRID ===== */}
      <section
        className="w-full px-4 sm:px-6 lg:px-8"
        style={{
          backgroundColor: "#0F0F0F",
          paddingTop: 60,
          paddingBottom: 96,
        }}
      >
        {/* Replace these divs with <Image> components when photos are ready */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="flex items-center justify-center"
              style={{
                backgroundColor: "#1A1A1A",
                border: "0.5px dashed #2A2A2A",
                borderRadius: 4,
                height: 280,
              }}
            >
              <span
                style={{
                  fontFamily:
                    "var(--font-source-sans), system-ui, sans-serif",
                  color: "#2A2A2A",
                  fontSize: 11,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                Photo coming soon
              </span>
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
