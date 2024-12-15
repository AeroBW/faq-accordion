/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "light-pink": "hsl(275, 100%, 97%)",
      "grayish-purple": "hsl(292, 16%, 49%)",
      "dark-purple": "hsl(292, 42%, 14%)",
      white: "hsl(0, 0%, 100%)",
    },
    extend: {
      backgroundImage: {
        mobile: "url('/src/assets/images/background-pattern-mobile.svg')",
        desktop: "url('/src/assets/images/background-pattern-desktop.svg')",
      },
    },
  },
  plugins: [],
};
