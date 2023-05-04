/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,astro}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
            "p, li": {
              code: {
                backgroundColor: theme("colors.neutral.200"),
                border: "1px solid",
                borderColor: theme("colors.zinc.300"),
                padding: "0.250rem 0.4rem",
                borderRadius: "0.250rem",
                fontWeight: "400",
              },
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.red.100"),
          },
        }
      })
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
