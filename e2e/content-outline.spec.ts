import { test, expect } from '@playwright/test';

test.describe('Content outline', () => {
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

    const toggleButton = page.getByRole('button', { name: 'Outline' });
    await toggleButton.click();
    await expect(toggleButton).toHaveAttribute('aria-expanded', 'true');

    const outlinePanel = page.getByRole('navigation', {
      name: 'Content outline'
    });
    await expect(outlinePanel).toBeVisible();

    const outlineItems = outlinePanel.getByRole('listitem');
    expect(await outlineItems.count()).toBeGreaterThan(0);

    await expect(
      outlinePanel.getByRole('link', { name: 'Semantic HTML Review' })
    ).toHaveCount(0);
  });

  test('sidebar closes on mobile when an item is clicked', async ({
    page,
    isMobile
  }) => {
    test.skip(!isMobile, 'Only test on mobile');

    await page.goto(
      '/learn/responsive-web-design-v9/review-semantic-html/review-semantic-html'
    );

    const toggleButton = page.getByRole('button', { name: 'Outline' });
    await toggleButton.click();
    await expect(toggleButton).toHaveAttribute('aria-expanded', 'true');

    const outlinePanel = page.getByRole('navigation', {
      name: 'Content outline'
    });
    await expect(outlinePanel).toBeVisible();

    const firstLink = outlinePanel.locator('a').first();
    await firstLink.click();

    // panel should hide after click
    await expect(outlinePanel).toBeHidden();
  });

  test('keeps active nav item in view while scrolling', async ({ page }) => {
    await page.goto(
      '/learn/responsive-web-design-v9/review-semantic-html/review-semantic-html'
    );

    await page.getByRole('button', { name: 'Outline' }).click();

    const outlinePanel = page.getByRole('navigation', {
      name: 'Content outline'
    });
    await expect(outlinePanel).toBeVisible();

    const firstOutlineLink = outlinePanel.locator('a').first();
    await firstOutlineLink.click();
    await expect(firstOutlineLink).toHaveClass(/active/);

    await page.evaluate(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'auto'
      });
    });

    const activeLink = outlinePanel
      .locator('.content-outline-link.active')
      .first();
    await expect(activeLink).toBeVisible();

    const inView = await activeLink.evaluate(item => {
      const panel = item.closest('nav');
      if (!panel) return false;

      const panelRect = panel.getBoundingClientRect();
      const itemRect = item.getBoundingClientRect();
      return (
        itemRect.top >= panelRect.top && itemRect.bottom <= panelRect.bottom
      );
    });

    expect(inView).toBe(true);
  });
});
