/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ["./src/**/*.{html,js}"],
    purge: [
      './public/**/*.html',
      './src/**/*.{js,jsx,ts,tsx,vue}'
    ],
    theme: {
      extend: {},
    },
    plugins: [
      require('tailwind-scrollbar-hide')
    ]
  }