import { test, expect } from '@playwright/test';

test.describe('Picture input field', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/certifieduser');

    await page.getByRole('button', { name: 'Edit my profile' }).click();
  });

  test('Should be possible to type', async ({ page }) => {
    const pictureInput = page.getByLabel('Picture');
    await pictureInput.fill('');
    await pictureInput.fill('twaha');
    await expect(pictureInput).toHaveAttribute('value', 'twaha');
  });

  test('Show an error message if an incorrect url was submitted', async ({
    page
  }) => {
    const pictureInput = page.getByLabel('Picture');
    await pictureInput.fill('');
    await pictureInput.fill(
      'https://cdn.freecodecamp.org/platform/universal/camper-image-placeholder'
    );
    await expect(
      page.getByText('URL must link directly to an image file')
    ).toBeVisible();
  });

  test('Can submit a correct URL', async ({ page }) => {
    const pictureInput = page.getByLabel('Picture');
    await pictureInput.fill('');
    await pictureInput.fill(
      'https://cdn.freecodecamp.org/platform/universal/camper-image-placeholder.png'
    );

    const form = page.getByTestId('camper-identity');
    const saveButton = form.getByRole('button', { name: 'Save' });
    await expect(saveButton).toBeEnabled();
  });
});
