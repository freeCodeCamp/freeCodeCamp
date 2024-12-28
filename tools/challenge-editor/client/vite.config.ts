import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  envPrefix: 'CHALLENGE_EDITOR_',
  server: {
    port: 3300
  }
});
