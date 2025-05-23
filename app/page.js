import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import CreativeSection from "./components/CreativeSection";
import QuoteSection from "./components/QuoteSection";
import { Globe } from "@/components/magicui/globe";
import EmailSection from "./components/EmailSection";
import FooterSection from "./components/FooterSection";
import ScrollText from "./components/ScrollText";
import InternshipSection from './components/InternshipSection'; 
import AudioOnScroll from "./components/AudioSection";
export default function Home() {
  return (
<main className="flex min-h-screen flex-col bg-[#121212]">
  <Navbar />
  <div className="mt-24 px-4 sm:px-8 lg:px-16">
  {/* <AudioOnScroll /> */}
    <HeroSection/>
    <AboutSection/>
    <ScrollText/>
    <ProjectSection/>
    <div className="flex flex-col lg:flex-row items-center gap-0 my-0">
      <Globe className="lg:w-2/3 lg:-ml-32" />
      <div className="lg:w-2/3 lg:text-left lg:ml-0">
        <QuoteSection />
      </div>
    </div>
  <InternshipSection />
    <CreativeSection/>
    <EmailSection/>
    <FooterSection/>
  </div>
</main>
  );
}
