"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Counter from "./Counter";

type Stat = {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix: string;
  group?: boolean;
  label: string;
  note: string;
};
type Stage = {
  id: string;
  num: string;
  tag: string;
  title: string;
  body: string;
  bullets: string[];
  stats: Stat[];
};

const STAGES: Stage[] = [
  {
    id: "wear",
    num: "01",
    tag: "Valvetrain & Cam Wear Defense",
    title: "High-ZDDP Boundary Layer Protection",
    body: "Formulated with 1,150–1,250 PPM Zinc Dialkyldithiophosphate (ZDDP) — a sacrificial chemical barrier over flat-tappet camshaft lobes and crankshaft journals where extreme mechanical pressure shears thinner modern oils.",
    bullets: [
      "Critical boundary lubrication for older flat-tappet camshafts",
      "Complies with API SM maximum valvetrain wear thresholds",
      "Immediate anti-friction barrier during cold morning ignition",
    ],
    stats: [
      { value: 1200, suffix: " PPM", label: "Active ZDDP level", note: "Optimal" },
      { value: 0.42, decimals: 2, suffix: " mm", label: "4-ball wear scar (ASTM D4172)", note: "Protected" },
      { value: 0.4, decimals: 1, prefix: "< ", suffix: "%", label: "High-load shear loss", note: "Stable" },
      { value: 90, prefix: "< ", suffix: " µm", label: "Sequence IVA cam wear limit", note: "Passed" },
    ],
  },
  {
    id: "deposits",
    num: "02",
    tag: "Deposit & Sludge Control",
    title: "Detergent Reserve That Keeps Engines Clean",
    body: "A 9.2 TBN alkaline reserve neutralizes combustion acids while dispersant chemistry keeps soot and oxidation by-products suspended — so they drain out with the oil instead of baking onto pistons and rings.",
    bullets: [
      "High TBN neutralizes acidic blow-by between drain intervals",
      "Dispersants hold soot in suspension in high-mileage engines",
      "Piston lands and rings stay free of baked carbon varnish",
    ],
    stats: [
      { value: 9.2, decimals: 1, suffix: " TBN", label: "Base number (ASTM D2896)", note: "Acid neutralization" },
      { value: 128, suffix: " VI", label: "Viscosity index (ASTM D2270)", note: "Shear-stable" },
      { value: 168.5, decimals: 1, suffix: " cSt", label: "Kinematic viscosity @ 40°C", note: "Full film" },
      { value: 100, suffix: "%", label: "Soot suspension claim", note: "High-mileage fit" },
    ],
  },
  {
    id: "thermal",
    num: "03",
    tag: "Thermal Endurance",
    title: "Built for 40°C Ambient Heat",
    body: "Ethiopian lowland highways push oil sump temperatures to the limit. A 238°C flash point and low NOACK volatility mean less oil evaporates away, keeps its grade, and never starves a hot bearing.",
    bullets: [
      "High-temperature film thickness (> 4.5 mPa·s HTHS @ 150°C)",
      "Resists thinning, boiling off, and bearing scuffing",
      "Consistent hydrodynamic film from cold start to highway cruise",
    ],
    stats: [
      { value: 238, suffix: "°C", label: "Flash point (ASTM D92)", note: "Thermal margin" },
      { value: 11.5, decimals: 1, prefix: "< ", suffix: "%", label: "NOACK volatility (ASTM D5800)", note: "Low oil burn-off" },
      { value: 19.1, decimals: 1, suffix: " cSt", label: "Kinematic viscosity @ 100°C", note: "SAE 20W-50" },
      { value: -24, suffix: "°C", label: "Pour point (ASTM D97)", note: "Cold-start flow" },
    ],
  },
  {
    id: "mileage",
    num: "04",
    tag: "High-Mileage Engine Fit",
    title: "Formulated for Legacy Clearances",
    body: "Older engines run wider bearing clearances and hardened nitrile seals. Master Optima cushions those clearances and includes elastomeric conditioners that revitalize aged seals — stopping the blue smoke and drip lines.",
    bullets: [
      "Thicker film cushions worn bearing clearances",
      "Seal swell conditioners revive hardened valve stem seals",
      "Reduces oil-burn smoke and top-end oil leakage",
    ],
    stats: [
      { value: 4, decimals: 0, suffix: " L", label: "Net volume per canister", note: "Certified metric" },
      { value: 100, suffix: "%", label: "Origin & seal verified", note: "UAE production line" },
      { value: 1250, group: true, suffix: " PPM", label: "Max ZDDP bound", note: "API SM ceiling" },
      { value: 2010, group: true, suffix: "", label: "Designed for models & older", note: "Legacy spec" },
    ],
  },
];

export default function TechMatrix() {
  const [activeId, setActiveId] = useState(STAGES[0].id);
  const active = STAGES.find((s) => s.id === activeId)!;

  return (
    <section id="matrix" className="relative py-24 lg:py-32">
      <div
        className="absolute left-[-200px] top-1/4 h-[400px] w-[400px] rounded-full bg-molten/10 blur-[130px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          kicker="ASTM Laboratory & Dynamometer Data"
          title={
            <>
              Technical <span className="text-molten">Performance</span> Matrix
            </>
          }
          lead="Four defensive layers, one formulation. Walk the lab data behind every claim — each stage verified under ASTM test standards."
        />

        {/* stage selector */}
        <Reveal className="mt-14 grid grid-cols-2 gap-3 lg:grid-cols-4" delay={100}>
          {STAGES.map((stage) => (
            <button
              key={stage.id}
              type="button"
              onClick={() => setActiveId(stage.id)}
              aria-pressed={activeId === stage.id}
              className={`group rounded-2xl border p-5 text-left transition-all duration-300 ${
                activeId === stage.id
                  ? "border-molten/60 bg-molten/10 shadow-[0_0_30px_rgba(245,158,11,0.15)]"
                  : "border-white/10 bg-white/[0.03] hover:border-molten/30"
              }`}
            >
              <span
                className={`font-display block text-2xl font-black transition-colors ${
                  activeId === stage.id ? "text-molten" : "text-zinc-600 group-hover:text-zinc-400"
                }`}
              >
                {stage.num}
              </span>
              <span
                className={`mt-2 block text-[12px] font-semibold uppercase leading-snug tracking-wider ${
                  activeId === stage.id ? "text-zinc-100" : "text-zinc-500"
                }`}
              >
                {stage.tag}
              </span>
            </button>
          ))}
        </Reveal>

        {/* active stage panel */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_1fr]">
          <div
            key={active.id}
            className="rounded-3xl border border-white/10 bg-carbon/80 p-8 sm:p-10"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-molten">
              {active.num} — {active.tag}
            </p>
            <h3 className="font-display mt-3 text-2xl font-extrabold uppercase leading-tight text-zinc-50 sm:text-3xl">
              {active.title}
            </h3>
            <p className="mt-5 leading-relaxed text-zinc-400">{active.body}</p>
            <ul className="mt-7 flex flex-col gap-3.5">
              {active.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-[15px] text-zinc-300">
                  <svg viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0 text-molten" fill="currentColor" aria-hidden>
                    <path d="M10 0a10 10 0 1 0 10 10A10 10 0 0 0 10 0Zm4.7 7.7-5.6 5.6a1 1 0 0 1-1.42 0L4.3 9.9a1 1 0 0 1 1.42-1.42l2.3 2.3 4.9-4.9a1 1 0 1 1 1.42 1.42Z" />
                  </svg>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* stat cards */}
          <div className="grid grid-cols-2 gap-4 self-start">
            {active.stats.map((stat, i) => (
              <div
                key={stat.label}
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-6 transition-colors duration-300 hover:border-molten/40"
                style={{ transitionDelay: `${i * 20}ms` }}
              >
                <Counter
                  value={stat.value}
                  decimals={stat.decimals}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  group={stat.group}
                  className="font-display text-[clamp(1.5rem,3vw,2.1rem)] font-extrabold leading-none text-molten"
                />
                <div className="mt-4">
                  <p className="text-[13px] font-medium leading-snug text-zinc-300">{stat.label}</p>
                  <p className="mt-1.5 inline-block rounded-full bg-molten/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-molten">
                    {stat.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
