import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    plugins: [react(), tailwindcss()],
    base: '/',
    server: {
      host: env.VITE_HOST || 'localhost',
      port: Number(env.VITE_PORT) || 3000,
      open: true,
    }
  }
})
