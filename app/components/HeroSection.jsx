"use client"
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { AuroraText } from "@/components/magicui/aurora-text";
const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-12">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
        
        {/* Text Section */}
        <div className="col-span-7 text-center sm:text-left">
          <h1 className="text-white mb-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
          <AuroraText className="text-transparent bg-clip-text "> Hello, I'm{" "}</AuroraText>
            {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 via-purple-400 to-blue-600">
             
            </span> */}
            <br />
            <TypeAnimation
              sequence={[
                'Hemanth S',
                2000,
                'Code Crafter',
                2000,
                'Graphixer',
                2000,
              ]}
              wrapper="span"
      speed={50}
      
      repeat={Infinity}
    />
          </h1>

          <p className="text-[#ADB7BE] text-md md:text-lg lg:text-xl mb-8 max-w-xl font-sans">
            Enthusiastic Computer Science student skilled in coding, design, and data science. Eager to learn, innovate, and contribute meaningfully.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <button className="px-6 py-3 rounded-full text-white bg-gradient-to-br from-[#B0E9FF] via-[#9130FF] to-[#0D25FF] hover:opacity-90 transition duration-300 font-semibold font-sans">
            {/* colors = ["#B0E9FF", "#9130FF", "#0D82FF", "#0D25FF"] */}
              Hire Me
            </button>
            <button className="px-1 py-1 rounded-full bg-gradient-to-br from-[#B0E9FF] via-[#9130FF] to-[#0D25FF] hover:opacity-90 transition duration-300">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 text-white font-semibold font-sans">
                Download CV
              </span>
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="col-span-5 flex justify-center">
          <div className="relative w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] bg-[#181818] rounded-full overflow-hidden">
            <Image
              src="/images/hero_img2.png"
              alt="hero image"
              fill
              className="object-cover absolute top-0 left-0"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
