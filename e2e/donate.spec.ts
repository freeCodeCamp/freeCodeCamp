import { test, expect, Page } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

const donationTestIds = {
  efficiencyDonation: 'efficiency-donation',
  reasonDonation_1: 'reason-donation-1',
  reasonDonation_2: 'reason-donation-2',
  donationFaq: 'donate-faq-question'
};

test.describe('Donate Page E2E Test', () => {
  let page: Page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('/donate');
  });

  test.afterAll(async () => {
    await page.close();
  });

  test('Should have a relevant page title', async () => {
    await expect(page).toHaveTitle(
      `${translations.donate.title} | freeCodeCamp.org`
    );
  });

  test('Should have the correct heading', async () => {
    const header = page.getByRole('heading', {
      name: translations.donate['help-more']
    });
    await expect(header).toBeVisible();
  });

  test('Should render the content of the donate page', async () => {
    const paragraph1Text = page.getByTestId(donationTestIds.efficiencyDonation);
    const paragraph2Text = page.getByTestId(donationTestIds.reasonDonation_1);
    const paragraph3Text = page.getByTestId(donationTestIds.reasonDonation_2);
    await expect(paragraph1Text).toHaveText(translations.donate.efficiency);
    await expect(paragraph2Text).toHaveText(
      translations.donate['why-donate-1']
    );
    await expect(paragraph3Text).toHaveText(
      translations.donate['why-donate-2']
    );
  });

  test('Should have an FAQ section', async () => {
    const header = page.getByRole('heading', { name: translations.donate.faq });
    await expect(header).toBeVisible();
    const faqs = page.getByTestId(donationTestIds.donationFaq);
    await expect(faqs).toHaveCount(12);
  });

  test('Clicking on FAQ question should reveal the answer', async () => {
    await page
      .getByRole('button', {
        name: translations.donate['how-transparent']
      })
      .click();
    const answer = page.getByText(translations.donate['very-transparent']);
    await expect(answer).toBeVisible();
  });

  test('Should render the donate button', async () => {
    const donateButton = page.getByRole('button', {
      name: translations.buttons.donate
    });
    await expect(donateButton).toBeVisible();
  });
});
