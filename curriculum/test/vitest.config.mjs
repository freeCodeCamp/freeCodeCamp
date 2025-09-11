import os from 'node:os';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      'lodash-es': 'lodash'
    }
  },
  test: {
    include: ['test/blocks-generated/**/*.test.js'],
    environment: 'node',
    hookTimeout: 60000,
    testTimeout: 30000,
    isolate: false,
    pool: 'threads',
    poolOptions: {
      threads: {
        // Cap to avoid CPU thrash on laptops and keep Puppeteer contexts in check.
        maxThreads: Math.max(2, Math.min(8, (os.cpus()?.length ?? 4) - 1)),
        minThreads: 2
      }
    },
    globalSetup: 'test/vitest-global-setup.mjs',
    setupFiles: 'test/vitest-setup.mjs'
  },
  esbuild: {
    target: 'es2022',
    supported: { 'top-level-await': true }
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV ?? 'test')
  }
});
