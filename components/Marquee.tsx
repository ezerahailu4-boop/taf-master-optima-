const ITEMS = [
  "SAE 20W-50",
  "API SM / CF",
  "ASTM D4172 Tested",
  "ZDDP 1,150–1,250 PPM",
  "ISO 9001:2015 Facility",
  "Flash Point 238°C",
  "Viscosity Index 128",
  "Made in UAE",
  "Batch Certified COA",
];

/** Infinite amber ticker strip between hero and the technical matrix. */
export default function Marquee() {
  const row = (ariaHidden: boolean) => (
    <ul
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 items-center"
    >
      {ITEMS.map((item, i) => (
        <li key={i} className="flex items-center">
          <span className="font-display whitespace-nowrap px-8 text-sm font-bold uppercase tracking-[0.24em] text-zinc-400">
            {item}
          </span>
          <svg viewBox="0 0 12 12" className="h-3 w-3 shrink-0 text-molten" fill="currentColor" aria-hidden>
            <path d="M6 0l1.76 3.76L12 4.36 9 7.06l.8 4.14L6 9.2 2.2 11.2 3 7.06 0 4.36l4.24-.6L6 0z" />
          </svg>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="relative border-y border-white/10 bg-coal/60 py-5">
      <div className="marquee-mask overflow-hidden">
        <div className="animate-marquee flex w-max">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </div>
  );
}
