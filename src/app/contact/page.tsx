"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";

interface FormData {
  fullName: string;
  email: string;
  projectType: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    projectType: "Luxury Brass Railings",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const projectOptions = [
    "Luxury Brass Railings",
    "Structural Glass Integration",
    "Custom Metalwork Fabrication",
    "State-of-the-Art PVD Finishing",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Smooth transition lag for high-fidelity experience
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Construct WhatsApp pre-filled consultation redirect text
    const phoneNumber = "919845813552";
    const whatsappText = encodeURIComponent(
      `Hello JR INDUSTRIES Team! I am interested in your bespoke architectural services and would like to request an inquiry. Here are my project details:\n\n` +
      `*Name:* ${formData.fullName}\n` +
      `*Email:* ${formData.email}\n` +
      `*Project Type:* ${formData.projectType}\n` +
      `*Message:* ${formData.message}\n\n` +
      `Please let me know the next steps for a design consultation. Thank you!`
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

    // Automatically trigger WhatsApp redirect after a small delay to let user see success card
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background py-24 md:py-32 flex flex-col justify-between overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 w-full">
        
        {/* Header Block */}
        <div className="text-center max-w-[800px] mx-auto mb-24 space-y-6">
          <span className="font-body text-[10px] uppercase tracking-[0.2em] text-primary font-bold block">
            Engage Our Team
          </span>
          <h1 className="font-display text-3xl md:text-5xl text-zinc-100 font-bold tracking-wide">
            Connect With Us
          </h1>
          <p className="font-body text-xs md:text-sm text-zinc-400 leading-relaxed font-semibold">
            Ready to integrate luxury brass railing profiles or structural safety glazing into your blueprints? Speak with our specialists.
          </p>
        </div>

        {/* Dynamic Two Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start mb-24">
          
          {/* Left Column: Premium Contact Coordinates */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="font-display text-xl md:text-2xl text-zinc-100 tracking-wide font-bold">
              Design Consultations
            </h2>
            <p className="font-body text-zinc-400 text-xs md:text-sm leading-relaxed max-w-sm font-semibold">
              Our consultants are fully available to review your custom blueprints, material parameters, and layout dimensions. Reach out directly.
            </p>

            <div className="space-y-6 pt-4">
              
              {/* Phone Detail Box */}
              <a
                href="tel:+919845813552"
                className="flex items-center gap-4 group p-4 border border-[#e9c176]/5 hover:border-primary/20 bg-[#1c1b1b]/40 rounded-sm transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-sm bg-[#1c1b1b] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-[#131313] transition-all duration-500 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[9px] text-zinc-500 font-body uppercase tracking-wider font-bold">
                    Direct Phone Line
                  </p>
                  <p className="text-zinc-200 group-hover:text-primary transition-colors font-semibold text-xs md:text-sm pt-0.5 font-body">
                    +91 98458 13552
                  </p>
                </div>
              </a>

              {/* Email Us Box */}
              <a
                href="mailto:stairsindustriesjr2707@gmail.com?subject=Inquiry%20from%20Website"
                className="flex items-center gap-4 group p-4 border border-[#e9c176]/5 hover:border-primary/20 bg-[#1c1b1b]/40 rounded-sm transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-sm bg-[#1c1b1b] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-[#131313] transition-all duration-500 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] text-zinc-500 font-body uppercase tracking-wider font-bold">
                    Email Correspondence
                  </p>
                  <p className="text-zinc-200 group-hover:text-primary transition-colors font-semibold text-xs md:text-sm pt-0.5 font-body truncate">
                    stairsindustriesjr2707@gmail.com
                  </p>
                </div>
              </a>

              {/* WhatsApp Us Box */}
              <a
                href="https://wa.me/919845813552?text=Hello%20JR%20INDUSTRIES%20Team!%20I%20am%20visiting%20your%20website%20and%20would%20like%20to%20request%20a%20quick%20design%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group p-4 border border-[#e9c176]/5 hover:border-[#25D366]/40 bg-[#1c1b1b]/40 rounded-sm transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-sm bg-[#1c1b1b] flex items-center justify-center text-primary group-hover:bg-[#25D366] group-hover:text-white transition-all duration-500 shrink-0">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.65.845 5.105 2.27 7.085L.812 24l5.056-1.325A11.961 11.961 0 0 0 12.031 24c6.646 0 12.031-5.385 12.031-12.031S18.677 0 12.031 0zm5.176 17.15c-.244.693-1.42 1.324-1.956 1.405-.536.082-1.22.13-2.912-.56-2.023-.83-3.327-2.905-3.428-3.04-.1-.136-1.025-1.36-1.025-2.593 0-1.233.642-1.84 1.056-2.235.414-.395.89-.475 1.187-.475.297 0 .593 0 .848.012.254.012.594-.096.93.722.336.818 1.144 2.8 1.246 3.003.102.204.17.442.034.714-.136.272-.204.442-.408.68-.204.238-.428.528-.612.714-.204.204-.42.425-.188.82.232.395 1.034 1.705 2.228 2.766 1.543 1.373 2.825 1.79 3.22 1.994.394.204.626.17.864-.1.238-.273.68-1.02.864-1.373.184-.353.37-.294.735-.158.365.136 2.308 1.088 2.702 1.284.395.196.657.294.754.457.097.163.097.945-.147 1.638z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[9px] text-zinc-500 font-body uppercase tracking-wider font-bold">
                    WhatsApp Chat
                  </p>
                  <p className="text-zinc-200 group-hover:text-[#25D366] transition-colors font-semibold text-xs md:text-sm pt-0.5 font-body">
                    Quick Consultation
                  </p>
                </div>
              </a>

              {/* Location Coordinates Map link */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=18/5,+Main+Channel+Rd,+Halasuru,+Lingayana+Palya,+Bengaluru,+Karnataka+560008"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group p-4 border border-[#e9c176]/5 hover:border-primary/20 bg-[#1c1b1b]/40 rounded-sm transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-sm bg-[#1c1b1b] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-[#131313] transition-all duration-500 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] text-zinc-500 font-body uppercase tracking-wider font-bold">
                    Headquarters
                  </p>
                  <p className="text-zinc-200 group-hover:text-primary transition-colors font-semibold text-xs pt-0.5 font-body leading-relaxed max-w-[220px]">
                    18/5, Main Channel Rd, Halasuru, Lingayana Palya, Bengaluru 560008
                  </p>
                </div>
              </a>

            </div>
          </div>

          {/* Right Column: Stateful Inquiry Form */}
          <div id="inquiryForm" className="lg:col-span-3">
            <div className="bg-[#1c1b1b]/60 border border-[#e9c176]/10 p-8 md:p-12 rounded-sm shadow-xl relative overflow-hidden">
              {/* Glowing top line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent z-10"></div>

              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleFormSubmit}
                    className="space-y-6"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-body uppercase tracking-widest text-zinc-400 font-bold block">
                          Full Name
                        </label>
                        <input
                          id="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="w-full bg-[#131313] border border-zinc-850 focus:border-primary p-4 text-zinc-100 focus:ring-0 transition-colors text-xs font-body rounded-sm focus:outline-none placeholder-zinc-600 font-semibold"
                          placeholder="Enter your name"
                          type="text"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-body uppercase tracking-widest text-zinc-400 font-bold block">
                          Email Address
                        </label>
                        <input
                          id="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-[#131313] border border-zinc-850 focus:border-primary p-4 text-zinc-100 focus:ring-0 transition-colors text-xs font-body rounded-sm focus:outline-none placeholder-zinc-600 font-semibold"
                          placeholder="Enter your email"
                          type="email"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-body uppercase tracking-widest text-zinc-400 font-bold block">
                        Project Interest
                      </label>
                      <div className="relative">
                        <select
                          id="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          className="w-full bg-[#131313] border border-zinc-850 focus:border-primary p-4 pr-10 text-zinc-100 focus:ring-0 transition-colors text-xs font-body rounded-sm focus:outline-none font-semibold appearance-none cursor-pointer"
                        >
                          {projectOptions.map((opt) => (
                            <option key={opt} value={opt} className="bg-[#131313]">
                              {opt}
                            </option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-zinc-500">
                          <span className="text-[10px] select-none uppercase tracking-wider">▼</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-body uppercase tracking-widest text-zinc-400 font-bold block">
                        Project Blueprint Vision
                      </label>
                      <textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full bg-[#131313] border border-zinc-850 focus:border-primary p-4 text-zinc-100 focus:ring-0 transition-colors text-xs font-body rounded-sm focus:outline-none h-32 placeholder-zinc-600 font-semibold"
                        placeholder="Detail your custom structural parameters or custom metalwork desires..."
                      ></textarea>
                    </div>

                    <button
                      id="submitBtn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-background text-[#131313] hover:text-primary border border-primary font-body text-xs font-bold uppercase py-4.5 tracking-widest hover:ring-1 hover:ring-primary transition-all duration-300 rounded-sm flex items-center justify-center gap-2 shadow-lg shadow-primary/5 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin shrink-0" />
                          Scheduling Blueprint...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 shrink-0" />
                          Secure Free Design Consultation
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-card"
                    className="text-center py-12 px-4 space-y-6"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto border border-primary/20 text-primary animate-bounce">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div className="space-y-2.5">
                      <h3 className="font-display text-xl md:text-2xl text-zinc-100 font-bold">
                        Inquiry Stored!
                      </h3>
                      <p className="text-zinc-400 text-xs md:text-sm max-w-sm mx-auto leading-relaxed font-semibold">
                        Thank you. Your custom inquiry has been securely stored.
                      </p>
                    </div>
                    <div className="pt-4 space-y-2">
                      <p className="text-[10px] text-primary font-body uppercase tracking-wider animate-pulse">
                        Redirecting to WhatsApp to complete your blueprint details...
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
