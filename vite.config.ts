import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: 'Public', // Ensures Vite recognizes your capitalized folder
  server: {
    port: 3000,
    open: true
  }
});