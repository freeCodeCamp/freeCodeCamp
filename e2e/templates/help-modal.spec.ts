import { test, expect, BrowserContext, Page } from '@playwright/test';

test.describe('Ask for help modal component', () => {
  test.beforeEach(async ({ page }) => {
    // visit a challenge page
    await page.goto(
      '/learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements'
    );
    //The button is visible
    const helpButton = page.getByTestId('get-help-dropdown');
    await expect(helpButton).toBeVisible();
    //The button is clickable
    await helpButton.click();
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Ask for help modal is rendered and closed correctly', async ({
    page
  }) => {
    //The ask for help button is visible
    const askForHelpButton = page.getByTestId('ask-for-help');
    await expect(askForHelpButton).toBeVisible();

    // clicking on the ask for help button shows the modal
    await askForHelpButton.click();
    await expect(page.getByTestId('ask-for-help-modal')).toBeVisible();

    // clicking on the cancel button hides the modal
    await page.getByTestId('cancel-button').click();
    await expect(page.getByTestId('ask-for-help-modal')).toBeHidden();
  });

  test('Clicking on create a help post button redirects correctly', async ({
    browser,
    page
  }) => {
    // The ask for help button is visible
    const askForHelpButton = page.getByTestId('ask-for-help');
    await expect(askForHelpButton).toBeVisible();
    await askForHelpButton.click();

    // Create a new context and a new page
    const context: BrowserContext = await browser.newContext();
    const newPage: Page = await context.newPage();

    await page.getByTestId('create-post-button').click();
    // Wait for the new page to be created and load
    await newPage.waitForLoadState();

    // Close the context when you're done with it
    await context.close();
  });
});
