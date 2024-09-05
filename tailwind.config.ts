/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'fr-blue': '#14213d',
        'fr-black': '#000000',
        'fr-yellow': '#fca311',
      },
      height: {
        '216': '55rem',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
      },
      transform: {
        'hover-scale': 'scale(1.05)',
      },
    },
  },
  plugins: [],
};
