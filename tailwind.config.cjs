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
      });
    },
  ],
};
