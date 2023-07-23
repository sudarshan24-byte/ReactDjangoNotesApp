/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
    colors: {
      main: '#f68657',
      text: '#d6d1d1',
      dark: '#f5f6f7',
      gray: '#999',
      bg: '#1f2124',
      lighter: '#292a2c',
      white: '#2e3235',
      border: '#252629',
    },
    fontFamily: {
      'Lexend': ['Lexend', 'sans-serif']
    }
  },
  plugins: [],
}

