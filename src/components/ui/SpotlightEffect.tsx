"use client";

import { useEffect, useState } from "react";

export default function SpotlightEffect() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    const handleTouch = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) {
        document.documentElement.style.setProperty("--mouse-x", `${e.touches[0].clientX}px`);
        document.documentElement.style.setProperty("--mouse-y", `${e.touches[0].clientY}px`);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchstart", handleTouch, { passive: true });
    window.addEventListener("touchmove", handleTouch, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchstart", handleTouch);
      window.removeEventListener("touchmove", handleTouch);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-30 transition-opacity duration-300"
      style={{
        background: `radial-gradient(
          650px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px),
          rgba(233, 193, 118, 0.055),
          transparent 80%
        )`
      }}
    />
  );
}
