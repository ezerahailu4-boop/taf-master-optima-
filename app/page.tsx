import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import TechMatrix from "@/components/TechMatrix";
import Purity from "@/components/Purity";
import Rationale from "@/components/Rationale";
import SpecTable from "@/components/SpecTable";
import Comparison from "@/components/Comparison";
import UseCases from "@/components/UseCases";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <TechMatrix />
        <Purity />
        <Rationale />
        <SpecTable />
        <Comparison />
        <UseCases />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
