'use strict'

const { defineConfig, devices } = require('@playwright/test')

const PORT = 3000

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: `http://127.0.0.1:${PORT}/documentation`,
    trace: 'on-first-retry'
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ],
  webServer: {
    command: `PORT=${PORT} npm run test:e2e:command`,
    url: `http://127.0.0.1:${PORT}/documentation`,
    reuseExistingServer: !process.env.CI
  }
})
