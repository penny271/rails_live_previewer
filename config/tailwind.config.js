const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: {
    content: [
      "./public/*.html",
      "./app/helpers/**/*.rb",
      "./app/javascript/**/*.js",
      "./app/views/**/*.{erb,haml,html,slim}",
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      backgroundColor: {
        primary: "rgb(59 130 246);",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/container-queries"),
  ],
};
