import { Navbar } from "@/components/common/Navbar";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Process />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}

