import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const ROWS: { property: string; method: string; value: string; key?: boolean }[] = [
  { property: "SAE Viscosity Grade", method: "SAE J300", value: "20W-50", key: true },
  { property: "API Performance Classification", method: "API Engine Service", value: "SM / CF", key: true },
  { property: "Kinematic Viscosity @ 100°C", method: "ASTM D445", value: "19.1 mm²/s (cSt)", key: true },
  { property: "Kinematic Viscosity @ 40°C", method: "ASTM D445", value: "168.5 mm²/s (cSt)" },
  { property: "Viscosity Index", method: "ASTM D2270", value: "128" },
  { property: "Flash Point (Cleveland Open Cup)", method: "ASTM D92", value: "238°C", key: true },
  { property: "Pour Point", method: "ASTM D97", value: "-24°C" },
  { property: "Total Base Number", method: "ASTM D2896", value: "9.2 mg KOH/g", key: true },
  { property: "NOACK Volatility (1h @ 250°C)", method: "ASTM D5800", value: "< 11.5% mass loss" },
  { property: "Zinc Content (ZDDP)", method: "ASTM D5185 (ICP)", value: "≈ 1,200 PPM", key: true },
  { property: "Net Volume per Canister", method: "Certified Metric", value: "4.0 L (1.05 US gal)" },
  { property: "Country of Manufacture", method: "Certificate of Origin", value: "United Arab Emirates" },
];

export default function SpecTable() {
  return (
    <section id="specs" className="relative border-y border-white/5 bg-coal/40 py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          kicker="ASTM Certified Specifications"
          title={
            <>
              Technical Data <span className="text-molten">& Rationale</span>
            </>
          }
          lead="Every batch of Master Optima 20W-50 SM is blended in the UAE to rigorous ASTM standards. These are the verified lab properties — not marketing numbers."
        />

        <Reveal className="mt-14" delay={100}>
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-carbon/70">
            {/* table header */}
            <div className="grid grid-cols-[1.6fr_1fr_1.1fr] gap-3 border-b border-white/10 bg-white/[0.04] px-5 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500 sm:grid-cols-[1.7fr_1fr_1fr] sm:px-8">
              <span>Property</span>
              <span className="hidden sm:block">Test Method</span>
              <span className="text-right sm:text-left">Verified Value</span>
            </div>

            {ROWS.map((row) => (
              <div
                key={row.property}
                className={`grid grid-cols-[1.6fr_1.1fr] items-center gap-3 border-b border-white/5 px-5 py-4 transition-colors last:border-0 hover:bg-molten/[0.05] sm:grid-cols-[1.7fr_1fr_1fr] sm:px-8 ${
                  row.key ? "bg-molten/[0.04]" : ""
                }`}
              >
                <span className="flex items-center gap-2.5 text-sm font-medium text-zinc-200">
                  {row.key && (
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-molten" aria-hidden />
                  )}
                  {row.property}
                </span>
                <span className="hidden text-[13px] text-zinc-500 sm:block">{row.method}</span>
                <span
                  className={`text-right text-sm font-bold sm:text-left ${
                    row.key ? "text-molten" : "text-zinc-300"
                  }`}
                >
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200} className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] text-zinc-500">
          <span className="inline-flex items-center gap-2">
            <svg viewBox="0 0 20 20" className="h-4 w-4 text-molten" fill="currentColor" aria-hidden>
              <path d="M10 0a10 10 0 1 0 10 10A10 10 0 0 0 10 0Zm4.7 7.7-5.6 5.6a1 1 0 0 1-1.42 0L4.3 9.9a1 1 0 0 1 1.42-1.42l2.3 2.3 4.9-4.9a1 1 0 1 1 1.42 1.42Z" />
            </svg>
            Batch tested &amp; certified under ISO 9001:2015 quality management
          </span>
          <span className="inline-flex items-center gap-2">
            <svg viewBox="0 0 20 20" className="h-4 w-4 text-molten" fill="currentColor" aria-hidden>
              <path d="M10 0a10 10 0 1 0 10 10A10 10 0 0 0 10 0Zm4.7 7.7-5.6 5.6a1 1 0 0 1-1.42 0L4.3 9.9a1 1 0 0 1 1.42-1.42l2.3 2.3 4.9-4.9a1 1 0 1 1 1.42 1.42Z" />
            </svg>
            Certificate of Analysis accompanies every shipment
          </span>
        </Reveal>
      </div>
    </section>
  );
}
