/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],

  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        paymentBG: "url('./assets/ten_payment.svg')",
      },
    },
  },

  plugins: [
    require("@tailwindcss/forms"),

    require("tailwind-scrollbar-hide"),
    //require("flowbite/plugin"),
    require("daisyui"),
  ],
};
