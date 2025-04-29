"use client";
import React, { useEffect } from "react";

export default function AudioOnScroll() {
  useEffect(() => {
    const audio = new Audio("/audio/portbg.mp3");
    audio.loop = true;

    const playAudio = () => {
      audio.play().catch((e) => console.log("Autoplay failed:", e));
      window.removeEventListener("scroll", playAudio); // remove after first scroll
    };

    window.addEventListener("scroll", playAudio);

    return () => {
      window.removeEventListener("scroll", playAudio);
      audio.pause();
    };
  }, []);

  return null; // No visual output needed
}
