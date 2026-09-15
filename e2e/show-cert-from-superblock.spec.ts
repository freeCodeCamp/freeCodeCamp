import { expect, test } from './fixtures/isolated-user';

test.describe('When the user HAS NOT claimed their cert', () => {
  test.use({ userPreset: 'development' });

  test.beforeEach(async ({ page }) => {
    await page.goto('/learn/front-end-development-libraries');
  });

  test('should see a "Go to settings to claim your certification" pointing to "/settings#cert-front-end-development-libraries"', async ({
    page
  }) => {
    const link = page.getByRole('link', {
      name: 'Go to settings to claim your certification'
    });

    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute(
      'href',
      '/settings#cert-front-end-development-libraries'
    );
  });
});

test.describe('When the user HAS claimed their cert', () => {
  test.use({ userPreset: 'certified' });

  test.beforeEach(async ({ page }) => {
    await page.goto('/learn/front-end-development-libraries');
  });

  test('should see a "Show Certification" link pointing to their certification', async ({
    page,
    isolatedUser
  }) => {
    const link = page.getByRole('link', {
      name: 'Show Certification'
    });

    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute(
      'href',
      `/certification/${isolatedUser.username}/front-end-development-libraries`
    );
  });
});
