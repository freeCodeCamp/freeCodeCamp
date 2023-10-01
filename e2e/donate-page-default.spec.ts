import { test, expect, type Page } from '@playwright/test';

test.describe('Donate page', () => {
  let page: Page;
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

    expect(page.locator('text=Frequently asked questions'));

    expect(page.locator('text=How can I get help with my donations?'));

    expect(page.locator('text=How transparent is freeCodeCamp.org?'));

    expect(page.locator('text=How efficient is freeCodeCamp?'));

    expect(page.locator('text=How can I make a one-time donation?'));

    expect(
      page.locator(
        'text=Does freeCodeCamp accept donations in Bitcoin or other cryptocurrencies?'
      )
    );

    expect(page.locator('text=Can I mail a physical check?'));

    expect(
      page.locator(
        'text=How can I set up matching gifts from my employer, or payroll deductions?'
      )
    );

    expect(
      page.locator(
        'text=How can I set up an Endowment Gift to freeCodeCamp.org?'
      )
    );

    await expect(
      page.locator('text=How can I set up a Legacy gift to freeCodeCamp.org?')
    ).toBeVisible();

    await expect(
      page.locator('text=How can I donate stock to freeCodeCamp.org?')
    ).toBeVisible();

    expect(
      page.locator(
        'text=I set up a monthly donation, but I need to update or pause the monthly recurrence. How can I do this?'
      )
    );

    expect(
      page.locator(
        'text=Is there anything else I can learn about donating to freeCodeCamp.org?'
      )
    );
  });
});
