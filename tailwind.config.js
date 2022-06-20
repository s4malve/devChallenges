/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#e19f3f'
        // blue: '#345c68',
        // red: '#9e2a2b'
      },
      backgroundImage: {
        pattern: 'url("src/public/bg-pattern.svg")'
      }
    }
  },
  plugins: []
}
