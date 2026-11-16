"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon } from "./Navbar";

const WHATSAPP_URL =
  "https://wa.me/251911234567?text=Hello%20TAF%20Energies%2C%20I%20am%20inquiring%20about%20Master%20Optima%2020W-50%20engine%20oil.";

/** Floating WhatsApp shortcut — appears after the first scroll. */
export default function WhatsAppFloat() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with TAF Energies on WhatsApp"
      className={`fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.45)] transition-all duration-500 hover:scale-110 ${
        shown ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <span
        className="absolute inset-0 -z-10 rounded-full bg-[#25D366] opacity-40 blur-md"
        aria-hidden
      />
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
