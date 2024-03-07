import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

test.use({ storageState: 'playwright/.auth/certified-user.json' });

const supportEmail = 'support@freeCodeCamp.org';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe('Delete Modal component', () => {
  test('renders the modal correctly', async ({ page }) => {
    await page.getByRole('button', { name: translations.buttons.menu }).click();
    await page
      .getByRole('link', { name: translations.buttons.settings })
      .click();
    await page
      .getByRole('button', { name: translations.settings.danger.delete })
      .click();

    await expect(
      page.getByRole('heading', {
        name: translations.settings.danger['delete-title']
      })
    ).toBeVisible();
    await expect(
      page.getByText(translations.settings.danger['delete-p1'])
    ).toBeVisible();
    await expect(
      page.getByText(translations.settings.danger['delete-p2'])
    ).toBeVisible();
    await expect(page.getByRole('link', { name: supportEmail })).toBeVisible();

    await expect(
      page.getByRole('button', { name: translations.settings.danger.nevermind })
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: translations.settings.danger.certain })
    ).toBeVisible();

    const exitButtonSrOnly = page
      .getByRole('button', { name: translations.buttons.close })
      .nth(0);
    const exitButton = page
      .getByRole('button', { name: translations.buttons.close })
      .nth(1);

    await expect(exitButtonSrOnly).toBeVisible();
    await expect(exitButton).toBeVisible();
  });

  test('closes modal after user cancels account deleting', async ({ page }) => {
    await page.getByRole('button', { name: translations.buttons.menu }).click();

    await page
      .getByRole('link', { name: translations.buttons.settings })
      .click();

    await page
      .getByRole('button', { name: translations.settings.danger.delete })
      .click();
    await page
      .getByRole('button', { name: translations.settings.danger.nevermind })
      .click();

    await expect(page).toHaveURL(/.*\/settings\/?#/);
    await expect(
      page.getByRole('heading', {
        name: translations.settings.danger['delete-title']
      })
    ).not.toBeVisible();
  });

  test('deletes account and redirects to /learn after confirmation', async ({
    page
  }) => {
    await page.getByRole('button', { name: translations.buttons.menu }).click();

    await page
      .getByRole('link', { name: translations.buttons.settings })
      .click();

    await page
      .getByRole('button', { name: translations.settings.danger.delete })
      .click();

    await page
      .getByRole('button', { name: translations.settings.danger.certain })
      .click();

    await expect(page).toHaveURL(/.*\/learn\/?#/);
  });
});
