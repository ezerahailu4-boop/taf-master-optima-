import Reveal from "./Reveal";

type SectionHeadingProps = {
  kicker: string;
  title: React.ReactNode;
  lead?: string;
  align?: "left" | "center";
};

/** Kicker + display heading + optional lead paragraph used by every section. */
export default function SectionHeading({
  kicker,
  title,
  lead,
  align = "center",
}: SectionHeadingProps) {
  const alignCls = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <Reveal className={`flex flex-col gap-5 ${alignCls}`}>
      <span className="inline-flex items-center gap-2 rounded-full border border-molten/30 bg-molten/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-molten">
        <span className="h-1.5 w-1.5 rounded-full bg-molten" aria-hidden />
        {kicker}
      </span>
      <h2 className="font-display max-w-3xl text-4xl font-extrabold uppercase leading-[1.02] tracking-tight text-zinc-50 sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {lead && (
        <p className="max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">{lead}</p>
      )}
    </Reveal>
  );
}
