// @ts-nocheck — excluded from tsconfig.app.json on purpose.
// Vitest has its own bundled Vite which conflicts with the installed Vite 8
// types. We let Vitest resolve this file at runtime without tsc touching it.
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
    css: false,
  },
});
