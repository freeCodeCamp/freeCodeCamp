import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

test.beforeEach(async ({ page }) => {
  await page.goto(
    '/learn/information-security/python-for-penetration-testing/developing-a-port-scanner'
  );
});

test.afterEach(async ({ page }) => {
  await page.close();
});

test.describe('Challenge Title Component', () => {
  test('should render correctly', async ({ page }) => {
    await expect(page.getByText('Developing a Port Scanner')).toBeVisible();

    await expect(page.getByLabel('Passed')).not.toBeVisible();
  });

  test("should not render the 'Please Help Us Translate' link", async ({
    page
  }) => {
    // Placeholder code below
    test.skip(
      process.env.CLIENT_LOCALE != 'english',
      'Current Locale not supported for this test.'
    );

    await expect(
      page.getByText(translations['learn']['help-translate-link'])
    ).not.toBeVisible();
  });
});

test.describe('Challenge Title Component (signed in)', () => {
  test.use({ storageState: 'playwright/.auth/certified-user.json' });

  test('should display GreenPass after challenge completion', async ({
    page
  }) => {
    await page
      .getByText(
        'If there is an error or if no host is found, .connect() raises an exception while .connect_ex() returns an error code.'
      )
      .click({ force: true });

    await page
      .getByText(translations['buttons']['check-answer'], { exact: true })
      .click({ force: true });

    await page
      .getByText(translations['buttons']['go-to-next'])
      .click({ force: true });

    await page.waitForLoadState('domcontentloaded');

    await page.goto(
      '/learn/information-security/python-for-penetration-testing/developing-a-port-scanner'
    );

    await page.waitForLoadState();

    await expect(page.getByLabel('Passed')).toBeVisible();
  });
});
