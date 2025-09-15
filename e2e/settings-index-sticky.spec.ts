import { execSync } from 'child_process';
import { test, expect } from '@playwright/test';
import { MAX_MOBILE_WIDTH } from '../client/config/misc';

test.describe('Settings Page - Sticky Index Widget', () => {
  test.beforeEach(async ({ page }) => {
    execSync('node ./tools/scripts/seed/seed-demo-user --certified-user');
    await page.goto('/settings');
    await page.waitForSelector('.settings-container');
  });

  test('index widget should have sticky positioning CSS properties', async ({
    page
  }) => {
    const indexElement = page.locator('.index');
    await expect(indexElement).toBeVisible();

    const position = await indexElement.evaluate(el =>
      window.getComputedStyle(el).getPropertyValue('position')
    );

    const top = await indexElement.evaluate(el =>
      window.getComputedStyle(el).getPropertyValue('top')
    );

    expect(position).toBe('sticky');
    expect(top).not.toBe('auto');
    expect(top).not.toBe('0px');
  });

  test('index widget should remain visible when scrolling down', async ({
    page
  }) => {
    const indexElement = page.locator('.index');
    const initialBoundingBox = await indexElement.boundingBox();

    if (!initialBoundingBox) {
      throw new Error('Could not get bounding box for index element');
    }

    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });

    await page.waitForTimeout(500);

    const scrolledBoundingBox = await indexElement.boundingBox();

    if (!scrolledBoundingBox) {
      throw new Error(
        'Could not get bounding box for index element after scrolling'
      );
    }

    expect(scrolledBoundingBox.y).toBeLessThan(500);

    const isVisible = await indexElement.isVisible();
    expect(isVisible).toBe(true);

    const certTitles = page.locator('.index h2:has-text("Certifications")');
    await expect(certTitles).toBeVisible();
  });

  test('index widget should allow navigation to certification sections', async ({
    page
  }) => {
    const firstCertLink = page.locator('.index button.cert-anchor-btn').first();
    const certName = await firstCertLink.textContent();
    await firstCertLink.click();
    await page.waitForTimeout(500);

    if (certName) {
      const certHeading = page.getByRole('heading', {
        name: certName,
        exact: true
      });

      await expect(certHeading).toBeVisible();

      const headingBoundingBox = await certHeading.boundingBox();

      if (headingBoundingBox) {
        const viewportHeight = await page.evaluate(() => window.innerHeight);
        expect(headingBoundingBox.y).toBeLessThan(viewportHeight);
      }
    }
  });

  test('index widget should not be visible on mobile viewport', async ({
    page
  }) => {
    await page.setViewportSize({ width: MAX_MOBILE_WIDTH, height: 667 });
    await page.waitForTimeout(500);

    const indexElement = page.locator('.index');
    const isVisible = await indexElement.isVisible();
    expect(isVisible).toBe(false);
  });
});
