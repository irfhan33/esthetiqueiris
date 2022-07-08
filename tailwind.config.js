/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        messiri: ["El Messiri", "sans-serif"],
      },
      colors: {
        primary: "#7C3367",
        secondary: "#CB9928",
        dark: "#6F5A69",
        pinkish: {
          100: "#FDF2F5",
          200: "#FBECF1",
          300: "#F4ACB7",
        },
      },
    },
  },
  plugins: [],
};
