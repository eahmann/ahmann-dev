const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1.1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      fontFamily: {
        roboto: ['Roboto Mono', 'monospace'],
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'pizazz': {
          '50': '#fff9f2', 
          '100': '#fff3e6', 
          '200': '#ffe1bf', 
          '300': '#ffcf99', 
          '400': '#ffac4d', 
          '500': '#ff8800', 
          '600': '#e67a00', 
          '700': '#bf6600', 
          '800': '#995200', 
          '900': '#7d4300'
      },'las-palmas': {
          '50': '#fcfef3', 
          '100': '#fafce7', 
          '200': '#f2f9c3', 
          '300': '#eaf59f', 
          '400': '#daed57', 
          '500': '#cae50f', 
          '600': '#b6ce0e', 
          '700': '#98ac0b', 
          '800': '#798909', 
          '900': '#637007'
      }
      }
    },
    
  },
  plugins: [],
};
