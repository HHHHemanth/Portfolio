'use client';
import React from 'react';
import { Tabs } from '@/components/magicui/tabs'; // adjust path as needed
import { AuroraText } from "@/components/magicui/aurora-text";

const internshipTabs = [
    {
      title: "Excentrix",
      value: "overview",
      content: (
        <div className="p-4 text-center flex flex-col items-center justify-center h-full">
          <img
            src="/images/internship/exc.png" // replace with your image path
            alt="Overview"
            className="w-32 h-32 object-contain mb-4"
          />
          <h2 className="text-xl font-bold text-white">Excentrix Ventures</h2>
          <p className="text-white mt-2">
          From October 2024 to January 2025, I worked as a Frontend Intern at Excentrix Ventures, where I collaborated on designing and building responsive web interfaces using Next.js, Tailwind CSS, and Figma. I contributed to the development of modern, user-friendly applications, actively participating in design sprints and adopting agile methodologies. This internship strengthened my UI/UX design skills and introduced me to contemporary frontend development practices in a fast-paced, collaborative environment.
          </p>
        </div>
      ),
    },
    {
      title: "DRDO",
      value: "projects",
      content: (
        <div className="p-4 text-center flex flex-col items-center justify-center h-full">
          <img
            src="/images/internship/drdo.png" // replace with your image path
            alt="Projects"
            className="w-32 h-32 object-contain mb-4"
          />
          <h2 className="text-xl font-bold text-white">Defence Research and Development Organization (DRDO)</h2>
          <p className="text-white mt-2">
          During my internship at the Defence Research and Development Organization (DRDO) in July 2024, I gained valuable exposure to real-world applications of Artificial Intelligence and Machine Learning (AI/ML), Database Management Systems (DBMS), and Java frameworks. I also had the opportunity to work on web scraping tasks, which enhanced my practical skills in data extraction and analysis. This experience deepened my understanding of backend processes and research-oriented development within a secure and structured environment.
          </p>
        </div>
      ),
    },
    
  ];
  
export default function InternshipSection() {
  return (
    <div className="min-h-screen bg-[#121212] px-2 py-5" id="experience">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">
        <AuroraText className="text-transparent bg-clip-text">My Experience</AuroraText>
      </h2>
      
      <Tabs
        tabs={internshipTabs}
        containerClassName="justify-center"
        activeTabClassName="bg-gradient-to-br from-[#B0E9FF] via-[#9130FF] to-[#0D25FF] hover:opacity-90 transition duration-300"
        tabClassName="mx-2"
        contentClassName="relative h-[400px] mt-40 lg:mt-10 -mb-60 bg-black-800 rounded-xl p-8"
      />
    </div>
  );
}
