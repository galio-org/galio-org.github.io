const { fontFamily } = require("tailwindcss/defaultTheme");
import { mtConfig } from "@material-tailwind/react";


/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
    container: false,
  },
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./src/**/*.{jsx,tsx,html}",
    "./node_modules/@material-tailwind/react/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'github-stars-text-light': 'linear-gradient(to right, #000, #444)',
        'github-stars-text-dark': 'linear-gradient(to right, #fff, #aaa)',
      },
    }
  },
  plugins: [mtConfig],
};