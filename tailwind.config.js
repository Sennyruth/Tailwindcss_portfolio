/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      bodyFont: ["Poppins", "sans-serif"],
      titleFont: ["Montserrat", "sans-serif"],
      boxShadow:{
        shadowOne:"10px 10px 19px #1c1e22,-10px 19px #262a2e",
      },
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
        600: '#4b5563',
    },
    yellow: {
      50: '#fffdea',  
      100: '#fff3b8',
      200: '#ffeb82',
      300: '#ffe34d',
      400: '#ffdb19',
      500: '#e6c100',
      600: '#b39800',
      700: '#806f00',
      800: '#4e4600',
      900: '#1c1d00', 
    },
    blue: {
      600: '#2563eb',
    },
    pink: {
      500: '#ec4899',
    },
    red: {
      500: '#ef4444',
    },

    black: '#000000',  
    customBlue: '#191b1e',
    green: {
      500: '#22c55e', 
    }, 

  },
  
  },
  plugins: [],
}

