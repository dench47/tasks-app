import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' — относительные пути в сборке, чтобы dist работал
// и на GitHub Pages (в подпапке), и на любом другом статическом хостинге.
export default defineConfig({
  plugins: [react()],
  base: './',
});
