module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lexend Deca"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
