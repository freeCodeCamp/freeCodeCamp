import { test, expect, type Page } from '@playwright/test';

const footerComponentElements = {
  descriptions: 'footer-desc-col',
  trendingGuidesHeader: 'trending-guides-col-header',
  trendingGuideArticles: 'trending-guides-articles',
  footerBottomHeader: 'footer-bottom-col-header',
  footerBottomLinks: 'our-nonprofit'
} as const;

let page: Page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto('/');
});

test.afterAll(async () => {
  await page.close();
});

test('Has descriptions', async () => {
  const descriptions = page
    .getByTestId(footerComponentElements.descriptions)
    .locator('p');
  await expect(descriptions).toHaveCount(4);
  for (const desc of await descriptions.all()) {
    await expect(desc).toBeVisible();
  }
});

test('Has header for trending guides', async () => {
  const trendingGuidesHeader = page.getByTestId(
    footerComponentElements.trendingGuidesHeader
  );
  await expect(trendingGuidesHeader).toBeVisible();
});

test('Has 30 trending guide articles', async () => {
  const trendingGuideArticles = page
    .getByTestId(footerComponentElements.trendingGuideArticles)
    .locator('a');
  await expect(trendingGuideArticles).toHaveCount(30);
  for (const article of await trendingGuideArticles.all()) {
    await expect(article).toBeVisible();
  }
});

test('Has header for footer bottom', async ({ isMobile }) => {
  const footerBottomHeader = page.getByTestId(
    footerComponentElements.footerBottomHeader
  );
  if (isMobile) {
    await expect(footerBottomHeader).toBeVisible();
  } else {
    await expect(footerBottomHeader).toBeHidden();
  }
});

test('Has 11 nonprofits', async () => {
  const footerBottomLinks = page
    .getByTestId(footerComponentElements.footerBottomLinks)
    .locator('a');
  await expect(footerBottomLinks).toHaveCount(11);
  for (const footerBottomLink of await footerBottomLinks.all()) {
    await expect(footerBottomLink).toBeVisible();
  }
});
