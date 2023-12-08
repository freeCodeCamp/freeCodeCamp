import { test, expect } from '@playwright/test';

test.use({ storageState: 'playwright/.auth/certified-user.json' });

test.describe('Classic challenge - 3 pane desktop layout component', () => {
  test('The page has desktop layout with instructions/editor/preview pane', async ({
    page,
    isMobile
  }) => {
    const desktopLayout = page.getByTestId('desktop-layout');
    const actionRow = desktopLayout.getByTestId('action-row');
    const tabsRow = desktopLayout.getByTestId('tabs-row');
    const reflexContainer = desktopLayout.getByTestId('main-container');
    const instructionPane = desktopLayout.getByTestId('instruction-pane');
    const editorPane = desktopLayout.getByTestId('editor-pane');
    const previewPane = desktopLayout.getByTestId('preview-pane');

    await page.goto(
      'learn/2022/responsive-web-design/build-a-survey-form-project/build-a-survey-form'
    );

    if (isMobile) {
      await expect(desktopLayout).toBeHidden();
      await expect(actionRow).toBeHidden();
      await expect(tabsRow).toBeHidden();
      await expect(reflexContainer).toBeHidden();
      await expect(instructionPane).toBeHidden();
      await expect(editorPane).toBeHidden();
      await expect(previewPane).toBeHidden();
    } else {
      await expect(desktopLayout).toBeVisible();
      await expect(actionRow).toBeVisible();
      await expect(tabsRow).toBeVisible();
      await expect(reflexContainer).toBeVisible();
      await expect(instructionPane).toBeVisible();
      await expect(editorPane).toBeVisible();
      await expect(previewPane).toBeVisible();
    }
  });
});

test.describe('Classic challenge - 2 pane desktop layout component', () => {
  test('The page has desktop layout with instructions/editor pane', async ({
    page,
    isMobile
  }) => {
    await page.goto(
      'learn/javascript-algorithms-and-data-structures/basic-javascript/use-recursion-to-create-a-range-of-numbers'
    );

    const desktopLayout = page.getByTestId('desktop-layout');
    const actionRow = desktopLayout.getByTestId('action-row');
    const tabsRow = desktopLayout.getByTestId('tabs-row');
    const reflexContainer = desktopLayout.getByTestId('main-container');
    const instructionPane = desktopLayout.getByTestId('instruction-pane');
    const editorPane = desktopLayout.getByTestId('editor-pane');
    const previewPane = desktopLayout.getByTestId('preview-pane');

    if (isMobile) {
      await expect(desktopLayout).toBeHidden();
      await expect(actionRow).toBeHidden();
      await expect(tabsRow).toBeHidden();
      await expect(reflexContainer).toBeHidden();
      await expect(instructionPane).toBeHidden();
      await expect(editorPane).toBeHidden();
      await expect(previewPane).toBeHidden();
    } else {
      await expect(desktopLayout).toBeVisible();
      await expect(actionRow).toBeHidden();
      await expect(tabsRow).toBeHidden();
      await expect(reflexContainer).toBeVisible();
      await expect(instructionPane).toBeVisible();
      await expect(editorPane).toBeVisible();
      await expect(previewPane).toBeHidden();
    }
  });
});
