/// <reference types="vitest/config" />
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    setupFiles: 'vitest-setup.js',
    // workaround: vitest-dev/vitest#10867
    execArgv: ['--no-experimental-webstorage'],
    projects: [
      {
        extends: true,
        test: {
          include: '**/*.test.{jsx,tsx}',
          name: 'react',
          environment: 'jsdom'
        }
      },
      {
        extends: true,
        test: {
          include: '**/*.test.{js,ts}',
          name: 'js',
          environment: 'node'
        }
      }
    ]
  }
});
