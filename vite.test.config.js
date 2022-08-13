/// <reference types="vitest" />
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { configDefaults } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['tests/component/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: [...configDefaults.exclude, 'tests/acceptance/**/*', 'tests/unit/**/*'],
    environment: 'jsdom',
  },
  plugins: [vue()],
})
