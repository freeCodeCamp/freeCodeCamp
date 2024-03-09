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

    //there are 2 dialogs nested per modal
    const dialogs = await page.getByRole('dialog').all();
    expect(dialogs).toHaveLength(2);

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

    // There are 2 close buttons on the modal: one is sr-only on top, and one on the bottom of modal
    const closeButtons = await page
      .getByRole('button', { name: translations.buttons.close })
      .all();
    expect(closeButtons).toHaveLength(2);
  });

  test('closes modal after user cancels account deleting', async ({ page }) => {
    await page.getByRole('button', { name: translations.buttons.menu }).click();

    await page
      .getByRole('link', { name: translations.buttons.settings })
      .click();

    await page
      .getByRole('button', { name: translations.settings.danger.delete })
      .click();

    const dialogs = await page.getByRole('dialog').all();
    expect(dialogs).toHaveLength(2);

    await page
      .getByRole('button', { name: translations.settings.danger.nevermind })
      .click();

    for (const dialog of dialogs) {
      await expect(dialog).not.toBeVisible();
    }
  });

  test('deletes account and redirects to /learn after confirmation', async ({
    page
  }) => {
    await page.getByRole('button', { name: translations.buttons.menu }).click();

    await page
      .getByRole('link', { name: translations.buttons.settings })
      .click();

    await page.route('*/**/account/delete', async route => {
      // intercept the endpoint to prevent user account from being deleted
      // as the deletion will cause subsequent tests to fail
      const json = {};
      await route.fulfill({ json });
    });

    await page
      .getByRole('button', { name: translations.settings.danger.delete })
      .click();
    const dialogs = await page.getByRole('dialog').all();
    expect(dialogs).toHaveLength(2);
    await page
      .getByRole('button', { name: translations.settings.danger.certain })
      .click();
    for (const dialog of dialogs) {
      await expect(dialog).not.toBeVisible();
    }
    await expect(page).toHaveURL(/.*\/learn\/?/);
  });
});
