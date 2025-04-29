"use client";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

export const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

function ParallaxText({
  children,
  baseVelocity = 100,
  direction = 1, // Added direction to control the scroll direction
  ...props
}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const [repetitions, setRepetitions] = useState(1);
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const calculateRepetitions = () => {
      if (containerRef.current && textRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const textWidth = textRef.current.offsetWidth;
        const newRepetitions = Math.ceil(containerWidth / textWidth) + 2;
        setRepetitions(newRepetitions);
      }
    };

    calculateRepetitions();

    window.addEventListener("resize", calculateRepetitions);
    return () => window.removeEventListener("resize", calculateRepetitions);
  }, [children]);

  const x = useTransform(baseX, (v) => `${wrap(-100 / repetitions, 0, v)}%`);

  const directionFactor = React.useRef(direction); // Set direction based on passed prop
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = direction; // Move in the original direction
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = -direction; // Move in the opposite direction
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden whitespace-nowrap"
      {...props}
    >
      <motion.div className="inline-block" style={{ x }}>
        {Array.from({ length: repetitions }).map((_, i) => (
          <span key={i} ref={i === 0 ? textRef : null}>
            {children}{" "}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function VelocityScroll({
  defaultVelocity = 2,
  numRows = 1,
  children,
  className,
  ...props
}) {
  return (
    <div
      className={cn(
        "relative w-full text-6xl font-bold tracking-[-0.02em] md:text-7xl md:leading-[5rem] text-white",
        className
      )}
      {...props}
    >
      {Array.from({ length: numRows }).map((_, i) => (
        <ParallaxText key={i} baseVelocity={defaultVelocity} direction={1}>
          {children}
        </ParallaxText>
      ))}
    </div>
  );
}

export function VelocityScroll2({
  defaultVelocity = 2,
  numRows = 1,
  children,
  className,
  ...props
}) {
  return (
    <div
      className={cn(
        "relative w-full text-6xl font-bold tracking-[-0.02em] md:text-7xl md:leading-[5rem] text-white",
        className
      )}
      {...props}
    >
      {Array.from({ length: numRows }).map((_, i) => (
        <ParallaxText key={i} baseVelocity={defaultVelocity} direction={-1}>
          {children}
        </ParallaxText>
      ))}
    </div>
  );
}
