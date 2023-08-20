import { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    colors: {
      red: "#D86161",
      secondary: "#182021",
      black: "#212121",
      cream: "#FAFAFA",
      white: "#FFFFFF",
      gray: {
        300: "#DADEDF",
        600: "#E6E6E6",
        800: "#D8D8D8",
        900: "#7A7A7A"
      },
      primary: {
        80: "#1597E4D4",
        100: "#1597E4"
      }
    },
    extend: {
      borderRadius: {
        large: "10px",
        small: "5px"
      },
      spacing: {
        "72px": "72px"
      }
    }
  },
  plugins: []
};
export default config;
