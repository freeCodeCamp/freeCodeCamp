import { test, expect } from './fixtures/isolated-user';

import translations from '../client/i18n/locales/english/translations.json';
import { alertToBeVisible } from './utils/alerts';

// The certified preset leaves the newsletter preference unset, so the sign-up
// alert is shown.
test.use({ userPreset: 'certified' });

test.describe("Email sign-up alert when user has not selected Quincy's newsletter preference", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/learn');
  });

  test('should disable weekly newsletter if the user clicks No', async ({
    page
  }) => {
    await expect(
      page.getByText(translations.misc['email-blast'])
    ).toBeVisible();

    const noThanksButton = page.getByRole('button', {
      name: translations.buttons['no-thanks']
    });
    await expect(noThanksButton).toBeVisible();
    await noThanksButton.click();
    await alertToBeVisible(
      page,
      translations.flash['subscribe-to-quincy-updated']
    );
    await expect(
      page.getByText(translations.misc['email-blast'])
    ).not.toBeVisible();
    await page.goto('/settings');
    await expect(
      page.getByRole('button', { name: translations.buttons['no-thanks'] })
    ).toHaveAttribute('aria-pressed', 'true');
    await expect(
      page.getByRole('button', { name: translations.buttons['yes-please'] })
    ).toHaveAttribute('aria-pressed', 'false');
  });

  test('should enable weekly newsletter if the user clicks Yes', async ({
    page
  }) => {
    await expect(
      page.getByText(translations.misc['email-blast'])
    ).toBeVisible();

    const yesPleaseButton = page.getByRole('button', {
      name: translations.buttons['yes-please']
    });

    await expect(yesPleaseButton).toBeVisible();
    await yesPleaseButton.click();
    await alertToBeVisible(
      page,
      translations.flash['subscribe-to-quincy-updated']
    );
    await page.goto('/settings');
    await expect(
      page.getByRole('group', { name: translations.settings.email.weekly })
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: translations.buttons['yes-please'] })
    ).toHaveAttribute('aria-pressed', 'true');
    await expect(
      page.getByRole('button', { name: translations.buttons['no-thanks'] })
    ).toHaveAttribute('aria-pressed', 'false');
  });
});
