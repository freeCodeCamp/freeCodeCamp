import { test, expect } from './fixtures/isolated-user';
import { alertToBeVisible } from './utils/alerts';

test.use({ userPreset: 'development' });

test.describe('Experience item management', () => {
  test.skip(({ browserName }) => browserName === 'webkit', 'flaky on Safari');

  test.beforeEach(async ({ isolatedUser, page }) => {
    await page.goto(`/${isolatedUser.username}`);

    await page.getByRole('button', { name: 'Add experience' }).click();
    await expect(page.getByLabel('Company')).toBeVisible();
    await page.getByLabel('Company').fill('freeCodeCamp');
    await page.getByLabel('Job Title').fill('Software Engineer');
    await page.getByLabel('Start Date').fill('01/2020');
    await page.getByLabel('End Date', { exact: false }).fill('01/2021');
    // Use locator to avoid conflict with About section's Location field
    await page.locator('input[name="experience-location"]').fill('Remote');
    await page.getByLabel('Description').fill('Worked on various projects');
  });

  test('should keep an added experience item after reloading', async ({
    page
  }) => {
    await page.getByRole('button', { name: 'Save experience' }).click();
    await alertToBeVisible(page, 'We have updated your experience');

    await page.reload();

    const experienceSection = page.locator('section').filter({
      has: page.getByRole('heading', { name: 'Experience', exact: true })
    });
    await expect(
      experienceSection.getByRole('heading', {
        name: 'Software Engineer',
        exact: true
      })
    ).toBeVisible();
    await expect(
      experienceSection.getByRole('heading', {
        name: 'freeCodeCamp • Remote',
        exact: true
      })
    ).toBeVisible();
    await expect(
      experienceSection.getByText('Jan 2020 - Jan 2021', { exact: true })
    ).toBeVisible();
    await expect(
      experienceSection.getByText('Worked on various projects', {
        exact: true
      })
    ).toBeVisible();
  });

  test('should keep a saved experience item deleted after reloading', async ({
    page
  }) => {
    await page.getByRole('button', { name: 'Save experience' }).click();
    await alertToBeVisible(page, 'We have updated your experience');

    await page.reload();

    const experienceSection = page.locator('section').filter({
      has: page.getByRole('heading', { name: 'Experience', exact: true })
    });
    const experienceItem = experienceSection
      .locator('.experience-item-wrapper')
      .filter({
        has: page.getByRole('heading', {
          name: 'Software Engineer',
          exact: true
        })
      });
    await expect(experienceItem).toBeVisible();
    await experienceItem
      .getByRole('button', { name: 'Edit experience', exact: true })
      .click();
    await expect(page.getByLabel('Company')).toHaveValue('freeCodeCamp');
    await page.getByRole('button', { name: 'Remove experience' }).click();
    await alertToBeVisible(page, 'We have updated your experience');

    await page.reload();

    // Wait for the saved profile to load before checking that the item is gone.
    await expect(
      experienceSection.getByRole('button', {
        name: 'Add experience',
        exact: true
      })
    ).toBeVisible();
    await expect(
      experienceSection.locator('.experience-item-wrapper')
    ).toHaveCount(0);
  });
});
