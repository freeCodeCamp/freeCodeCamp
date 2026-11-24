import { test, expect } from './fixtures/isolated-user';
import translations from '../client/i18n/locales/english/translations.json';
import { clearEditor, focusEditor } from './utils/editor';

test.use({ userPreset: 'certified' });

test.describe('multifileCertProjects', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(
      'learn/2022/responsive-web-design/build-a-tribute-page-project/build-a-tribute-page'
    );
  });

  const success =
    /Your code was saved to the database\. It will be here when you return\./;
  const tooFast =
    /Slow Down! Your code was not saved\. Try again in a few seconds\./;

  test('should save and reload user code', async ({
    page,
    isMobile,
    browserName
  }) => {
    await focusEditor({ page, isMobile });
    await clearEditor({ page, browserName });

    await page.keyboard.type('save1text');
    await expect(page.getByText('save1text')).toBeVisible();

    await page.getByRole('button', { name: translations.buttons.save }).click();

    await expect(page.getByTestId('flash-message')).toContainText(success);

    await page.reload();

    await focusEditor({ page, isMobile });

    await expect(page.getByText('save1text')).toBeVisible();
  });

  test('should save using ctrl+s hotkey and persist through navigation', async ({
    page,
    isMobile,
    browserName
  }) => {
    test.skip(isMobile);

    await focusEditor({ page, isMobile });
    await clearEditor({ page, browserName });

    await page.keyboard.type('save2text');
    await expect(page.getByText('save2text')).toBeVisible();

    await page.keyboard.down('Control');
    await page.keyboard.press('KeyS');

    await expect(page.getByTestId('flash-message')).toContainText(success);

    await page.getByRole('button', { name: 'Close' }).click();

    await expect(page.getByText('save2text')).toBeVisible();

    await page.reload();

    await expect(page.getByText('save2text')).toBeVisible();
    await focusEditor({ page, isMobile });

    await page.keyboard.down('Control');
    await page.keyboard.press('KeyS');

    await expect(page.getByTestId('flash-message')).toContainText(tooFast);
  });
});
