import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto(
    '/learn/responsive-web-design-v9/workshop-cat-photo-app/step-2'
  );
});

test.describe('Challenge Breadcrumb Tests', () => {
  test('should display correctly', async ({ page, isMobile }) => {
    const breadcrumbTest = async (testId: string) => {
      const superBlock = page.getByTestId(testId).getByRole('listitem').first();
      await expect(superBlock).toBeVisible();

      const superBlockLink = superBlock.getByRole('link', {
        name: 'Responsive Web Design Certification'
      });
      await expect(superBlockLink).toBeVisible();
      await expect(superBlockLink).toHaveAttribute(
        'href',
        '/learn/responsive-web-design-v9'
      );

      const block = page.getByTestId(testId).getByRole('listitem').last();
      await expect(superBlock).toBeVisible();

      const blockLink = block.getByRole('link', {
        name: 'Build a Cat Photo App'
      });
      await expect(blockLink).toBeVisible();
      await expect(blockLink).toHaveAttribute(
        'href',
        '/learn/responsive-web-design-v9/#workshop-cat-photo-app'
      );
    };

    if (!isMobile) {
      await expect(page.getByTestId('breadcrumb-mobile')).toBeHidden();
      await breadcrumbTest('breadcrumb-desktop');

      await page.setViewportSize({
        width: 766,
        height: 1080
      });
    }

    await expect(page.getByTestId('breadcrumb-desktop')).toBeHidden();
    await breadcrumbTest('breadcrumb-mobile');
  });
});
