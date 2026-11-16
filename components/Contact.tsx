"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { WhatsAppIcon } from "./Navbar";

const WA_NUMBER = "251911234567";
const PHONE_OFFICE = "+251 11 662 0000";
const PHONE_OFFICE_TEL = "tel:+251116620000";
const EMAIL_SALES = "sales@tafenergies.com";

const CHANNELS = [
  {
    title: "Instant WhatsApp",
    note: "Fastest response",
    body: "Immediate pricing, batch availability, and delivery options from our sales representative.",
    cta: "Chat on WhatsApp",
    href: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
      "Hello TAF Energies, I am inquiring about Master Optima 20W-50 engine oil.",
    )}`,
    external: true,
    icon: <WhatsAppIcon className="h-6 w-6" />,
  },
  {
    title: "Direct Phone Calls",
    note: "Addis Ababa HQ",
    body: "Speak directly with the commercial lubrication division during business hours.",
    cta: `Office ${PHONE_OFFICE}`,
    href: PHONE_OFFICE_TEL,
    external: false,
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.13.96.36 1.9.7 2.8a2 2 0 01-.45 2.1L8.1 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.45c.9.34 1.84.57 2.8.7a2 2 0 011.7 2.05z" />
      </svg>
    ),
  },
  {
    title: "Email Inquiries",
    note: "Formal RFQs",
    body: "Corporate fleet procurement, government tenders, or dealership agreements.",
    cta: EMAIL_SALES,
    href: `mailto:${EMAIL_SALES}?subject=${encodeURIComponent(
      "Inquiry regarding Master Optima 20W-50 SM",
    )}`,
    external: false,
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 6L22 7" />
      </svg>
    ),
  },
];

const REGIONS = [
  "Addis Ababa",
  "Oromia",
  "Amhara",
  "Tigray",
  "Sidama",
  "Oromia — Dire Dawa",
  "Somali",
  "Southern Nations (SNNPR)",
  "Other / Export",
];
const CATEGORIES = ["Wholesale cartons", "Dealership agreement", "Fleet / corporate supply", "Government tender", "Retail — find a dealer"];

type FormState = {
  name: string;
  phone: string;
  region: string;
  category: string;
  message: string;
};

const EMPTY: FormState = { name: "", phone: "", region: "", category: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY);

  function update<K extends keyof FormState>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  /** no backend needed — compose the inquiry into a WhatsApp deep link */
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const lines = [
      "WHOLESALE & DEALER INQUIRY — Master Optima 20W-50",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Region: ${form.region}`,
      `Category: ${form.category}`,
      form.message.trim() ? `Notes: ${form.message.trim()}` : "",
    ].filter(Boolean);
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const inputCls =
    "w-full rounded-xl border border-white/10 bg-ink/60 px-4 py-3.5 text-[15px] text-zinc-100 placeholder:text-zinc-600 transition-colors focus:border-molten/60 focus:outline-none";

  return (
    <section id="contact" className="relative border-t border-white/5 py-24 lg:py-32">
      <div
        className="absolute left-1/2 top-0 h-[360px] w-[720px] -translate-x-1/2 rounded-full bg-molten/10 blur-[150px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          kicker="Direct Sales & Dealer Network"
          title={
            <>
              Connect with <span className="text-molten">TAF Energies</span>
            </>
          }
          lead="Ready to stock Master Optima in your region, order wholesale cartons, or locate your nearest verified dealer in Ethiopia? Reach our commercial team directly."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-10">
          {/* channels */}
          <div className="flex flex-col gap-4">
            {CHANNELS.map((ch, i) => (
              <Reveal key={ch.title} delay={i * 80}>
                <a
                  href={ch.href}
                  target={ch.external ? "_blank" : undefined}
                  rel={ch.external ? "noopener noreferrer" : undefined}
                  className="group flex items-start gap-5 rounded-3xl border border-white/10 bg-carbon/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-molten/45 sm:p-7"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-molten/30 bg-molten/10 text-molten transition-colors duration-300 group-hover:bg-molten group-hover:text-ink">
                    {ch.icon}
                  </span>
                  <span className="flex-1">
                    <span className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-molten">
                        {ch.note}
                      </span>
                    </span>
                    <span className="font-display mt-1.5 block text-lg font-bold uppercase tracking-wide text-zinc-100">
                      {ch.title}
                    </span>
                    <span className="mt-2 block text-sm leading-relaxed text-zinc-400">{ch.body}</span>
                    <span className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-molten">
                      {ch.cta}
                      <svg viewBox="0 0 16 16" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" aria-hidden>
                        <path d="M3 8h10m0 0L9 4m4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}

            <Reveal delay={260} className="mt-2 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                Headquarters &amp; Logistics
              </p>
              <p className="mt-2.5 text-sm leading-relaxed text-zinc-300">
                <strong className="font-semibold text-zinc-100">TAF Energies PLC</strong> — Debre Zeit
                Road, Gotera Industrial Zone, TAF Business Complex, P.O. Box 2541, Addis Ababa,
                Ethiopia.
              </p>
              <p className="mt-3 text-[12px] leading-relaxed text-zinc-500">
                Commercial Registration: TAF-ET-LUB-0941 · Product Origin: United Arab Emirates ·
                Standard: API SM / CF &amp; ESA Standards
                <br />
                Business Hours: Mon – Sat, 8:00 AM – 5:30 PM EAT
              </p>
            </Reveal>
          </div>

          {/* inquiry form */}
          <Reveal delay={120}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-molten/30 bg-gradient-to-b from-molten/[0.08] to-transparent p-7 sm:p-9"
            >
              <h3 className="font-display text-xl font-extrabold uppercase tracking-wide text-zinc-50 sm:text-2xl">
                Wholesale &amp; Dealer Inquiry
              </h3>
              <p className="mt-2 text-sm text-zinc-400">
                Submit your details and our team will respond with regional dealer contacts or
                wholesale carton pricing.
              </p>

              <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2">
                  <span className="text-[12px] font-semibold uppercase tracking-wider text-zinc-400">
                    Full Name <span className="text-molten">*</span>
                  </span>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="e.g. Abebe Kebede"
                    className={inputCls}
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-[12px] font-semibold uppercase tracking-wider text-zinc-400">
                    Phone / WhatsApp <span className="text-molten">*</span>
                  </span>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="+251 9__ ___ ___"
                    className={inputCls}
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-[12px] font-semibold uppercase tracking-wider text-zinc-400">
                    Target Region <span className="text-molten">*</span>
                  </span>
                  <select
                    required
                    value={form.region}
                    onChange={(e) => update("region", e.target.value)}
                    className={`${inputCls} appearance-none ${form.region ? "" : "text-zinc-600"}`}
                  >
                    <option value="" disabled>
                      Select region / town
                    </option>
                    {REGIONS.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-[12px] font-semibold uppercase tracking-wider text-zinc-400">
                    Inquiry Category <span className="text-molten">*</span>
                  </span>
                  <select
                    required
                    value={form.category}
                    onChange={(e) => update("category", e.target.value)}
                    className={`${inputCls} appearance-none ${form.category ? "" : "text-zinc-600"}`}
                  >
                    <option value="" disabled>
                      Select category
                    </option>
                    {CATEGORIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="flex flex-col gap-2 sm:col-span-2">
                  <span className="text-[12px] font-semibold uppercase tracking-wider text-zinc-400">
                    Estimated Quantity or Questions
                  </span>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder="e.g. 200 cartons per month to Hawassa, mixed pallet…"
                    className={`${inputCls} resize-none`}
                  />
                </label>
              </div>

              <button
                type="submit"
                className="mt-7 flex w-full items-center justify-center gap-2.5 rounded-xl bg-molten px-7 py-4 text-sm font-bold uppercase tracking-wider text-ink shadow-[0_8px_36px_rgba(245,158,11,0.35)] transition-all duration-300 hover:bg-amber-400 hover:shadow-[0_10px_44px_rgba(245,158,11,0.5)]"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Submit via WhatsApp
              </button>
              <p className="mt-3.5 text-center text-[12px] text-zinc-500">
                Submitting opens WhatsApp with your inquiry pre-filled — no account or email needed.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
