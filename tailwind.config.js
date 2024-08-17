/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      bodyFont: ["Poppins", "sans-serif"],
      titleFont: ["Montserrat", "sans-serif"],
    },
    colors:{
      bodyColor:"#212428",
      lightText:"#c4cfde",
      boxBg:"linear-CanvasGradient(145deg,#1e2024,#23272b)",
      designColor:"#ff014f",
      gray: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb', 
        300: '#d1d5db',
    },
  },
    boxShadow:{
      shadowOne:"10px 10px 19px #1c1e22,-10px 19px #262a2e",
    }
  },
  plugins: [],
}

