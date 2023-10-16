import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

test.beforeEach(async ({ page }) => {
  await page.goto(
    '/learn/foundational-c-sharp-with-microsoft/write-your-first-code-using-c-sharp/trophy-write-your-first-code-using-c-sharp'
  );
});

test.describe('Link MS user component (unlinked signedOut user)', () => {
  test('Component has proper main heading and relevant sections', async ({
    page
  }) => {
    const mainHeading = page.getByRole('heading', {
      name: translations.learn.ms['link-header']
    });
    await expect(mainHeading).toBeVisible();

    const linkSignInText = page.getByTestId('link-signin-text');
    await expect(linkSignInText).toBeVisible();
  });
});

test.describe('Link MS user component (unlinked signedIn user)', () => {
  test.use({ storageState: 'playwright/.auth/certified-user.json' });

  test('Component has proper main heading and relevant sections', async ({
    page
  }) => {
    const mainHeading = page.getByRole('heading', {
      name: translations.learn.ms['link-header']
    });
    await expect(mainHeading).toBeVisible();

    const linkSignInText = page.getByTestId('unlinked-text');
    await expect(linkSignInText).toBeVisible();
  });

  test('Component has proper list of actions', async ({ page }) => {
    const linkText1 = page.getByTestId('link-li-1-text');
    await expect(linkText1).toBeVisible();
    await expect(linkText1).toContainText(
      'Using a browser where you are logged into your Microsoft account, go to https://learn.microsoft.com/users/me/transcript'
    );

    const linkText2 = page.getByTestId('link-li-2-text');
    await expect(linkText2).toBeVisible();
    await expect(linkText2).toHaveText(translations.learn.ms['link-li-2']);

    const linkText3 = page.getByTestId('link-li-3-text');
    await expect(linkText3).toBeVisible();
    await expect(linkText3).toHaveText(translations.learn.ms['link-li-3']);

    const linkText4 = page.getByTestId('link-li-4-text');
    await expect(linkText4).toBeVisible();
    await expect(linkText4).toHaveText(translations.learn.ms['link-li-4']);

    const linkText5 = page.getByTestId('link-li-5-text');
    await expect(linkText5).toBeVisible();
    await expect(linkText5).toHaveText(
      'Paste the URL into the input below, it should look similar to this: https://learn.microsoft.com/LOCALE/users/USERNAME/transcript/ID'
    );

    const linkText6 = page.getByTestId('link-li-6-text');
    await expect(linkText6).toBeVisible();
    await expect(linkText6).toHaveText(translations.learn.ms['link-li-6']);
  });
});
