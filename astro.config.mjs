import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://c-ai.github.io', // Reemplaza TU_USUARIO
  base: '/c-ai',               // El nombre de tu repositorio
  integrations: [react()],
});