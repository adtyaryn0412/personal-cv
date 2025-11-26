// Minimal Tailwind config — removed dependency on `shadcn` package subpath
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
    },
  },
  plugins: [require("tailwindcss-animate")],
}
