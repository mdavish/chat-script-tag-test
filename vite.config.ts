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
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
    "process.env": "process.env",
  },
  plugins: [react()],
});
