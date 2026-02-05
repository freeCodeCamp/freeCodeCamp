import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['blocks-generated/**/*.test.js'],
    environment: 'node',
    hookTimeout: 60000,
    testTimeout: 30000,
    isolate: false,
    globalSetup: 'vitest-global-setup.mjs',
    setupFiles: 'vitest-setup.mjs'
  }
});
