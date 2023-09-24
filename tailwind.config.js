/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: { primary: "#006400", dark: "#0f172a", secondary: "#6B7280" },
      screens: { "2xl": "1320px" },
    },
  },
  plugins: [],
};
