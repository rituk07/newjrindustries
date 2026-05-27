"use client";

import { motion } from "framer-motion";
import { Lightbulb, Grid, Palette, ArrowRight, ShieldCheck, Gem } from "lucide-react";
import Link from "next/link";

interface Competency {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

export default function Expertise() {
  const competencies: Competency[] = [
    {
      id: "brass-railings",
      icon: <Gem className="w-8 h-8 text-primary" />,
      title: "Luxury Brass Railings",
      description: "Exquisite, hand-finished brass railing systems that combine structural integrity with a timeless golden luster, tailored specifically for prestigious residential penthouses and architectural landmarks.",
      features: [
        "Premium solid core brass alloys",
        "Bespoke casting and helical bending",
        "Handcrafted and polished to a mirror finish",
        "Exquisite details and customized end caps"
      ]
    },

    {
      id: "glass-integration",
      icon: <Grid className="w-8 h-8 text-primary" />,
      title: "Structural Glass Integration",
      description: "Frameless and minimal safety glazing barriers, incorporating custom low-iron glass plates and heavy-duty dry-glaze dry channel profile brackets. Maximum transparency with absolute wind/weight ratings.",
      features: [
        "Ultra-clear low-iron laminated panels",
        "Concealed dry-glaze shoe and dry track mounting",
        "Anti-shatter laminated engineering",
        "Sleek architectural cap railings in gold"
      ]
    },
    {
      id: "pvd-finishes",
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: "PVD & Custom Finishes",
      description: "Advanced Physical Vapor Deposition (PVD) coating, creating vacuum-bonded micro-finished layers on steel and brass. Yields exceptional durability, anti-scratch armor, and visual gold/titanium depth.",
      features: [
        "Molecularly bonded titanium hard-coating",
        "Rust and highly corrosive weather armor",
        "Curated satined, brushed, and mirror finishes",
        "Unfading color retention for 25+ years"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-background py-24 md:py-32 overflow-hidden flex flex-col justify-between">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 w-full">
        
        {/* Header Block */}
        <div className="text-center max-w-[800px] mx-auto mb-24 space-y-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-body text-[10px] uppercase tracking-[0.2em] text-primary font-bold block"
          >
            Engineering & Artistry
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-display text-3xl md:text-5xl text-zinc-100 font-bold tracking-wide"
          >
            Our Core Expertise
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-body text-xs md:text-sm text-zinc-400 leading-relaxed font-semibold"
          >
            Precision engineering meets architectural luxury. Explore our core competencies designed to deliver uncompromising quality, tactile material mastery, and premium aesthetic brilliance.
          </motion.p>
        </div>

        {/* Competencies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24"
        >
          {competencies.map((comp) => (
            <motion.div
              key={comp.id}
              variants={itemVariants}
              id={comp.id}
              className="bg-[#1c1b1b]/60 border border-[#e9c176]/10 p-8 md:p-12 hover:bg-[#242323]/60 hover:border-primary/50 transition-all duration-500 rounded-sm shadow-xl flex flex-col justify-between space-y-8 group"
            >
              <div className="space-y-6">
                {/* Icon wrapper */}
                <div className="w-14 h-14 border border-primary/20 bg-background/50 flex items-center justify-center rounded-sm group-hover:border-primary transition-colors duration-500">
                  {comp.icon}
                </div>
                
                <h3 className="font-display text-xl md:text-2xl text-zinc-100 group-hover:text-primary transition-colors font-bold pt-2">
                  {comp.title}
                </h3>
                
                <p className="font-body text-zinc-400 text-xs md:text-sm leading-relaxed font-medium">
                  {comp.description}
                </p>
              </div>

              {/* Bullet Features Checklist */}
              <div className="space-y-4 pt-6 border-t border-[#e9c176]/10">
                <h4 className="font-body text-[10px] uppercase tracking-wider text-zinc-500 font-bold">
                  Technical Blueprints
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px] font-semibold text-zinc-300 font-body">
                  {comp.features.map((feat, i) => (
                    <li key={i} className="flex gap-2 items-center">
                      <ShieldCheck className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          ))}
        </motion.div>

        {/* Dynamic CTA box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-10 border border-[#e9c176]/10 bg-[#161515] text-center max-w-[850px] mx-auto rounded-sm space-y-6 relative"
        >
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          <h3 className="font-display text-lg md:text-2xl text-zinc-100 font-bold">
            Tailor-Made Architectural Metalwork blueprint
          </h3>
          <p className="font-body text-zinc-400 text-xs max-w-lg mx-auto leading-relaxed font-semibold">
            All our railing and custom glass structures can be tailored to match the specific layout parameters of your project space. Provide your measurements for custom fabrication.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-amber-300 transition-colors font-body uppercase tracking-wider font-bold group"
            >
              Request Custom Sizing Blueprint
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
