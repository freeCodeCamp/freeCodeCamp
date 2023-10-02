import { test, expect, Page } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

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

  test('Should render the description of the donate page', async () => {
    await page.waitForSelector('p');
    const paragraph1Text = await page.textContent('p:nth-child(2)');
    const paragraph2Text = await page.textContent('p:nth-child(3)');
    const paragraph3Text = await page.textContent('p:nth-child(4)');
    expect(paragraph1Text).toBe(translations.donate.efficiency);
    expect(paragraph2Text).toBe(translations.donate['why-donate-1']);
    expect(paragraph3Text).toBe(translations.donate['why-donate-2']);
  });

  test('Should have an FAQ section', async () => {
    const header = page.getByRole('heading', { name: translations.donate.faq });
    await expect(header).toBeVisible();
    const faqs = page.getByTestId('donate-faq-question');
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
