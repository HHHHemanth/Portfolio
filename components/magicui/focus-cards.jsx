"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

const cards = [
  {
    title: "Global Academy of Technology, Bengaluru",
    year: "2021-25",
    src: "/images/edu/gatl.jpg",
  },
  {
    title: "PES PU College, Bengaluru",
    year: "2019-21",
    src: "/images/edu/pesl.jpg",
  },
  {
    title: "Websters High School, Bengaluru",
    year: "2007-19",
    src: "/images/edu/webl.jpg",
  },
];

export const Card = React.memo(({ card, index, hovered, setHovered }) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
      hovered !== null && hovered !== index && "blur-[2px] scale-[1]"
    )}
  >
    <img
      src={card.src}
      alt={card.title}
      className="object-cover absolute inset-0 w-full h-full"
    />
    <div
      className={cn(
        "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
        hovered === index ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="text-left text-white">
        <div className="text-xl md:text-2xl font-semibold">
          {card.title}
        </div>
        <div className="text-sm md:text-base text-neutral-300 mt-1">
          {card.year}
        </div>
      </div>
    </div>
  </div>
));

Card.displayName = "Card";

export function FocusCards() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
