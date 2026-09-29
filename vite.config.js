import { copyFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// This repository is the account's root GitHub Pages site.
const base = process.env.BASE_PATH || '/';

// GitHub Pages has no SPA fallback, so deep links like /projects/:id need a 404.html
// that boots the same app.
const spaFallback = () => ({
  name: 'spa-fallback-404',
  apply: 'build',
  closeBundle() {
    const outDir = resolve('build');
    copyFileSync(resolve(outDir, 'index.html'), resolve(outDir, '404.html'));
  },
});

export default defineConfig({
  base,
  plugins: [react(), spaFallback()],
  build: {
    outDir: 'build',
  },
  server: {
    port: 3000,
    open: false,
  },
});
