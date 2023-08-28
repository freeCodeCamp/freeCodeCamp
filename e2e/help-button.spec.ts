import { test, expect, type Page } from '@playwright/test';

test.describe('help-button tests for a page with three links', () => {
  let page: Page;

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
    //The button is visible
    const helpButton = await page
      .getByRole('button', { name: 'Help' })
      .isVisible();
    expect(helpButton).toBeTruthy();
    //The button is clickable
    await page.getByRole('button', { name: 'Help' }).click();
    //The menu is visible
    const dropdown = await page.getByRole('menu').isVisible();
    expect(dropdown).toBeTruthy();
    //The menu has three links
    const getHint = await page
      .getByRole('menuitem', { name: 'Get a Hint , Opens in new window' })
      .isVisible();
    const watchVideo = await page
      .getByRole('menuitem', { name: 'Watch a Video' })
      .isVisible();
    const askHelp = await page
      .getByRole('menuitem', { name: 'Ask for Help' })
      .isVisible();
    expect(getHint).toBeTruthy();
    expect(watchVideo).toBeTruthy();
    expect(askHelp).toBeTruthy();
  });
});

test.describe('help-button tests for a page with two links when video is not available', () => {
  let page: Page;

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
    //The button is visible
    const helpButton = await page
      .getByRole('button', { name: 'Help' })
      .isVisible();
    expect(helpButton).toBeTruthy();
    //The button is clickable
    await page.getByRole('button', { name: 'Help' }).click();
    //The menu is visible
    const dropdown = await page.getByRole('menu').isVisible();
    expect(dropdown).toBeTruthy();
    //The menu has two links
    const getHint = await page
      .getByRole('menuitem', { name: 'Get a Hint , Opens in new window' })
      .isVisible();
    const askHelp = await page
      .getByRole('menuitem', { name: 'Ask for Help' })
      .isVisible();
    expect(getHint).toBeTruthy();
    expect(askHelp).toBeTruthy();
  });
});
