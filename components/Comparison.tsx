import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const ROWS = [
  {
    trait: "Zinc (ZDDP) Anti-Wear Chemistry",
    sm: "1,150 – 1,250 PPM — high sacrificial boundary film",
    sp: "Capped < 800 PPM — restricted for modern emissions",
    impact: "Crucial for pre-2010 flat-tappet camshafts and older pushrods",
  },
  {
    trait: "High-Temperature Film Thickness",
    sm: "High HTHS viscosity (> 4.5 mPa·s @ 150°C)",
    sp: "Often formulated for 0W / 5W low-HTHS fuel economy",
    impact: "Prevents oil thinning and bearing scuffing in high ambient African heat",
  },
  {
    trait: "Engine Clearance Compatibility",
    sm: "Optimized for wider legacy mechanical clearances",
    sp: "Engineered for tight micron tolerances in modern turbo GDI",
    impact: "Cushions bearing clearances and minimizes blue oil-burn smoke",
  },
  {
    trait: "Seal Swell & Elastomer Care",
    sm: "Includes elastomeric conditioners for aged seals",
    sp: "Calibrated for modern fluoropolymer gaskets",
    impact: "Revitalizes hardened nitrile valve stem seals to prevent leaks",
  },
];

export default function Comparison() {
  return (
    <section id="why-sm" className="relative py-24 lg:py-32">
      <div
        className="absolute left-1/2 top-16 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-molten/10 blur-[140px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          kicker="Engineering Transparency"
          title={
            <>
              Why We Formulate to <span className="text-molten">API SM</span> — Not API SP
            </>
          }
          lead="API SM was introduced for 2010-and-older vehicles. Modern standards (SN, SP) suit turbo GDI engines with tight emissions catalysts — but they compromise flat-tappet wear protection. This is a deliberate choice, not an outdated one."
        />

        <Reveal className="mt-14" delay={100}>
          <div className="overflow-x-auto rounded-3xl border border-white/10 bg-carbon/70">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th scope="col" className="w-[22%] px-6 py-5 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                    Technical Characteristic
                  </th>
                  <th scope="col" className="relative w-[30%] px-6 py-5">
                    <span className="absolute inset-x-4 top-0 h-0.5 rounded-full bg-gradient-to-r from-transparent via-molten to-transparent" aria-hidden />
                    <span className="font-display flex items-center gap-2 text-sm font-extrabold uppercase tracking-wider text-molten">
                      API SM
                      <span className="rounded-full bg-molten px-2.5 py-0.5 text-[9px] font-black tracking-widest text-ink">
                        Master Optima
                      </span>
                    </span>
                  </th>
                  <th scope="col" className="w-[26%] px-6 py-5 text-sm font-bold uppercase tracking-wider text-zinc-400">
                    API SP
                    <span className="mt-1 block text-[10px] font-medium normal-case tracking-normal text-zinc-600">
                      Modern standard
                    </span>
                  </th>
                  <th scope="col" className="w-[22%] px-6 py-5 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                    Legacy Engine Impact
                  </th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => (
                  <tr
                    key={row.trait}
                    className="border-b border-white/5 align-top transition-colors last:border-0 hover:bg-molten/[0.05]"
                  >
                    <th scope="row" className="px-6 py-6 text-sm font-semibold leading-snug text-zinc-200">
                      {row.trait}
                    </th>
                    <td className="bg-molten/[0.05] px-6 py-6 text-sm font-medium leading-relaxed text-molten/90">
                      {row.sm}
                    </td>
                    <td className="px-6 py-6 text-sm leading-relaxed text-zinc-500">{row.sp}</td>
                    <td className="px-6 py-6 text-sm leading-relaxed text-zinc-400">{row.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={200} className="mt-8">
          <p className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center text-sm leading-relaxed text-zinc-400">
            <strong className="text-zinc-200">Bottom line:</strong> if your vehicle was built for
            API SM — or it&apos;s a high-mileage engine burning oil — running the correct spec is
            protection, not a compromise.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
