/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}", "./src/js/*.js", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {}
  },
  plugins: [require("flowbite/plugin")]
};
