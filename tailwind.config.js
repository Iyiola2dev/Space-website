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
        "mobile": "url('../src/assets/home/background-home-mobile.jpg')",
        "destinatonMobile": 'url("../src/assets/destination/background-destination-mobile.jpg")',
        "destinationTablet": 'url("../src/assets/destination/background-destination-tablet.jpg")',
        "destinationDesktop": 'url("../src/assets/destination/background-destination-desktop.jpg")',
        "crewMobile": 'url("../src/assets/crew/background-crew-mobile.jpg")',
        "crewTablet": 'url("../src/assets/crew/background-crew-tablet.jpg")',
        "crewDesktop": 'url("../src/assets/crew/background-crew-desktop.jpg")'
      },
    
    },
  },
  plugins: [],
}