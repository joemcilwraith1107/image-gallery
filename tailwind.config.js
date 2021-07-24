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
        '80-screen': '80vh',
      },
      width: {
        '80-screen': '80vw',
      },
      minWidth: {
        '0.1': '10%',
      },
      maxWidth: {
        '4/5': '80%',
        '80-screen': '80vw',
      },
      maxHeight: {
        '80-screen': '80vh',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
