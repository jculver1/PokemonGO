/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#f5f5f5',
      secondary:  '#ffc82c',
      'red': '#dc2626',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',  
      poketype: {
        normal: '#a8a77a',
        fire: '#ee8130',
        water: '#6390f0',
        electric: '#f7d02c',
        grass: '#7ac74c',
        ice: '#96d9d6',
        fighting: '#c22e28',
        poison: '#a33ea1',
        ground: '#e2bf65',
        flying: '#a98ff3',
        psychic: '#f95587',
        bug: '#a6b91a',
        rock: '#b6a136',
        ghost: '#735797',
        dragon: '#6f35fc',
        dark: '#705746',
        steel: '#b7b7ce',
        fairy: '#d685ad',
      }
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        // '8xl': '96rem',
        // '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}