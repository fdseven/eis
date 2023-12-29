/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("./tailwind-preset.cjs")],
  // Customizations specific to this project would go here
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      limerick: ["PlusJakartaSans", "Arial", "Tahoma", "sans-serif"],
    },
    extend: {
      fontFamily: {
        helvetica: ["Helvetica", "Arial", "sans-serif"],
      },
      boxShadow: {
        'yellow': '4px 4px #FED401',
        'orange': '4px 4px #F36B32',
        'headline': '30px 30px 1px 0px #FED401',
      },
      backgroundImage: {
        'triangle-arrow': "url('/design/static/detikpop/desktop/preview/images/triangle-arrow.png')",
      },
      listStyleType: {
        circle: 'circle',
      }
    },
  },
  plugins: [
    require("@tailwindcss/container-queries"),
    function ({ addBase, addComponents, addUtilities, addVariant, theme }) {
      addComponents({
        ".breadcrumbs": {
          maxWidth: "100%",
          overflowX: "auto",
          "@apply before:w-10": {},
          "& > ul, & > ol": {
            display: "flex",
            alignItems: "center",
            whiteSpace: "nowrap",
            minHeight: "min-content",
            "& > li": {
              display: "flex",
              alignItems: "center",
              "& + *": {
                "@apply before:border-black before:rotate-45 before:rotate-45 before:ml-2 before:mr-3 before:block before:h-1.5 before:w-1.5 before:bg-transparent before:opacity-40 before:border-t before:border-r":
                  {},
              },
            },
          },
        },
      });
      addUtilities({
        ".text-balance": {
          "text-wrap": "balance",
        },
        ".text-gradient": {
          background:
            "linear-gradient(90deg, #6D51A1 0%, #ED2C92 34.9%, #F36B32 69.79%, #FED401 100%)",
          "background-clip": "text",
          "-webkit-background-clip": "text",
          " -webkit-text-fill-color": "transparent",
        },
        ".text-shadow": {
          "text-shadow": "3px 3px 1px #000;",
        },
        ".text-shadow-pinkpop": {
          "text-shadow": "3px 3px 1px #ED2C92;",
        },
      });
    },
  ],
};
