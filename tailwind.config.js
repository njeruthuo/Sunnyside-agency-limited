/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        SoftRed: "hsl(7, 99%, 70%)",
        Yellow: "hsl(51, 100%, 49%)",
        DarkSaturatedCyan: "hsl(167, 40%, 24%)",
        DarkBlue: "hsl(198, 62%, 26%)",
        DarkModerateCyan: "hsl(168, 34%, 41%)",
        VeryDarkSaturatedBlue: "hsl(212, 27%, 19%)",
        VeryDarkGrayishBlue: "hsl(213, 9%, 39%)",
        DarkGrayishBlue: "hsl(232, 10%, 55%)",
        GrayishBlue: "hsl(210, 4%, 67%)",
        White: "hsl(0, 0%, 100%)",
      },
      backgroundImage: {
        // egg: "url('./images/image-transform.svg')",
      },
    },
  },
  plugins: [],
};
