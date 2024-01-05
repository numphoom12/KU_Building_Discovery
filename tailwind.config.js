/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
const plugin = require("tailwindcss/plugin");

module.exports = withMT({
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        greenPrimary: {
          50: "#2dbbb6",
          100: "#2aafaa",
          200: "#27a29e",
          300: "#249692",
          400: "#218a86",
          500: "#1b726e",
          600: "#186562",
          700: "#155856",
          800: "#124c4a",
          900: "#0f403e",
        },
        greenSecondary: {
          50: "#e3e6af",
          100: "#dde09c",
          200: "#d6da88",
          300: "#cfd475",
          400: "#c9ce61",
          500: "#bac03c",
          600: "#a7ad36",
          700: "#949930",
          800: "#82862a",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme("fontSize.2xl ") },
        h2: { fontSize: theme("fontSize.xl") },
        h3: { fontSize: theme("fontSize.lg") },
      });
    }),
  ],
});
