"use client";

import { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { Plus } from "lucide-react";
import { Project } from "@/data/projects";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <motion.div
      whileHover={isMobile ? undefined : { y: -4 }}
      whileTap={{ scale: 0.98 }}
      className="w-full h-full"
    >
      <Tilt
        className="group cursor-pointer select-none rounded-sm border border-[#e9c176]/10 hover:border-primary/50 bg-[#1c1b1b]/60 backdrop-blur-md overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_40px_rgba(233,193,118,0.1)] transition-all duration-500 w-full h-full"
        glareEnable={!isMobile}
        glareMaxOpacity={0.4}
        glarePosition="all"
        glareColor="#e9c176"
        tiltEnable={!isMobile}
        tiltMaxAngleX={12}
        tiltMaxAngleY={12}
        perspective={1000}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div onClick={onClick} className="h-full flex flex-col justify-between" style={{ transformStyle: "preserve-3d" }}>
          
          {/* Image Frame with translateZ so it has depth */}
          <div 
            className="relative overflow-hidden aspect-[4/5] bg-[#1c1b1b] border-b border-[#e9c176]/10 group-hover:border-primary/30 transition-colors duration-500 shimmer-container"
            style={{ transform: isMobile ? undefined : "translateZ(10px)", transformStyle: "preserve-3d" }}
          >
            {/* Dynamic Plus Action Hover Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full border border-primary bg-background/50 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500 backdrop-blur-sm">
                <Plus className="w-6 h-6" />
              </div>
            </div>

            {/* Core Image with luxury filters */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover luxury-filter group-hover:scale-105 group-hover:contrast-[1.2] group-hover:brightness-[1.08] group-hover:saturate-[1.26] transition-all duration-700 select-none"
              style={{ transform: isMobile ? undefined : "translateZ(15px)" }}
            />
          </div>

          {/* Text Details Floating above the 3D surface */}
          <div 
            className="p-6 flex-grow flex flex-col justify-between space-y-2.5"
            style={{ transform: isMobile ? undefined : "translateZ(25px)", transformStyle: "preserve-3d" }}
          >
            <span className="font-body text-[10px] uppercase tracking-[0.2em] text-primary font-bold">
              {project.category === "brass" ? "Luxury / Brass Railings"
                : project.category === "glass" ? "Architectural / Glass Systems"
                : "Bespoke / Custom Metalwork"}
            </span>
            <h3 className="font-display text-base text-zinc-100 group-hover:text-primary transition-colors leading-snug font-bold">
              {project.title}
            </h3>
          </div>

        </div>
      </Tilt>
    </motion.div>
  );
}
