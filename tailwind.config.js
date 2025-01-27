/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        silver: {
          50: "#a6a6a6",
        },
        gold: { 50: "#e4c590" },
      },
    },
    animation: {
      "bg-animation": "smoothScale 7s linear forwards",
      "animation-li": " sliderReveal 1s ease forwards",
      "animation-updown": " updown 5s linear infinite",
      "animation-rotate": " rotate 15s linear infinite",
    },

    keyframes: {
      smoothScale: {
        " 0% ": { transform: "scale(1)" },
        "100% ": { transform: " scale(1.15)" },
      },
      sliderReveal: {
        "0%": {
          transform: "translateY(30px)",
          opacity: " 0",
        },
        "100%": {
          transform: "translateY(0)",
          opacity: "1",
        },
      },
      updown: {
        "0%": { transform: "translateY(0)" },
        " 100%": { transform: "translateY(0) " },

        " 50%": { transform: "translateY(30px)" },
      },
      rotate: {
        "0%": { transform: "rotate(0deg)" },
        " 100%": { transform: "rotate(380deg) " },
      },
    },
  },
  plugins: [],
};
