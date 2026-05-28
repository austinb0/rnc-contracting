export default function Footer() {
  return (
    <footer
      className="w-full"
      style={{ backgroundColor: "#0A0A0A", borderTop: "1px solid #1A1A1A" }}
    >
      <div
        className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-2 sm:flex-row"
        style={{
          padding: "24px 32px",
          color: "#444",
          fontSize: 12,
          fontFamily: "var(--font-source-sans), system-ui, sans-serif",
        }}
      >
        <p>© 2025 RNC Contracting · Lic. CBC1265964 · Orlando, FL</p>
        <p>rnccontracting.net</p>
      </div>
    </footer>
  );
}
