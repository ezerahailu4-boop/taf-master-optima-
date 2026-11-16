"use client";

import { useEffect, useRef, useState } from "react";

type CounterProps = {
  /** final numeric value */
  value: number;
  /** decimal places to keep (e.g. 19.1 → 1) */
  decimals?: number;
  prefix?: string;
  suffix?: string;
  /** thousand grouping (e.g. 1200 → 1,200) */
  group?: boolean;
  durationMs?: number;
  className?: string;
};

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * Animates from 0 to `value` when scrolled into view.
 * Jumps straight to the final value under prefers-reduced-motion.
 */
export default function Counter({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  group = false,
  durationMs = 1400,
  className = "",
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDisplay(format(value));
      return;
    }

    let raf = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / durationMs, 1);
          setDisplay(format(value * easeOutCubic(t)));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  function format(n: number): string {
    const fixed = n.toFixed(decimals);
    if (!group) return fixed;
    const [int, frac] = fixed.split(".");
    const grouped = int.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return frac ? `${grouped}.${frac}` : grouped;
  }

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
