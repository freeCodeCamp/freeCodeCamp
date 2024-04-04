import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

test.use({ storageState: 'playwright/.auth/certified-user.json' });

test.beforeEach(async ({ page }) => {
  await page.goto('/settings');
});

test.describe('Delete Modal component', () => {
  test('should render the modal correctly', async ({ page }) => {
    await page
      .getByRole('button', { name: translations.settings.danger.delete })
      .click();

    await expect(
      page.getByRole('dialog', {
        name: translations.settings.danger['delete-title']
      })
    ).toBeVisible();

    await expect(
      page.getByText(translations.settings.danger['delete-p1'])
    ).toBeVisible();

    await expect(
      page.getByText(translations.settings.danger['delete-p2'])
    ).toBeVisible();

    const supportLink = page.getByRole('link', {
      name: 'support@freeCodeCamp.org'
    });
    await expect(supportLink).toBeVisible();
    await expect(supportLink).toHaveAttribute(
      'href',
      'mailto:support@freecodecamp.org'
    );

    await expect(
      page.getByRole('button', { name: translations.settings.danger.nevermind })
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: translations.settings.danger.certain })
    ).toBeVisible();

    await expect(
      page.getByRole('button', { name: translations.buttons.close })
    ).toBeVisible();
  });

  test('should close the modal after the user cancels account deleting', async ({
    page
  }) => {
    await page
      .getByRole('button', { name: translations.settings.danger.delete })
      .click();

    await expect(
      page.getByRole('dialog', {
        name: translations.settings.danger['delete-title']
      })
    ).toBeVisible();

    await page
      .getByRole('button', { name: translations.settings.danger.nevermind })
      .click();

    await expect(
      page.getByRole('dialog', {
        name: translations.settings.danger['delete-title']
      })
    ).not.toBeVisible();
  });

  test('should close the modal and redirect to /learn after the user clicks delete', async ({
    page
  }) => {
    await page.route('*/**/account/delete', async route => {
      // intercept the endpoint to prevent user account from being deleted
      // as the deletion will cause subsequent tests to fail
      const json = {};
      await route.fulfill({ json });
    });

    await page
      .getByRole('button', { name: translations.settings.danger.delete })
      .click();

    await expect(
      page.getByRole('dialog', {
        name: translations.settings.danger['delete-title']
      })
    ).toBeVisible();

    await page
      .getByRole('button', { name: translations.settings.danger.certain })
      .click();

    await expect(
      page.getByRole('dialog', {
        name: translations.settings.danger['delete-title']
      })
    ).not.toBeVisible();

    await expect(page).toHaveURL(/.*\/learn\/?/);
  });
});
