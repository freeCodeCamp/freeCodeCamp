import { test, expect, type Page } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

let page: Page;

const donatePageElements = {
  postDonationHeading: 'donate-thank-you',
  preDonationHeading: 'donate-help-more',
  landingPageFigure: 'landing-page-figure',
  donateEfficiencyText: 'donate-efficiency',
  donateReasonFirst: 'donate-why-1',
  donateReasonSecond: 'donate-why-2',
  faqHeading: 'donate-faq-heading'
};

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto('/donate');
});

test.afterAll(async () => {
  await page.close();
});

test.describe('Donate Page Tests', () => {
  test('The page displays the correct title', async () => {
    await expect(page).toHaveTitle(
      `${translations.donate.title} | freeCodeCamp.org`
    );
  });

  test('The page displays the correct top heading', async () => {
    const postDonationHeading = page.getByTestId(
      donatePageElements.postDonationHeading
    );
    const preDonationHeading = page.getByTestId(
      donatePageElements.preDonationHeading
    );

    if (await postDonationHeading.isVisible()) {
      await expect(postDonationHeading).toHaveText(
        translations.donate['thank-you']
      );
      return;
    }

    await expect(preDonationHeading).toBeVisible();
    await expect(preDonationHeading).toHaveText(
      translations.donate['help-more']
    );
  });

  test('The page displays the correct body text', async () => {
    const donateEfficiencyText = page.getByTestId(
      donatePageElements.donateEfficiencyText
    );
    const donateReasonFirst = page.getByTestId(
      donatePageElements.donateReasonFirst
    );
    const donateReasonSecond = page.getByTestId(
      donatePageElements.donateReasonSecond
    );

    await expect(donateEfficiencyText).toHaveText(
      translations.donate.efficiency
    );
    await expect(donateReasonFirst).toHaveText(
      translations.donate['why-donate-1']
    );
    await expect(donateReasonSecond).toHaveText(
      translations.donate['why-donate-2']
    );
  });

  test('The page renders the image in desktop browsers', async ({
    isMobile
  }) => {
    const figure = page.getByTestId(donatePageElements.landingPageFigure);

    if (isMobile) {
      await expect(figure).not.toBeVisible();
      return;
    }

    await expect(figure).toBeVisible();
  });

  test('The page displays the FAQ heading', async () => {
    const heading = page.getByTestId(donatePageElements.faqHeading);
    await expect(heading).toHaveText(translations.donate.faq);
  });
});
