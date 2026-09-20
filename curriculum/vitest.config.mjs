import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    projects: ['vitest.tooling.config.mjs', 'src/test/vitest.config.mjs']
  }
});
