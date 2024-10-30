import { expect, Page, test } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

const faqPageElements = {
  faq: 'landing-page-faq'
} as const;

async function goToFAQPage(page: Page) {
  await page.goto('/faq');
}

test.describe('FAQ Page', () => {
  test.beforeEach(async ({ page }) => {
    await goToFAQPage(page);
  });

  test('Has FAQ section', async ({ page }) => {
    const faqs = page.getByTestId(faqPageElements.faq);
    await expect(faqs).toHaveCount(9);
  });

  test('Call to action button should render correctly', async ({ page }) => {
    const ctas = page.getByRole('link', {
      name: translations.buttons['logged-in-cta-btn']
    });
    await expect(ctas).toHaveCount(1);
    for (const cta of await ctas.all()) {
      await expect(cta).toBeVisible();
    }
  });
});
