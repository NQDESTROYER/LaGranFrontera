/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e91e63", // Este era el antiguo, ahora usamos red-600 de tailwind para consistencia
      },
    },
  },
  plugins: [],
}
