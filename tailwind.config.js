/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        buttonHover: "#343942",
        body:"#16181c"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Prompt: ["Prompt", "sans-serif"],
        Edu: ["Edu SA Beginner", "sans-serif"],
        Bebas: ["Bebas Neue", "sans-serif"],
        Crimson: ["Crimson Text", "sans-serif"],

      },
    },
  },
  plugins: [],
};
