/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontSize: {
        xs: 14,
        sm: 16,
        md: 18,
        lg: 20,
        xl: 24,
        '2xl': 32,
      },
      colors: {
        'black': '#000',
        'white': '#fff',
        'transparent': 'transparent',
        gray: {
          '200': '#E4E4E7',
          '500': '#71717A',
          '800': '#27272A',
          '900': '#18181B',
        },
        cyan: {
          '500': '#61DAFB',
          '400': '#85E5FF',
        },
      },
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
