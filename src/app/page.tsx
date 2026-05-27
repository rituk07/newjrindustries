"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Star, Gem } from "lucide-react";



export default function Home() {


  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="flex flex-col w-full bg-background overflow-hidden">
      
      {/* 1. Dramatic Hero Section with radial gold glow & Spline 3D Integration */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
        
        {/* Background Image Container with Luxury Filter */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/60 to-background z-10"></div>
          {/* Radial center gold glow gradient overlay behind text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[850px] md:h-[850px] rounded-full bg-[#e9c176]/5 blur-[130px] pointer-events-none z-10"></div>
          <Image
            src="/new_bg_2.jpg"
            alt="JR Industries Architectural Staircase"
            fill
            priority
            className="object-cover object-center contrast-[1.12] brightness-[0.45] saturate-[0.85] sepia-[0.08]"
          />
        </div>

        {/* Hero Content Stack */}
        <div className="relative z-20 text-center max-w-[1000px] px-6 mx-auto flex flex-col items-center">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeInUpVariants}
            className="flex items-center gap-2 mb-6"
          >
            <span className="h-px w-6 bg-primary/40"></span>
            <span className="font-body text-[10px] md:text-xs uppercase tracking-[0.25em] text-primary font-bold">
              Welcome To Our World
            </span>
            <span className="h-px w-6 bg-primary/40"></span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="font-display text-[32px] sm:text-[44px] md:text-6xl text-zinc-100 mb-8 leading-[1.15] font-bold tracking-wide"
          >
            Forging Lasting <br className="sm:hidden" /> Impressions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="font-body text-sm md:text-base text-zinc-400 max-w-2xl mb-12 leading-relaxed font-semibold"
          >
            Mastering the art of bespoke architectural metalwork. We deliver precision-engineered brass railings and sophisticated structural glass integrations that elevate luxury spaces from the functional to the extraordinary.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <Link
              href="/portfolio"
              className="px-8 py-4 bg-primary text-[#131313] font-body text-xs uppercase tracking-widest hover:bg-background hover:text-primary hover:ring-1 hover:ring-primary transition-all duration-300 flex items-center justify-center gap-2 rounded-sm group font-bold shadow-lg shadow-primary/10"
            >
              Explore Portfolio
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
            <Link
              href="/expertise"
              className="px-8 py-4 border border-zinc-700 text-zinc-300 font-body text-xs uppercase tracking-widest hover:border-primary hover:text-primary transition-all duration-300 rounded-sm font-semibold flex items-center justify-center"
            >
              Our Expertise
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Elegant Divider */}
      <div className="max-w-[1200px] mx-auto w-full px-6">
        <div className="flex items-center justify-center gap-4 py-8 opacity-30">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          <Gem className="w-4 h-4 text-primary shrink-0 animate-pulse" />
          <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        </div>
      </div>



      {/* 3. Global Luxury Call-To-Action (CTA) Section */}
      <section className="py-24 md:py-32 bg-background relative overflow-hidden">
        
        {/* Glow decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-primary/5 blur-[120px] pointer-events-none"></div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[900px] mx-auto px-6 text-center relative z-10 space-y-10"
        >
          <h2 className="font-display text-3xl md:text-5xl text-zinc-100 font-bold leading-tight">
            Crafting the Exquisite. <br /> Designing for Legacies.
          </h2>
          <p className="font-body text-zinc-400 text-xs md:text-sm max-w-xl mx-auto leading-relaxed font-semibold">
            Ready to integrate luxury brass railing profiles, frameless safety glazing structures, or custom metalwork fabrication details into your project blueprint? Engage our consulting team today.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 bg-primary text-[#131313] hover:bg-background hover:text-primary border border-primary font-body text-xs uppercase tracking-widest font-bold transition-all duration-300 rounded-sm shadow-xl shadow-primary/5 hover:scale-105"
            >
              Secure Free Design Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
