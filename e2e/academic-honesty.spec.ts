import { execSync } from 'child_process';
import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

test.describe('When the user has not accepted the Academic Honesty Policy', () => {
  test.use({ storageState: 'playwright/.auth/development-user.json' });

  test.beforeAll(() => {
    execSync('node ./tools/scripts/seed/seed-demo-user');
  });

  test('Should validate Academy Honesty Settings', async ({ page }) => {
    await page.goto('/settings');
    await expect(
      page.getByRole('heading', {
        name: translations.settings.headings.honesty
      })
    ).toBeVisible();
    await expect(
      page.getByText(translations.settings.honesty.p1)
    ).toBeVisible();
    await expect(
      page.getByText(translations.settings.honesty.p2)
    ).toBeVisible();
    await expect(
      page.getByText(translations.settings.honesty.p3)
    ).toBeVisible();
    await expect(
      page.getByText(translations.settings.honesty.p4)
    ).toBeVisible();
    await expect(
      page.getByText(translations.settings.honesty.p5)
    ).toBeVisible();
    await expect(
      page.getByText(translations.settings.honesty.p6)
    ).toBeVisible();
    const agreeButton = page.getByRole('button', {
      name: translations.buttons['agree-honesty']
    });
    await expect(agreeButton).toBeVisible();
    await agreeButton.click();

    await expect(
      page.getByRole('button', {
        name: translations.buttons['accepted-honesty']
      })
    ).toBeVisible();
  });
});

test.describe('When the user has not accepted the honesty policy and tries to claim a certification', () => {
  test.use({ storageState: 'playwright/.auth/development-user.json' });

  test.beforeAll(() => {
    execSync('node ./tools/scripts/seed/seed-demo-user');
  });

  test.afterAll(() => {
    execSync('node ./tools/scripts/seed/seed-demo-user certified-user');
  });

  test('Should show an error message', async ({ page }) => {
    await page.goto('/settings#cert-responsive-web-design');
    await page.getByTestId('btn-for-responsive-web-design').click();

    await expect(page.getByTestId('flash-message')).toContainText(
      translations.flash['honest-first']
    );

    const agreeButton = page.getByRole('button', {
      name: translations.buttons['agree-honesty']
    });
    await agreeButton.click();

    await page.reload();

    await page.getByTestId('btn-for-responsive-web-design').click();

    await expect(page.getByTestId('flash-message')).toBeVisible();
  });
});
