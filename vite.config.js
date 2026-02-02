import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    https: false,
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  }
})
