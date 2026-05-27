"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavLink {
  name: string;
  href: string;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links: NavLink[] = [
    { name: "Home", href: "/" },
    { name: "Expertise", href: "/expertise" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const dropdownVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.04,
        staggerDirection: -1,
      }
    },
    opened: {
      height: "auto",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 35,
        staggerChildren: 0.06,
        delayChildren: 0.05,
      }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, x: -15 },
    opened: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 25 } }
  };

  return (
    <nav className="fixed top-0 w-full z-[999] bg-[#131313ed]/90 backdrop-blur-md border-b border-[#e9c176]/10 transition-colors duration-300">
      <div className="flex justify-between items-center px-6 md:px-12 py-4 max-w-[1200px] mx-auto relative z-50">
        
        {/* Brand Logo & Title */}
        <Link href="/" className="flex items-center gap-3 group cursor-pointer" onClick={closeMenu}>
          <img
            alt="JR Industries Logo"
            className="w-auto h-9 object-contain group-hover:opacity-80 transition-opacity"
            src="/logo.png"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <span className="font-display text-lg font-bold tracking-wider text-zinc-100 group-hover:text-primary transition-colors uppercase pt-0.5">
            JR INDUSTRIES
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-body text-xs uppercase tracking-[0.15em] font-semibold transition-all duration-300 hover:text-primary ${
                  isActive ? "text-primary" : "text-zinc-400"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop Enquiry Action Button */}
        <Link
          href="/contact#inquiryForm"
          className="hidden md:flex items-center justify-center gap-1.5 px-6 py-2 border border-primary text-primary font-body text-xs uppercase tracking-widest hover:bg-primary hover:text-[#131313] transition-all duration-500 rounded-sm font-semibold"
        >
          Enquiry
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>

        {/* Mobile Toggle Button */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          className="md:hidden text-primary z-[1000] relative focus:outline-none flex items-center justify-center p-2 rounded-full border border-[#e9c176]/10 bg-[#1c1b1b]/60"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
            className="fixed inset-0 top-[73px] bg-black/60 backdrop-blur-sm z-[998] md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Mobile Dropdown Panel Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="opened"
            exit="closed"
            variants={dropdownVariants}
            className="absolute top-full left-0 right-0 z-[999] bg-[#1c1b1b] border-b border-[#e9c176]/20 shadow-[0_25px_60px_rgba(0,0,0,0.85)] md:hidden flex flex-col justify-start items-start py-8 px-10 gap-5 overflow-hidden"
          >
            {/* Elegant thin top gold border glow inside card */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#e9c176]/30 to-transparent"></div>

            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <motion.div key={link.name} variants={linkVariants} className="w-full">
                  <Link
                    href={link.href}
                    className={`font-body text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:text-primary flex items-center justify-between w-full py-1.5 ${
                      isActive ? "text-primary border-l-2 border-primary pl-3" : "text-zinc-300"
                    }`}
                    onClick={closeMenu}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isActive ? "text-primary translate-x-1" : "text-zinc-600"}`} />
                  </Link>
                </motion.div>
              );
            })}
            
            <motion.div variants={linkVariants} className="w-full pt-4 mt-2 border-t border-[#e9c176]/10 flex justify-start">
              <Link
                href="/contact#inquiryForm"
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-primary text-primary font-body text-xs uppercase tracking-widest hover:bg-primary hover:text-[#131313] transition-all duration-300 rounded-sm font-bold shadow-lg shadow-primary/5"
                onClick={closeMenu}
              >
                Enquiry
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
