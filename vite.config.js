import { defineConfig } from "vite";

/**
 * Path to exercise folder
 */
const exercisePath = "Coderslab/Verti-fully-responsive/index.html";

/**
 * Don't change those lines below
 */
export default defineConfig({
  root: exercisePath,
  server: {
    port: 3000,
  },
});
