import colors from "tailwindcss/colors";
import starlightPlugin from "@astrojs/starlight-tailwind";

import starlightPlugin from "@astrojs/starlight-tailwind";

// Generated color palettes
const accent = {
  200: "#f0b9b5",
  600: "#c22430",
  900: "#591819",
  950: "#3e1514",
};
const gray = {
  100: "#f6f6f7",
  200: "#eeedee",
  300: "#c2c2c3",
  400: "#8c8b8d",
  500: "#59575a",
  700: "#39383a",
  800: "#272628",
  900: "#181819",
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: { accent, gray },
    },
  },
  plugins: [starlightPlugin()],
};