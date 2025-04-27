"use client";
import Image from "next/image";
import { ContainerScroll } from "@/components/magicui/containerScrollAnimation";
import { AuroraText } from "@/components/magicui/aurora-text";
import { LinkPreview } from "@/components/magicui/link-preview";

export default function ShowcaseSection() {
  return (
    <>
      {/* Title Section */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center pt-8 mt-4">
        <AuroraText className="text-transparent bg-clip-text">
          My Creative Side
        </AuroraText>
      </h2>

      {/* Instagram Image Section */}
      <ContainerScroll
        titleComponent={
          <h1 className="text-white text-4xl md:text-5xl font-bold mt-2">
            Instagram Profile
          </h1>
        }
      >
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
          <Image
            src="/images/creative/inst.jpg"
            alt="Instagram Screenshot"
            fill
            className="object-cover"
          />
        </div>
      </ContainerScroll>

      {/* Follow Link Section */}
      <div className="text-center mt-10 mb-10">
         
            <div className="flex items-center gap-2 mt-4">
        <h4 className="text-white text-lg sm:text-xl font-semibold">
            Follow me on Instagram
              <LinkPreview url="https://www.instagram.com" className="font-bold">
                <span className=" sm:text-md font-bold text-[#5a5a5a] font-inter cursor-pointer flex items-center hover:scale-105 hover:text-blue-500 transition-transform duration-300">
                  @snap_by_hs 
                </span>
              </LinkPreview>
        </h4>
            </div>

            

         
      </div>
    </>
  );
}
