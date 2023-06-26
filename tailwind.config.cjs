/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1880px",
        "4xl": "2080px",
      },
      backgroundImage: {
        bglogreg: "url('/src//assets/img/bglogreg.png')",
        jecky: "url('/src/assets/img/jecky.jpg')",
      },
    },
  },
  plugins: [],
};
