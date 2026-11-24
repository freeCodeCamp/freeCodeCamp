import { test, expect } from './fixtures/isolated-user';
import translations from '../client/i18n/locales/english/translations.json';

test.use({ userPreset: 'certified' });

test.describe('Module reset', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/learn/2022/responsive-web-design');
  });

  test('resets block progress when confirmed', async ({ page }) => {
    const blockHeader = page
      .locator('.block-header-wrapper')
      .filter({ has: page.locator('.block-reset-button:not(:disabled)') })
      .first();

    await blockHeader.hover();
    await blockHeader.locator('.block-reset-button').click();
    await expect(page.getByRole('dialog')).toBeVisible();

    await page
      .getByRole('textbox')
      .fill(translations.learn['reset-progress-verify']);

    await page
      .getByRole('button', {
        name: translations.learn['reset-progress-confirm']
      })
      .click();

    await expect(
      page.getByText(
        translations.learn['reset-progress-success'].split("'")[0],
        { exact: false }
      )
    ).toBeVisible();

    await page
      .getByRole('button', {
        name: translations.learn['reset-progress-dismiss']
      })
      .click();

    await expect(page.getByRole('dialog')).toBeHidden();
  });
});
