import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

test.beforeEach(async ({ page }) => {
  await page.goto(
    '/learn/information-security/python-for-penetration-testing/developing-a-port-scanner'
  );
});

test.describe('Challenge Title Component (signed out)', () => {
  test('should render correctly', async ({ page }) => {
    await expect(page.getByLabel('Passed')).not.toBeVisible();

    await expect(page.getByText('Developing a Port Scanner')).toBeVisible();
  });

  test('should not display GreenPass after challenge completion', async ({
    page
  }) => {
    await page
      .getByText(
        'If there is an error or if no host is found, .connect() raises an exception while .connect_ex() returns an error code.'
      )
      .click();

    await page
      .getByRole('button', { name: translations.buttons['check-answer'] })
      .click();

    await page
      .getByRole('button', { name: translations.buttons['go-to-next'] })
      .click();

    await page.waitForLoadState('domcontentloaded');

    // After clicking 'go-to-next' button, page redirects to courses list.
    // Returning back to the challenge, to verify that GreenPass is rendered on the challenge itself.
    await page.goto(
      '/learn/information-security/python-for-penetration-testing/developing-a-port-scanner'
    );

    await page.waitForLoadState();

    await expect(page.getByLabel('Passed')).not.toBeVisible();
  });

  test("should appropriately render 'Please Help Us Translate' link", async ({
    page
  }) => {
    // Test has been isolated for debugging purposes.

    const visibleEnglishTitle = await page
      .getByText('Developing a Port Scanner')
      .isVisible();

    if (process.env.CURRICULUM_LOCALE != 'english' && visibleEnglishTitle) {
      // Challenge title has not been translated, expect a
      // 'Help us translate' button
      await expect(page.getByText('Help us translate')).toBeVisible();
    } else {
      // CURRICULUM_LOCALE is set to english or curriculum is already
      // translated. Do not expect a 'Help us translate' button.
      await expect(page.getByText('Help us translate')).not.toBeVisible();
    }
  });
});

test.describe('Challenge Title Component (signed in)', () => {
  test.use({ storageState: 'playwright/.auth/certified-user.json' });

  test('should display GreenPass after challenge completion', async ({
    page
  }) => {
    await expect(page.getByText('Developing a Port Scanner')).toBeVisible();

    await page
      .getByText(
        'If there is an error or if no host is found, .connect() raises an exception while .connect_ex() returns an error code.'
      )
      .click();

    await page
      .getByRole('button', { name: translations.buttons['check-answer'] })
      .click();

    await page
      .getByRole('button', { name: translations.buttons['go-to-next'] })
      .click();

    await page.waitForLoadState('domcontentloaded');

    // After clicking 'go-to-next' button, page redirects to courses list.
    // Returning back to the challenge, to verify that GreenPass is rendered on the challenge itself.
    await page.goto(
      '/learn/information-security/python-for-penetration-testing/developing-a-port-scanner'
    );

    await page.waitForLoadState();

    await expect(page.getByLabel('Passed')).toBeVisible();
  });
});
