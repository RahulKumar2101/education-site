// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace with your repo name!
export default defineConfig({
  base: '/your-repo-name/',
  plugins: [react()],
})
