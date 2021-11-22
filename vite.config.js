import { defineConfig } from 'vite'
import svelte from '@svitejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'docs',
  },
  plugins: [svelte()],
})
