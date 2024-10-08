import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/landing/',
  plugins: [react()],
  server:
  {
      open: !('SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env)
  },
})
