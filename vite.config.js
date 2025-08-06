// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/react-cicd/', // 👈 MUST MATCH your repo name
  plugins: [react()],
});
