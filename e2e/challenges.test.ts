import { test, expect, Page } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

let page: Page;
const pathsToTest = [{ input: '/challenges', expected: '/learn' }];

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});

test.describe('Legacy Challenge Path Redirection Tests', () => {
  const testLearnPageTitle = async () => {
    await expect(page).toHaveTitle(
      'Learn to Code — For Free — Coding Courses for Busy People'
    );
  };

  const testLearnPageHeader = async () => {
    const header = page.getByTestId('learn-heading');
    await expect(header).toBeVisible();
    await expect(header).toContainText(translations.learn.heading);
  };

  const runLearnTests = async () => {
    await testLearnPageTitle();
    await testLearnPageHeader();
  };

  for (const { input, expected } of pathsToTest) {
    test(`should redirect from ${input} to ${expected}, if it fails runs a DOM test`, async () => {
      try {
        await page.goto(input);
        const currentPath = new URL(page.url()).pathname;
        expect(currentPath).toBe(expected);
        // Due to inconsistent URL behavior in WebKit & Mobile Safari.
        // The URL may not correctly reflect the page.
        // Fallback to running a DOM test and validate page content.
        // Ensures we are on the expected page despite URL.
      } catch (error) {
        console.log(
          `Failed to redirect from ${input} to ${expected}. Running DOM tests.`
        );
        await runLearnTests();
      }
    });
  }
});
