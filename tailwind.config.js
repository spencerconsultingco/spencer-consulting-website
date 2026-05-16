/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#171714",
        paper: "#F7F4ED",
        bone: "#EFE9DD",
        brass: "#A77B3E",
        oxblood: "#5D1E24",
        graphite: "#33322E",
        moss: "#35483D",
        mist: "#D8D2C6",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Cormorant Garamond", "Georgia", "serif"],
      },
      boxShadow: {
        premium: "0 24px 80px rgba(23, 23, 20, 0.16)",
        soft: "0 18px 45px rgba(23, 23, 20, 0.10)",
      },
    },
  },
  plugins: [],
};
