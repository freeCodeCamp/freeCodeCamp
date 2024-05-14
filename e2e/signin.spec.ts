import { execSync } from 'child_process';
import { test, expect } from '@playwright/test';

test.describe('signing in as certified user', () => {
  test('welcomes the user', async ({ page }) => {
    test.setTimeout(20000);

    const welcomeText = 'Welcome back, Full Stack User.';
    await page.goto('/learn');
    await expect(page.getByText(welcomeText)).not.toBeVisible();

    await page.getByRole('link', { name: 'Sign in' }).first().click();

    await expect(page.getByText(welcomeText)).toBeVisible();
  });
});

test.describe('signing in as development user', () => {
  test.beforeAll(() => {
    execSync('node ./tools/scripts/seed/seed-demo-user');
  });

  test.afterAll(() => {
    execSync('node ./tools/scripts/seed/seed-demo-user certified-user');
  });

  test('welcomes the user', async ({ page }) => {
    test.setTimeout(20000);

    const welcomeText = 'Welcome back, Development User.';
    await page.goto('/learn');
    await expect(page.getByText(welcomeText)).not.toBeVisible();

    await page.getByRole('link', { name: 'Sign in' }).first().click();

    await expect(page.getByText(welcomeText)).toBeVisible();
  });
});
