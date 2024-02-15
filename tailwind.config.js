/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    screens:{
      sm:"576px",
      md:"768px",
      lg:"992px",
      xl:"1200px",
     "2xl":"1320px",
    },
    container: {
      center: true,
      screens:{
        sm:"576px",
        md:"768px",
        lg:"992px",
        xl:"1200px",
       "2xl":"1320px",
      },
    },
    extend: {
      fontFamily:{
        dana:["dana"],
        kalameh:["kalameh"],
      },
      colors : {
        // base
        BaseColor: '#FAFAFA' ,
        LineColor: '#08C19F'
      },
    },
  },
  plugins: [], 
}

