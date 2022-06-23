import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";

export default {
  input: "src/index.tsx",
  external: ["react", "react-dom", "styled-components"],
  output: [{ dir: `dist`, format: "es" }],
  plugins: [typescript(), json()],
};
