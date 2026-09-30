import { test, expect } from './fixtures/isolated-user';
import translations from '../client/i18n/locales/english/translations.json';

test.use({ userPreset: 'certified' });

test.describe('Progress reset modal', () => {
  test('should reset the progress if the user fills the verify input text and clicks the reset button', async ({
    page
  }) => {
    await page.goto('/settings');

    await page
      .getByRole('button', { name: 'Reset all of my progress' })
      .click();

    await expect(
      page.getByRole('dialog', { name: 'Reset My Progress' })
    ).toBeVisible();

    const verifyResetText = translations.settings.danger['verify-reset-text'];

    const verifyResetInput = page.getByRole('textbox', {
      exact: true
    });
    await verifyResetInput.fill(verifyResetText);

    await page
      .getByRole('button', {
        name: 'Reset everything. I want to start from the beginning'
      })
      .click();

    await page.waitForURL('/');
    await expect(page.getByText('Your progress has been reset')).toBeVisible();

    // Go to /settings and confirm that all certifications are reset
    await page.goto('/settings');
    await expect(
      page.getByRole('link', { name: 'Show Certification' })
    ).toBeHidden();
  });
});
