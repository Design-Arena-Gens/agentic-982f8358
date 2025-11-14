import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#0f1117",
        surface: "#161b22",
        primary: "#7f5af0",
        secondary: "#2cb67d",
        muted: "#94a1b2",
        border: "#232936"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(127, 90, 240, 0.4), 0 18px 40px rgba(10, 10, 10, 0.4)"
      },
      borderRadius: {
        xl: "1.25rem"
      }
    }
  },
  plugins: []
};

export default config;
