import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto(
    '/learn/2022/responsive-web-design/build-a-survey-form-project/build-a-survey-form'
  );
});
test.afterEach(async ({ page }) => {
  await page.close();
});

test('should toggle editor visibility based on aria-expanded attribute', async ({
  page
}) => {
  // Find the first button that is not expanded (aria-expanded="false")
  const notExpandedButton = await page.$('button[aria-expanded="false"]');

  // If there's a button that's not expanded, click it
  if (notExpandedButton) {
    await notExpandedButton.click();

    // After the click, it should now have aria-expanded="true"
    const isExpandedAfterClick =
      await notExpandedButton.getAttribute('aria-expanded');
    expect(isExpandedAfterClick).toBe('true');
  }

  // Find the first button that is expanded (aria-expanded="true")
  const expandedButton = await page.$('button[aria-expanded="true"]');

  // If there's a button that's expanded, click it
  if (expandedButton) {
    await expandedButton.click();

    // After the click, it should now have aria-expanded="false"
    const isNotExpandedAfterClick =
      await expandedButton.getAttribute('aria-expanded');
    expect(isNotExpandedAfterClick).toBe('false');
  }
});

test('toggling the button should toggle the appearance of the corresponding ReflexElement', async ({
  page
}) => {
  // Fetch all the editor tab buttons
  const editorTabs = await page.$$('[data-playwright-test-label="editor-tab"]');

  for (const tab of editorTabs) {
    const tabFileKey = await tab.getAttribute('data-cy');
    if (tabFileKey) {
      const fileKey = tabFileKey.replace('editor-tab-', '');

      // Check the initial state of the button and the corresponding ReflexElement
      const ariaExpandedBeforeClick = await tab.getAttribute('aria-expanded');
      const reflexElementBeforeClick = await page.$(
        `[data-cy="editor-container-${fileKey}"]`
      );

      // If ariaExpandedBeforeClick is "true", then reflexElementBeforeClick should be truthy, and vice versa.
      if (ariaExpandedBeforeClick === 'true') {
        expect(reflexElementBeforeClick).toBeTruthy();
      } else {
        expect(reflexElementBeforeClick).toBeFalsy();
      }

      // Click the button to toggle its state
      await tab.click();

      // Check the new state of the button and the corresponding ReflexElement
      const ariaExpandedAfterClick = await tab.getAttribute('aria-expanded');
      const reflexElementAfterClick = await page.$(
        `[data-cy="editor-container-${fileKey}"]`
      );

      // If ariaExpandedAfterClick is "true", then reflexElementAfterClick should be truthy, and vice versa.
      if (ariaExpandedAfterClick === 'true') {
        expect(reflexElementAfterClick).toBeTruthy();
      } else {
        expect(reflexElementAfterClick).toBeFalsy();
      }
    } else {
      throw new Error('Missing data-cy attribute on an editor tab button');
    }
  }
});
