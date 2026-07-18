import { execSync } from 'child_process';
import { test, expect } from '@playwright/test';

test.use({ storageState: 'playwright/.auth/development-user.json' });

test.beforeAll(() => {
  execSync('node ../tools/scripts/seed/seed-demo-user');
});

test.afterAll(() => {
  execSync('node ../tools/scripts/seed/seed-demo-user --certified-user');
});

test.describe('Add Experience Item', () => {
  test.skip(({ browserName }) => browserName === 'webkit', 'flaky on Safari');

  test.beforeEach(async ({ page }) => {
    await page.goto('/developmentuser');

    // The 'Add experience' icon button is on the profile page directly.
    // Click it to open the experience modal.
    await page.getByRole('button', { name: 'Add experience' }).click();

    // Wait for the experience form to be visible inside the modal.
    await expect(page.getByLabel('Company')).toBeVisible();
  });

  test('It should be possible to delete an experience item', async ({
    page
  }) => {
    await page.getByLabel('Company').fill('freeCodeCamp');
    await page.getByLabel('Job Title').fill('Software Engineer');
    await page.getByLabel('Start Date').fill('01/2020');
    await page.getByLabel('End Date', { exact: false }).fill('01/2021');
    // Use locator to avoid conflict with About section's Location field
    await page.locator('input[name="experience-location"]').fill('Remote');
    await page.getByLabel('Description').fill('Worked on various projects');

    await page.getByRole('button', { name: 'Remove experience' }).click();

    // Modal closes automatically after removal
    await expect(page.getByRole('alert').first()).toContainText(
      /We have updated your experience/
    );
  });

  test('It should be possible to add an experience item', async ({ page }) => {
    await page.getByLabel('Company').fill('freeCodeCamp');
    await page.getByLabel('Job Title').fill('Software Engineer');
    await page.getByLabel('Start Date').fill('01/2020');
    await page.getByLabel('End Date', { exact: false }).fill('01/2021');
    // Use locator to avoid conflict with About section's Location field
    await page.locator('input[name="experience-location"]').fill('Remote');
    await page.getByLabel('Description').fill('Worked on various projects');

    await page.getByRole('button', { name: 'Save experience' }).click();

    // Modal closes automatically after a successful save
    await expect(page.getByRole('alert').first()).toContainText(
      /We have updated your experience/
    );
  });
});
