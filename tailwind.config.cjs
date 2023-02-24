/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],



  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2563eb",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#111827",
          "base-100": "#f3f4f6",
        },
      },
    ],
  },
}
