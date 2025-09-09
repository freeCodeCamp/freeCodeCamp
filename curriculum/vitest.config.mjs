import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      'lodash-es': 'lodash'
    }
  },
  test: {
    include: ['test/superblocks-generated/**/*.test.js'],
    environment: 'node',
    hookTimeout: 60000,
    testTimeout: 30000,
    isolate: true,
    pool: 'threads',
    poolOptions: { threads: { minWorkers: 8, maxWorkers: 8 } }
  },
  esbuild: {
    target: 'es2022',
    supported: { 'top-level-await': true }
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV ?? 'test')
  }
});
