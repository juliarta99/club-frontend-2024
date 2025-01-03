/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html, js}"],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      fontFamily: {
        rubik: ["Rubik", 'sans-serif'],
      },
      colors: {
        primary: "#F53838",
        "primary-light": "#FFECEC",
        gray: "rgba(0, 0, 0, 0.17)",
        "gray-light": "rgba(33, 37, 41, 0.03)",
        "yellow-star": "#FEA250",
        light: "#F8F9FA"
      } 
    },
  },
  plugins: [],
}