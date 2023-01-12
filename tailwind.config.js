/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme('colors'),
        primary: '#103642',
        secondary: '#EA685C',
        higthlightPrimary: '#375c66',
        higthlightSecondary: '#FCEADD'
      }),
      borderColor: (theme) => ({
        ...theme('colors'),
        primary: '#103642',
        secondary: '#EA685C',
        higthlightPrimary: '#375c66',
        higthlightSecondary: '#FCEADD'
      }),
      textColor: (theme) => ({
        ...theme('colors'),
        primary: '#103642',
        secondary: '#EA685C',
        higthlightPrimary: '#375c66',
        higthlightSecondary: '#FCEADD'
      })
    }
  },
  plugins: []
}
