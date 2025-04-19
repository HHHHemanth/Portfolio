import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen flex flex-col">
      <Navbar />
      <div className="mt-24 px-4 sm:px-8 lg:px-16">
        <HeroSection />
        <AboutSection />
      </div>
    </main>
  );
}
