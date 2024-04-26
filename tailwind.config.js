/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      'NORMAL': '#DDCBD0',
      'FIGHTING': '#FCC1B0',
      'FLYING': '#B2D2E8',
      'POISON': '#CFB7ED',
      'GROUND': '#F4D1A6',
      'ROCK': '#C5AEA8',
      'BUG': '#C1C0E8',
      'GHOST': '#D7C2D7',
      'STEEL': '#C2D4CE',
      'FIRE': '#EDC2C4',
      'WATER': '#CBD5ED',
      'GRASS': '#C0D4C8',
      'ELECTRIC': '#E2E2A0',
      'PSYCHIC': '#DDC0CF',
      'ICE': '#C7D7CF',
      'DRAGON': '#CADCDF',
      'DARK': '#C6C5E3',
      'FAIRY': '#E40CF',
      'UNKNOWN': '#C0DFDD',
      'SHADOW': '#CACACA',
    },
    },
  },
  plugins: [],
}