import { test, expect } from '@playwright/test';

test('/learn', async ({ page }) => {
  await page.goto('/learn');
  await expect(
    page.getByRole('heading', { name: "Welcome to freeCodeCamp's curriculum." })
  ).toBeVisible();

  await expect(page).toHaveScreenshot({ fullPage: true });
});
