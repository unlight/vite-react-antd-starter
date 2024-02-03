import reactRefresh from '@vitejs/plugin-react';
import path from 'path';
import { ConfigEnv, UserConfigExport, defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default function ({}: ConfigEnv): UserConfigExport {
  return defineConfig({
    test: {
      globals: true,
      fileParallelism: false,
      reporters: 'dot',
      environment: 'happy-dom',
    },
    plugins: [tsconfigPaths(), reactRefresh()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      assetsDir: '.',
      // brotliSize: false,
    },
  });
}
