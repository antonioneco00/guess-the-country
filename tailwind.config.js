/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{html,js}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        rajdhani: ["Rajdhani", "sans-serif"],
      },
      textShadow: {
        bordered: "0 1px 0 #fff, 1px 0 0 #fff, -1px 0 0 #fff, 0 -1px 0 #fff",
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
      boxShadow: {
        'button': '0 0 20px var(--tw-shadow-color)',
      }
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
  safelist: [
    'bg-gradient-to-r',
    'bg-gradient-to-b',
    'from-black',
    'via-black',
    'to-black',
    'from-white',
    'via-white',
    'to-white',
    'from-red-500',
    'via-red-500',
    'to-red-500',
    'from-orange-500',
    'via-orange-500',
    'to-orange-500',
    'from-yellow-500',
    'via-yellow-500',
    'to-yellow-500',
    'from-green-500',
    'via-green-500',
    'to-green-500',
    'from-sky-500',
    'via-sky-500',
    'to-sky-500',
    'from-blue-500',
    'via-blue-500',
    'to-blue-500',
    'ring-white',
    'ring-red-600',
    'ring-orange-600',
    'ring-yellow-600',
    'ring-green-600',
    'ring-emerald-600',
    'ring-teal-600',
    'ring-cyan-600',
    'ring-sky-600',
    'ring-blue-600',
    'ring-indigo-600',
    'ring-violet-600',
    'ring-purple-600',
    'ring-fuchsia-600',
    'ring-pink-600',
    'ring-rose-600',
    'border-black',
    'border-white',
    'border-red-500',
    'border-orange-500',
    'border-yellow-500',
    'border-green-500',
    'border-sky-500',
    'border-blue-500',
    'border-indigo-500',
    'border-fuchsia-500',
    'border-rose-500'
  ]
};
