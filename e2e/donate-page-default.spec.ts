import { test, expect, type Page } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

const pageElements = {
  mainHeading: 'main-head',
  donateText1: 'donate-text-1',
  donateText2: 'donate-text-2',
  donateText3: 'donate-text-3',
  faqHeading: 'faq-head',
  campersImage: 'landing-page-figure'
};

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

test.describe('Donate Page', () => {
  test('should display the correct title', async () => {
    await expect(page).toHaveTitle(
      `${translations.donate.title} | freeCodeCamp.org`
    );
  });

  test('should display the main heading', async () => {
    const mainHeading = page.getByTestId(pageElements.mainHeading);
    await expect(mainHeading).toHaveText(translations.donate['help-more']);
  });

  test('should display donation page upper text 1', async () => {
    const donateText1 = page.getByTestId(pageElements.donateText1);
    await expect(donateText1).toHaveText(translations.donate.efficiency);
  });

  test('should display donation page benefit 2', async () => {
    const donateText2 = page.getByTestId(pageElements.donateText2);
    await expect(donateText2).toHaveText(translations.donate['why-donate-1']);
  });

  test('should display donation page benefit 3', async () => {
    const donateText3 = page.getByTestId(pageElements.donateText3);
    await expect(donateText3).toHaveText(translations.donate['why-donate-2']);
  });

  test('should render the campers image in desktop browsers', async ({
    isMobile
  }) => {
    const figure = page.getByTestId(pageElements.campersImage);

    if (isMobile) {
      await expect(figure).not.toBeVisible();
      return;
    }

    await expect(figure).toBeVisible();
  });

  test('should display the faq heading', async () => {
    const faqHead = page.getByTestId(pageElements.faqHeading);
    await expect(faqHead).toHaveText(translations.donate.faq);
  });

  test('should display the faq list with buttons', async () => {
    for (const question of frequentlyAskedQuestions) {
      await page.getByRole('button', { name: question }).isVisible();
    }
  });
});
