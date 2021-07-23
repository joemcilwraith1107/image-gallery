module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      padding: {
        '1/1': '100%',
      },
      height: {
        '0.1': '10%',
      },
      minWidth: {
        '0.1': '10%',
      },
      maxWidth: {
        '4/5': '80%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
