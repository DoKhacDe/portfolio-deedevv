/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#06070a',
          900: '#0b0f15',
          850: '#111722',
        },
        accent: {
          cyan: '#28d7ff',
          coral: '#ff6f61',
          lime: '#b7ff5a',
          gold: '#ffd166',
        },
      },
      boxShadow: {
        glow: '0 0 40px rgba(40, 215, 255, 0.18)',
        card: '0 20px 70px rgba(0, 0, 0, 0.28)',
      },
    },
  },
  plugins: [],
}
