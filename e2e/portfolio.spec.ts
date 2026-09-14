import { test, expect } from './fixtures/isolated-user';
import translations from '../client/i18n/locales/english/translations.json';

test.use({ userPreset: 'certified' });

test.describe('Portfolio item management', () => {
  test('It should be possible to add and remove a portfolio item', async ({
    page,
    isolatedUser
  }) => {
    await page.goto(`/${isolatedUser.username}`);

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
