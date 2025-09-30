import { defineConfig } from "vite";
import { dirname, resolve } from "node:path";

import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const nodeEnv =
  process.env.NODE_ENV === "production" ? '"production"' : '"development"';

// https://vitejs.dev/config/
export default defineConfig((env) => {
  const isProd = env.mode === "production";

  return {
    plugins: [],
    define: { "process.env.NODE_ENV": nodeEnv },
    resolve: {
      alias: {
        "@": "/src",
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
    build: {
      lib: {
        entry: resolve(__dirname, "src/index.ts"),
        name: "Kavas",
        formats: ["es", "umd", "cjs"],
        fileName: "index",
        cssFileName: "style",
      },
      sourcemap: true,
      target: "es2015",
    },
  };
});
