import { test, expect } from './fixtures/isolated-user';
import translations from '../client/i18n/locales/english/translations.json';
import { alertToBeVisible } from './utils/alerts';

// The public preset starts with every privacy setting set to public.
test.use({ userPreset: 'public' });

test.describe('Privacy settings', () => {
  test('making the profile private persists and hides it from guests', async ({
    page,
    browser,
    isolatedUser
  }) => {
    await page.goto('/settings#privacy-settings');

    const privacyGroup = page.getByRole('group', {
      name: translations.settings.headings.privacy,
      exact: true
    });
    const profileSetting = privacyGroup.getByRole('group', {
      name: translations.settings.labels['my-profile']
    });
    const privateRadio = profileSetting.getByRole('radio', {
      name: translations.buttons.private,
      exact: true
    });
    const saveButton = page.getByRole('button', {
      name: `${translations.buttons.save} ${translations.settings.headings.privacy}`
    });

    await expect(
      profileSetting.getByRole('radio', {
        name: translations.buttons.public,
        exact: true
      })
    ).toBeChecked();
    await expect(saveButton).toBeDisabled();

    await privateRadio.check();
    await expect(saveButton).toBeEnabled();
    await saveButton.click();

    await alertToBeVisible(page, translations.flash['privacy-updated']);
    await expect(saveButton).toBeDisabled();

    await page.reload();
    await expect(privateRadio).toBeChecked();

    // A signed-out visitor should see the privacy notice instead of the profile.
    const guestContext = await browser.newContext({
      baseURL: new URL(page.url()).origin,
      storageState: { cookies: [], origins: [] }
    });
    try {
      const guestPage = await guestContext.newPage();
      await guestPage.goto(`/${isolatedUser.username}`);

      await expect(
        guestPage.getByText(
          translations.profile['username-change-privacy'].replace(
            '{{username}}',
            isolatedUser.username
          )
        )
      ).toBeVisible();
      await expect(
        guestPage.getByRole('heading', { name: `@${isolatedUser.username}` })
      ).toBeHidden();
    } finally {
      await guestContext.close();
    }
  });
});
