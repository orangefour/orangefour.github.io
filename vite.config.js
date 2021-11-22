import { defineConfig } from 'vite'
import svelte from '@svitejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'src',
  build: {
    outDir: '..',
    emptyOutDir: false
  },
  plugins: [svelte()],
})
