import { defineConfig } from "vite";

/**
 * Path to exercise folder
 */
const exercisePath = "Coderslab/Verti-fully-responsive/01_Verti/index.html";

/**
 * Don't change those lines below
 */
export default defineConfig({
  root: exercisePath,
  server: {
    port: 3000,
  },
});
