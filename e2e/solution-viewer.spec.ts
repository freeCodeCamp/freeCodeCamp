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

    const project_solution_viewer_modal = page.getByTestId(
      'project-solution-viewer-modal'
    );
    await expect(project_solution_viewer_modal).toBeVisible();

    // The modal should show the solution title...
    await expect(
      page.getByRole('heading').and(page.getByText(/solution for/i))
    ).toBeVisible();
    // ...and relevant code file/s
    await expect(page.getByText(/js/i)).toBeVisible();
    await expect(page.locator('pre').first()).toBeVisible();

    const top_left_close_button = page.locator('button.close');
    await top_left_close_button.click();
    await expect(project_solution_viewer_modal).toBeHidden();

    await page.getByRole('button').filter({ hasText: /view/i }).first().click();
    const bottom_right_close_button = page.getByTestId(
      'close-project-solution-viewer'
    );
    await bottom_right_close_button.click();
    await expect(project_solution_viewer_modal).toBeHidden();
  });
});
