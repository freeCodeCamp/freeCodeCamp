import { expect, test } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

test.use({ storageState: { cookies: [], origins: [] } });

test.describe('Homepage initial HTML', () => {
  test.use({ javaScriptEnabled: false });

  test('includes public content before user data and experiments load', async ({
    page
  }) => {
    await page.goto('/');

    await expect(
      page.getByRole('heading', {
        level: 1,
        name: translations.landing['big-heading-1-b']
      })
    ).toBeVisible();
    await expect(
      page.getByRole('heading', {
        level: 2,
        name: translations.landing.testimonials.heading
      })
    ).toBeVisible();
  });
});

test('hydrates the homepage without errors', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));

  await page.goto('/');

  await expect(
    page.getByRole('heading', {
      level: 1,
      name: translations.landing['big-heading-1-b']
    })
  ).toBeVisible();
  await expect(page.locator('.landing-cta-placeholder')).toHaveCount(0);
  expect(errors).toEqual([]);
});
