import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

test.describe('Mobile help-button tests for a page with three links (hint, help and video)', () => {
  test.use({
    viewport: { width: 393, height: 851 },
    isMobile: true
  });
  test('should render the button, menu and the three links when video is available', async ({
    page,
    isMobile
  }) => {
    test.skip(!isMobile, 'Help dropdown only available on mobile');
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

test.describe('Mobile help-button tests for a page with two links when video is not available', () => {
  test.use({
    viewport: { width: 393, height: 851 },
    isMobile: true
  });
  test('should render the button, menu and the two links when video is not available', async ({
    page,
    isMobile
  }) => {
    test.skip(!isMobile, 'Help dropdown only available on mobile');

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

test.describe('Mobile help-button tests for a page with a reset and help button', () => {
  // Test the lower jaw on mobile viewport only
  test.use({
    viewport: { width: 393, height: 851 },
    isMobile: true
  });
  test('should not be present before the user checks their code three times', async ({
    page
  }) => {
    await page.goto(
      'learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-8'
    );
    await expect(page.getByRole('button', { name: 'Help' })).toBeHidden();
  });

  test('should be present after the user checks their code three times', async ({
    page
  }) => {
    await page.goto(
      'learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-3'
    );
    const checkButton = page.getByTestId('lowerJaw-check-button');
    await checkButton.click();
    await checkButton.click();
    await checkButton.click();
    const helpButton = page.getByRole('button', { name: 'Help' });
    await expect(helpButton).toBeVisible();
    const helpIconGroup = helpButton.getByRole('group', {
      includeHidden: false
    });
    await expect(helpIconGroup).toBeHidden();
  });
});

test.describe('Desktop help-button tests for a page with a reset and help button', () => {
  test('should always be shown', async ({ page }) => {
    await page.goto(
      'learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-3'
    );
    await expect(
      page.getByRole('button', { name: translations.buttons.reset })
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: translations.buttons.help })
    ).toBeVisible();
  });

  test('should open help modal with video button when video is available', async ({
    page
  }) => {
    // visit the page with the video link
    await page.goto(
      '/learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements'
    );

    // Click the help button in independent lower jaw
    const helpButton = page.getByRole('button', {
      name: translations.buttons.help
    });
    await expect(helpButton).toBeVisible();
    await helpButton.click();

    // Help modal should open
    await expect(
      page.getByRole('dialog', { name: translations.buttons['get-help'] })
    ).toBeVisible();

    // Video button should be present in the modal
    await expect(
      page.getByRole('button', { name: translations.buttons['watch-video'] })
    ).toBeVisible();

    // Other help options should be present
    await expect(
      page.getByRole('link', { name: translations.buttons['get-hint'] })
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: translations.buttons['create-post'] })
    ).toBeVisible();
  });

  test('should open help modal without video button when video is not available', async ({
    page
  }) => {
    // visit the page without the video link
    await page.goto(
      '/learn/front-end-development-libraries/bootstrap/apply-the-default-bootstrap-button-style'
    );

    // Click the help button in independent lower jaw
    const helpButton = page.getByRole('button', {
      name: translations.buttons.help
    });
    await expect(helpButton).toBeVisible();
    await helpButton.click();

    // Help modal should open
    await expect(
      page.getByRole('dialog', { name: translations.buttons['get-help'] })
    ).toBeVisible();

    // Video button should NOT be present in the modal
    await expect(
      page.getByRole('button', { name: translations.buttons['watch-video'] })
    ).toBeHidden();

    // Other help options should be present
    await expect(
      page.getByRole('link', { name: translations.buttons['get-hint'] })
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: translations.buttons['create-post'] })
    ).toBeVisible();
  });
});
