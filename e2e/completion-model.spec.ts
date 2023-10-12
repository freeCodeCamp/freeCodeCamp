import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

test.beforeEach(async ({ page }) => {
  await page.goto(
    '/learn/scientific-computing-with-python/scientific-computing-with-python-projects/arithmetic-formatter'
  );
  await page.getByLabel('Solution Link').fill('https://example.com');
  await page
    .getByRole('button', { name: "I've completed this challenge" })
    .click();
});

test.afterEach(async ({ page }) => {
  await page.close();
});

test.describe('Challenge Completion Modal Tests (Signed Out)', () => {
  test('should render the modal correctly', async ({ page }) => {
    await expect(page.getByRole('heading')).toBeVisible();
    await expect(page.getByRole('button', { name: 'close' })).toBeVisible();
    await expect(page.getByTestId('completion-success-icon')).toBeVisible();
    await expect(page.getByTestId('progress-bar-container')).toBeVisible();
    await expect(
      page.getByRole('link', { name: translations.learn['sign-in-save'] })
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: translations.buttons['go-to-next'] })
    ).toBeVisible();
  });

  test('should close the modal after user click on close', async ({ page }) => {
    await page.getByRole('button', { name: 'close' }).click();
    await expect(page.getByTestId('completion-success-icon')).not.toBeVisible();
  });

  test('should redirect to /learn after sign in', async ({ page }) => {
    await page
      .getByRole('link', { name: translations.learn['sign-in-save'] })
      .click();
    await expect(page).toHaveURL(/.*\/learn\/?$/);
  });

  test('should redirect to next challenge', async ({ page }) => {
    await page
      .getByRole('button', { name: translations.buttons['go-to-next'] })
      .click();
    await expect(page).toHaveURL(
      'http://localhost:8000/learn/scientific-computing-with-python/scientific-computing-with-python-projects/time-calculator'
    );
  });
});

test.describe('Challenge Completion Modal Tests (Signed In)', () => {
  test.use({ storageState: 'playwright/.auth/certified-user.json' });

  test('should render the modal correctly', async ({ page }) => {
    await expect(page.getByRole('heading')).toBeVisible();
    await expect(page.getByRole('button', { name: 'close' })).toBeVisible();
    await expect(page.getByTestId('completion-success-icon')).toBeVisible();
    await expect(page.getByTestId('progress-bar-container')).toBeVisible();
    await expect(
      page.getByRole('link', { name: translations.learn['sign-in-save'] })
    ).not.toBeVisible();
    await expect(
      page.getByRole('button', { name: translations.buttons['submit-and-go'] })
    ).toBeVisible();
  });

  test('should close the modal after user click on close', async ({ page }) => {
    await page.getByRole('button', { name: 'close' }).click();
    await expect(page.getByTestId('completion-success-icon')).not.toBeVisible();
  });

  test('should redirect to next challenge', async ({ page }) => {
    await page
      .getByRole('button', { name: translations.buttons['submit-and-go'] })
      .click();
    await expect(page).toHaveURL(
      'http://localhost:8000/learn/scientific-computing-with-python/scientific-computing-with-python-projects/time-calculator'
    );
  });
});
