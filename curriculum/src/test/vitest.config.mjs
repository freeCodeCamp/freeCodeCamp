import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['src/test/blocks-generated/**/*.test.js'],
    environment: 'node',
    hookTimeout: 60000,
    testTimeout: 30000,
    isolate: false,
    globalSetup: 'src/test/vitest-global-setup.mjs',
    setupFiles: 'src/test/vitest-setup.mjs'
  }
});
