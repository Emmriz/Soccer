/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {

      backgroundImage: {
        'custom-image': "url('assets/soccer-imagee.png')",
      },
      colors:{
        "color-primary": "F8F0E3",
        "color-secondary": "#FFA500",
        "color-white": "#fff",
        "color-black": "#000",
        "color-ashe": "#B2BEB5",
        "color-grey": "#808080",
        "color-blue": "#0000FF",
        "color-red": "#Ff0000"

      }
    },
    container:{
      center: true,
      padding:{
        DEFAULT:'10px',
        md:"50px"
      }
    }
  },
  plugins: [],
}
