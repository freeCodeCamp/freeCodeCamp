import { execSync } from 'child_process';
import { test, expect } from '@playwright/test';
import { focusEditor } from './utils/editor';

test.use({ storageState: 'playwright/.auth/certified-user.json' });
test.describe('multifileCertProjects', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(
      'learn/2022/responsive-web-design/build-a-tribute-page-project/build-a-tribute-page'
    );
    execSync('node ./tools/scripts/seed/seed-demo-user certified-user');
  });

  test('should save the code when the user clicks the save button', async ({
    page,
    isMobile
  }) => {
    await focusEditor({ page, isMobile });

    await page.keyboard.press('ControlOrMeta+A');
    await page.keyboard.press('Backspace');

    await page.keyboard.type('save1text');
    await expect(page.getByText('save1text')).toBeVisible();

    await page.getByRole('button', { name: 'Save your Code' }).click();

    await expect(
      page.getByRole('alert').filter({
        hasText:
          /Your code was saved to the database\. It will be here when you return\./
      })
    ).toBeVisible();

    await page.reload();

    await expect(page.getByText('save1text')).toBeVisible();
  });

  test('should save using ctrl+s hotkey and persist through navigation', async ({
    page,
    isMobile
  }) => {
    test.setTimeout(20000);

    await focusEditor({ page, isMobile });

    await page.keyboard.press('ControlOrMeta+A');
    await page.keyboard.type('save2text');
    await expect(page.getByText('save2text')).toBeVisible();

    await page.keyboard.press('ControlOrMeta+S');

    await expect(
      page.getByRole('alert').filter({
        hasText:
          /Your code was saved to the database\. It will be here when you return\./
      })
    ).toBeVisible();

    await page.reload();

    await expect(page.getByText('save2text')).toBeVisible();
  });

  test('should prevent the user from saving code too quickly', async ({
    page,
    isMobile
  }) => {
    await focusEditor({ page, isMobile });

    await page.keyboard.type('some code');

    await page.keyboard.press('ControlOrMeta+S');

    await expect(
      page.getByRole('alert').filter({
        hasText:
          /Your code was saved to the database\. It will be here when you return\./
      })
    ).toBeVisible();

    await page.keyboard.press('ControlOrMeta+S');
    await page.keyboard.press('ControlOrMeta+S');
    await page.keyboard.press('ControlOrMeta+S');

    const flashes = page.getByRole('alert').filter({
      hasText:
        /Slow Down! Your code was not saved\. Try again in a few seconds\./
    });
    await expect(flashes).toHaveCount(3);
  });
});
