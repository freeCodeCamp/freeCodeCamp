import { test, type Page } from '@playwright/test';

test.describe('Sass Challenge', () => {
  let page: Page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto(
      '/learn/front-end-development-libraries/sass/use-for-to-create-a-sass-loop'
    );
  });

  test.afterAll(async () => {
    await page.close();
  });

  test('should render the sass preview', async () => {
    const frame = await Promise.resolve(page.mainFrame());
    await frame.isVisible('.text-1');
    await frame.isVisible('.text-2');
    await frame.isVisible('.text-3');
    await frame.isVisible('.text-4');
    await frame.isVisible('.text-5');
  });
});
