import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

// https://vite.dev/config/
// Note: defineConfig comes from "vite", not "vitest/config", because
// tsconfig.node.json no longer type-checks this file (avoids the Vite/Vitest
// version collision in types). Vitest picks up the test config via
// vitest.workspace.ts which tsc never processes.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5173,
    strictPort: false,
  },
});
