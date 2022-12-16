/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"], //./docs/**/*.{html,js}
  theme: {
    extend: {
      backgroundImage: {
        'pc': "url('../assets/images/image-retro-pcs.jpg')",
        'laptop': "url('../assets/images/image-top-laptops.jpg')",
        'gaming': "url('../assets/images/image-gaming-growth.jpg')",
      },

      screens: {
        sm: '480px',
        md: '686px',
        lg: '976px',
        xl: '1440px',
      },

      colors: {
        // Primary
        softOrange: 'hsl(35, 77%, 62%)',
        SoftRed: 'hsl(5, 85%, 63%)',
        // Neutral
        offWhite: 'hsl(36, 100%, 99%)',
        grayishBlue: 'hsl(233, 8%, 79%)',
        darkGrayishBlue: 'hsl(236, 13%, 42%)',
        veryDarkBlue: 'hsl(240, 100%, 5%)',
        link: 'hsl(228, 45%, 44%)',
      },

      fontFamily: {
        font: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
