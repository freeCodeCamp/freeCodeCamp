import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

test.describe('Add Portfolio Item', () => {
  test.use({ storageState: 'playwright/.auth/certified-user.json' });

  test.beforeEach(async ({ page }) => {
    await page.goto('/settings#portfolio-settings'); // Make sure your login redirects to '/settings'
  });

  test('should be possible to add a portfolio item', async ({ page }) => {
    const addNewItem = page.getByRole('button', {
      name: translations.buttons['add-portfolio']
    });

    await expect(addNewItem).toBeVisible();
    await addNewItem.click();
    await expect(page.locator('text="A title is required"')).toBeVisible();

    await page
      .getByTestId('portfolio-title')
      .nth(0)
      .fill('This is a portfolio item');
    await expect(
      page
        .getByRole('button', { name: translations.buttons['save-portfolio'] })
        .nth(0)
    ).toBeEnabled();

    await expect(page.locator('text="Please use a valid URL"')).toBeVisible();
    await page
      .getByTestId('portfolio-url')
      .nth(0)
      .fill('This is a portfolio item');
    await expect(
      page.locator('text="URL must start with http or https"')
    ).toBeVisible();

    await page.getByTestId('portfolio-url').nth(0).fill('http://google.com');

    await page.getByTestId('portfolio-image').nth(0).fill('hello');
    await expect(
      page.locator('text="URL must start with http or https"')
    ).toBeVisible();
    await page
      .getByTestId('portfolio-image')
      .nth(0)
      .fill(
        'https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg'
      );

    await page
      .getByTestId('portfolio-description')
      .nth(0)
      .fill(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod metus velit, vel accumsan lorem facilisis ac. Maecenas vitae ultrices dolor. Fusce in lobortis arcu, vel congue risus. Sed id neque nec nibh hendrerit bibendum. Integer venenatie.'
      );
    await expect(
      page.locator(
        'text="There is a maximum limit of 288 characters, you have 40 left"'
      )
    ).toBeVisible();

    // Append to the description to reach the limit
    await page
      .getByTestId('portfolio-description')
      .nth(0)
      .fill(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod metus velit, vel accumsan lorem facilisis ac. Maecenas vitae ultrices dolor. Fusce in lobortis arcu, vel congue risus. Sed id neque nec nibh hendrerit bibendum.Integer venenatie. Lorem ipsum dolor sit amet, consecteturs.'
      );
    await expect(
      page.locator(
        'text="There is a maximum limit of 288 characters, you have 0 left"'
      )
    ).toBeVisible();

    await expect(
      page
        .getByRole('button', { name: translations.buttons['save-portfolio'] })
        .nth(0)
    ).not.toBeEnabled();

    await page
      .getByTestId('portfolio-description')
      .nth(0)
      .fill('Lorem ipsum dolor sit amet, consecteturs.');
    await page
      .getByRole('button', { name: translations.buttons['save-portfolio'] })
      .nth(0)
      .click();

    await expect(
      page.locator('text="We have updated your portfolio"')
    ).toBeVisible();
  });
});
