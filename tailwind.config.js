/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#f3d8b3',
        'main-text': '#88745d',
        'projects-border': '#8485b3',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'dot-gothic': ['DotGothic16', 'sans-serif'],
        'gothic-one': ['Dela Gothic One', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif']
      }
    },
  },
  plugins: [],
}
