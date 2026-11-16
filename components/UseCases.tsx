import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const CASES = [
  {
    title: "City Taxis & Ride Sedans",
    body: "Lada, Toyota Corolla, and older Suzuki fleets idling through Addis traffic for 10+ hours a day — stop-start heat exactly where a thick, ZDDP-rich film earns its keep.",
    icon: (
      <path d="M4 13l1.5-5A2 2 0 017.4 6.5h5.2a2 2 0 011.9 1.5L16 13m-12 0h12m-12 0v3a1 1 0 001 1h1a1 1 0 001-1v-1h6v1a1 1 0 001 1h1a1 1 0 001-1v-3M7 13.5h.01M15 13.5h.01" />
    ),
  },
  {
    title: "Inter-City Buses",
    body: "Addis–Dire Dawa and regional routes run full throttle for hours in 35–40°C ambient. High HTHS film thickness and a 238°C flash point keep bearings fed when sumps run hot.",
    icon: (
      <path d="M5 4h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2zm0 5h16M8.5 18v2m7-2v2M8.5 6.5h.01M15.5 6.5h.01M8.5 13h.01M15.5 13h.01" />
    ),
  },
  {
    title: "Light Trucks & Pickups",
    body: "Hilux and Isuzu workhorses hauling loads on gravel roads. Shear-stable viscosity polymers hold SAE 50-grade film under high load where thinner oils shear back to a 30 grade.",
    icon: (
      <path d="M3 6h11v9H3zM14 9h4l3 3v3h-7zM6.5 18a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm8 0a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z" />
    ),
  },
  {
    title: "High-Mileage Family Cars",
    body: "Pre-2010 sedans past 150,000 km with worn clearances and hardened seals. Elastomeric conditioners recondition nitrile valve stem seals and slow the blue-smoke oil burn.",
    icon: (
      <path d="M12 3a7 7 0 017 7c0 4-3.5 7-7 11-3.5-4-7-7-7-11a7 7 0 017-7zm0 4.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" />
    ),
  },
];

export default function UseCases() {
  return (
    <section className="relative border-y border-white/5 bg-coal/40 py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          kicker="Fleet-Grade Fit"
          title={
            <>
              Built for <span className="text-molten">Ethiopia&apos;s Roads</span>
            </>
          }
          lead="From Addis taxi ranks to cross-country bus routes, the same two mechanical truths apply: heat, and age. Master Optima is formulated for both."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CASES.map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <article className="group h-full rounded-3xl border border-white/10 bg-carbon/70 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-molten/45">
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-molten/30 bg-molten/10 text-molten transition-all duration-300 group-hover:bg-molten group-hover:text-ink">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    {c.icon}
                  </svg>
                </span>
                <h3 className="font-display mt-5 text-lg font-bold uppercase tracking-wide text-zinc-100">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{c.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
