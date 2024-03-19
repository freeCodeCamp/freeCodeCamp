import { test, expect } from '@playwright/test';

test.use({ storageState: 'playwright/.auth/certified-user.json' });

test.describe('Solution Viewer component', () => {
  test('renders the modal correctly', async ({ page }) => {
    await page.goto(
      '/certification/certifieduser/javascript-algorithms-and-data-structures'
    );

    await page.getByRole('button').filter({ hasText: /view/i }).first().click();

    const projectSolutionViewerModal = page.getByRole('dialog').first();

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

  test('renders external project links correctly', async ({ page }) => {
    await page.goto(
      '/certification/certifieduser/front-end-development-libraries'
    );

    const projectLinkButton = page.getByTestId('project-link').first();
    const browserContext = page.context();

    const [newPage] = await Promise.all([
      browserContext.waitForEvent('page'),
      projectLinkButton.click()
    ]);

    await newPage.waitForLoadState();

    await expect(newPage).toHaveURL(/^https:\/\/codepen\.io/);

    await newPage.close();
  });

  test('render projects with multiple solutions correctly', async ({
    page
  }) => {
    await page.goto('/certification/certifieduser/quality-assurance-v7');

    const projectLinkButton = page.getByTestId('project-link').first();

    await projectLinkButton.click();

    const sourceLink = page.getByText(/source/i).first();

    const browserContext = page.context();
    const [newPage] = await Promise.all([
      browserContext.waitForEvent('page'),
      sourceLink.click()
    ]);

    await newPage.waitForLoadState();

    await newPage.close();
  });
});
