import { test, expect, type Page } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

test.use({ storageState: 'playwright/.auth/certified-user.json' });

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

const donationStringReplacements = {
  usdPlaceHolder: '{{usd}}',
  hoursPlaceHolder: '{{hours}}'
};

const donationFormStrings = {
  conformTwentyDollar: translations.donate['confirm-monthly'].replace(
    donationStringReplacements.usdPlaceHolder,
    '20'
  ),
  confirmFiveDollars: translations.donate['confirm-monthly'].replace(
    donationStringReplacements.usdPlaceHolder,
    '5'
  ),
  twentyDollarsLearningContribution: translations.donate['your-donation-2']
    .replace(donationStringReplacements.usdPlaceHolder, '20')
    .replace(donationStringReplacements.hoursPlaceHolder, '1,000'),
  fiveDollarsLearningContribution: translations.donate['your-donation-2']
    .replace(donationStringReplacements.usdPlaceHolder, '5')
    .replace(donationStringReplacements.hoursPlaceHolder, '250'),
  editAmount: translations.donate['edit-amount'],
  donate: translations.buttons.donate
};

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

  test('should select $20 tier by default', async () => {
    await expect(
      page.getByText(donationFormStrings.conformTwentyDollar)
    ).toBeVisible();

    const tabs = await page.$$('[role="tab"]');
    expect(tabs.length).toBe(4);

    for (const tab of tabs) {
      const tabText = await tab.innerText();
      expect(['$5', '$10', '$20', '$40']).toContain(tabText);

      if (tabText === '$20') {
        const isActive = await tab.getAttribute('data-state');
        expect(isActive).toBe('active');
      } else {
        const isActive = await tab.getAttribute('data-state');
        expect(isActive).not.toBe('active');
      }
    }
    await expect(
      page.getByText(donationFormStrings.twentyDollarsLearningContribution)
    ).toBeVisible();
  });

  test('should make $5 tier selectable', async () => {
    await page.click('[role="tab"]:has-text("$5")');

    await expect(
      page.getByText(donationFormStrings.confirmFiveDollars)
    ).toBeVisible();

    await expect(
      page.getByText(donationFormStrings.fiveDollarsLearningContribution)
    ).toBeVisible();
  });

  test('should switch between tier selection and payment options', async () => {
    // Tier selection
    await page.click('[role="tab"]:has-text("$5")');
    await expect(
      page.getByText(donationFormStrings.confirmFiveDollars)
    ).toBeVisible();
    await expect(
      page.getByText(donationFormStrings.fiveDollarsLearningContribution)
    ).toBeVisible();
    await page.click(`button:has-text("${donationFormStrings.donate}")`);

    // Donation form
    const isEditButtonVisible = await page.isVisible(
      `button:has-text("${donationFormStrings.editAmount}")`
    );
    expect(isEditButtonVisible).toBeTruthy();
    await expect(page.getByTestId('donation-form')).toBeVisible();
    await page.click(`button:has-text("${donationFormStrings.editAmount}")`);

    // Tier selection
    await expect(
      page.getByText(donationFormStrings.confirmFiveDollars)
    ).toBeVisible();
    await expect(
      page.getByText(donationFormStrings.fiveDollarsLearningContribution)
    ).toBeVisible();
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
