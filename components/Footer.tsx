const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Tech Matrix", href: "#matrix" },
      { label: "Purity Guarantee", href: "#purity" },
      { label: "ASTM Specifications", href: "#specs" },
      { label: "Why API SM", href: "#why-sm" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Distributors",
    links: [
      { label: "Wholesale Orders", href: "#contact" },
      { label: "Dealer Network", href: "#contact" },
      { label: "Fleet Supply", href: "#contact" },
      { label: "Export Inquiries", href: "#contact" },
    ],
  },
  {
    title: "Compliance",
    links: [
      { label: "ISO 9001:2015", href: "#specs" },
      { label: "API SM / CF Standard", href: "#why-sm" },
      { label: "Batch Certificates", href: "#purity" },
      { label: "ESA Standards", href: "#specs" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#080809]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* brand block */}
          <div>
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 64 64" className="h-10 w-10" aria-hidden>
                <defs>
                  <linearGradient id="ftg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#fbbf24" />
                    <stop offset="1" stopColor="#d97706" />
                  </linearGradient>
                </defs>
                <path d="M32 2 58 17v30L32 62 6 47V17Z" fill="rgba(245,158,11,0.08)" stroke="url(#ftg)" strokeWidth="3" />
                <text x="32" y="41" fontFamily="Archivo, sans-serif" fontSize="20" fontWeight="900" fill="url(#ftg)" textAnchor="middle">
                  TAF
                </text>
              </svg>
              <div className="leading-none">
                <p className="font-display text-base font-extrabold uppercase tracking-[0.18em] text-zinc-50">
                  TAF Energies PLC
                </p>
                <p className="mt-1.5 text-[10px] font-medium uppercase tracking-[0.3em] text-molten/80">
                  Lubricants Division
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-zinc-500">
              Debre Zeit Road, Gotera Industrial Zone, TAF Business Complex,
              P.O. Box 2541, Addis Ababa, Ethiopia.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["API SM / CF", "ISO 9001:2015", "Made in UAE"].map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-semibold tracking-wide text-zinc-400"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* link columns */}
          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.24em] text-molten">
                {col.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-zinc-500 transition-colors hover:text-molten"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="hairline mt-14" aria-hidden />

        <div className="mt-7 flex flex-col items-center justify-between gap-3 text-[12px] text-zinc-600 sm:flex-row">
          <p>© {new Date().getFullYear()} TAF Energies PLC. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-molten/60" aria-hidden />
            Commercial Registration TAF-ET-LUB-0941 · Blended in the United Arab Emirates
          </p>
        </div>
      </div>
    </footer>
  );
}
