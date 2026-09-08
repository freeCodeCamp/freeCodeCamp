import { exec } from 'child_process';
import { promisify } from 'util';
import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

const execP = promisify(exec);

test.beforeAll(async () => {
  await execP('node ./tools/scripts/seed/seed-demo-user --certified-user', {
    cwd: process.cwd().replace('/e2e', '')
  });
});

test.afterEach(async () => {
  await execP('node ./tools/scripts/seed/seed-demo-user --certified-user', {
    cwd: process.cwd().replace('/e2e', '')
  });
});

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
