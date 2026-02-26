import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Set to your GitHub repo name so assets resolve correctly on gh-pages.
  // e.g. if your repo is github.com/you/trainer-landing, base = '/trainer-landing/'
  base: process.env.GITHUB_ACTIONS ? '/muricefitness/' : '/',
})
