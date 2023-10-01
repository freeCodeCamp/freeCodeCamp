import { test, expect, type Page } from '@playwright/test';

let page: Page;
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
test.describe('Donate page', () => {
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('/donate');
  });

  test.afterAll(async () => {
    await page.close();
  });

  test('Should have a relevant page title', async () => {
    await expect(page).toHaveTitle('Support our charity | freeCodeCamp.org');
  });

  test('Should render the donation page correctly', async () => {
    await expect(
      page.locator('text=Confirm your donation of $5 / month:')
    ).toBeVisible();
  });

  test('Frequently asked question heading', async () => {
    await page
      .getByRole('heading', { name: 'Frequently asked questions' })
      .click();
    await page
      .locator('div')
      .filter({ hasText: /^Frequently asked questions$/ })
      .click();
  });

  test('Frequently asked question list buttons', async () => {
    for(const i of frequentlyAskedQuestions){
    await page.getByRole('button', { name: `${i}` }).click();
    }
  });
});
