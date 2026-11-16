import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://taf-productss.vercel.app"),
  title: {
    default: "TAF Master Optima 20W-50 API SM — Premium Engine Oil | UAE Blended",
    template: "%s | TAF Energies PLC",
  },
  description:
    "TAF Master Optima 20W-50 API SM/CF gasoline engine oil — engineered for pre-2010 and high-mileage engines in high-heat African conditions. High-ZDDP protection, ASTM tested, UAE blended, 4L canister. Wholesale & dealer inquiries across Ethiopia.",
  keywords: [
    "20W-50 engine oil",
    "API SM engine oil",
    "TAF Master Optima",
    "UAE engine oil Ethiopia",
    "high mileage motor oil",
    "ZDDP engine oil",
    "TAF Energies PLC",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "TAF Energies PLC",
    title: "TAF Master Optima 20W-50 API SM — Engineered for the Long Haul",
    description:
      "High-ZDDP 20W-50 gasoline engine oil, UAE blended and ASTM tested for pre-2010 and high-mileage engines in African heat.",
    images: [
      {
        url: "/images/bottle-cutout.png",
        width: 800,
        height: 800,
        alt: "TAF Master Optima 20W-50 SM 4L canister",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TAF Master Optima 20W-50 API SM",
    description:
      "High-ZDDP 20W-50 gasoline engine oil — UAE blended, ASTM tested, built for Ethiopian roads.",
    images: ["/images/bottle-cutout.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  width: "device-width",
  initialScale: 1,
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "TAF Master Optima 20W-50 API SM Gasoline Engine Oil",
  description:
    "SAE 20W-50 API SM/CF gasoline engine oil blended in the UAE for pre-2010, classic carbureted and high-mileage engines. 1,150–1,250 PPM ZDDP, 19.1 cSt @ 100°C, 9.2 TBN, ASTM D4172 & D6891 tested.",
  brand: { "@type": "Brand", name: "TAF Energies PLC" },
  category: "Automotive Lubricants",
  sku: "TAF-MO-20W50-SM-4L",
  weight: { "@type": "QuantitativeValue", value: 4, unitCode: "LTR" },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "ETB",
    url: "https://taf-productss.vercel.app/#contact",
    seller: {
      "@type": "Organization",
      name: "TAF Energies PLC",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Debre Zeit Road, Gotera Industrial Zone, TAF Business Complex",
        postalCode: "2541",
        addressLocality: "Addis Ababa",
        addressCountry: "ET",
      },
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${archivo.variable} ${inter.variable}`}>
      <body className="grain font-body bg-ink text-zinc-100 antialiased">
        {/* mark JS availability before paint so reveal animations degrade gracefully */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
