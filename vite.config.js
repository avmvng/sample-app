import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: 'frontend', // Set this to point to your frontend folder
  server: {
    proxy: {
      '/api': 'http://localhost:3000'  // Example if you need API requests to backend
    }
  }
});