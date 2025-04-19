'use client'
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import { AuroraText } from "@/components/magicui/aurora-text";
import TabButton from './TabButton';
import { IconCloudDemo } from "@/components/magicui/IconCloudDemo";
import { FocusCards } from "@/components/magicui/focus-cards";
import ExpandableCardDemo from "@/components/magicui/expandable-card-demo-standard";

const TAB_DATA=[
{
    title: "Skills",
    id: "skills",
    content: (
        <IconCloudDemo />
    )
},
{
    title: "Education",
    id: "education",
    content: (
        <FocusCards />
    )
},
{
    title: "Certifications",

    id: "certifications",
    content: (
            <ExpandableCardDemo/>
    )
}


]

const AboutSection = () => {
    const [tab, setTab] = useState('skills');
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }

    return (
        <section className="bg-[#121212] text-white py-12 px-4 sm:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <div className="flex justify-center">
                    <Image
                        src="/images/about_img2.png"
                        alt="About Illustration"
                        width={700}
                        height={700}
                        className="rounded-lg shadow-lg"
                    />
                </div>

                {/* Text */}
                <div>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 ">
                        <AuroraText className="text-transparent bg-clip-text"> About Me</AuroraText>
                    </h2>
                    <p className="text-[#ADB7BE] text-base sm:text-lg leading-relaxed">
                        I'm a passionate and driven Computer Science student with a strong interest in software development, data science, and creative design. 
                        Skilled in problem-solving and modern technologies, I love building impactful projects and constantly pushing the boundaries of what I can learn. 
                        With a mix of analytical thinking and artistic flair, I aim to innovate and contribute meaningfully to every challenge I take on.
                    </p>

                    {/* Tab buttons */}
                    <div className='flex flex-row mt-8'>
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</TabButton>
                        <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>Certifications</TabButton>
                        {/* Add other tabs as necessary */}
                    </div>
                    <div className='mt-8'>{TAB_DATA.find((t)=> t.id === tab).content}</div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
