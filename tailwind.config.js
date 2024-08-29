const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(), // Add Flowbite's content paths
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin(), // Add Flowbite's plugin
  ],
};
