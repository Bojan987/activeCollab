import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "@rollup/plugin-eslint";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  input: "main.jsx",
  plugins: [
    { ...eslint({ include: "src/**/*.+(js|jsx|)" }), enforce: "pre" },
    react(),
    svgr({
      exportAsDefault: true,

      //  A minimatch pattern, or array of patterns, which specifies the files in the build the plugin should include. By default all svg files will be included.
      include: "**/*.svg",
    }),
  ],
});
