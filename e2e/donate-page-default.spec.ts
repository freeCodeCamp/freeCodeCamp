import { test, expect, type Page } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

const frequentlyAskedQuestions = [
  translations.donate['get-help'],
  translations.donate['how-transparent'],
  translations.donate['how-efficient'],
  translations.donate['how-one-time'],
  translations.donate['does-crypto'],
  translations.donate['can-check'],
  translations.donate['how-matching-gift'],
  translations.donate['how-endowment'],
  translations.donate['how-legacy'],
  translations.donate['how-stock'],
  translations.donate['how-update'],
  translations.donate['anything-else']
];

let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto('/donate');
});

test.afterAll(async () => {
  await page.close();
});

test.describe('Donate Page', () => {
  test('should display the correct title', async () => {
    await expect(page).toHaveTitle('Support our charity | freeCodeCamp.org');
  });

  test('should display the main heading', async () => {
    const mainHeading = page.getByTestId('main-head');
    expect(mainHeading).not.toBeNull();
    expect(await mainHeading.textContent()).toBe('Help us do more');
  });

  test('should display donation page upper text 1', async () => {
    const donateText1 = page.getByTestId('donate-text-1');
    await expect(donateText1).toHaveText(
      'freeCodeCamp is a highly efficient education charity.'
    );
  });

  test('should display donation page benefit 2', async () => {
    const donateText2 = page.getByTestId('donate-text-2');
    await expect(donateText2).toHaveText(
      'When you donate to freeCodeCamp, you help people learn new skills and provide for their families.'
    );
  });

  test('should display donation page benefit 3', async () => {
    const donateText3 = page.getByTestId('donate-text-3');
    await expect(donateText3).toHaveText(
      'You also help us create new resources for you to use to expand your own technology skills.'
    );
  });

  test('should display the faq heading', async () => {
    const faqHead = page.getByTestId('faq-head');
    expect(faqHead).not.toBeNull();
    expect(await faqHead.textContent()).toBe('Frequently asked questions');
  });

  test('Frequently asked question list buttons', async () => {
    for (const i of frequentlyAskedQuestions) {
      await page.getByRole('button', { name: `${i}` }).isVisible();
    }
  });
});
