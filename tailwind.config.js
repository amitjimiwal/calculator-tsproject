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
        secondary:"#2A2F4F",
        button:"#FDF4F5"
      }
    },
  },
  plugins: [],
}