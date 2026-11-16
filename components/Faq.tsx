"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const FAQS = [
  {
    q: "My car is newer than 2010. Can I still use Master Optima?",
    a: "Check your owner's manual for the API service rating. If it calls for API SM or earlier (SL, SJ), Master Optima is fully correct. If your engine is a modern turbo/GDI unit calling for API SN or SP, use a dedicated SP product — the thinner, low-ZDDP chemistry those engines require is intentionally different.",
  },
  {
    q: "Why choose API SM over the newer API SP standard?",
    a: "It comes down to hardware. API SP caps ZDDP below ~800 PPM to protect catalytic converters in modern engines — but pre-2010 flat-tappet camshafts need 1,100+ PPM zinc to survive. Master Optima deliberately targets the SM spec (1,150–1,250 PPM ZDDP) because that's what legacy valvetrain hardware was designed around.",
  },
  {
    q: "What drain interval do you recommend?",
    a: "For city taxi and delivery duty with high sulfur fuel, we recommend 5,000–7,000 km. For highway fleet duty with clean fuel, up to 10,000 km. Always replace the filter with every drain, and follow the batch Certificate of Analysis guidance for severe-service operations.",
  },
  {
    q: "Can I mix Master Optima with my current oil in an emergency?",
    a: "Yes — topping up is safe for both SAE 20W-50 and adjacent grades. Mixing restores protection level until the next drain, but the blended oil won't carry the full tested specification of either product. Plan a complete drain-and-fill as soon as practical.",
  },
  {
    q: "How should unopened canisters be stored?",
    a: "Keep them sealed, upright, and out of direct sunlight in a cool, dry space. Sealed canisters remain in spec for several years — the induction foil seal prevents moisture and oxidation from entering. Wipe the cap area before opening to keep grit out of the fill port.",
  },
  {
    q: "How do I become a dealer or order wholesale cartons?",
    a: "Use the wholesale inquiry form below or message our sales team directly on WhatsApp with your region and estimated volume. You'll receive local dealer contacts, carton pricing, and delivery options — Addis Ababa HQ dispatches to regions nationwide.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 lg:py-32">
      <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading
          kicker="Buyer Questions"
          title={
            <>
              Frequently <span className="text-molten">Asked</span>
            </>
          }
          lead="Straight answers for mechanics, fleet managers, and dealers — before you buy."
        />

        <div className="mt-14 flex flex-col gap-3">
          {FAQS.map((faq, i) => {
            const open = openIndex === i;
            return (
              <Reveal key={faq.q} delay={i * 60}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                    open ? "border-molten/45 bg-molten/[0.06]" : "border-white/10 bg-white/[0.03]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span
                      className={`text-[15px] font-semibold sm:text-base ${
                        open ? "text-zinc-50" : "text-zinc-300"
                      }`}
                    >
                      {faq.q}
                    </span>
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                        open ? "border-molten bg-molten text-ink" : "border-white/15 text-zinc-400"
                      }`}
                      aria-hidden
                    >
                      <svg
                        viewBox="0 0 16 16"
                        className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
                        fill="none"
                      >
                        <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                  <div id={`faq-panel-${i}`} className={`faq-panel ${open ? "open" : ""}`}>
                    <div>
                      <p className="px-6 pb-6 text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
