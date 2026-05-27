"use client";

import { useState } from "react";

export default function SplineHero() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-[350px] md:h-[550px] flex items-center justify-center select-none overflow-hidden">
      
      {/* Interactive 3D Spline Embed (Particle Ring / Architectural Gold Geometry) */}
      <iframe
        src="https://my.spline.design/particlering-3d6d5ef0b064c1bdbe70678d9101f3db/"
        frameBorder="0"
        width="100%"
        height="100%"
        className={`w-full h-full object-cover transition-opacity duration-1000 ${
          loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        onLoad={() => setLoaded(true)}
        style={{ pointerEvents: "auto" }}
        title="JR Industries Interactive 3D Gold Particle Ring"
      />
      
      {/* Bottom overlay gradient to block Spline logo cleanly */}
      <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
    </div>
  );
}
