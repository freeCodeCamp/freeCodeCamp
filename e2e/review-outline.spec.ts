import { test, expect } from '@playwright/test';

test.describe('Review outline', () => {
  test.skip(({ isMobile }) => isMobile, 'Only test on desktop');

  test('shows section headings without a top menu header item', async ({
    page
  }) => {
    await page.goto(
      '/learn/responsive-web-design-v9/review-semantic-html/review-semantic-html'
    );

    await expect(
      page.getByRole('heading', { name: 'Semantic HTML Review' })
    ).toBeVisible();

    const menuButton = page.getByRole('button', { name: 'Menu' });
    await menuButton.click();
    await expect(page.getByRole('button', { name: 'Close' })).toBeVisible();

    const outlinePanel = page.locator('#review-outline-panel');
    await expect(outlinePanel).toBeVisible();

    const outlineItems = outlinePanel.locator(
      '.review-outline-item-level-2, .review-outline-item-level-3'
    );
    expect(await outlineItems.count()).toBeGreaterThan(0);

    await expect(
      outlinePanel.locator('.review-outline-item-level-1')
    ).toHaveCount(0);
    await expect(
      outlinePanel.getByRole('link', { name: 'Semantic HTML Review' })
    ).toHaveCount(0);
  });
});
