import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

test.describe('Mobile help-button tests', () => {
  test.use({
    viewport: { width: 393, height: 851 },
    isMobile: true
  });

  test('should always be shown in the lower jaw', async ({ page }) => {
    await page.goto(
      'learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-3'
    );
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

    const helpButton = page.getByRole('button', {
      name: translations.buttons.help
    });
    await expect(helpButton).toBeVisible();
    await helpButton.click();

    await expect(
      page.getByRole('dialog', { name: translations.buttons['get-help'] })
    ).toBeVisible();

    await expect(
      page.getByRole('button', { name: translations.buttons['watch-video'] })
    ).toBeVisible();
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
    await page.goto(
      '/learn/front-end-development-libraries/bootstrap/apply-the-default-bootstrap-button-style'
    );

    const helpButton = page.getByRole('button', {
      name: translations.buttons.help
    });
    await expect(helpButton).toBeVisible();
    await helpButton.click();

    await expect(
      page.getByRole('dialog', { name: translations.buttons['get-help'] })
    ).toBeVisible();

    await expect(
      page.getByRole('button', { name: translations.buttons['watch-video'] })
    ).toBeHidden();
    await expect(
      page.getByRole('link', { name: translations.buttons['get-hint'] })
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: translations.buttons['create-post'] })
    ).toBeVisible();
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
