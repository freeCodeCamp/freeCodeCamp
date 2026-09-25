import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    maxWorkers: process.env.CI ? 4 : undefined,
    projects: ['vitest.tooling.config.mjs', 'src/test/vitest.config.mjs']
  }
});
