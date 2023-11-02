import { test, expect } from '@playwright/test';

test.use({ storageState: 'playwright/.auth/certified-user.json' });

test.beforeEach(async ({ page }) => {
  await page.goto('/settings');
});

test('Multifile dropdown testing', async ({ page }) => {
  const multifile_dropdown = page.getByTestId('multifile-dropdown');
  const isVisible = await multifile_dropdown.isVisible();
  if (isVisible) {
    await multifile_dropdown.click();
    const multifile_dropdown_code = page.getByTestId('multifile-dropdown-code');
    const multifile_dropdown_project = page.getByTestId(
      'multifile-dropdown-project'
    );
    await expect(multifile_dropdown_code).toBeVisible();
    await expect(multifile_dropdown_project).toBeVisible();

    await multifile_dropdown_code.click();
    const project_solution_viewer_modal = page.getByTestId(
      'project-solution-viewer-modal'
    );
    await expect(project_solution_viewer_modal).toBeVisible();
    const close_button = page.locator('button.close');
    await close_button.click();

    await multifile_dropdown.click();
    await multifile_dropdown_project.click();
    const project_preview_modal = page.getByTestId('project-preview-modal');
    await expect(project_preview_modal).toBeVisible();
  }
});
