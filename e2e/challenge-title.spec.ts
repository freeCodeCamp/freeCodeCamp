import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

test.beforeEach(async ({ page }) => {
  await page.goto(
    '/learn/responsive-web-design-v9/lecture-understanding-html-attributes/what-is-html'
  );
});

test.describe('Challenge Title Component (signed out)', () => {
  test.use({ storageState: { cookies: [], origins: [] } });

  test('should render correctly', async ({ page }) => {
    await expect(page.getByLabel('Passed')).not.toBeVisible();

    await expect(
      page.getByRole('heading', {
        name: 'What Role Does HTML Play on the Web?'
      })
    ).toBeVisible();
  });

  test('should not display GreenPass after challenge completion', async ({
    page
  }) => {
    // Set `force: true` to bypass Playwright's check
    // as the radio is visually hidden and the click event is intercepted by the `span` element.
    await page
      .getByRole('radio', {
        name: 'HyperText Markup Language'
      })
      .click({ force: true });

    await page
      .getByRole('radio', {
        name: '</p>'
      })
      .click({ force: true });

    await page
      .getByRole('radio', {
        name: 'src'
      })
      .click({ force: true });

    await page
      .getByRole('button', { name: translations.buttons['check-answer'] })
      .click();

    await page
      .getByRole('button', { name: translations.buttons['go-to-next'] })
      .click();

    // After clicking 'go-to-next' button, page redirects to courses list.
    // We need to wait for this navigation to be completed before navigating to the next
    // or Firefox will throw a NS_BINDING_ABORTED error.
    await page.waitForURL(
      '/learn/responsive-web-design-v9/lecture-understanding-html-attributes/what-are-attributes'
    );

    // Returning back to the challenge, to verify that GreenPass is rendered on the challenge itself.
    await page.goto(
      '/learn/responsive-web-design-v9/lecture-understanding-html-attributes/what-is-html'
    );

    await page.waitForLoadState();

    await expect(page.getByLabel('Passed')).not.toBeVisible();
  });

  test("should appropriately render 'Please Help Us Translate' link", async ({
    page
  }) => {
    const visibleEnglishTitle = await page
      .getByRole('heading', { name: 'What Role Does HTML Play on the Web?' })
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
  test('should display GreenPass after challenge completion', async ({
    page
  }) => {
    await expect(
      page.getByRole('heading', {
        name: 'What Role Does HTML Play on the Web?'
      })
    ).toBeVisible();

    // Set `force: true` to bypass Playwright's check
    // as the radio is visually hidden and the click event is intercepted by the `span` element.
    await page
      .getByRole('radio', {
        name: 'HyperText Markup Language'
      })
      .click({ force: true });

    await page
      .getByRole('radio', {
        name: '</p>'
      })
      .click({ force: true });

    await page
      .getByRole('radio', {
        name: 'src'
      })
      .click({ force: true });

    await page
      .getByRole('button', { name: translations.buttons['check-answer'] })
      .click();

    await page
      .getByRole('button', { name: translations.buttons['go-to-next'] })
      .click();

    // After clicking 'go-to-next' button, page redirects to courses list.
    // We need to wait for this navigation to be completed before navigating to the next
    // or Firefox will throw a NS_BINDING_ABORTED error.
    await page.waitForURL(
      '/learn/responsive-web-design-v9/lecture-understanding-html-attributes/what-are-attributes'
    );

    // Returning back to the challenge, to verify that GreenPass is rendered on the challenge itself.
    await page.goto(
      '/learn/responsive-web-design-v9/lecture-understanding-html-attributes/what-is-html'
    );

    await page.waitForLoadState();

    await expect(page.getByLabel('Passed')).toBeVisible();
  });
});
