import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Allow us to use expect, describe etc. without importing in every file
    environment: "jsdom", // We are testing a DOM environment, not Node
    setupFiles: "./tests/setup.js", //
  },
  server: {
    proxy: {
      '/api': 'https://bloom-eef9h8gjc9dadbf0.ukwest-01.azurewebsites.net', // Proxy /api requests to your Flask backendl
    },
  }
});
