/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    animation: {
      "bg-animation": "smoothScale 7s linear forwards",
      "animation-li": " sliderReveal 1s ease forwards",
      "animation-updown": " updown 5s linear infinite",
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
    },
  },
  plugins: [],
};
