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
    isolate: true,
    bail: 1,
    pool: 'threads',
    poolOptions: { threads: { minWorkers: 4, maxWorkers: 4 } }
  },
  esbuild: {
    target: 'es2022',
    supported: { 'top-level-await': true }
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV ?? 'test')
  }
});
