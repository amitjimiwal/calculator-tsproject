/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#4E31AA",
        secondary:"#9288F8",
        button:"#FDF4F5",
        parent:"#8062D6",
        view:"#322653"
      }
    },
  },
  plugins: [],
}