module.exports = {
  content: ['./src/**/*.{html,js,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          default: '#8257E5',
          hover: '#996DFF',
          text: '#FFFFFF',
        },
        text: {
          primary: '#f4f4f5',
          secundary: '#a1a1aa',
          tooltip: '#27272a',
        },
      },
      // borderRadius: {
      //   md: '4px',
      // },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar')],
};
