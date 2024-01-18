/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    screens: {
      sm: '360px',
      md: '768px',
      lg: '976px',
      xl: '1280px',
    },
    colors: {
      "darkblue":"#001861",
      "black":"#000000",
      "white":"#ffffff",
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'darkpink':"#FF1493",
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'navyblue':"#000080",
      "fluegreen":"#00FF15",
      "specialgray":"#B4D9EF",
      "cyan500":"#00BCD4",
      "darkpurple":"#301934",
      "violet":"#5800e3",
      'red':"#FF0000",
      "neonblue":"#1F51FF"

    },
    fontFamily: {
      Playfiar:["Playfair"],
      enriq:["Enriqueta"],
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      Poppins:['Poppins','serif']
    },
    extend: {
      scale:{
        '125':'1.25',
        "175":'1.75'
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }  
        }
      },
      animation: {
        "typing": "typing 2s steps(20) infinite alternate, blink .7s infinite"
      }
    },
  },
  plugins: [],
}