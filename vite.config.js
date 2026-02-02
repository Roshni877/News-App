import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_API_KEY || "/News-App",
  server: {
    https: false,
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  }
})
