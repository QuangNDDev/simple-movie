/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["DM Sans", ["sans-serif"]],
      },
      colors: {
        primary: "#F62682",
        secondary: "#5649d7",
      },
    },
  },
  plugins: [],
};
