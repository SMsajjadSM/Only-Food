/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    animation: {
      "bg-animation": "smoothScale 7s linear forwards",
    },
    keyframes: {
      smoothScale: {
       " 0% ":{ transform: "scale(1)" },
        "100% ":{ transform:" scale(1.15)" },
      },
    },
  },
  plugins: [],
};
