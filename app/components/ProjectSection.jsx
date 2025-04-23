import React from "react";
import Image from "next/image";
import { CardContainer, CardBody, CardItem } from "@/components/magicui/ThreeDCard";
import { AuroraText } from "@/components/magicui/aurora-text";
import { TracingBeam } from "@/components/magicui/tracing-beam";

const projectsData = [
  {
    id: 1,
    title: "Smart Response System for Airline Queries with Machine Learning",
    description: "A machine learning system for automated airline query handling and feedback evaluation via a Telegram chatbot, with results displayed on an interactive dashboard",
    image: "/images/projects/air3.jpg",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "Gym Management System",
    description: "The Gym Management System is a CLI-based Java application that features an interactive interface for efficient gym management. Built with file handling capabilities, it allows for seamless data storage and retrieval",
    image: "/images/projects/gym3.jpg",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "Email_Guardian (Email Spam Detection)",
    description: "Email Guardian is a spam detection system using the Naive Bayes algorithm to classify and filter unwanted emails efficiently",
    image: "/images/projects/mail3.jpg",
    tag: ["All", "Web"],
  },
  {
    id: 4,
    title: "Sight Through Sound",
    description: "Developing a low-cost device integrating YOLO and R-CNN models for real-time object detection with Kannada audio feedback, enhancing navigation and independence for visually impaired users",
    image: "/images/projects/ai3.jpg",
    tag: ["All", "Web"],
  },
];

const ProjectSection = () => {
  return (
    <div className="py-10 pb-2 px-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">
        <AuroraText className="text-transparent bg-clip-text">My Projects</AuroraText>
      </h2>
      <div className="hidden lg:block w-1/2 mx-auto mb-8" />

      {/* TracingBeam wrapper for large screens only */}
      <div className="hidden lg:block">
        <TracingBeam className="mt-10">
          <div className="flex flex-col items-center space-y-10">
            {projectsData.map((project) => (
              <CardContainer key={project.id}>
                <CardBody className="lg:w-150 h-130 md:w-100 sm:w-75 bg-white rounded-xl shadow-md p-4 flex flex-col items-center justify-center sm:px-6 md:px-8">
                  <CardItem translateZ={40} className="w-full flex items-center justify-center">
                    <div className="relative w-full h-[250px]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    </div>
                  </CardItem>
                  <CardItem translateZ={20} className="text-center mt-4">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </CardItem>
                  <CardItem translateZ={10} className="text-center text-gray-600 text-sm mt-2">
                    <p>{project.description}</p>
                  </CardItem>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </TracingBeam>
      </div>

      {/* Fallback version for smaller screens */}
      <div className="block lg:hidden">
        <div className="flex flex-col items-center space-y-10">
          {projectsData.map((project) => (
            <CardContainer key={project.id}>
              <CardBody className="w-full sm:w-[90%] md:w-[50%] h-130 bg-white rounded-xl shadow-md p-4 flex flex-col items-center justify-center">
                <CardItem translateZ={40} className="w-full flex items-center justify-center">
                  <div className="relative w-full h-[270px]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                </CardItem>
                <CardItem translateZ={20} className="text-center mt-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </CardItem>
                <CardItem translateZ={10} className="text-center text-gray-600 text-sm mt-2">
                  <p>{project.description}</p>
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
