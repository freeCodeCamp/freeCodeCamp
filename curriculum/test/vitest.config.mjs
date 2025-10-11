import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['test/blocks-generated/**/*.test.js'],
    environment: 'node',
    hookTimeout: 60000,
    testTimeout: 30000,
    isolate: false,
    globalSetup: 'test/vitest-global-setup.mjs',
    setupFiles: 'test/vitest-setup.mjs'
  }
});
