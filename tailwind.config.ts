import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
} satisfies Config;
