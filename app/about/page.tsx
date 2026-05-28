import Link from "next/link";

const valueCards = [
  {
    title: "Licensed & Insured",
    desc: "Certified Building Contractor (CBC1265964) with full general liability coverage on every project.",
  },
  {
    title: "Family Owned",
    desc: "Independently owned and operated — no franchise overhead, no rotating crews, no surprises.",
  },
  {
    title: "Orlando Based",
    desc: "Local team serving Orlando and the surrounding Central Florida communities.",
  },
];

const whyPoints = [
  "On-time project delivery",
  "Clear communication throughout",
  "Licensed contractor CBC1265964",
  "No subcontractor surprises",
];

export default function AboutPage() {
  return (
    <main>
      {/* ===== HERO ===== */}
      <section
        className="hero-bg flex w-full items-center justify-center px-4 sm:px-6 lg:px-8"
        style={{
          minHeight: "45vh",
          borderBottom: "1px solid #2A2A2A",
          paddingTop: 96,
          paddingBottom: 96,
        }}
      >
        <div className="flex max-w-3xl flex-col items-center text-center">
          <p className="eyebrow mb-5">Our Story</p>

          <h1
            className="mb-6 text-[36px] md:text-[48px]"
            style={{ color: "#E8E8E8", fontWeight: 700, lineHeight: 1.05 }}
          >
            A family business built on doing the job right
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
            RNC Contracting was founded on a simple belief — homeowners deserve
            a contractor who shows up, communicates clearly, and delivers
            quality work. We&apos;re a family-owned operation serving the
            greater Orlando area.
          </p>
        </div>
      </section>

      {/* ===== VALUE CARDS ===== */}
      <section
        className="w-full px-4 sm:px-6 lg:px-8"
        style={{
          backgroundColor: "#141414",
          paddingTop: 80,
          paddingBottom: 96,
        }}
      >
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">What we stand for</p>
          <h2
            className="mt-3 text-[32px] md:text-[42px]"
            style={{ color: "#D0D0D0" }}
          >
            Built for homeowners who want it done right
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
            {valueCards.map((v) => (
              <div key={v.title} className="service-card">
                <h3 style={{ color: "#D0D0D0", fontSize: 20, fontWeight: 500 }}>
                  {v.title}
                </h3>
                <p
                  className="mt-3"
                  style={{
                    color: "#777",
                    fontSize: 14,
                    fontWeight: 400,
                    lineHeight: 1.7,
                  }}
                >
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY WORK WITH US ===== */}
      <section
        className="w-full px-4 sm:px-6 lg:px-8"
        style={{
          backgroundColor: "#0F0F0F",
          paddingTop: 96,
          paddingBottom: 96,
        }}
      >
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow">The Difference</p>
          <h2
            className="mt-3 text-[32px] md:text-[42px]"
            style={{ color: "#D0D0D0" }}
          >
            Why work with us?
          </h2>

          <ul className="mt-10 flex flex-col gap-5">
            {whyPoints.map((point) => (
              <li key={point} className="flex items-start">
                <span
                  aria-hidden="true"
                  style={{
                    display: "inline-block",
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    backgroundColor: "#B0B0B0",
                    marginRight: 12,
                    marginTop: 8,
                    flexShrink: 0,
                  }}
                />
                <span style={{ color: "#999", fontSize: 16, fontWeight: 400 }}>
                  {point}
                </span>
              </li>
            ))}
          </ul>
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
