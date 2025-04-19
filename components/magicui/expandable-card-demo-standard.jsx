"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export default function ExpandableCardDemo() {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (<>
    <AnimatePresence>
      {active && typeof active === "object" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/20 h-full w-full z-10" />
      )}
    </AnimatePresence>
    <AnimatePresence>
      {active && typeof active === "object" ? (
        <div className="fixed inset-0  grid place-items-center z-[100]">
          <motion.button
            key={`button-${active.title}-${id}`}
            layout
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.05,
              },
            }}
            className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
            onClick={() => setActive(null)}>
            <CloseIcon />
          </motion.button>
          <motion.div
            layoutId={`card-${active.title}-${id}`}
            ref={ref}
            className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden">
            <motion.div layoutId={`image-${active.title}-${id}`}>
              <img
                width={200}
                height={200}
                src={active.src}
                alt={active.title}
                className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top" />
            </motion.div>

            <div>
              <div className="flex justify-between items-start p-4">
                <div className="">
                  <motion.h3
                    layoutId={`title-${active.title}-${id}`}
                    className="font-bold text-black dark:text-neutral-100">
                    {active.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${active.description}-${id}`}
                    className="text-neutral-600 dark:text-neutral-400">
                    {active.description}
                  </motion.p>
                </div>

                
              </div>
              <div className="pt-4 relative px-4">
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]">
                  {typeof active.content === "function"
                    ? active.content()
                    : active.content}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
    <ul className="max-w-2xl mx-auto w-full gap-4">
      {cards.map((card, index) => (
        <motion.div
          layoutId={`card-${card.title}-${id}`}
          key={`card-${card.title}-${id}`}
          onClick={() => setActive(card)}
          className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 hover:text-black dark:hover:bg-neutral-800 rounded-xl cursor-pointer">
          <div className="flex gap-4 flex-col md:flex-row ">
            <motion.div layoutId={`image-${card.title}-${id}`}>
              <img
                width={100}
                height={100}
                src={card.src}
                alt={card.title}
                className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top" />
            </motion.div>
            <div className="">
              <motion.h3
                layoutId={`title-${card.title}-${id}`}
                className="font-medium text-neutral-600 text-center md:text-left hover:text-black">
                {card.title}
              </motion.h3>
              <motion.p
                layoutId={`description-${card.description}-${id}`}
                className="text-neutral-600 dark:text-neutral-400 text-center md:text-left">
                {card.description}
              </motion.p>
            </div>
          </div>
          <motion.button
            layoutId={`button-${card.title}-${id}`}
            className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-blue-500 hover:text-white text-black mt-4 md:mt-0">
            {card.ctaText}
          </motion.button>
        </motion.div>
      ))}
    </ul>
  </>);
}

export const CloseIcon = () => {
  return (
    (<motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>)
  );
};

const cards = [
  {
    description: "Java Full Stack Development",
    title: "Wipro",
    src: "/images/certificates/jfs.jpg",
    ctaText: "View",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        (<p>Completed the Java Full Stack Development course offered by Wipro, covering comprehensive concepts in both frontend and backend development. The course included hands-on training in Java, Spring Boot, HTML, CSS, JavaScript, and databases, enabling full-cycle web application development. It provided a solid understanding of RESTful APIs, MVC architecture, and integration between client and server. This certification strengthened my ability to develop scalable, responsive, and user-friendly applications, aligning with current industry needs.
                  </p>)
      );
    },
  },
  {
    description: "Exploratory Data Analysis",
    title: "Global Academy of Technology",
    src: "/images/certificates/dans.jpg",
    ctaText: "View",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        (<p>Certified in Exploratory Data Analysis through a specialized program conducted by Global Academy of Technology. This course emphasized the importance of understanding and visualizing data before applying machine learning techniques. Gained experience in using tools like Python, pandas, matplotlib, and seaborn to uncover patterns, correlations, and insights. The certification sharpened my analytical thinking, data preprocessing, and storytelling skills—essential for data science and decision-making tasks.
                  </p>)
      );
    },
  },

  {
    description: "Database Management Systems",
    title: "NPTEL",
    src: "/images/certificates/dbms.jpg",
    ctaText: "View",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        (<p>Completed the Database Management Systems course offered by NPTEL, providing a deep dive into relational database concepts. Learned about ER models, normalization, indexing, transactions, and SQL queries. The course was guided by expert professors from IITs and included weekly assignments and proctored exams to test conceptual clarity. This certification helped solidify my foundation in database design and operations, essential for backend development and data-driven applications.</p>)
      );
    },
  },
  
  
];
