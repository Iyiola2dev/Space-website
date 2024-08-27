/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'barlow':['Barlow, sans-serif'],
        'bellefair':['Bellefair, serif'],
        'barlow-con':["Barlow Condensed, sans-serif"]
      },
      backgroundImage:{
        "desktop": 'url("../src/assets/home/background-home-desktop.jpg")',
        "tablet": "url('../src/assets/home/background-home-tablet.jpg')",
        "mobile": "url('../src/assets/home/background-home-mobile.jpg')"
      }
    },
  },
  plugins: [],
}