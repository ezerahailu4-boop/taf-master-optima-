import Image from "next/image";
import Reveal from "./Reveal";
import { WhatsAppIcon } from "./Navbar";

const WHATSAPP_URL =
  "https://wa.me/251911234567?text=Hello%20TAF%20Energies%2C%20I%20am%20inquiring%20about%20Master%20Optima%2020W-50%20engine%20oil.";

const TRUST_CHIPS = [
  { label: "4L Canister" },
  { label: "Made in UAE" },
  { label: "ISO 9001 Facility" },
  { label: "ASTM Tested" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[72px]">
      {/* backdrop: grid + glows */}
      <div className="grid-lines absolute inset-0" aria-hidden />
      <div
        className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-molten/20 blur-[140px]"
        aria-hidden
      />
      <div
        className="absolute right-[-160px] top-1/3 h-[420px] w-[420px] rounded-full bg-molten/10 blur-[120px]"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:gap-8 lg:pt-24 lg:pb-28">
        {/* ── copy ─────────────────────────────────────────── */}
        <div className="flex flex-col items-start gap-7">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-molten/30 bg-molten/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-molten">
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-molten opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-molten" />
              </span>
              UAE Blended · ASTM D4172 &amp; D6891 Verified
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-display text-[clamp(3.2rem,9vw,6.5rem)] font-black uppercase leading-[0.92] tracking-tight">
              <span className="block text-zinc-50">Master</span>
              <span className="text-shimmer block">Optima</span>
              <span className="mt-4 flex flex-wrap items-baseline gap-x-4 gap-y-1 text-[clamp(1.1rem,2.6vw,1.75rem)] font-bold tracking-[0.14em] text-zinc-400">
                <span className="text-molten">20W-50</span>
                <span className="text-zinc-600" aria-hidden>/</span>
                <span>API SM · CF</span>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              Engineered for pre-2010 models, classic carbureted designs, and
              high-mileage gasoline engines operating in high-heat African
              conditions. Robust ZDDP anti-wear reserves and shear-stable
              viscosity hold the oil film where modern thin oils fail.
            </p>
          </Reveal>

          <Reveal delay={240} className="flex flex-wrap items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full bg-molten px-7 py-4 text-sm font-bold uppercase tracking-wider text-ink shadow-[0_8px_40px_rgba(245,158,11,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-400 hover:shadow-[0_12px_48px_rgba(245,158,11,0.55)]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Order on WhatsApp
            </a>
            <a
              href="#specs"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-bold uppercase tracking-wider text-zinc-200 transition-all duration-300 hover:border-molten/60 hover:text-molten"
            >
              View Lab Specs
              <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" aria-hidden>
                <path d="M8 3v10M8 13l-4-4M8 13l4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </Reveal>

          <Reveal delay={320}>
            <ul className="mt-2 flex flex-wrap gap-2.5" aria-label="Product trust points">
              {TRUST_CHIPS.map((chip) => (
                <li
                  key={chip.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[12px] font-semibold tracking-wide text-zinc-300"
                >
                  <svg viewBox="0 0 12 12" className="h-3 w-3 text-molten" fill="currentColor" aria-hidden>
                    <path d="M6 0l1.76 3.76L12 4.36 9 7.06l.8 4.14L6 9.2 2.2 11.2 3 7.06 0 4.36l4.24-.6L6 0z" />
                  </svg>
                  {chip.label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* ── product visual ───────────────────────────────── */}
        <Reveal delay={200} className="relative mx-auto w-full max-w-[440px]">
          <div className="relative">
            {/* conic halo ring */}
            <div
              className="absolute left-1/2 top-1/2 aspect-square w-[112%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70"
              style={{
                background:
                  "conic-gradient(from 210deg, rgba(245,158,11,0) 0deg, rgba(245,158,11,0.55) 70deg, rgba(245,158,11,0) 150deg, rgba(245,158,11,0.35) 250deg, rgba(245,158,11,0) 330deg)",
                mask: "radial-gradient(circle, transparent 58%, black 60%, black 66%, transparent 68%)",
                WebkitMask:
                  "radial-gradient(circle, transparent 58%, black 60%, black 66%, transparent 68%)",
              }}
              aria-hidden
            />
            {/* molten floor glow */}
            <div
              className="absolute bottom-[2%] left-1/2 h-[16%] w-[80%] -translate-x-1/2 rounded-[50%] bg-molten/40 blur-3xl"
              aria-hidden
            />

            <div className="animate-float relative">
              <Image
                src="/images/bottle-cutout.png"
                alt="TAF Master Optima 20W-50 API SM 4-litre canister — UAE blended"
                width={800}
                height={800}
                priority
                sizes="(max-width: 1024px) 88vw, 440px"
                className="relative z-10 mx-auto h-auto w-full drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
              />
            </div>

            {/* floating spec tags */}
            <div className="animate-float-slow absolute -left-2 top-[18%] z-20 hidden rounded-2xl border border-molten/40 bg-coal/90 px-4 py-3 shadow-[0_10px_36px_rgba(0,0,0,0.55)] backdrop-blur sm:block">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">Zinc Reserve</p>
              <p className="font-display mt-1 text-lg font-extrabold text-molten">1,200 <span className="text-xs">PPM</span></p>
            </div>
            <div
              className="animate-float-slow absolute -right-2 bottom-[24%] z-20 hidden rounded-2xl border border-molten/40 bg-coal/90 px-4 py-3 shadow-[0_10px_36px_rgba(0,0,0,0.55)] backdrop-blur sm:block"
              style={{ animationDelay: "1.6s" }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">Viscosity @ 100°C</p>
              <p className="font-display mt-1 text-lg font-extrabold text-molten">19.1 <span className="text-xs">cSt</span></p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* scroll cue */}
      <div className="relative z-10 hidden justify-center pb-10 lg:flex" aria-hidden>
        <a href="#matrix" className="group flex flex-col items-center gap-3">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-zinc-600 transition-colors group-hover:text-molten">
            Scroll to lab data
          </span>
          <span className="flex h-9 w-6 justify-center rounded-full border border-white/20 pt-1.5">
            <span className="animate-scroll-dot h-1.5 w-1.5 rounded-full bg-molten" />
          </span>
        </a>
      </div>
    </section>
  );
}
