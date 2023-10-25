import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto(
    '/learn/2022/responsive-web-design/build-a-survey-form-project/build-a-survey-form'
  );
});

test('should toggle editor visibility based on aria-expanded attribute', async ({
  page
}) => {
  const tabLocator = page.locator('div.monaco-editor-tabs button').first();
  const isExpandedBeforeClick = await tabLocator.getAttribute('aria-expanded');
  if (isExpandedBeforeClick === 'true') {
    await tabLocator.click();
    const isExpandedAfterClick = await tabLocator.getAttribute('aria-expanded');
    expect(isExpandedAfterClick).toBe('false');
  } else {
    await tabLocator.click();
    const isExpandedAfterClick = await tabLocator.getAttribute('aria-expanded');
    expect(isExpandedAfterClick).toBe('true');
  }
});

test('toggling the button should toggle the appearance of the corresponding ReflexElement', async ({
  page
}) => {
  const tabsLocator = await page.locator('div.monaco-editor-tabs button').all();
  for (const tab of tabsLocator) {
    const tabFileKey = await tab.getAttribute('data-cy');
    if (tabFileKey) {
      const fileKey = tabFileKey.replace('editor-tab-', '');

      const ariaExpandedBeforeClick = await tab.getAttribute('aria-expanded');
      const reflexElementBeforeClick = page.locator(
        `div[data-cy="editor-container-${fileKey}"]`
      );

      if (ariaExpandedBeforeClick === 'true') {
        await expect(reflexElementBeforeClick).toBeVisible();
      } else {
        await expect(reflexElementBeforeClick).toBeHidden();
      }

      await tab.click();

      const ariaExpandedAfterClick = await tab.getAttribute('aria-expanded');
      const reflexElementAfterClick = page.locator(
        `div[data-cy="editor-container-${fileKey}"]`
      );

      if (ariaExpandedAfterClick === 'true') {
        await expect(reflexElementAfterClick).toBeVisible();
      } else {
        await expect(reflexElementAfterClick).toBeHidden();
      }
    } else {
      throw new Error('Missing data-cy attribute on an editor tab button');
    }
  }
});
