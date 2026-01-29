import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    exclude: ['src/test/blocks-generated/**/*.test.js', 'dist', 'node_modules']
  }
});
