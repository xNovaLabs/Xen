/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}", "./src/js/*.js"],
  theme: {
    extend: {},
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      green: colors.emerald,
      purple: colors.violet,
      yellow: colors.amber,
      pink: colors.fuchsia,
    }
  },
  plugins: [],
}