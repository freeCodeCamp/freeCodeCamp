import { test, expect, type Page } from '@playwright/test';

const frequentlyAskedQuestions = [
  'How can I get help with my donations?',
  'How transparent is freeCodeCamp.org?',
  'How efficient is freeCodeCamp?',
  'How can I make a one-time donation?',
  'Does freeCodeCamp accept donations in Bitcoin or other cryptocurrencies?',
  'Can I mail a physical check?',
  'How can I set up matching gifts from my employer, or payroll deductions?',
  'How can I set up an Endowment Gift to freeCodeCamp.org?',
  'How can I set up a Legacy gift to freeCodeCamp.org?',
  'How can I donate stock to freeCodeCamp.org?',
  'I set up a monthly donation, but I need to update or pause the monthly recurrence. How can I do this?',
  'Is there anything else I can learn about donating to freeCodeCamp.org?'
];

let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto('/donate');
});

test.afterAll(async () => {
  await page.close();
});

test.describe('Should render the donation page correctly', () => {
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
      await page.getByRole('button', { name: `${i}` }).click();
    }
  });
});
