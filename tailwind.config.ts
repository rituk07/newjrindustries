import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#131313",
        primary: {
          DEFAULT: "#e9c176",
          fixed: "#d2ab5f",
        },
        surface: {
          DEFAULT: "#1c1b1b",
          low: "#161515",
          high: "#242323",
        },
        text: {
          DEFAULT: "#e5e2e1",
          muted: "#A1A1AA",
        },
      },
      fontFamily: {
        display: ["var(--font-serif)", "Noto Serif", "serif"],
        body: ["var(--font-sans)", "Inter", "sans-serif"],
      },
      animation: {
        fadeInUp: "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        pulseFast: "pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(15px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
