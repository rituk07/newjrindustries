"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Gem, MessageSquare } from "lucide-react";
import { projects, Project } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";

// ─── Category config matching 2.0.html exactly ───────────────────────────────
const CATEGORIES = [
  { label: "All", value: "all" },
  { label: "Brass Railings", value: "brass" },
  { label: "Glass Systems", value: "glass" },
  { label: "Custom Metalwork", value: "metalwork" },
];

// ─── WhatsApp helper ──────────────────────────────────────────────────────────
function waUrl(title: string, category: string) {
  const msg = `Hello JR INDUSTRIES Team! I am interested in your "${title}" (${category}) project from your portfolio. Can we discuss design and custom sizing?`;
  return `https://wa.me/919845813552?text=${encodeURIComponent(msg)}`;
}

// ─── Lightbox Component ───────────────────────────────────────────────────────
interface LightboxProps {
  images: string[];
  titles: string[];
  categories: string[];
  startIndex: number;
  onClose: () => void;
}

function Lightbox({ images, titles, categories, startIndex, onClose }: LightboxProps) {
  const [current, setCurrent] = useState(startIndex);
  const [fading, setFading] = useState(false);

  const go = useCallback((dir: number) => {
    setFading(true);
    setTimeout(() => {
      setCurrent((c) => (c + dir + images.length) % images.length);
      setFading(false);
    }, 200);
  }, [images.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [go, onClose]);

  // Touch swipe
  const touchStartX = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.changedTouches[0].screenX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = e.changedTouches[0].screenX - touchStartX.current;
    if (diff < -50) go(1);
    else if (diff > 50) go(-1);
  };

  const hasMultiple = images.length > 1;

  return (
    <div
      className="fixed inset-0 z-[2000] flex flex-col items-center justify-center bg-black/95 backdrop-blur-md"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-zinc-400 hover:text-primary transition-all duration-300 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-zinc-900/60 border border-zinc-800 hover:scale-105"
        aria-label="Close"
      >
        <span className="text-2xl leading-none">✕</span>
      </button>

      {/* Prev Arrow */}
      {hasMultiple && (
        <button
          onClick={(e) => { e.stopPropagation(); go(-1); }}
          className="absolute left-6 text-zinc-400 hover:text-primary transition-all duration-300 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-zinc-900/60 border border-zinc-800 hover:scale-105 select-none"
          aria-label="Previous"
        >
          <span className="text-2xl leading-none">‹</span>
        </button>
      )}

      {/* Next Arrow */}
      {hasMultiple && (
        <button
          onClick={(e) => { e.stopPropagation(); go(1); }}
          className="absolute right-6 text-zinc-400 hover:text-primary transition-all duration-300 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-zinc-900/60 border border-zinc-800 hover:scale-105 select-none"
          aria-label="Next"
        >
          <span className="text-2xl leading-none">›</span>
        </button>
      )}

      {/* Image */}
      <div
        className="relative flex items-center justify-center"
        style={{
          maxWidth: "85vw",
          maxHeight: "70vh",
          transition: "opacity 0.2s, transform 0.2s",
          opacity: fading ? 0 : 1,
          transform: fading ? "scale(0.97)" : "scale(1)",
        }}
      >
        <img
          src={images[current]}
          alt={titles[current]}
          style={{
            maxWidth: "85vw",
            maxHeight: "65vh",
            objectFit: "contain",
            borderRadius: "2px",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 0 50px rgba(0,0,0,0.8)",
            filter: "contrast(1.18) brightness(1.05) saturate(1.25) sepia(0.06)",
          }}
        />
      </div>

      {/* Caption */}
      <div className="text-center mt-6 space-y-1.5 px-4">
        <span className="font-body text-[10px] text-primary uppercase tracking-[0.2em] font-bold">
          {categories[current]}
        </span>
        <h4 className="font-display text-xl text-zinc-100 pt-1 font-bold">{titles[current]}</h4>
        <div className="pt-2">
          <a
            href={waUrl(titles[current], categories[current])}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-amber-300 transition-colors font-body uppercase tracking-wider select-none font-bold"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            Inquire on WhatsApp
            <span className="text-[10px]">→</span>
          </a>
        </div>
        {hasMultiple && (
          <div className="text-[10px] text-primary/80 font-body tracking-[0.15em] pt-2 font-bold uppercase">
            {current + 1} of {images.length}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Slider Component variants ───────────────────────────────────────────────
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.35 },
      scale: { duration: 0.4 },
    }
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.98,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.3 },
      scale: { duration: 0.3 },
    }
  })
};

// ─── Slider Component ──────────────────────────────────────────────────────────
interface SliderProps {
  slides: Project[];
}

function Slider({ slides }: SliderProps) {
  const [[page, direction], setPage] = useState([0, 0]);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef(0);

  const current = (page + slides.length) % slides.length;

  const stopAutoplay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  const startAutoplay = useCallback(() => {
    stopAutoplay();
    intervalRef.current = setInterval(() => {
      setPage(([prevPage]) => [prevPage + 1, 1]);
    }, 4500);
  }, [slides.length, stopAutoplay]);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay]);

  const goTo = (idx: number, newDirection: number) => {
    setPage([idx, newDirection]);
    stopAutoplay();
    startAutoplay();
  };

  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.changedTouches[0].screenX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = e.changedTouches[0].screenX - touchStartX.current;
    if (diff < -50) goTo(current + 1, 1);
    else if (diff > 50) goTo(current - 1, -1);
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      // Ignore if user is inside form inputs
      const activeTag = document.activeElement?.tagName;
      if (activeTag === "INPUT" || activeTag === "TEXTAREA" || activeTag === "SELECT") return;

      if (e.key === "ArrowRight") goTo(current + 1, 1);
      else if (e.key === "ArrowLeft") goTo(current - 1, -1);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [current]);

  if (slides.length === 0) return null;

  const project = slides[current];

  return (
    <>
      <div
        className="relative max-w-[1100px] mx-auto select-none"
        onMouseEnter={stopAutoplay}
        onMouseLeave={startAutoplay}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative overflow-hidden aspect-[4/5] sm:aspect-[16/10] md:aspect-[16/8] bg-[#161515] border border-[#e9c176]/30 rounded-sm shadow-2xl group w-full min-h-[480px] sm:min-h-[550px] md:min-h-[500px]">
          {/* Slider Slides with AnimatePresence */}
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 w-full h-full flex flex-col sm:block cursor-zoom-in"
              onClick={() => setLightbox(current)}
            >
              {/* Image */}
              <div className="w-full h-[65%] sm:h-full relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover/slide:scale-[1.03] group-hover/slide:brightness-[1.08]"
                  style={{ filter: "contrast(1.14) brightness(1.03) saturate(1.18) sepia(0.06)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent z-0 hidden sm:block" />
              </div>

              {/* Animated Caption Card */}
              <motion.div 
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.15, duration: 0.5, type: "spring", stiffness: 100 }}
                onClick={(e) => e.stopPropagation()}
                className="relative sm:absolute sm:bottom-12 sm:left-12 sm:right-auto sm:max-w-md w-full sm:w-auto p-5 md:p-6 bg-[#1c1b1b]/95 border-t sm:border border-[#e9c176]/20 sm:rounded-sm shadow-2xl space-y-2 z-10 flex-grow flex flex-col justify-center"
              >
                <span className="font-body text-[10px] md:text-xs text-primary uppercase tracking-[0.2em] font-bold">
                  {project.category === "brass" ? "Luxury / Brass Railings"
                    : project.category === "glass" ? "Architectural / Glass Systems"
                    : "Bespoke / Custom Metalwork"}
                </span>
                <h4 className="font-display text-sm sm:text-xl text-zinc-100 leading-tight font-bold">
                  {project.title}
                </h4>
                <div className="pt-1.5">
                  <motion.a
                    href={waUrl(project.title, project.category)}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03, color: "#ffffff" }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-white transition-colors font-body uppercase tracking-wider select-none group/wa font-bold"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-primary" />
                    Inquire on WhatsApp
                    <span className="text-[10px]">→</span>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Prev Arrow */}
          <motion.button
            onClick={(e) => { e.stopPropagation(); goTo(current - 1, -1); }}
            whileHover={{ scale: 1.1, x: -3, backgroundColor: "#e9c176", color: "#131313", borderColor: "#e9c176" }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-400 border border-[#e9c176]/20 transition-all duration-300 z-20 hidden sm:flex items-center justify-center w-14 h-14 rounded-full bg-[#1c1b1b]/80 select-none opacity-0 group-hover:opacity-100"
            aria-label="Previous"
          >
            <span className="text-3xl leading-none pr-0.5">‹</span>
          </motion.button>

          {/* Next Arrow */}
          <motion.button
            onClick={(e) => { e.stopPropagation(); goTo(current + 1, 1); }}
            whileHover={{ scale: 1.1, x: 3, backgroundColor: "#e9c176", color: "#131313", borderColor: "#e9c176" }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-400 border border-[#e9c176]/20 transition-all duration-300 z-20 hidden sm:flex items-center justify-center w-14 h-14 rounded-full bg-[#1c1b1b]/80 select-none opacity-0 group-hover:opacity-100"
            aria-label="Next"
          >
            <span className="text-3xl leading-none pl-0.5">›</span>
          </motion.button>
        </div>

        {/* Indicator Dots - placed below on mobile, absolute centered on desktop */}
        <div className="relative sm:absolute sm:bottom-6 left-0 right-0 z-20 flex justify-center items-center gap-3 mt-6 sm:mt-0">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => { e.stopPropagation(); goTo(idx, idx > current ? 1 : -1); }}
              aria-label={`Slide ${idx + 1}`}
              className="focus:outline-none transition-all duration-500 cursor-pointer"
              style={{
                width: idx === current ? "28px" : "10px",
                height: "10px",
                borderRadius: "9999px",
                background: idx === current ? "#e9c176" : "rgba(229,226,225,0.25)",
                border: "none",
              }}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <Lightbox
          images={slides.map((p) => p.image)}
          titles={slides.map((p) => p.title)}
          categories={slides.map((p) =>
            p.category === "brass" ? "Luxury / Brass Railings"
              : p.category === "glass" ? "Architectural / Glass Systems"
              : "Bespoke / Custom Metalwork"
          )}
          startIndex={lightbox}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
}

// ─── Main Page Component ───────────────────────────────────────────────────────
export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "slider">("grid");
  const [lightbox, setLightbox] = useState<{ images: string[]; titles: string[]; categories: string[]; startIndex: number } | null>(null);
  const [gridFading, setGridFading] = useState(false);

  const filtered = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  // Smooth filter transition
  const handleFilter = (val: string) => {
    setGridFading(true);
    setTimeout(() => {
      setActiveFilter(val);
      setGridFading(false);
    }, 200);
  };

  const handleViewMode = (mode: "grid" | "slider") => {
    if (mode === viewMode) return;
    setViewMode(mode);
  };

  const openLightbox = (idx: number) => {
    const visibleImages = filtered.map((p) => p.image);
    const visibleTitles = filtered.map((p) => p.title);
    const visibleCategories = filtered.map((p) =>
      p.category === "brass" ? "Luxury / Brass Railings"
        : p.category === "glass" ? "Architectural / Glass Systems"
        : "Bespoke / Custom Metalwork"
    );
    setLightbox({ images: visibleImages, titles: visibleTitles, categories: visibleCategories, startIndex: idx });
    document.body.classList.add("overflow-hidden");
  };

  const closeLightbox = () => {
    setLightbox(null);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <div className="min-h-screen bg-background py-20 md:py-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h1 className="font-display text-[32px] md:text-[40px] text-zinc-100 mb-4 uppercase tracking-wider font-bold">
              Architectural Landmarks
            </h1>
            <p className="font-body text-base text-zinc-500 max-w-xl font-medium">
              A curated selection of our most significant installations, showcasing our capability to execute complex designs at scale across commercial and luxury residential sectors.
            </p>
          </div>
          <a
            href="https://photos.app.goo.gl/zsDZYkravhweXSTd9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center px-6 py-3 border border-[#e9c176]/20 text-zinc-100 font-body text-xs uppercase tracking-widest hover:border-primary hover:text-primary transition-colors rounded-sm shrink-0 font-bold"
          >
            View All Projects
          </a>
        </div>

        {/* Filter Bar + View Toggle */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 border-b border-[#e9c176]/10 pb-8">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => handleFilter(cat.value)}
                className={`px-6 py-2 rounded-full border font-body text-xs tracking-wider uppercase transition-all duration-300 font-bold ${
                  activeFilter === cat.value
                    ? "border-primary bg-primary text-[#131313] shadow-lg shadow-primary/10"
                    : "border-[#e9c176]/20 hover:border-primary hover:text-primary text-zinc-500"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid / Slider Toggle */}
          <div className="flex items-center bg-[#1c1b1b] border border-[#e9c176]/20 p-1.5 rounded-full select-none shrink-0 shadow-lg">
            <button
              onClick={() => handleViewMode("grid")}
              className={`flex items-center gap-2 px-5 py-2 rounded-full font-body text-xs tracking-wider uppercase transition-all duration-300 font-bold ${
                viewMode === "grid"
                  ? "bg-primary text-[#131313]"
                  : "text-zinc-500 hover:text-primary"
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 3h7v7H3V3zm0 11h7v7H3v-7zm11-11h7v7h-7V3zm0 11h7v7h-7v-7z"/>
              </svg>
              Grid View
            </button>
            <button
              onClick={() => handleViewMode("slider")}
              className={`flex items-center gap-2 px-5 py-2 rounded-full font-body text-xs tracking-wider uppercase transition-all duration-300 font-bold ${
                viewMode === "slider"
                  ? "bg-primary text-[#131313]"
                  : "text-zinc-500 hover:text-primary"
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1 5h2v14H1V5zm4 0h14v14H5V5zm16 0h2v14h-2V5z"/>
              </svg>
              Slider View
            </button>
          </div>
        </div>

        {/* Grid View with 3D Parallax Tilt Cards */}
        {viewMode === "grid" && (
          <motion.div
            layout
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.05,
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24"
            style={{
              opacity: gridFading ? 0 : 1,
              transform: gridFading ? "scale(0.98)" : "scale(1)",
              transition: "opacity 0.2s, transform 0.2s",
            }}
          >
            {filtered.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
                }}
              >
                <ProjectCard
                  project={project}
                  onClick={() => openLightbox(idx)}
                />
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Slider View */}
        {viewMode === "slider" && (
          <div className="mb-24">
            <Slider slides={filtered} />
          </div>
        )}

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 py-6 opacity-30 mb-16">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <Gem className="w-4 h-4 text-primary shrink-0 animate-pulse" />
          <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </div>

      </div>

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          images={lightbox.images}
          titles={lightbox.titles}
          categories={lightbox.categories}
          startIndex={lightbox.startIndex}
          onClose={closeLightbox}
        />
      )}
    </div>
  );
}
