import { expect, test } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';
import { focusEditor } from './utils/editor';

test.beforeEach(async ({ page }) => {
  await page.goto(
    '/learn/javascript-algorithms-and-data-structures-v8/build-a-cash-register-project/build-a-cash-register'
  );
});

test.describe('Challenge Preview Component', () => {
  // Test for inserting <style> tag and checking if the preview is empty
  test('should render an empty preview after inserting CSS', async ({
    page,
    isMobile
  }) => {
    await focusEditor({ page, isMobile });

    // Insert the <style> tag with display: block rule into the editor
    const styleTag = `
      <style>
      * {
        margin: 0;
        padding: 0;
        display: block;
      }
      </style>`;
    await page.keyboard.insertText(styleTag);

    if (isMobile) {
      await page
        .getByRole('tab', { name: translations.learn['editor-tabs'].preview })
        .click();
    }

    // Check that the iframe preview is empty
    const frame = page.frameLocator('#fcc-main-frame').first();

    // Make sure there are no visible elements inside the iframe's body
    await expect(frame.locator('body')).toBeEmpty();
  });
});
