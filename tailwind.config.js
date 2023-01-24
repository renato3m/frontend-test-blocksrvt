/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        lg: ["1.125rem", { lineHeight: "1.5625rem" }],
      },
      colors: {
        textPrimary: "#202020",
        white: "#fff",
        background: "#FBFBFB",
        border: "#cccccc",
        topBar: "#242424",
        footer: "#E9E9E9",
        borderColor: "#8892b0",
        pinkActive: "#D835C5",
        pinkDarkActive: "#A11CF3",
        pink: "#D835C599",
        pinkDark: "#A11CF399",
        pinkHover: "#D835C51a",
        pinkDarkHover: "#A11CF31a",
      },
      boxShadow: {
        bar: "0px 2px 4px rgba(0, 0, 0, 0.15)",
      },
      backgroundImage: (theme) => ({
        "gradient-primary": `linear-gradient(to right, ${theme(
          "colors.pinkDark"
        )}, ${theme("colors.pink")})`,
        "gradient-secondaty": `linear-gradient(to right, ${theme(
          "colors.pinkDarkActive"
        )}, ${theme("colors.pinkActive")})`,
        "gradient-hover": `linear-gradient(to right, ${theme(
          "colors.pinkDarkHover"
        )}, ${theme("colors.pinkHover")})`,
      }),
    },
  },
  plugins: [],
};
