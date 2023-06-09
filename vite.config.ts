import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "src/ChatApp.tsx",
      name: "ChatApp",
      formats: ["umd"],
    },
  },
  plugins: [react()],
});
