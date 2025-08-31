import Navbar from "@/components/common/Navbar";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Story from "@/components/home/Story";
import Clients from "@/components/home/Clients";
import Projects from "@/components/home/Projects";
import FeatureSection from "@/components/home/FeatureSection";
import Awards from "@/components/home/Awards";
import Pricing from "@/components/home/Pricing";
import Cta from "@/components/home/Cta";
import Footer from "@/components/common/Footer";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Story/>
      <Clients/>
      <Projects/>
      <FeatureSection/>
      <Awards/>
      <Pricing/>
      <Cta/>
      <Footer/>
    </main>
  );
}
