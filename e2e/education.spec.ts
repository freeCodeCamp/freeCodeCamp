import { execSync } from 'child_process';
import { test, expect } from '@playwright/test';

test.use({ storageState: 'playwright/.auth/development-user.json' });

test.beforeAll(() => {
  execSync('node ../tools/scripts/seed/seed-demo-user');
});

test.afterAll(() => {
  execSync('node ../tools/scripts/seed/seed-demo-user --certified-user');
});

test.describe('Add Education Item', () => {
  test.skip(({ browserName }) => browserName === 'webkit', 'flaky on Safari');

  test.beforeEach(async ({ page }) => {
    await page.goto('/developmentuser');

    if (!process.env.CI) {
      await page
        .getByRole('button', { name: 'Preview custom 404 page' })
        .click();
    }

    await page.getByRole('button', { name: 'Edit my profile' }).click();

    await expect(async () => {
      const addEducationItemButton = page.getByRole('button', {
        name: 'Add education'
      });
      await addEducationItemButton.click();

      await expect(addEducationItemButton).toBeDisabled({ timeout: 1 });
    }).toPass();
  });

  test('The school has validation', async ({ page }) => {
    await page.getByLabel('School').fill('A');
    await expect(page.getByText('School name is too short')).toBeVisible();

    await page
      .getByLabel('School')
      .fill(
        'This is the longest school name you will ever see in your entire life, you will never see such a long school name again. This is the longest school name in existen'
      );
    await expect(page.getByText('School name is too long')).toBeVisible();
    await page.getByLabel('School').fill('freeCodeCamp University');
    await expect(page.getByText('School name is too short')).toBeHidden();
    await expect(page.getByText('School name is too long')).toBeHidden();
  });

  test('The degree has validation', async ({ page }) => {
    await page.getByLabel('Degree').fill('A');
    await expect(page.getByText('Degree is too short')).toBeVisible();

    await page
      .getByLabel('Degree')
      .fill(
        'This is the longest degree you will ever see in your entire life, you will never see such a long degree again. This is the longest degree in existence'
      );
    await expect(page.getByText('Degree is too long')).toBeVisible();
    await page.getByLabel('Degree').fill('Bachelor of Science');
    await expect(page.getByText('Degree is too short')).toBeHidden();
    await expect(page.getByText('Degree is too long')).toBeHidden();
  });

  test('The start date has validation', async ({ page }) => {
    await page.locator('input[name="education-startDate"]').fill('13/2023');
    await expect(page.getByText('Please enter a valid date.')).toBeVisible();

    await page.locator('input[name="education-startDate"]').fill('01/2023');
    await expect(page.getByText('Please enter a valid date.')).toBeHidden();
  });

  test('The end date has validation', async ({ page }) => {
    await page.locator('input[name="education-endDate"]').fill('13/2023');
    await expect(page.getByText('Please enter a valid date.')).toBeVisible();

    await page.locator('input[name="education-endDate"]').fill('01/2023');
    await expect(page.getByText('Please enter a valid date.')).toBeHidden();
  });

  test('The description has validation', async ({ page }) => {
    await page
      .locator('textarea[name="education-description"]')
      .fill('A'.repeat(501));
    await expect(
      page.getByText(
        'There is a maximum limit of 500 characters, you have 0 left'
      )
    ).toBeVisible();
    await page
      .locator('textarea[name="education-description"]')
      .fill('Studied computer science fundamentals');
    await expect(
      page.getByText(
        'There is a maximum limit of 500 characters, you have 0 left'
      )
    ).toBeHidden();
  });

  test('It should be possible to delete an education item', async ({
    page
  }) => {
    await page.getByLabel('School').fill('freeCodeCamp University');
    await page.getByLabel('Degree').fill('Bachelor of Science');
    await page.getByLabel('Field of Study').fill('Computer Science');
    await page.locator('input[name="education-startDate"]').fill('09/2018');
    await page.locator('input[name="education-endDate"]').fill('05/2022');
    await page.locator('input[name="education-location"]').fill('Online');
    await page
      .locator('textarea[name="education-description"]')
      .fill('Studied computer science fundamentals');

    await page.getByRole('button', { name: 'Remove education' }).click();

    await page.getByRole('button', { name: 'Close' }).click();

    await expect(page.getByRole('alert').first()).toContainText(
      /We have updated your education/
    );
  });

  test('It should be possible to add an education item', async ({ page }) => {
    await expect(
      page.getByRole('button', { name: 'Add education' })
    ).toBeDisabled();

    await page.getByLabel('School').fill('freeCodeCamp University');
    await page.getByLabel('Degree').fill('Bachelor of Science');
    await page.getByLabel('Field of Study').fill('Computer Science');
    await page.locator('input[name="education-startDate"]').fill('09/2018');
    await page.locator('input[name="education-endDate"]').fill('05/2022');
    await page.locator('input[name="education-location"]').fill('Online');
    await page
      .locator('textarea[name="education-description"]')
      .fill('Studied computer science fundamentals');

    await page.getByRole('button', { name: 'Save education' }).click();
    await page.getByRole('button', { name: 'Close' }).click();
    await expect(page.getByRole('alert').first()).toContainText(
      /We have updated your education/
    );
  });

  test('It should be possible to add education with only required fields', async ({
    page
  }) => {
    await page.getByLabel('School').fill('MIT');
    await page.getByLabel('Degree').fill('PhD');

    await page.getByRole('button', { name: 'Save education' }).click();
    await page.getByRole('button', { name: 'Close' }).click();
    await expect(page.getByRole('alert').first()).toContainText(
      /We have updated your education/
    );
  });
});
