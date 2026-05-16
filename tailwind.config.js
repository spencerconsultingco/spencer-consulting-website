/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111821",
        navy: "#0d1825",
        slate: "#2f3945",
        mist: "#f5f2ec",
        paper: "#fbfaf7",
        line: "#ded7cc",
        brass: "#a57742",
        sage: "#69756d",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Cormorant Garamond", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 24px 80px rgba(17, 24, 33, 0.12)",
        fine: "0 1px 0 rgba(17, 24, 33, 0.08)",
      },
    },
  },
  plugins: [],
};
