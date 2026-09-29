import { copyFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages serves a project repo under /<repo-name>/. Set BASE_PATH=/ when
// the site is served from a domain root (custom domain or <user>.github.io repo).
const base = process.env.BASE_PATH || '/personal_website_2.0/';

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
