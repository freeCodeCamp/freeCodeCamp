import path from 'path';
import { config as dotenvConfig } from 'dotenv';
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
const envPath = path.resolve(__dirname, '.env');
dotenvConfig({ path: envPath });
/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: 'e2e',
  testMatch: 'mobile/*.spec.ts',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html', { outputFolder: 'playwright/reporter' }]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  timeout: 15 * 1000,
  outputDir: 'playwright/test-results',

  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'http://127.0.0.1:3000/',
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',

    /* Use custom test attribute */
    testIdAttribute: 'data-playwright-test-label'
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] }
    }
  ],

  /* Run your local dev server before starting the tests */
  webServer: {
    command: 'cd mobile/mobile-app && npx serve generated-tests',
    url: 'http://127.0.0.1:3000',
    reuseExistingServer: !process.env.CI
  }
});
