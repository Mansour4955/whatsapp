/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        fontTitle: "Roboto",
        fontBody: "Poppins"
      },
      boxShadow: {
        shadowBody: "-1px 4px 20px -6px rgba(0,0,0,0.7)",
        shadowButton: "-1px 4px 20px -6px rgba(0,0,0,0.7)",
      },
      backgroundImage: {
        whatsappImg: "url(https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png)"
      },
    },
  },
  plugins: [],
}