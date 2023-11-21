import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

const checkAnswerButton = translations.buttons['check-answer'];
const askForHelpButton = translations.buttons['ask-for-help'];

test.beforeEach(async ({ page }) => {
  await page.goto(
    '/learn/foundational-c-sharp-with-microsoft/write-your-first-code-using-c-sharp/write-your-first-c-sharp-code'
  );
});

test('the page should render with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(
    'Write Your First Code Using C# - Write Your First C# Code | Learn | freeCodeCamp.org'
  );
});

test('correct check answer button', async ({ page }) => {
  const checkAnswer = page.getByTestId('check-answer-button');
  await expect(checkAnswer).toBeVisible();
  await expect(checkAnswer).toContainText(checkAnswerButton);
});

test('correct ask for help button', async ({ page }) => {
  const askHelp = page.getByTestId('ask-for-help-button');
  await expect(askHelp).toBeVisible();
  await expect(askHelp).toContainText(askForHelpButton);
});

test('correct title section', async ({ page }) => {
  const title = page.getByTestId('title');
  await expect(title).toBeVisible();
});

test('correct description section', async ({ page }) => {
  const description = page.locator('#description');
  await expect(description).toBeVisible();
});

test('correct "assignments" header', async ({ page }) => {
  const assignments = page.getByTestId('assignments');
  await expect(assignments).toBeVisible();
});

test('correct "assignments" section', async ({ page }) => {
  const assignments = page.getByTestId('assignments-section');
  await expect(assignments).toBeVisible();
});

test('correct "questions" header', async ({ page }) => {
  const assignments = page.getByTestId('questions-header');
  await expect(assignments).toBeVisible();
});

test('correct "questions" section', async ({ page }) => {
  const assignments = page.getByTestId('questions');
  await expect(assignments).toBeVisible();
});
