/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
       backgroundImage:{
       "my-image":"url(/fondo4.jpg)",
       "my-image2":"url(/fondo1.jpg)",
       "my-image3":"url(/loan.jpg)",
       "my-image4":"url(/home.jpg)",
       "my-image5":"url(/form.jpg)"

       },
    },
    
  },
  plugins: [],
}

