import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['**/*.{test,spec}.{js,ts,jsx,tsx}'],
    exclude: ['node_modules', 'dist', '**/*.test.js'],
    environment: 'node',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
    testTimeout: 10000,
    hookTimeout: 10000,
    // Force sequential execution to prevent database race conditions
    pool: 'forks',
    poolOptions: {
      forks: {
        singleFork: true
      }
    },
    // Disable file-level parallelism as fallback
    fileParallelism: false
  }
});
