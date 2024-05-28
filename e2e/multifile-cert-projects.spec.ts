import { execSync } from 'child_process';
import { test, expect } from '@playwright/test';
import { focusEditor } from './utils/editor';
import { isMacOS } from './utils/user-agent';
test.use({ storageState: 'playwright/.auth/certified-user.json' });
test.describe('multifileCertProjects', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(
      'learn/2022/responsive-web-design/build-a-tribute-page-project/build-a-tribute-page'
    );
    execSync('node ./tools/scripts/seed/seed-demo-user certified-user');
  });
  test('should save and reload user code', async ({ page, isMobile }) => {
    await focusEditor({ page, isMobile });

    if (isMacOS) {
      await page.keyboard.press('Meta+A');
    } else {
      await page.keyboard.press('Control+A');
    }

    await page.keyboard.press('Backspace');

    await page.keyboard.type('save1text');
    await expect(page.getByText('save1text')).toBeVisible();

    await page.getByRole('button', { name: 'Save your Code' }).click();

    await expect(page.getByTestId('flash-message')).toContainText(
      /Your code was saved to the database. It will be here when you return./
    );

    await page.reload();

    await expect(page.getByText('save1text')).toBeVisible();
  });

  test('should save using ctrl+s hotkey and persist through navigation', async ({
    page,
    isMobile
  }) => {
    await focusEditor({ page, isMobile });

    if (isMacOS) {
      await page.keyboard.press('Meta+A');
    } else {
      await page.keyboard.press('Control+A');
    }

    await page.keyboard.type('save2text');
    await expect(page.getByText('save2text')).toBeVisible();

    await page.keyboard.down('Control');
    await page.keyboard.press('KeyS');

    await expect(page.getByTestId('flash-message')).toContainText(
      /Your code was saved to the database. It will be here when you return./
    );

    await page.getByRole('button', { name: 'Close' }).click();

    await expect(page.getByText('save2text')).toBeVisible();

    await page.reload();

    await expect(page.getByText('save2text')).toBeVisible();

    await focusEditor({ page, isMobile });

    await page.keyboard.down('Control');
    await page.keyboard.press('KeyS');

    await expect(page.getByTestId('flash-message')).toContainText(
      /Slow Down! Your code was not saved. Try again in a few seconds./
    );
  });
});
