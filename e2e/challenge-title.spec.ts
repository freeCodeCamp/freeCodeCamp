import { test, expect, type Page } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

test.beforeEach(async ({ page }) => {
  await page.goto(
    '/learn/information-security/python-for-penetration-testing/developing-a-port-scanner'
  );
});

test.afterEach(async ({ page }) => {
  await page.close();
});

const completeChallenge = async (page: Page) => {
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
};

test.describe('Challenge Title Component (signed out)', () => {
  test('should render correctly', async ({ page }) => {
    await expect(page.getByLabel('Passed')).not.toBeVisible();

    await expect(page.getByText('Developing a Port Scanner')).toBeVisible();
  });

  test('should not display GreenPass after challenge completion', async ({
    page
  }) => {
    await completeChallenge(page);

    await expect(page.getByLabel('Passed')).not.toBeVisible();
  });

  test("should appropriately render 'Please Help Us Translate' link", async ({
    page
  }) => {
    // This test can be merged with the 'should render correctly' test,
    // but is isolated for now due to debugging. (Automatically skips this test)

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

    await completeChallenge(page);

    await expect(page.getByLabel('Passed')).toBeVisible();
  });
});
