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
        background: "#080706",
        foreground: "#f3ede3",
        mkgold: {
          DEFAULT: "#D4AF37",
          light: "#F5E29E",
          dark: "#AA8520",
          metallic: "#C5A059",
          glow: "#FFE57F",
        },
        mkred: {
          DEFAULT: "#8A181A",
          hover: "#A82023",
          dark: "#5E0F10",
        },
        mkdark: {
          900: "#080706",
          850: "#0D0B08",
          800: "#14110E",
          700: "#1C1814",
          600: "#26211C",
          border: "#3D3428",
        }
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #F5E29E 0%, #D4AF37 50%, #9E7D23 100%)",
        "red-gradient": "linear-gradient(135deg, #9A1B1E 0%, #751214 100%)",
        "card-gradient": "linear-gradient(180deg, rgba(28,24,20,0.85) 0%, rgba(13,11,8,0.95) 100%)",
      },
      boxShadow: {
        "gold-sm": "0 0 15px rgba(212, 175, 55, 0.15)",
        "gold-md": "0 0 25px rgba(212, 175, 55, 0.25)",
        "gold-lg": "0 0 40px rgba(212, 175, 55, 0.35)",
        "red-btn": "0 4px 14px rgba(138, 24, 26, 0.4)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-cinzel)", "serif"],
      }
    },
  },
  plugins: [],
};
export default config;
