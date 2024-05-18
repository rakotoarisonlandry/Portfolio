import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.cjs', // Utilisez le chemin correct si vous avez renommé le fichier
  },
  assetsInclude: ['**/*.PNG', '**/*.png'],
})
