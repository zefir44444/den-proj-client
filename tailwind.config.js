/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inner-strong': 'inset 0 4px 6px rgba(0, 0, 0, 0.6), inset 0 -4px 6px rgba(0, 0, 0, 0.6)',
        'inner-middle': 'inset 0 4px 6px rgba(0, 0, 0, 0.4), inset 0 -4px 6px rgba(0, 0, 0, 0.4)',
        'inner-daynight': 'inset 0 5px 15px rgba(0, 0, 0, 0.4), inset 0 -5px 15px rgba(255, 255, 255, 0.4)',
        'inner-daynight-dim': 'inset 0 5px 15px rgba(0, 0, 0, 0.4), inset 0 -5px 15px rgba(0, 0, 0, 0.4)',
        'inner-light': 'inset 0 4px 6px rgba(0, 0, 0, 0.2), inset 0 -4px 6px rgba(0, 0, 0, 0.2)',
      },
      colors: {
        light: {
          foreground: '#27284E',
          background: '#FFFFFF',
          primary1: '#D53636',
          primary2: '#A92323',
          secondary1: '#DFF4F7',
          secondary2: '#EFF5F7',
          accent1: '#F9E3DF',
          accent2: '#F3CCC4',
        },
        dark: {
          foreground: '#FFFFFF',
          background: '#27284E',
          primary1: '#EC6C6C',
          primary2: '#EADFDF',
          secondary1: '#CAF1F9',
          secondary2: '#2EC5D2',
          accent1: '#796360',
          accent2: '#503E3A',
        },
      },
    },
  },
  plugins: [],
}