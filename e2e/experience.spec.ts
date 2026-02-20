import { execSync } from 'child_process';
import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

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

    const openExperienceModalButton = page.getByRole('button', {
      name: new RegExp(
        `${translations.profile['add-new-experience']}|profile\\.add-new-experience`,
        'i'
      )
    });
    await expect(openExperienceModalButton).toBeVisible({ timeout: 30000 });
    await openExperienceModalButton.click();

    await expect(async () => {
      const addExperienceItemButton = page.getByRole('button', {
        name: 'Add experience'
      });
      await addExperienceItemButton.click();

      await expect(addExperienceItemButton).toBeDisabled({ timeout: 1 });
    }).toPass();
  });

  test('The company has validation', async ({ page }) => {
    await page.getByLabel('Company').fill('A');
    await expect(page.getByText('Company name is too short')).toBeVisible();

    await page
      .getByLabel('Company')
      .fill(
        'This is the longest company name you will ever see in your entire life, you will never see such a long company name again. This is the longest company name in existen'
      );
    await expect(page.getByText('Company name is too long')).toBeVisible();
    await page.getByLabel('Company').fill('freeCodeCamp');
    await expect(page.getByText('Company name is too short')).toBeHidden();
    await expect(page.getByText('Company name is too long')).toBeHidden();
  });

  test('The position has validation', async ({ page }) => {
    await page.getByLabel('Job Title').fill('A');
    await expect(page.getByText('Title is too short')).toBeVisible();

    await page
      .getByLabel('Job Title')
      .fill(
        'This is the longest position you will ever see in your entire life, you will never see such a long position again. This is the longest position in existen'
      );
    await expect(page.getByText('Title is too long')).toBeVisible();
    await page.getByLabel('Job Title').fill('Software Engineer');
    await expect(page.getByText('Title is too short')).toBeHidden();
    await expect(page.getByText('Title is too long')).toBeHidden();
  });

  test('The start date has validation', async ({ page }) => {
    await page.getByLabel('Start Date').fill('13/2023');
    await expect(page.getByText('Please enter a valid date.')).toBeVisible();

    await page.getByLabel('Start Date').fill('01/2023');
    await expect(page.getByText('Please enter a valid date.')).toBeHidden();
  });

  test('The end date has validation', async ({ page }) => {
    await page.getByLabel('End Date', { exact: false }).fill('13/2023');
    await expect(page.getByText('Please enter a valid date.')).toBeVisible();

    await page.getByLabel('End Date', { exact: false }).fill('01/2023');
    await expect(page.getByText('Please enter a valid date.')).toBeHidden();
  });

  test('The description has validation', async ({ page }) => {
    await page.getByLabel('Description').fill('A'.repeat(1001));
    await expect(
      page.getByText(
        'There is a maximum limit of 500 characters, you have 0 left'
      )
    ).toBeVisible();
    await page.getByLabel('Description').fill('Worked on various projects');
    await expect(
      page.getByText(
        'There is a maximum limit of 500 characters, you have 0 left'
      )
    ).toBeHidden();
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

    await page.getByRole('button', { name: 'Remove Experience' }).click();

    await page.getByRole('button', { name: 'Close' }).click();

    await expect(page.getByRole('alert').first()).toContainText(
      /We have updated your experience/
    );
  });

  test('It should be possible to add an experience item', async ({ page }) => {
    await expect(
      page.getByRole('button', { name: 'Add experience' })
    ).toBeDisabled();

    await page.getByLabel('Company').fill('freeCodeCamp');
    await page.getByLabel('Job Title').fill('Software Engineer');
    await page.getByLabel('Start Date').fill('01/2020');
    await page.getByLabel('End Date', { exact: false }).fill('01/2021');
    // Use locator to avoid conflict with About section's Location field
    await page.locator('input[name="experience-location"]').fill('Remote');
    await page.getByLabel('Description').fill('Worked on various projects');

    await page.getByRole('button', { name: 'Save experience' }).click();
    await page.getByRole('button', { name: 'Close' }).click();
    await expect(page.getByRole('alert').first()).toContainText(
      /We have updated your experience/
    );
  });
});
