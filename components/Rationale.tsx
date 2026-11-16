import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Counter from "./Counter";

const CARDS = [
  {
    num: "01",
    stat: 1200,
    suffix: " PPM",
    group: true,
    title: "Zinc ZDDP Reserve",
    body: "A deliberate over-supply of anti-wear chemistry sits in reserve for the flat-tappet camshafts and pushrods of pre-2010 engines — exactly the hardware modern low-zinc oils were reformulated away from.",
  },
  {
    num: "02",
    stat: 19.1,
    decimals: 1,
    suffix: " cSt",
    title: "Film Strength @ 100°C",
    body: "Kinematic viscosity verified at ASTM D445 keeps a continuous hydrodynamic film across wide legacy bearing clearances, even after hours of 40°C-ambient highway running.",
  },
  {
    num: "03",
    stat: 9.2,
    decimals: 1,
    suffix: " TBN",
    title: "Acid Neutralization",
    body: "The 9.2 mg KOH/g base number (ASTM D2896) is the detergent reserve that keeps combusting cheap fuel from turning your crankcase acidic between drains.",
  },
  {
    num: "04",
    stat: 100,
    suffix: "%",
    title: "Origin & Seal Verified",
    body: "Every batch is blended, filled, and induction-sealed in an ISO 9001:2015 UAE facility, and ships with a laboratory Certificate of Analysis you can match to the QR code on the canister.",
  },
];

export default function Rationale() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          kicker="Formulation Rationale"
          title={
            <>
              Purpose-Built <span className="text-molten">Engineering</span>
            </>
          }
          lead="Why Master Optima 20W-50 API SM is deliberately engineered for the vehicle demographics, climate, and mechanical realities of the Ethiopian market."
          align="left"
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card, i) => (
            <Reveal key={card.num} delay={i * 90}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-carbon/70 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-molten/45 hover:shadow-[0_18px_50px_rgba(245,158,11,0.12)]">
                <span
                  className="font-display absolute -right-3 -top-5 text-[88px] font-black leading-none text-white/[0.045] transition-colors duration-300 group-hover:text-molten/10"
                  aria-hidden
                >
                  {card.num}
                </span>
                <Counter
                  value={card.stat}
                  decimals={card.decimals}
                  suffix={card.suffix}
                  group={card.group}
                  className="font-display relative block text-4xl font-extrabold text-molten"
                />
                <h3 className="font-display relative mt-4 text-lg font-bold uppercase tracking-wide text-zinc-100">
                  {card.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-zinc-400">{card.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
