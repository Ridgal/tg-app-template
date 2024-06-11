import react from "@vitejs/plugin-react";
import fs from "fs";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 443,
    host: "0.0.0.0",
    hmr: {
      host: "https://9034-176-97-175-61.ngrok-free.app",
      port: 443,
    },
    https: {
      key: fs.readFileSync("./.cert/localhost-key.pem"),
      cert: fs.readFileSync("./.cert/localhost.pem"),
    },
    watch: {
      usePolling: true,
      interval: 100,
    },
  },
});
