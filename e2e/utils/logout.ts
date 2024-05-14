import { Page, expect } from '@playwright/test';

export async function signout(page: Page) {
  await page.goto('/');

  const cookies = await page.context().cookies();
  for (const cookie of cookies) {
    await page.context().clearCookies(cookie);
  }

  await page.reload();
  await expect(page.getByRole('link', { name: 'Sign in' })).toBeVisible();
}
