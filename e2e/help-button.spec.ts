import { test, expect } from '@playwright/test';

test.describe('help-button tests for a page with three links (hint, help and video)', () => {
  test('should render the button, menu and the three links when video is available', async ({
    page
  }) => {
    // visit the page with the video link
    await page.goto(
      '/learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements'
    );
    //The button is visible
    const helpButton = page.getByTestId('get-help-dropdown');
    await expect(helpButton).toBeVisible();
    //The button is clickable
    await helpButton.click();
    //The menu items are visible
    await expect(page.getByTestId('get-hint')).toBeVisible();
    await expect(page.getByTestId('ask-for-help')).toBeVisible();
    await expect(page.getByTestId('watch-a-video')).toBeVisible();
  });
});

test.describe('help-button tests for a page with two links when video is not available', () => {
  test('should render the button, menu and the two links when video is not available', async ({
    page
  }) => {
    // visit the page without the video link
    await page.goto(
      '/learn/front-end-development-libraries/bootstrap/apply-the-default-bootstrap-button-style'
    );
    //The button is visible
    const helpButton = page.getByTestId('get-help-dropdown');
    await expect(helpButton).toBeVisible();
    //The button is clickable
    await helpButton.click();
    //The menu items are visible
    await expect(page.getByTestId('get-hint')).toBeVisible();
    await expect(page.getByTestId('ask-for-help')).toBeVisible();
    //The video link is hidden
    await expect(page.getByTestId('watch-a-video')).toBeHidden();
  });
});
