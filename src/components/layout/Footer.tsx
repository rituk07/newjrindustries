"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1c1b1b] pt-24 pb-12 border-t border-[#e9c176]/10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">

          {/* Column 1: Brand & Legacy */}
          <div className="md:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <img
                alt="JR Industries Logo"
                className="h-8 w-auto object-contain"
                src="/logo.png"
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
              <span className="font-display text-base font-bold tracking-widest text-zinc-100 uppercase pt-0.5">
                JR INDUSTRIES
              </span>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed font-body font-medium">
              Elevating spaces through master metallurgical craft. Established in 2024, combining a century-old passion for luxury architectural brassware and custom metalwork with world-class frameless structural glass.
            </p>

            {/* Social Icons — Real SVG logos */}
            <div className="flex gap-4 pt-2">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/staircase_railing_shop?igsh=MTE5aHI2OW93N2k0dg%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 border border-[#e9c176]/10 flex items-center justify-center rounded-sm text-zinc-400 hover:border-primary hover:text-primary transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/staircase.railing.2025?rdid=iazYZMN5TP9xMnpk&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CHUbMyrgX%2F#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 border border-[#e9c176]/10 flex items-center justify-center rounded-sm text-zinc-400 hover:border-primary hover:text-primary transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Core Expertise */}
          <div className="space-y-6">
            <h4 className="font-body text-xs uppercase tracking-[0.2em] text-[#e9c176] font-bold">
              Core Expertise
            </h4>
            <ul className="space-y-4 text-zinc-400 text-xs font-semibold">
              <li>
                <Link href="/expertise" className="hover:text-primary transition-colors duration-300">
                  Luxury Brass Railings
                </Link>
              </li>
              <li>
                <Link href="/expertise" className="hover:text-primary transition-colors duration-300">
                  Custom Metalwork Fabrication
                </Link>
              </li>
              <li>
                <Link href="/expertise" className="hover:text-primary transition-colors duration-300">
                  Frameless Structural Glass
                </Link>
              </li>
              <li>
                <Link href="/expertise" className="hover:text-primary transition-colors duration-300">
                  State-of-the-Art PVD Coating
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company Links */}
          <div className="space-y-6">
            <h4 className="font-body text-xs uppercase tracking-[0.2em] text-[#e9c176] font-bold">
              Company
            </h4>
            <ul className="space-y-4 text-zinc-400 text-xs font-semibold">
              <li>
                <Link href="/" className="hover:text-primary transition-colors duration-300">
                  Home Legacy
                </Link>
              </li>
              <li>
                <Link href="/expertise" className="hover:text-primary transition-colors duration-300">
                  Core Expertise
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-primary transition-colors duration-300">
                  Dynamic Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors duration-300">
                  Contact Enquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Details — all fully clickable */}
          <div className="space-y-6">
            <h4 className="font-body text-xs uppercase tracking-[0.2em] text-[#e9c176] font-bold">
              Contact Us
            </h4>
            <ul className="space-y-5 text-zinc-400 text-xs font-semibold leading-relaxed">

              {/* Address → opens Google Maps */}
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=18/5,+Main+Channel+Rd,+Halasuru,+Lingayana+Palya,+Bengaluru,+Karnataka+560008"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3 hover:text-primary transition-colors duration-300 group"
                >
                  <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span>18/5, Main Channel Rd, Halasuru, Lingayana Palya, Bengaluru, Karnataka 560008</span>
                </a>
              </li>

              {/* Phone → calls */}
              <li>
                <a
                  href="tel:+919845813552"
                  className="flex gap-3 items-center hover:text-primary transition-colors duration-300 group"
                >
                  <Phone className="w-4 h-4 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                  <span>+91 98458 13552</span>
                </a>
              </li>

              {/* Email */}
              <li>
                <a
                  href="mailto:stairsindustriesjr2707@gmail.com?subject=Inquiry%20from%20Website"
                  className="flex gap-3 items-center hover:text-primary transition-colors duration-300 group"
                >
                  <Mail className="w-4 h-4 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="truncate">stairsindustriesjr2707@gmail.com</span>
                </a>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#e9c176]/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-zinc-500 font-semibold font-body">
          <p>© {currentYear} JR INDUSTRIES. All rights reserved.</p>
          <div className="flex items-center gap-1.5 text-primary/60">
            {/* Diamond gem icon */}
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 2L2 8l10 14L22 8l-4-6H6zm-.5 2h3.17L7 8H3.5l2-4zm9.83 0H18.5l2 4H17l-1.67-4zM3.5 10H7l5 7.5L7 10H3.5zm9.5 7.5L17 10h3.5L13 17.5zM9 10h6l-3 4.5L9 10z"/>
            </svg>
            <span>Crafting Luxury Architecture Since 2024</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
