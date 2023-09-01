// First, install the plugin:
// npm install @tailwindcss/typography

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    // Other plugins can be added here
  ],
};
