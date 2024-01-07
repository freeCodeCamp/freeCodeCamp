import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto(
    '/learn/2022/responsive-web-design/learn-basic-css-by-building-a-cafe-menu/step-15'
  );
});

test.describe('MultifileEditor Component', () => {
  test('Multiple editors should be selected and able to insert text into', async ({
    page,
    isMobile,
    browserName
  }) => {
    // Spawn second editor to test MultifileEditor component
    const stylesEditor = page.getByRole('button', {
      name: 'styles.css Editor'
    });
    await stylesEditor.click();

    // Ensure two editors exist
    const secondEditor = page.getByLabel('Editor content').locator('nth=1');
    await expect(secondEditor).toBeVisible();

    const editors = await page.getByLabel('Editor content').all();

    // Test text insertion works in both editors
    const test_string = 'TestString';
    let index = 0;
    for (const editor of editors) {
      if (isMobile && browserName === 'webkit') {
        await editor.focus();
      } else {
        await editor.click();
      }
      await page.keyboard.insertText(test_string + index.toString());
      const text = page.getByText(test_string + index.toString());
      await expect(text).toBeVisible();
      index++;
    }
  });
});
