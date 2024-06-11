import { execSync } from 'child_process';
import { test, expect, type Page } from '@playwright/test';
import { focusEditor, clearEditor } from './utils/editor';
import { isMacOS } from './utils/user-agent';

test.use({ storageState: 'playwright/.auth/certified-user.json' });

const saveCode = async (page: Page) => {
  if (isMacOS) {
    await page.keyboard.press('Meta+S');
  } else {
    await page.keyboard.press('Control+S');
  }
};

test.describe('multifileCertProjects', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(
      'learn/2022/responsive-web-design/build-a-tribute-page-project/build-a-tribute-page'
    );
    execSync('node ./tools/scripts/seed/seed-demo-user certified-user');
  });

  test('should save the code when the user clicks the save button', async ({
    page,
    isMobile,
    browserName
  }) => {
    await focusEditor({ page, isMobile });
    await clearEditor({ page, browserName });

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
    isMobile,
    browserName
  }) => {
    test.setTimeout(20000);

    await focusEditor({ page, isMobile });
    await clearEditor({ page, browserName });

    await page.keyboard.type('save2text');
    await expect(page.getByText('save2text')).toBeVisible();

    await saveCode(page);

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
    isMobile,
    browserName
  }) => {
    await focusEditor({ page, isMobile });
    await clearEditor({ page, browserName });

    await page.keyboard.type('some code');
    await saveCode(page);

    await expect(
      page.getByRole('alert').filter({
        hasText:
          /Your code was saved to the database\. It will be here when you return\./
      })
    ).toBeVisible();

    await saveCode(page);
    await saveCode(page);
    await saveCode(page);

    const flashes = page.getByRole('alert').filter({
      hasText:
        /Slow Down! Your code was not saved\. Try again in a few seconds\./
    });
    await expect(flashes).toHaveCount(3);
  });
});
