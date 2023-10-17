import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';
import links from '../client/i18n/locales/english/links.json';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

const footerComponentElements = {
  descriptions: 'footer-desc-col',
  trendingGuidesHeader: 'trending-guides-col-header',
  trendingGuideArticles: 'trending-guides-articles',
  footerBottomHeader: 'footer-bottom-col-header',
  footerBottomLinks: 'our-nonprofit'
} as const;

test('Has descriptions', async ({ page }) => {
  const descriptions = page
    .getByTestId(footerComponentElements.descriptions)
    .locator('p');
  await expect(descriptions).toHaveCount(4);
  for (const desc of await descriptions.all()) {
    await expect(desc).toBeVisible();
  }
});

test('Has header for trending guides', async ({ page }) => {
  const trendingGuidesHeader = page.getByTestId(
    footerComponentElements.trendingGuidesHeader
  );
  await expect(trendingGuidesHeader).toBeVisible();
});

test('Has 30 trending guide articles', async ({ page }) => {
  const trendingGuideArticles = page
    .getByTestId(footerComponentElements.trendingGuideArticles)
    .locator('a');
  await expect(trendingGuideArticles).toHaveCount(30);
  for (const article of await trendingGuideArticles.all()) {
    await expect(article).toBeVisible();
  }
});

test('Has header for footer bottom', async ({ isMobile, page }) => {
  const footerBottomHeader = page.getByTestId(
    footerComponentElements.footerBottomHeader
  );
  if (isMobile) {
    await expect(footerBottomHeader).toBeVisible();
  } else {
    await expect(footerBottomHeader).toBeHidden();
  }
});

test('Has 11 nonprofits', async ({ page }) => {
  const footerBottomLinks = page
    .getByTestId(footerComponentElements.footerBottomLinks)
    .locator('a');
  await expect(footerBottomLinks).toHaveCount(11);
  for (const footerBottomLink of await footerBottomLinks.all()) {
    await expect(footerBottomLink).toBeVisible();
  }
});

test.describe('Footer component left section', () => {
  test('should render footer tax exempt statement text', async ({ page }) => {
    const footerTaxExemptText = page.getByTestId('footer-tax-exempt-status');
    await expect(footerTaxExemptText).toBeVisible();
    await expect(footerTaxExemptText).toContainText(
      translations.footer['tax-exempt-status']
    );
  });

  test('should render footer mission statement text', async ({ page }) => {
    const footerMissionStatement = page.getByTestId('footer-mission-statement');
    await expect(footerMissionStatement).toBeVisible();
    await expect(footerMissionStatement).toContainText(
      translations.footer['mission-statement']
    );
  });

  test('should render footer donation initiative text', async ({ page }) => {
    const footerDonationInitiative = page.getByTestId(
      'footer-donation-initiatives-text'
    );
    await expect(footerDonationInitiative).toBeVisible();
    await expect(footerDonationInitiative).toContainText(
      translations.footer['donation-initiatives']
    );
  });

  test('should correctly link to donations page', async ({ page }) => {
    const donationPageLink = page.getByTestId('footer-donation-page-link');
    await expect(donationPageLink).toHaveAttribute('href', '/donate');
  });
});

test.describe('Footer bottom links', () => {
  test('should display correct link to about us page', async ({ page }) => {
    const link = page.getByTestId('footer-about-url');

    expect(await link.isVisible()).toBe(true);
    await expect(link).toHaveAttribute('href', links.footer['about-url']);
    await expect(link).toHaveText(translations.footer.links.about);
  });

  test('should display correct link to alumni page', async ({ page }) => {
    const link = page.getByTestId('footer-alumni-url');

    expect(await link.isVisible()).toBe(true);
    await expect(link).toHaveAttribute(
      'href',
      'https://www.linkedin.com/school/free-code-camp/people/'
    );
    await expect(link).toHaveText(translations.footer.links.alumni);
  });

  test('should display correct link to open-source page', async ({ page }) => {
    const link = page.getByTestId('footer-open-source-url');

    expect(await link.isVisible()).toBe(true);
    await expect(link).toHaveAttribute(
      'href',
      'https://github.com/freeCodeCamp/'
    );
    await expect(link).toHaveText(translations.footer.links['open-source']);
  });

  test('should display correct link to shop', async ({ page }) => {
    const link = page.getByTestId('footer-shop-url');

    expect(await link.isVisible()).toBe(true);
    await expect(link).toHaveAttribute('href', links.footer['shop-url']);
    await expect(link).toHaveText(translations.footer.links.shop);
  });

  test('should display correct link to support page', async ({ page }) => {
    const link = page.getByTestId('footer-support-url');

    expect(await link.isVisible()).toBe(true);
    await expect(link).toHaveAttribute('href', links.footer['support-url']);
    await expect(link).toHaveText(translations.footer.links.support);
  });

  test('should display correct link to sponsors page', async ({ page }) => {
    const link = page.getByTestId('footer-sponsors-url');

    expect(await link.isVisible()).toBe(true);
    await expect(link).toHaveAttribute('href', links.footer['sponsors-url']);
    await expect(link).toHaveText(translations.footer.links.sponsors);
  });

  test('should display correct link to honesty page', async ({ page }) => {
    const link = page.getByTestId('footer-honesty-url');

    expect(await link.isVisible()).toBe(true);
    await expect(link).toHaveAttribute('href', links.footer['honesty-url']);
    await expect(link).toHaveText(translations.footer.links.honesty);
  });

  test('should display correct link to coc page', async ({ page }) => {
    const link = page.getByTestId('footer-coc-url');

    expect(await link.isVisible()).toBe(true);
    await expect(link).toHaveAttribute('href', links.footer['coc-url']);
    await expect(link).toHaveText(translations.footer.links.coc);
  });

  test('should display correct link to privacy page', async ({ page }) => {
    const link = page.getByTestId('footer-privacy-url');

    expect(await link.isVisible()).toBe(true);
    await expect(link).toHaveAttribute('href', links.footer['privacy-url']);
    await expect(link).toHaveText(translations.footer.links.privacy);
  });

  test('should display correct link to tos page', async ({ page }) => {
    const link = page.getByTestId('footer-tos-url');

    expect(await link.isVisible()).toBe(true);
    await expect(link).toHaveAttribute('href', links.footer['tos-url']);
    await expect(link).toHaveText(translations.footer.links.tos);
  });

  test('should display correct link to copyright page', async ({ page }) => {
    const link = page.getByTestId('footer-copyright-url');

    expect(await link.isVisible()).toBe(true);
    await expect(link).toHaveAttribute('href', links.footer['copyright-url']);
    await expect(link).toHaveText(translations.footer.links.copyright);
  });
});
