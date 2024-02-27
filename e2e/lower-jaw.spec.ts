import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto(
    '/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-2'
  );
});

test('Check the initial states of submit button and "check your code" button', async ({
  page
}) => {
  const checkButton = page.getByTestId('lowerJaw-check-button');

  const submitButton = page.getByTestId('lowerJaw-submit-button');
  const checkButtonState = await checkButton.getAttribute('aria-hidden');
  const submitButtonState = await submitButton.getAttribute('aria-hidden');
  expect(checkButtonState).toBe(null);
  expect(submitButtonState).toBe('true');
});

test('Click on the "check your code" button', async ({ page }) => {
  const checkButton = page.getByTestId('lowerJaw-check-button');

  await checkButton.click();

  const failing = page.getByTestId('lowerJaw-failing-test-feedback');
  const hint = page.getByTestId('lowerJaw-failing-hint');
  await expect(failing).toBeVisible();
  await expect(hint).toBeVisible();
});

test('Click on the "Reset" button', async ({ page }) => {
  const resetButton = page.getByTestId('lowerJaw-reset-button');
  await resetButton.click();

  const resetModal = page.getByTestId('reset-modal');

  await expect(resetModal).toBeVisible();
});

test('Should render UI correctly', async ({ page }) => {
  const codeCheckButton = page.getByRole('button', {
    name: 'Check Your Code'
  });
  const lowerJawTips = page.getByTestId('failing-test-feedback');
  await expect(codeCheckButton).toHaveText('Check Your Code (Ctrl + Enter)');
  await expect(lowerJawTips).toHaveCount(0);
});

test('Should display full button text on desktop but hide (Ctrl + Enter on mobile)', async ({
  page,
  isMobile
}) => {
  const codeCheckButton = page.getByRole('button', {
    name: 'Check Your Code'
  });
  await expect(codeCheckButton).toHaveText('Check Your Code (Ctrl + Enter)');

  if (isMobile) {
    await expect(codeCheckButton).toHaveText('Check Your Code');
  }
});
