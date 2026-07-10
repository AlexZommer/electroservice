import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#05070a",
        panel: "#0b0f14",
        electric: "#2f8cff",
        cyan: "#7dd3fc",
      },
      fontFamily: {
        sans: ["Inter", "SF Pro Display", "SF Pro Text", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 80px rgba(47, 140, 255, .2)",
      },
    },
  },
  plugins: [],
} satisfies Config;
