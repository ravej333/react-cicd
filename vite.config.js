import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/react-cicd/', // Must match your GitHub repo name
  plugins: [react()],
});
