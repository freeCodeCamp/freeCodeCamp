import { exec } from 'child_process';
import { promisify } from 'util';

import { test, expect } from '@playwright/test';

import translations from '../client/i18n/locales/english/translations.json';

const execP = promisify(exec);

test.beforeEach(async ({ page }) => {
  await page.goto('/settings');
});

test.afterAll(
  async () =>
    await Promise.all([
      execP('node ../tools/scripts/seed/seed-demo-user --certified-user'),
      execP('node ../tools/scripts/seed/seed-surveys'),
      execP('node ../tools/scripts/seed/seed-ms-username')
    ])
);

test.describe('Delete Modal component', () => {
  test('should close the modal and sign the user out after they fill in the verify input text and click delete', async ({
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

    const verifyDeleteText = translations.settings.danger['verify-delete-text'];

    const verifyDeleteInput = page.getByRole('textbox', {
      exact: true
    });
    await verifyDeleteInput.fill(verifyDeleteText);

    await page
      .getByRole('button', { name: translations.settings.danger.certain })
      .click();

    await expect(
      page.getByRole('dialog', {
        name: translations.settings.danger['delete-title']
      })
    ).not.toBeVisible();

    // TODO: Reinstate these checks when flakiness is resolved:
    // await expect(page).toHaveURL(allowTrailingSlash('/learn'));
    // await alertToBeVisible(page, translations.flash['account-deleted']);
    // The user is signed out after their account is deleted. Don't check the
    // number of occurrences of the 'Sign in' link as it may vary depending on AB
    // tests and Gatsby develop mode flakiness.
    await expect(
      page.getByRole('link', { name: 'Sign in' }).first()
    ).toBeVisible();
  });
});
