import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#061425",
        midnight: "#071b35",
        panel: "#10294a",
        gold: "#f8b90c",
        ember: "#ff4c38",
        mint: "#34d399"
      },
      boxShadow: {
        glow: "0 0 48px rgba(248, 185, 12, 0.18)",
        panel: "0 22px 70px rgba(0, 0, 0, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
