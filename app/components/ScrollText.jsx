import React from 'react'
import { VelocityScroll, VelocityScroll2 } from "@/components/magicui/scroll-based-velocity"; // Ensure VelocityScroll2 is imported

const ScrollText = () => {
  return (
    <div className="flex flex-col items-center">
      <VelocityScroll className="mt-30">BELIEVE IN  YOURSELF</VelocityScroll>

      {/* Add image here */}
      <img
        src="/images/scroll/sc.png"
        alt="Descriptive alt text"
        className="-mt-20 -mb-20 w-80 h-auto z-1" // Customize size and spacing
      />

      <VelocityScroll2 className="z-2 mb-50">BELIEVE IN  YOURSELF</VelocityScroll2>
    </div>
  );
};

export default ScrollText;
