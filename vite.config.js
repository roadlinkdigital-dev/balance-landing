import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['.sg2.manus.computer'],
  },
  preview: {
    allowedHosts: ['.sg2.manus.computer'],
  },
});
