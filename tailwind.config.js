import tailwindForm from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-dark": "#1E6F9F",
        blue: "#4EA8DE",
        "purple-dark": "#5E60CE",
        purple: "#8284FA",
        "gray-700": "#0D0D0D",
        "gray-600": "#1A1A1A",
        "gray-500": "#262626",
        "gray-400": "#333333",
        "gray-300": "#808080",
        danger: "#E25858",
      },
    },
  },
  plugins: [tailwindForm],
};
