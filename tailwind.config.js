/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "zap-red": "#e02020",
        "zap-black": "#111111",
        "zap-white": "#ffffff",
        "zap-light": "#f7f7f7",
        "zap-ink": "#5e5e5e",
        "zap-grey-mid": "#808080",
      },
      fontFamily: {
        serif: ["Sora", "sans-serif"],
      },
    },
  },
  plugins: [],
};
