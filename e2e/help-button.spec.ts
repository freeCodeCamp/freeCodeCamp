import { test, expect, type Page } from '@playwright/test';

const testHelpButton = async (page: Page, videoLink: boolean) => {
  const helpButton = page.getByTestId('get-help-dropdown');
  await expect(helpButton).toBeVisible();
  await helpButton.click();
  await expect(page.getByTestId('get-hint')).toBeVisible();
  await expect(page.getByTestId('ask-for-help')).toBeVisible();
  if (videoLink) {
    await expect(page.getByTestId('watch-a-video')).toBeVisible();
  } else {
    await expect(page.getByTestId('watch-a-video')).toBeHidden();
  }
};

test.describe('help-button tests for a page with three links( help, hint and video ) ', () => {
  let page: Page;
  // visit the page with the video link
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto(
      '/learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements'
    );
  });

  test.afterAll(async () => {
    await page.close();
  });

  test('should render the button, menu and the three links when video is available', async () => {
    await testHelpButton(page, true);
  });
});

test.describe('help-button tests for a page with two links when video is not available', () => {
  let page: Page;
  // visit the page without the video link
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto(
      '/learn/front-end-development-libraries/bootstrap/apply-the-default-bootstrap-button-style'
    );
  });

  test.afterAll(async () => {
    await page.close();
  });

  test('should render the button, menu and the two links when video is not available', async () => {
    await testHelpButton(page, false);
  });
});
