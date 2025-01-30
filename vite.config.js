import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue(),
  ],
  server: {
    allowedHosts: [
      '3ca07eadd7ee87.lhr.life', // Разрешите этот хост
      'localhost', // Обычно localhost уже разрешен по умолчанию
    ],
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
