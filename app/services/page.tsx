import Link from "next/link";

const services = [
  {
    n: "01",
    name: "Kitchen Remodels",
    desc: "Reimagine the heart of your home. We handle every phase of a kitchen renovation — from cabinet layout and countertop fabrication to electrical, plumbing, and final finishes. Whether it's a refresh or a full gut, the work is sequenced cleanly and built to last.",
    items: [
      "Cabinet replacement and refacing",
      "Countertop installation (quartz, granite, butcher block)",
      "Tile backsplash and flooring",
      "Lighting and electrical upgrades",
    ],
  },
  {
    n: "02",
    name: "Bathroom Renovations",
    desc: "Florida bathrooms take a beating from humidity. We build them to handle it — waterproof tile assemblies, proper ventilation, and durable fixtures. Layouts updated, tubs converted to showers, and vanities replaced with precision.",
    items: [
      "Tub-to-shower conversions",
      "Waterproof tile and grout systems",
      "Vanity, fixture, and mirror installation",
      "Ventilation and moisture control",
    ],
  },
  {
    n: "03",
    name: "Room Additions",
    desc: "Need more space? We design and build permitted additions that look like they were part of the original house. Foundation work, framing, roofing, and finishes — all coordinated under one contract and one set of plans.",
    items: [
      "Master suite and bedroom additions",
      "Sunroom and Florida room buildouts",
      "Engineered plans and full permitting",
    ],
  },
  {
    n: "04",
    name: "Interior Renovations",
    desc: "Whole-home interior refreshes that move the needle on resale value and daily livability. We coordinate flooring, drywall, paint, and trim into one sequenced project so your home isn't torn up any longer than it needs to be.",
    items: [
      "Flooring replacement (LVP, tile, hardwood)",
      "Drywall repair and texture matching",
      "Interior paint and trim",
      "Door and window replacement",
    ],
  },
  {
    n: "05",
    name: "Repairs & Restoration",
    desc: "Water damage, storm impact, structural cracks — we handle the unglamorous work that gets your home back to baseline. Insurance documentation supported, and we coordinate directly with adjusters when needed.",
    items: [
      "Water damage repair and dry-out",
      "Post-storm and hurricane restoration",
      "Structural and foundation repair",
      "Drywall, ceiling, and roof patching",
    ],
  },
  {
    n: "06",
    name: "Permitting",
    desc: "Permits are where most projects get stuck. As a licensed Certified Building Contractor, we pull permits in our name, schedule inspections, and own code compliance so you don't have to navigate the county portal.",
    items: [
      "Permit application and submittal",
      "Inspection coordination",
      "Code compliance and corrections",
      "Final certificate of completion",
    ],
  },
];

export default function ServicesPage() {
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
          <p className="eyebrow mb-5">What We Do</p>

          <h1
            className="mb-6 text-[36px] md:text-[48px]"
            style={{ color: "#E8E8E8", fontWeight: 700, lineHeight: 1.05 }}
          >
            Renovation services for your home
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
            Residential general contracting for Orlando homeowners — from
            single-room remodels to permitted additions. Every project is
            managed by a licensed contractor, start to finish.
          </p>
        </div>
      </section>

      {/* ===== EXPANDED SERVICE CARDS ===== */}
      <section
        className="w-full px-4 sm:px-6 lg:px-8"
        style={{
          backgroundColor: "#141414",
          paddingTop: 80,
          paddingBottom: 96,
        }}
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((s) => (
            <div key={s.n} className="service-card" style={{ padding: 36 }}>
              <span className="card-watermark">{s.n}</span>
              <h2
                className="card-title"
                style={{
                  color: "#D0D0D0",
                  fontSize: 26,
                  fontWeight: 700,
                }}
              >
                {s.name}
              </h2>
              <p
                className="mt-4"
                style={{
                  color: "#777",
                  fontSize: 14,
                  fontWeight: 400,
                  lineHeight: 1.7,
                }}
              >
                {s.desc}
              </p>

              <ul className="mt-6 flex flex-col gap-3">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start">
                    <span
                      aria-hidden="true"
                      style={{
                        display: "inline-block",
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        backgroundColor: "#B0B0B0",
                        marginRight: 12,
                        marginTop: 9,
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        color: "#666",
                        fontSize: 14,
                        fontWeight: 400,
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
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
