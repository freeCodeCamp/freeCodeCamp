import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';
import links from '../client/i18n/locales/english/links.json';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe('Footer component left section', () => {
  test('should render the content properly', async ({ page }) => {
    await expect(
      page.getByText(translations.footer['tax-exempt-status'])
    ).toBeVisible();
    await expect(
      page.getByText(translations.footer['mission-statement'])
    ).toBeVisible();
    await expect(
      page.getByText(translations.footer['donation-initiatives'])
    ).toBeVisible();
    await expect(
      page.getByRole('link', { name: 'make a tax-deductible donation here' })
    ).toHaveAttribute('href', '/donate');
  });
});

test.describe('Footer Trending Guides section', () => {
  test('should render the section with a header and 30 articles', async ({
    page
  }) => {
    await expect(
      page.getByRole('heading', {
        name: translations.footer['trending-guides']
      })
    ).toBeVisible();

    const articles = await page
      .getByTestId('trending-guides-articles')
      .getByRole('link')
      .all();

    expect(articles).toHaveLength(30);

    for (const article of articles) {
      await expect(article).toBeVisible();
    }
  });
});

test.describe('Footer bottom links', () => {
  test('should display correct link to about us page', async ({ page }) => {
    const link = page.getByRole('link', {
      name: translations.footer.links.about
    });

    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', links.footer['about-url']);
  });

  test('should display correct link to alumni page', async ({ page }) => {
    const link = page.getByRole('link', {
      name: translations.footer.links.alumni
    });

    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute(
      'href',
      'https://www.linkedin.com/school/free-code-camp/people/'
    );
  });

  test('should display correct link to open-source page', async ({ page }) => {
    const link = page.getByRole('link', {
      name: translations.footer.links['open-source']
    });

    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute(
      'href',
      'https://github.com/freeCodeCamp/'
    );
  });

  test('should display correct link to shop', async ({ page }) => {
    const link = page.getByRole('link', {
      name: translations.footer.links.shop
    });

    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', links.footer['shop-url']);
  });

  test('should display correct link to support page', async ({ page }) => {
    const link = page.getByRole('link', {
      name: translations.footer.links.support
    });

    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', links.footer['support-url']);
  });

  test('should display correct link to sponsors page', async ({ page }) => {
    const link = page.getByRole('link', {
      name: translations.footer.links.sponsors
    });

    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', links.footer['sponsors-url']);
  });

  test('should display correct link to honesty page', async ({ page }) => {
    const link = page.getByRole('link', {
      name: translations.footer.links.honesty
    });

    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', links.footer['honesty-url']);
  });

  test('should display correct link to coc page', async ({ page }) => {
    const link = page.getByRole('link', {
      name: translations.footer.links.coc
    });

    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', links.footer['coc-url']);
  });

  test('should display correct link to privacy page', async ({ page }) => {
    const link = page.getByRole('link', {
      name: translations.footer.links.privacy
    });

    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', links.footer['privacy-url']);
  });

  test('should display correct link to tos page', async ({ page }) => {
    const link = page.getByRole('link', {
      name: translations.footer.links.tos
    });

    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', links.footer['tos-url']);
  });

  test('should display correct link to copyright page', async ({ page }) => {
    const link = page.getByRole('link', {
      name: translations.footer.links.copyright
    });

    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', links.footer['copyright-url']);
  });
});
