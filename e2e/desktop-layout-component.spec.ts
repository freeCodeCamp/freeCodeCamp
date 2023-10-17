import { test, expect } from '@playwright/test';

test.use({ storageState: 'playwright/.auth/certified-user.json' });

test.describe('Classic challengs - 3 pane desktop layout component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(
      'learn/2022/responsive-web-design/build-a-survey-form-project/build-a-survey-form'
    );
  });

  test('The page has desktop layout with instructions/editor/preview pane', async ({
    page
  }) => {
    const desktopLayout = page.getByTestId('desktop-layout');
    await expect(desktopLayout).toBeVisible();

    const actionRow = desktopLayout.getByTestId('action-row');
    await expect(actionRow).toBeVisible();

    const tabsRow = desktopLayout.getByTestId('tabs-row');
    await expect(tabsRow).toBeVisible();

    const reflexContainer = desktopLayout.getByTestId('main-container');
    await expect(reflexContainer).toBeVisible();

    const instructionPane = desktopLayout.getByTestId('instruction-pane');
    await expect(instructionPane).toBeVisible();

    const editorPane = desktopLayout.getByTestId('editor-pane');
    await expect(editorPane).toBeVisible();

    const previewPane = desktopLayout.getByTestId('preview-pane');
    await expect(previewPane).toBeVisible();
  });
});

test.describe('Classic challengs - 2 pane desktop layout component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(
      'learn/javascript-algorithms-and-data-structures/basic-javascript/use-recursion-to-create-a-range-of-numbers'
    );
  });

  test('The page has desktop layout with instructions/editor pan', async ({
    page
  }) => {
    const desktopLayout = page.getByTestId('desktop-layout');
    await expect(desktopLayout).toBeVisible();

    const actionRow = desktopLayout.getByTestId('action-row');
    await expect(actionRow).not.toBeVisible();

    const tabsRow = desktopLayout.getByTestId('tabs-row');
    await expect(tabsRow).not.toBeVisible();

    const reflexContainer = desktopLayout.getByTestId('main-container');
    await expect(reflexContainer).toBeVisible();

    const instructionPane = desktopLayout.getByTestId('instruction-pane');
    await expect(instructionPane).toBeVisible();

    const editorPane = desktopLayout.getByTestId('editor-pane');
    await expect(editorPane).toBeVisible();

    const previewPane = desktopLayout.getByTestId('preview-pane');
    await expect(previewPane).not.toBeVisible();
  });
});
