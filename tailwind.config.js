/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "768px" /* Tab Screen Size*/,
      md: "1024px" /* Medium Laptop Screen Size*/,
      lg: "1440px" /* Large Screen Size*/,
    },
    extend: {},
  },
  plugins: [],
};
