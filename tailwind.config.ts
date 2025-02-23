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
        "primary-background": "var(--background-color)",
        "secondary-background": "var(--secondary-background-color)",
        "primary-text": "var(--text-color)",
        "secondary-text": "var(--secondary-text-color)",
        "primary": "var(--primary-color)",
        "secondary": "var(--secondary-color)",
        "accent": "var(--accent-color)",
        "boder-color": "var(--border-color)",
      },
    },
  },
  plugins: [],
} satisfies Config;
