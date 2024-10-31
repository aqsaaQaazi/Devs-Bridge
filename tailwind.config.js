/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "main.jsx"
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:['Roboto', 
          'sans-serif' ,  
          "Arial",
          "Helvetica",
          "Times New Roman",
          "Georgia",
          "Verdana",
          "Trebuchet MS",
          "Courier New",
          "Comic Sans MS",
          "Impact",
          "Lucida Console",
          "Palatino Linotype",
          "Garamond",
          "Tahoma",
          "Segoe UI",
          "Arial Black",
          "Baskerville",
          "Book Antiqua",
          "Futura",
          "Century Gothic",
          "Droid Sans"]
      },
      gridTemplateColumns: {
        "70/30" : "70% 28%"
      }
    },
  },
  plugins: [],
}

