import Link from "next/link";

const services = [
  {
    n: "01",
    name: "Kitchen Remodels",
    desc: "Full kitchen renovations — cabinets, countertops, lighting, and layout changes managed end to end.",
  },
  {
    n: "02",
    name: "Bathroom Renovations",
    desc: "Tile, fixtures, vanities, and waterproofing — built to last in Florida humidity.",
  },
  {
    n: "03",
    name: "Room Additions",
    desc: "Permitted square-footage additions tied cleanly into your existing structure.",
  },
  {
    n: "04",
    name: "Interior Renovations",
    desc: "Flooring, drywall, paint, and trim — whole-home interior refreshes on schedule.",
  },
  {
    n: "05",
    name: "Repairs & Restoration",
    desc: "Water damage, structural repairs, and post-storm restoration handled in-house.",
  },
  {
    n: "06",
    name: "Permitting",
    desc: "We pull permits, schedule inspections, and manage code compliance for you.",
  },
];

const trustPills = [
  "LIC · CBC1265964",
  "FULLY INSURED",
  "FAMILY OWNED",
  "ORLANDO AREA",
];

export default function HomePage() {
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
          <p className="eyebrow mb-5">General Contractor · Orlando, FL</p>

          <h1
            className="mb-6 text-[44px] md:text-[64px]"
            style={{ color: "#E8E8E8", fontWeight: 700, lineHeight: 1.05 }}
          >
            Your Home, Done Right.
          </h1>

          <p
            className="hero-subtext mb-10"
            style={{
              color: "#999",
              fontSize: 16,
              lineHeight: 1.8,
              maxWidth: 560,
            }}
          >
            Kitchen remodels, bathroom renovations, room additions, and repairs
            — managed start to finish by a licensed, insured family contractor.
          </p>

          <ul className="mb-12 flex flex-wrap justify-center gap-2">
            {trustPills.map((pill) => (
              <li key={pill} className="trust-pill">
                {pill}
              </li>
            ))}
          </ul>

          <div className="mb-0 flex flex-col items-center gap-3 sm:flex-row">
            <Link href="/contact" className="cta-primary">
              Get a Free Quote
            </Link>
            <Link href="#projects" className="cta-secondary">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* ===== STAT BAR ===== */}
      <section
        className="w-full"
        style={{ backgroundColor: "#0A0A0A", height: 80 }}
      >
        <div className="mx-auto grid h-full max-w-6xl grid-cols-2 md:grid-cols-4">
          {[
            { value: "CBC1265964", label: "FL LICENSE" },
            { value: "Insured", label: "FULLY COVERED" },
            { value: "Family", label: "OWNED & OPERATED" },
            { value: "407-408-4806", label: "CALL OR TEXT" },
          ].map((stat, i, arr) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center text-center"
              style={{
                borderRight:
                  i < arr.length - 1 ? "1px solid #1E1E1E" : undefined,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-oswald), system-ui, sans-serif",
                  color: "#C8C8C8",
                  fontSize: 18,
                  fontWeight: 700,
                  letterSpacing: 0,
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div
                className="mt-2"
                style={{
                  fontFamily: "var(--font-source-sans), system-ui, sans-serif",
                  color: "#555",
                  fontSize: 9,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section
        className="w-full px-4 sm:px-6 lg:px-8"
        style={{
          backgroundColor: "#141414",
          paddingTop: 96,
          paddingBottom: 96,
        }}
      >
        <div className="mx-auto max-w-6xl">
          <div>
            <p className="eyebrow">What We Do</p>
            <h2
              className="mt-3 text-[32px] md:text-[42px]"
              style={{ color: "#D0D0D0" }}
            >
              Residential renovation, done professionally
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {services.map((s) => (
              <div key={s.n} className="service-card">
                <span className="card-watermark">{s.n}</span>
                <h3 style={{ color: "#D0D0D0", fontSize: 20, fontWeight: 500 }}>
                  {s.name}
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
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PHOTO GRID ===== */}
      <section
        id="projects"
        className="w-full px-4 sm:px-6 lg:px-8"
        style={{
          backgroundColor: "#0F0F0F",
          paddingTop: 96,
          paddingBottom: 96,
        }}
      >
        <div className="mx-auto max-w-6xl">
          <div>
            <p className="eyebrow">Our Work</p>
            <h2
              className="mt-3 text-[32px] md:text-[42px]"
              style={{ color: "#D0D0D0" }}
            >
              Recent projects
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                src: "/images/shower-after.PNG",
                title: "Kitchen & Shower Remodel",
              },
              {
                src: "/images/patio-after.jpg",
                title: "Enclosed Back Patio",
              },
              {
                src: "/images/entertainment-after.jpg",
                title: "Built-In Entertainment Center",
              },
            ].map((tile) => {
              const isPortrait = tile.src.includes("shower");
              const imgStyle: React.CSSProperties = isPortrait
                ? {
                    width: "100%",
                    height: "auto",
                    display: "block",
                    borderRadius: 4,
                  }
                : {
                    width: "100%",
                    height: 360,
                    objectFit: "cover",
                    objectPosition: "center top",
                    borderRadius: 4,
                    display: "block",
                  };
              return (
              <div key={tile.title}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tile.src}
                  alt={tile.title}
                  style={imgStyle}
                />
                <p
                  className="mt-3"
                  style={{
                    fontFamily:
                      "var(--font-source-sans), system-ui, sans-serif",
                    color: "#777",
                    fontSize: 12,
                  }}
                >
                  {tile.title}
                </p>
              </div>
              );
            })}
          </div>
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
        <h2
          style={{
            color: "#D0D0D0",
            fontSize: 36,
            fontWeight: 700,
          }}
        >
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
