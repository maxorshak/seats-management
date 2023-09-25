/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        main: ['IBM Plex Sans', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#052B52',
          light: '#42576D',
        },
      },
    },
  },
  variants: {},
  plugins: ['@tailwindcss/forms'],
};
