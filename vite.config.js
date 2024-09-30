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
      '/api': 'https://bloom-backend-e9c5c8c6ducehthh.uksouth-01.azurewebsites.net', // Proxy /api requests to your Flask backend
    },
  }
});
