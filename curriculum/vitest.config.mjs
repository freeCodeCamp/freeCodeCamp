import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    exclude: ['test/blocks-generated/**/*.test.js']
  }
});
