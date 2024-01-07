import { test, expect } from '@playwright/test';

test.use({ storageState: 'playwright/.auth/certified-user.json' });

test.beforeEach(async ({ page }) => {
  await page.goto(
    '/certification/certifieduser/javascript-algorithms-and-data-structures'
  );
});

test.describe('Solution Viewer component', () => {
  test('renders the modal correctly', async ({ page }) => {
    await page.getByRole('button').filter({ hasText: /view/i }).first().click();

    const projectSolutionViewerModal = page.getByTestId(
      'project-solution-viewer-modal'
    );
    await expect(projectSolutionViewerModal).toBeVisible();

    // The modal should show the solution title...
    await expect(
      page.getByRole('heading').and(page.getByText(/solution for/i))
    ).toBeVisible();
    // ...and relevant code file/s
    await expect(page.getByText(/js/i)).toBeVisible();
    await expect(page.locator('pre').first()).toBeVisible();

    const closeButtons = await page
      .getByRole('button', { name: 'Close' })
      .all();

    const topRightCloseButton = closeButtons[0];
    await topRightCloseButton.click();
    await expect(projectSolutionViewerModal).toBeHidden();

    await page.getByRole('button', { name: 'View' }).first().click();
    const bottomRightCloseButton = closeButtons[1];
    await bottomRightCloseButton.click();
    await expect(projectSolutionViewerModal).toBeHidden();
  });
});
