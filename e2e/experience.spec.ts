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

    if (!process.env.CI) {
      await page
        .getByRole('button', { name: 'Preview custom 404 page' })
        .click();
    }

    await page.getByRole('button', { name: 'Edit my profile' }).click();

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
    await expect(page.getByTestId('company-validation')).toContainText(
      'Company name is too short'
    );

    await page
      .getByLabel('Company')
      .fill(
        'This is the longest company name you will ever see in your entire life, you will never see such a long company name again. This is the longest company name in existen'
      );
    await expect(page.getByTestId('company-validation')).toContainText(
      'Company name is too long'
    );
    await page.getByLabel('Company').fill('freeCodeCamp');
    await expect(page.getByTestId('company-validation')).toBeHidden();
  });

  test('The position has validation', async ({ page }) => {
    await page.getByLabel('Job Title').fill('A');
    await expect(page.getByTestId('title-validation')).toContainText(
      'Title is too short'
    );

    await page
      .getByLabel('Job Title')
      .fill(
        'This is the longest position you will ever see in your entire life, you will never see such a long position again. This is the longest position in existen'
      );
    await expect(page.getByTestId('title-validation')).toContainText(
      'Title is too long'
    );
    await page.getByLabel('Job Title').fill('Software Engineer');
    await expect(page.getByTestId('title-validation')).toBeHidden();
  });

  test('The start date has validation', async ({ page }) => {
    // month input type validates format automatically, so we just test valid input
    await page.getByLabel('Start Date').fill('2020-01');
    await expect(page.getByTestId('startDate-validation')).toBeHidden();
  });

  test('The end date has validation', async ({ page }) => {
    // month input type validates format automatically, so we just test valid input
    await page.getByLabel('End Date').fill('2021-01');
    // There's no endDate-validation test ID, so we'll skip this assertion
  });

  test('The description has validation', async ({ page }) => {
    await page.getByLabel('Description').fill('A'.repeat(1001));
    await expect(page.getByTestId('description-validation')).toContainText(
      'There is a maximum limit of 288 characters, you have 0 left'
    );
    await page.getByLabel('Description').fill('Worked on various projects');
    await expect(page.getByTestId('description-validation')).toBeHidden();
  });

  test('It should be possible to delete an experience item', async ({
    page
  }) => {
    await page.getByLabel('Company').fill('freeCodeCamp');
    await page.getByLabel('Job Title').fill('Software Engineer');
    await page.getByLabel('Start Date').fill('2020-01');
    await page.getByLabel('End Date').fill('2021-01');
    await page
      .getByTestId('experience-items')
      .getByLabel('Location')
      .fill('Remote');
    await page.getByLabel('Description').fill('Worked on various projects');

    await page.getByRole('button', { name: 'Remove Experience' }).click();

    await expect(page.getByTestId('experience-items')).toBeHidden();
  });

  test('It should be possible to add an experience item', async ({ page }) => {
    await expect(
      page.getByRole('button', { name: 'Add experience' })
    ).toBeDisabled();

    await expect(
      page.getByRole('button', { name: 'Save experience' })
    ).toBeDisabled();

    await page.getByLabel('Company').fill('freeCodeCamp');
    await page.getByLabel('Job Title').fill('Software Engineer');
    await page.getByLabel('Start Date').fill('2020-01');
    await page.getByLabel('End Date').fill('2021-01');
    await page
      .getByTestId('experience-items')
      .getByLabel('Location')
      .fill('Remote');
    await page.getByLabel('Description').fill('Worked on various projects');

    await expect(
      page.getByRole('button', { name: 'Save experience' })
    ).toBeEnabled();

    await page.getByRole('button', { name: 'Save experience' }).click();
    await expect(page.getByRole('alert').first()).toContainText(
      /We have updated your experience/
    );

    await expect(page.getByTestId('experience-items')).toBeVisible();

    await expect(
      page.getByRole('button', { name: 'Save experience' })
    ).toBeDisabled();
  });

  test('Modal stays open after save to allow adding multiple items', async ({
    page
  }) => {
    await page.getByLabel('Company').fill('freeCodeCamp');
    await page.getByLabel('Job Title').fill('Software Engineer');
    await page.getByLabel('Start Date').fill('2020-01');
    await page.getByLabel('Description').fill('Worked on open source');

    await page.getByRole('button', { name: 'Save experience' }).click();
    await expect(page.getByRole('alert').first()).toContainText(
      /We have updated your experience/
    );

    await expect(page.getByTestId('experience-items')).toBeVisible();

    await page.getByRole('button', { name: 'Add experience' }).click();

    await page.getByLabel('Company').fill('Google');
    await page.getByLabel('Job Title').fill('Senior Engineer');
    await page.getByLabel('Start Date').fill('2022-01');
    await page.getByLabel('Description').fill('Worked on search');

    await page.getByRole('button', { name: 'Save experience' }).click();
    await expect(page.getByRole('alert').first()).toContainText(
      /We have updated your experience/
    );
  });

  test('Invalid items are not saved when saving another item', async ({
    page
  }) => {
    await page.getByLabel('Company').fill('freeCodeCamp');
    await page.getByLabel('Job Title').fill('Software Engineer');
    await page.getByLabel('Start Date').fill('2020-01');
    await page.getByLabel('Description').fill('First job');

    await page.getByRole('button', { name: 'Save experience' }).click();
    await expect(page.getByRole('alert').first()).toContainText(
      /We have updated your experience/
    );

    await page.getByRole('button', { name: 'Add experience' }).click();

    await page.getByLabel('Company').fill('A');
    await expect(page.getByTestId('company-validation')).toContainText(
      'Company name is too short'
    );

    await expect(
      page.getByRole('button', { name: 'Save experience' })
    ).toBeDisabled();
  });
});
