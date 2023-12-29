/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#da2028",
          secondary: "#FBE9E9",
        },
        primary: {
          DEFAULT: "#02143B",
        },
        secondary: {
          DEFAULT: "#354362",
        },
        tertiary: {
          DEFAULT: "#757e92",
        }
      },
      fontSize: {
        xxs: ["10px", "14px"],
      },
      backgroundImage: {
        instagramgradient: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
        popgradient: "linear-gradient(90deg, #6D51A1 0.21%, #ED2C92 36.59%, #F36B32 69.33%, #FED401 100%)",
      },
      keyframes: {
        "modal-pop": {
          "0%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("tailwindcss-animated"), require("./tailwind-plugin.cjs")],
};
