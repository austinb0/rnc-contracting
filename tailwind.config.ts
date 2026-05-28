import type { Config } from "tailwindcss";

/**
 * Tailwind v4 reads theme tokens from the `@theme` block in app/globals.css.
 * This file mirrors those tokens for editor tooling and reference only.
 */
const config: Config = {
  theme: {
    extend: {
      colors: {
        background: "#0D0D0D",
        surface: "#1A1A1A",
        border: "#2A2A2A",
        brand: "#B0B0B0",
        "text-primary": "#E0E0E0",
        "text-muted": "#888888",
      },
    },
  },
};

export default config;
