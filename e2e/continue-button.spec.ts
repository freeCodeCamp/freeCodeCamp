import { test, expect } from '@playwright/test';

import translations from '../client/i18n/locales/english/translations.json';
test.describe('Continue where you left off button for authenticated users', () => {
  test.use({ storageState: 'playwright/.auth/development-user.json' });

  test('button should change based on last visited challenge', async ({
    page
  }) => {
    await page.goto(
      '/learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements'
    );
    await expect(page.getByText('Say Hello to HTML Elements')).toBeVisible();
    await page.goto('/learn/responsive-web-design');

    const continueButton = page.getByRole('link', {
      name: translations.buttons['continue-where-left-off']
    });
    await expect(continueButton).toBeVisible();
    await continueButton.click();

    await expect(page.getByText('Say Hello to HTML Elements')).toBeVisible();
    expect(page.url()).toContain(
      '/learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements'
    );

    await page.goto(
      '/learn/responsive-web-design/basic-css/change-the-color-of-text'
    );
    await expect(page.getByText('Change the Color of Text')).toBeVisible();

    await page.goto('/learn/responsive-web-design');

    const updatedContinueButton = page.getByRole('link', {
      name: translations.buttons['continue-where-left-off']
    });
    await expect(updatedContinueButton).toBeVisible();
    await updatedContinueButton.click();

    await expect(page.getByText('Change the Color of Text')).toBeVisible();
    expect(page.url()).toContain(
      '/learn/responsive-web-design/basic-css/change-the-color-of-text'
    );
  });
});
test.describe('Continue button is shown for unauthenticated users', () => {
  test('should update path for unauthenticated users when visiting different challenges', async ({
    page
  }) => {
    await page.goto(
      '/learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements'
    );
    await expect(page.getByText('Say Hello to HTML Elements')).toBeVisible();
    await page.goto('/learn/responsive-web-design');

    const continueButton = page.getByRole('link', {
      name: translations.buttons['continue-where-left-off']
    });
    await expect(continueButton).toBeVisible();

    const signInButton = page.getByRole('link', {
      name: translations.buttons['logged-out-cta-btn']
    });
    await expect(signInButton).toBeVisible();

    await continueButton.click();
    await expect(page.getByText('Say Hello to HTML Elements')).toBeVisible();

    await page.goto(
      '/learn/responsive-web-design/css-flexbox/use-the-flex-direction-property-to-make-a-row'
    );
    await expect(
      page.getByText('Use the flex-direction Property to Make a Row')
    ).toBeVisible();

    await page.goto('/learn/responsive-web-design');

    const updatedContinueButton = page.getByRole('link', {
      name: translations.buttons['continue-where-left-off']
    });
    await expect(updatedContinueButton).toBeVisible();
    await updatedContinueButton.click();

    await expect(
      page.getByText('Use the flex-direction Property to Make a Row')
    ).toBeVisible();
    expect(page.url()).toContain(
      '/learn/responsive-web-design/css-flexbox/use-the-flex-direction-property-to-make-a-row'
    );
  });
});
