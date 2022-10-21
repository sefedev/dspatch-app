/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#092C4C",
      secondary: "#F2994A",
      black: {
        100: "#000000",
        200: "#1D1D1D",
        300: "#282828",
        400: "#FFFFFF",
      },
      gray: {
        100: "#333333",
        200: "#4F4F4F",
        300: "#828282",
        400: "#BDBDBD",
        500: "#E0E0E0",
      },
      state: {
        info: "#2F80ED",
        success: "#27AE60",
        warning: "#E2B93B",
        error: "#EB5757",
      },
    },
    fontSize: {
      sm: "12px",
      md: "22px",
      mdlg: "26px",
      lg: "30px",
      xl: "32px",
      xxl: "48px",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
