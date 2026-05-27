"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Copy, Check, ExternalLink, X } from "lucide-react";

export default function EmailModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  
  const emailAddress = "stairsindustriesjr2707@gmail.com";
  const subject = "Inquiry from Website";
  const body = "Hello JR INDUSTRIES Team,\n\nI am visiting your website and would like to request a consultation for an upcoming architectural project.\n\nBest regards,";
  
  useEffect(() => {
    const handleMailtoClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (target && target.href && target.href.includes("mailto:stairsindustriesjr2707@gmail.com")) {
        e.preventDefault();
        setIsOpen(true);
        
        // Auto-copy to clipboard
        navigator.clipboard.writeText(emailAddress).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 3000);
        }).catch(err => {
          console.error("Could not copy:", err);
        });
      }
    };
    
    document.addEventListener("click", handleMailtoClick);
    return () => document.removeEventListener("click", handleMailtoClick);
  }, []);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(emailAddress).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  if (!isOpen) return null;

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-[3000] flex items-center justify-center bg-black/80 backdrop-blur-md"
        onClick={() => setIsOpen(false)}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ type: "spring", stiffness: 380, damping: 26 }}
          whileHover={{ 
            y: -4, 
            boxShadow: "0 25px 70px rgba(233, 193, 118, 0.22)",
            borderColor: "rgba(233, 193, 118, 0.3)"
          }}
          onClick={(e) => e.stopPropagation()}
          className="bg-[#1c1b1b]/95 border border-primary/20 p-8 rounded-sm max-w-sm w-full mx-4 shadow-[0_0_50px_rgba(233,193,118,0.15)] text-center relative overflow-hidden group transition-colors duration-500"
        >
          {/* Animated Gold Shimmer Sweeping laser line across top */}
          <motion.div 
            className="absolute top-0 left-0 right-0 h-[2px]"
            style={{
              background: "linear-gradient(90deg, transparent 0%, #e9c176 50%, transparent 100%)",
              backgroundSize: "200% 100%",
            }}
            animate={{
              backgroundPosition: ["200% 0", "-200% 0"]
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "linear"
            }}
          />

          {/* Close Button */}
          <motion.button 
            onClick={() => setIsOpen(false)}
            whileHover={{ scale: 1.15, rotate: 90, color: "#e9c176" }}
            whileTap={{ scale: 0.9 }}
            className="absolute top-4 right-4 text-zinc-500 transition-colors duration-300 p-1"
            aria-label="Dismiss modal"
          >
            <X className="w-4 h-4" />
          </motion.button>

          {/* Mail Envelope Icon with Floating Animation */}
          <motion.div 
            animate={{ y: [0, -6, 0] }}
            transition={{ 
              repeat: Infinity, 
              duration: 3, 
              ease: "easeInOut" 
            }}
            className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary border border-primary/20 shadow-[0_0_20px_rgba(233,193,118,0.1)] mb-6 group-hover:border-primary/40 transition-colors duration-500"
          >
            <Mail className="w-7 h-7" />
          </motion.div>

          <div className="space-y-4 mb-6">
            <h4 className="font-display text-xl text-zinc-100 font-bold tracking-wide">Email Us</h4>
            
            {/* Clickable/Selectable Email Address Pill */}
            <motion.button 
              onClick={handleCopy}
              whileHover={{ scale: 1.02, backgroundColor: "#1e1d1d", borderColor: "rgba(233, 193, 118, 0.25)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#131313]/80 py-3 px-4 rounded-sm border border-[#e9c176]/10 inline-flex items-center justify-center gap-2 max-w-full transition-colors w-full focus:outline-none"
              title="Click to copy email address"
            >
              <span className="text-xs text-primary font-body uppercase tracking-wider font-bold truncate select-all">
                {emailAddress}
              </span>
              
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.span
                    key="check-icon"
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 15 }}
                  >
                    <Check className="w-3.5 h-3.5 text-green-500 shrink-0" />
                  </motion.span>
                ) : (
                  <motion.span 
                    key="copy-icon"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.8 }}
                  >
                    <Copy className="w-3.5 h-3.5 text-zinc-500 group-hover:text-primary transition-colors shrink-0" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            <div className="h-4 relative">
              <AnimatePresence>
                {copied && (
                  <motion.p
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 text-[10px] text-green-500 font-body uppercase tracking-widest flex items-center justify-center gap-1.5 font-bold"
                  >
                    <Check className="w-3.5 h-3.5 text-green-500" />
                    Copied to Clipboard!
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="flex flex-col gap-3.5 pt-2">
            {/* Primary Action Button: Gmail Web */}
            <motion.a
              href={gmailUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              whileHover={{ 
                y: -3, 
                scale: 1.01, 
                boxShadow: "0 10px 25px rgba(233, 193, 118, 0.25)",
                backgroundColor: "transparent",
                color: "#e9c176"
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-primary text-[#131313] border border-primary font-body text-xs font-bold tracking-wider uppercase transition-all duration-300 rounded-sm flex items-center justify-center gap-2 shadow-lg cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Open in Gmail (Web)
            </motion.a>
            
            {/* Secondary Action Button: Default Mailto */}
            <motion.a
              href={mailtoUrl}
              onClick={() => setIsOpen(false)}
              whileHover={{ 
                y: -2, 
                scale: 1.01, 
                borderColor: "#e9c176", 
                color: "#e9c176",
                backgroundColor: "rgba(233, 193, 118, 0.02)"
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 border border-zinc-700 text-zinc-300 font-body text-xs font-semibold tracking-wider uppercase transition-all duration-300 rounded-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              Open Default App
            </motion.a>
            
            {/* Dismiss Link Button */}
            <motion.button
              onClick={() => setIsOpen(false)}
              whileHover={{ scale: 1.05, color: "#e9c176" }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-2.5 text-zinc-500 font-body text-[10px] font-bold tracking-widest uppercase transition-colors mt-2"
            >
              Dismiss
            </motion.button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
