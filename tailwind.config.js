module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "rich-black-fogra-39": "hsl(170, 21%, 5%)",
        "rich-black-fogra-29": "hsl(225, 25%, 9%)",
        "raisin-black": "hsl(228, 13%, 15%)",
        "eerie-black": "hsl(207, 19%, 11%)",
        "light-gray": "hsl(0, 3%, 80%)",
        "gunmetal-1": "hsl(229, 15%, 21%)",
        "gunmetal-2": " hsl(216, 22%, 18%)",
        gainsboro: "hsl(0, 7%, 88%)",
        citrine: "hsl(57, 97%, 45%)",
        xiketic: "hsl(253, 21%, 13%)",
        "gray-x": "hsl(0, 0%, 74%)",
        white: "hsl(0, 100%, 100%)",
        black: "hsl(0, 0%, 0%)",
        jet: "hsl(0, 0%, 20%)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
