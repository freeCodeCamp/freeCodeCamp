import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto(
    '/learn/2022/responsive-web-design/learn-basic-css-by-building-a-cafe-menu/step-15'
  );
});

test.describe('MultifileEditor Component', () => {
  test('Multiple editors should be selected and able to insert text into', async ({
    page,
    isMobile
  }) => {
    // Spawn second editor to test MultifileEditor component
    const stylesEditor = page.getByRole('button', {
      name: 'styles.css Editor'
    });
    await stylesEditor.click();

    // Use the `.toHaveCount()` assertion to ensure that the second editor is on the screen
    // before moving onto other assertions.
    // Note that using the `.all()` locator here would result a flaky test.
    // Ref: https://github.com/freeCodeCamp/freeCodeCamp/pull/53031/files#r1500316812
    const editors = page.getByLabel('Editor content');
    await expect(editors).toHaveCount(2);

    const test_string = 'TestString';
    let index = 0;
    for (const editor of await editors.all()) {
      // For some reason the click event doesn't work on mobile
      if (isMobile) {
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
