import { resolve } from 'path'
import { defineConfig } from 'vite'
import analyzed from "./_analyzed.json";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib/index.ts'),
      name: 'index',
      fileName: 'index',
    },
    minify: "terser",
    terserOptions: {
      mangle: {
        properties: {
          regex: /.*/,
          reserved: analyzed.reserved,
        },
      },
    },
  },
})