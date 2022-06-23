import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";

export default {
  input: "src/index.tsx",
  external: [
    "react",
    "react-dom",
    "styled-components",
    "react-portal",
    "@mdx-js/react",
  ],
  output: [{ dir: `dist`, format: "es", sourcemap: true }],
  plugins: [typescript(), json()],
};
