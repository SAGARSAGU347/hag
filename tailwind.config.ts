import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        text_header_blue: "#6675F7",
        ContactColorGradient1: "#FFC656",
        ContactColorGradient2: "#F16063",
        FooterColorGradient1: "rgba(170, 20, 240, 0.4)",
        FooterColorGradient2: "rgba(255, 62, 84, 0.4)"
      },
    },
  },
  plugins: [],
} satisfies Config;

