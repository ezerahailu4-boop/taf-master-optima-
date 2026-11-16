"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

type Hotspot = {
  id: string;
  /** position as % of the canister figure box */
  x: number;
  y: number;
  title: string;
  body: string;
};

const HOTSPOTS: Hotspot[] = [
  {
    id: "seal",
    x: 31,
    y: 11,
    title: "Induction Foil Security Seal",
    body: "A tamper-evident airtight foil seal under the cap locks in 100% factory purity directly from the UAE production line. If the seal is broken, reject the canister.",
  },
  {
    id: "handle",
    x: 78,
    y: 34,
    title: "Precision-Molded Handle",
    body: "One-piece blow-molded handle is engineered for full 4.3 kg gross weight carry without flex or crack risk — dock, depot, and shop-floor proof.",
  },
  {
    id: "sm",
    x: 61,
    y: 62,
    title: "API SM / CF Service Rating",
    body: "The visible donut rating certifies the oil meets API SM gasoline and CF diesel performance ceilings — the correct spec for pre-2010 engines, verifiable at api.org.",
  },
  {
    id: "qr",
    x: 33,
    y: 69,
    title: "QR Batch Traceability",
    body: "Every canister carries a QR-linked batch code. Scan it to match your bottle against the laboratory Certificate of Analysis for that exact production run.",
  },
  {
    id: "volume",
    x: 47,
    y: 88,
    title: "Certified 4-Litre Fill",
    body: "Calibrated to a full 4.0 L (1.05 US gal) net volume. Batch weights are verified at line speed under ISO 9001:2015 quality management.",
  },
];

export default function Purity() {
  const [activeId, setActiveId] = useState(HOTSPOTS[0].id);
  const active = HOTSPOTS.find((h) => h.id === activeId)!;

  return (
    <section id="purity" className="relative border-y border-white/5 bg-coal/40 py-24 lg:py-32">
      <div
        className="absolute right-[-180px] top-10 h-[380px] w-[380px] rounded-full bg-molten/10 blur-[130px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          kicker="The 4-Litre Canister"
          title={
            <>
              Crafted for <span className="text-molten">the Long Haul</span>
            </>
          }
          lead="Precision-molded, sealed, and batch-tested in the UAE. Click the inspection points on the canister to see what protects your oil before it ever reaches the sump."
        />

        <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* canister with hotspots */}
          <Reveal className="relative mx-auto w-full max-w-[480px]">
            <div
              className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-molten/15 blur-[90px]"
              aria-hidden
            />
            <div className="relative">
              <Image
                src="/images/bottle-cutout.png"
                alt="Master Optima 4L canister with inspection points: security seal, molded handle, API SM rating, QR batch code, calibrated fill"
                width={800}
                height={800}
                sizes="(max-width: 1024px) 88vw, 480px"
                className="mx-auto h-auto w-full"
              />
              {HOTSPOTS.map((spot) => (
                <button
                  key={spot.id}
                  type="button"
                  onClick={() => setActiveId(spot.id)}
                  aria-label={`Inspect: ${spot.title}`}
                  aria-pressed={activeId === spot.id}
                  className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                >
                  <span
                    className={`hotspot-dot grid h-7 w-7 place-items-center rounded-full border-2 transition-all duration-300 ${
                      activeId === spot.id
                        ? "border-molten bg-molten shadow-[0_0_20px_rgba(245,158,11,0.8)]"
                        : "border-molten/70 bg-ink/70 hover:bg-molten/30"
                    }`}
                  >
                    <span
                      className={`h-2 w-2 rounded-full transition-colors ${
                        activeId === spot.id ? "bg-ink" : "bg-molten"
                      }`}
                    />
                  </span>
                </button>
              ))}
            </div>
          </Reveal>

          {/* inspection panel + list */}
          <div className="flex flex-col gap-4">
            <Reveal
              key={active.id}
              className="rounded-3xl border border-molten/40 bg-gradient-to-br from-molten/15 to-transparent p-7 sm:p-8"
              delay={60}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-molten">
                Purity Guarantee · Live Inspection
              </p>
              <h3 className="font-display mt-3 text-xl font-extrabold uppercase text-zinc-50 sm:text-2xl">
                {active.title}
              </h3>
              <p className="mt-3 leading-relaxed text-zinc-300">{active.body}</p>
            </Reveal>

            <ul className="flex flex-col gap-2.5">
              {HOTSPOTS.map((spot) => (
                <li key={spot.id}>
                  <button
                    type="button"
                    onClick={() => setActiveId(spot.id)}
                    aria-pressed={activeId === spot.id}
                    className={`flex w-full items-center justify-between gap-3 rounded-xl border px-5 py-4 text-left text-sm font-semibold transition-all duration-300 ${
                      activeId === spot.id
                        ? "border-molten/50 bg-molten/10 text-zinc-50"
                        : "border-white/10 bg-white/[0.03] text-zinc-400 hover:border-molten/25 hover:text-zinc-200"
                    }`}
                  >
                    {spot.title}
                    <svg
                      viewBox="0 0 16 16"
                      className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
                        activeId === spot.id ? "rotate-90 text-molten" : "text-zinc-600"
                      }`}
                      fill="none"
                      aria-hidden
                    >
                      <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
