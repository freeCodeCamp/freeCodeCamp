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

    const menuButton = page.locator(
      'button[aria-controls="review-outline-panel"]'
    );
    await menuButton.click();
    await expect(menuButton).toHaveText(/Close/);

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

  test('keeps active nav item in view while scrolling', async ({ page }) => {
    await page.goto(
      '/learn/responsive-web-design-v9/review-semantic-html/review-semantic-html'
    );

    await page.locator('button[aria-controls="review-outline-panel"]').click();

    const outlinePanel = page.locator('#review-outline-panel');
    await expect(outlinePanel).toBeVisible();

    const firstOutlineLink = outlinePanel
      .locator('.review-outline-link')
      .first();
    await firstOutlineLink.click();
    await expect(firstOutlineLink).toHaveClass(/active/);

    await page.evaluate(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'auto'
      });
    });

    const activeLink = outlinePanel
      .locator('.review-outline-link.active')
      .first();
    await expect(activeLink).toBeVisible();

    const inView = await activeLink.evaluate((item, panelId) => {
      const panel = document.getElementById(panelId);
      if (!panel) return false;

      const panelRect = panel.getBoundingClientRect();
      const itemRect = item.getBoundingClientRect();
      return (
        itemRect.top >= panelRect.top && itemRect.bottom <= panelRect.bottom
      );
    }, 'review-outline-panel');

    expect(inView).toBe(true);
  });
});
