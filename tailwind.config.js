/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./input.css", "./output.css", "./script.js"],
  theme: {
    extend: {
      width: {
        '120px': '120px',
      },
      height: {
        '192px': '192px',
      },
      transformOrigin: {
        'center': 'center',
      },
      rotate: {
        'y-180': '180deg',
        'x-180': '180deg'
      }
    },
  },
  plugins: [],
}
