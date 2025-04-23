import React from "react";
import Image from "next/image";
import { CardContainer, CardBody, CardItem } from "@/components/magicui/ThreeDCard";
import { AuroraText } from "@/components/magicui/aurora-text";
const projectsData = [
  {
    id: 1,
    title: "Smart Response System for Airline Queries with Machine Learning",
    description: " A machine learning-powered system and sentiment analysis to enhance airline customer service through automated query handling and feedback evaluation via a Telegram chatbot, with results visualized in an interactive dashboard",
    image: "/images/projects/air2.jpg",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: " Gym Management System",
    description: " The Gym Management System is a CLI-based Java application that features an interactive interface for efficient gym management. Built with file handling capabilities, it allows for seamless data storage and retrieval",
    image: "/images/projects/gym2.jpg",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "Email_Guardian (Email Spam Detection)",
    description: " Email Guardian is a spam detection system using the Naive Bayes algorithm to classify and filter unwanted emails efficiently",
    image: "/images/projects/mail2.jpg",
    tag: ["All", "Web"],
  },
  {
    id: 4,
    title: "Sight Through Sound",
    description: "Developing a low-cost device integrating YOLO and R-CNN models for real-time object detection with Kannada audio feedback, enhancing navigation and independence for visually impaired users",
    image: "/images/projects/ai2.jpg",
    tag: ["All", "Web"],
  },
];

const ProjectSection = () => {
  return (
    <div className="py-10 pb-2 px-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 ">
                        <AuroraText className="text-transparent bg-clip-text">My Projects</AuroraText>
                    </h2>
      <div className="flex flex-col items-center space-y-2">
        {projectsData.map((project) => (
          <CardContainer key={project.id} containerClassName="">
          <CardBody className="lg:w-150  h-130 md:w-100 sm:w-75 bg-white rounded-xl shadow-md p-4 flex flex-col items-center justify-center  sm:px-6 md:px-8">
            <CardItem translateZ={40} className="w-full flex items-center justify-center">
              <div className="relative w-full h-70">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill" // Ensures image covers the container
                  objectFit="cover" // Maintains aspect ratio while covering the container
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
  );
};

export default ProjectSection;
