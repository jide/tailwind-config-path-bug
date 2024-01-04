/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/1.html",
    "./src/(test)/2.html",
    "./src/[test]/3.html",
    "./src/[test]/(test)/4.html",
    "./src/*/(test)/4.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
