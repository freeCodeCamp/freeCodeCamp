import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

const verifyTrophy = translations.buttons['verify-trophy'];
const askForHelpButton = translations.buttons['ask-for-help'];

test.beforeEach(async ({ page }) => {
  await page.goto(
    '/learn/foundational-c-sharp-with-microsoft/write-your-first-code-using-c-sharp/trophy-write-your-first-code-using-c-sharp'
  );
});

test.afterEach(async ({ page }) => {
  await page.close();
});

test('the page should render with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(
    'Write Your First Code Using C# - Trophy - Write Your First Code Using C# | Learn | freeCodeCamp.org'
  );
});

test('Correct Verify Trophy button', async ({ page }) => {
  const askHelp = page.getByTestId('verify-trophy-button');
  await expect(askHelp).toBeVisible();
  await expect(askHelp).toContainText(verifyTrophy);
});

test('Correct Ask for help button', async ({ page }) => {
  const checkAnswer = page.getByTestId('ask-for-help-button');
  await expect(checkAnswer).toBeVisible();
  await expect(checkAnswer).toContainText(askForHelpButton);
});
