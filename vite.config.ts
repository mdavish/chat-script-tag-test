import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "src/components/chat-ui/ChatPopUp.tsx",
      name: "ChatPopUp",
      formats: ["umd"],
    },
  },
  plugins: [react()],
});
