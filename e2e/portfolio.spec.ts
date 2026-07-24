import { execSync } from 'child_process';
import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

test.use({ storageState: 'playwright/.auth/certified-user.json' });

test.beforeAll(() => {
  execSync('node ../tools/scripts/seed/seed-demo-user --certified-user');
});

test.afterAll(() => {
  execSync('node ../tools/scripts/seed/seed-demo-user --certified-user');
});

test.describe('Portfolio item management', () => {
  test('It should be possible to add and remove a portfolio item', async ({
    page
  }) => {
    await page.goto('/certifieduser');

    await page
      .getByRole('button', { name: translations.aria['add-portfolio'] })
      .click();
    await expect(
      page.getByLabel(translations.settings.labels.title)
    ).toBeVisible();

    await page
      .getByLabel(translations.settings.labels.title)
      .fill('My portfolio');
    await page
      .getByLabel(translations.settings.labels.url)
      .fill('https://my-portfolio.com');
    await page
      .getByLabel(translations.settings.labels.image)
      .fill(
        'https://cdn.freecodecamp.org/universal/favicons/favicon-32x32.png'
      );
    await page
      .getByLabel(translations.settings.labels.description)
      .fill('My description');

    const saveButton = page.getByRole('button', {
      name: translations.buttons['save-portfolio']
    });
    await expect(saveButton).toBeEnabled();
    await saveButton.click();

    await expect(page.getByRole('alert').first()).toContainText(
      /We have updated your portfolio/
    );
    await expect(
      page.getByRole('link', { name: /My portfolio/ })
    ).toBeVisible();

    await page
      .getByRole('button', { name: translations.aria['edit-portfolio'] })
      .click();
    await page
      .getByRole('button', { name: translations.buttons['remove-portfolio'] })
      .click();

    await expect(page.getByRole('alert').first()).toContainText(
      /We have updated your portfolio/
    );
    await expect(
      page.getByRole('link', { name: /My portfolio/ })
    ).not.toBeVisible();
  });
});
