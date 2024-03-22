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

    // There are two elements with the `dialog` role in the DOM.
    // This appears to be semantically incorrect and should be resolved
    // once we have migrated the component to use Dialog from the `ui-components` library.
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

    // There are 2 close buttons on the modal: one is sr-only on top, and one on the bottom of modal
    const closeButtons = await page
      .getByRole('button', { name: translations.buttons.close })
      .all();
    expect(closeButtons).toHaveLength(2);
  });

  test('should close the modal after the user cancels account deleting', async ({
    page
  }) => {
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
