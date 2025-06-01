// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx,css,html}"],
  theme: {
    extend: {
       colors: {
        pastelBlue: "#AEC6CF",
        pastelPurple: "#C3B1E1",
        pastelPink: "#'#F8BBD0'",
        pastelGreen: "#B2D3C2",
        pastelYellow: "#FDFD96",
        pastelDark: "#374151",
        pastelBorder: "#D3D3D3"
      },
    },
  },
  plugins: [],
}

