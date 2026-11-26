import { test, expect } from './fixtures/isolated-user';
import translations from '../client/i18n/locales/english/translations.json';

test.use({ userPreset: 'certified' });

test.describe('Sign out', () => {
  test('redirects from settings to learn and stays signed out after reloading', async ({
    page,
    isolatedUser
  }) => {
    await page.goto('/settings');
    await expect(
      page.getByRole('heading', {
        name: translations.settings.for.replace(
          '{{username}}',
          isolatedUser.username
        ),
        exact: true
      })
    ).toBeVisible();

    await page.getByRole('button', { name: translations.buttons.menu }).click();
    await page
      .getByRole('button', { name: translations.buttons['sign-out'] })
      .click();

    await expect(
      page.getByRole('dialog', { name: translations.signout.heading })
    ).toBeVisible();

    await page
      .getByRole('button', { name: translations.signout.certain })
      .click();

    await expect(page).toHaveURL(url => /^\/learn\/?$/.test(url.pathname));
    const guestHeading = page.getByRole('heading', {
      name: translations.learn.heading,
      exact: true
    });
    await expect(guestHeading).toBeVisible();

    await page.reload();
    await expect(guestHeading).toBeVisible();

    // Use the browser's cookies to verify the session was cleared by sign-out.
    const sessionResponse = await page.request.get(
      new URL(
        '/user/session-user',
        process.env.API_LOCATION ?? 'http://localhost:3000'
      ).toString()
    );
    expect(sessionResponse.status()).toBe(200);
    expect(await sessionResponse.json()).toEqual({ user: {}, result: '' });
  });
});
