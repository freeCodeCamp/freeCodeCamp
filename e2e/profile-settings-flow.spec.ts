import type { Page } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';
import { expect, test } from './fixtures/isolated-user';

const githubUrl = 'https://github.com/freeCodeCamp';

const getUniqueUsername = (email: string, suffix: string) =>
  `e2e${email.replace(/[^a-z0-9]/gi, '').slice(0, 10)}${suffix}`;

const openProfileEditor = async (page: Page) => {
  await page.goto('/settings');
  await page.getByRole('link', { name: 'your profile' }).click();
  await page.getByRole('button', { name: 'Edit my profile' }).click();
};

test.describe('Profile settings flow', () => {
  test.describe.configure({ mode: 'parallel' });

  test('persists saved and cleared profile fields after reload', async ({
    page
  }) => {
    test.setTimeout(20000);

    await page.goto('/settings');

    const saveButton = page.getByRole('button', {
      name: translations.settings.headings['personal-info']
    });
    const nameInput = page.getByLabel(translations.settings.labels.name, {
      exact: true
    });
    const locationInput = page.getByLabel(
      translations.settings.labels.location
    );
    const pictureInput = page.getByLabel(translations.settings.labels.picture);
    const aboutInput = page.getByLabel(translations.settings.labels.about);
    const updatedAlert = page
      .getByRole('alert')
      .filter({ hasText: translations.flash['updated-about-me'] })
      .first();

    await nameInput.fill('Quincy Larson');
    await locationInput.fill('USA');
    await pictureInput.fill(
      'https://cdn.freecodecamp.org/platform/english/images/quincy-larson-signature.svg'
    );
    await aboutInput.fill('Teacher at freeCodeCamp');

    await expect(saveButton).not.toBeDisabled();
    await saveButton.click();
    await expect(updatedAlert).toBeVisible();

    await page.reload();

    await expect(nameInput).toHaveValue('Quincy Larson');
    await expect(locationInput).toHaveValue('USA');
    await expect(pictureInput).toHaveValue(
      'https://cdn.freecodecamp.org/platform/english/images/quincy-larson-signature.svg'
    );
    await expect(aboutInput).toHaveValue('Teacher at freeCodeCamp');

    await nameInput.fill('');
    await locationInput.fill('');
    await pictureInput.fill('');
    await aboutInput.fill('');

    await expect(saveButton).not.toBeDisabled();
    await saveButton.click();
    await expect(updatedAlert).toBeVisible();

    await page.reload();

    await expect(nameInput).toHaveValue('');
    await expect(locationInput).toHaveValue('');
    await expect(pictureInput).toHaveValue('');
    await expect(aboutInput).toHaveValue('');
  });

  test.describe('Username updates', () => {
    const updateUsername = async (
      page: Page,
      email: string,
      suffix: string,
      submitWithEnter = false
    ) => {
      const username = getUniqueUsername(email, suffix);
      const flashText = translations.flash['username-updated'].replace(
        '{{username}}',
        username
      );

      await openProfileEditor(page);

      const usernameInput = page.getByLabel(
        translations.settings.labels.username
      );
      const saveButton = page.getByRole('button', {
        name: translations.settings.labels.username
      });

      await usernameInput.fill(username);
      await expect(
        page.getByText(translations.settings.username.available)
      ).toBeVisible();

      if (submitWithEnter) {
        await usernameInput.press('Enter');
      } else {
        await expect(saveButton).not.toBeDisabled();
        await saveButton.click();
      }

      await expect(
        page.getByRole('alert').filter({ hasText: flashText }).first()
      ).toBeVisible();
      await expect(page).toHaveURL(`/${username}`);

      await page.reload();
      await expect(
        page.getByRole('heading', { name: `@${username}` })
      ).toBeVisible();
    };

    test('persists a lowercase username update', async ({
      page,
      isolatedUser
    }) => {
      await updateUsername(page, isolatedUser.email, 'lower');
    });

    test('persists an uppercase username update', async ({
      page,
      isolatedUser
    }) => {
      await updateUsername(page, isolatedUser.email, 'UPPER');
    });

    test('persists a username update submitted with Enter', async ({
      page,
      isolatedUser
    }) => {
      await updateUsername(page, isolatedUser.email, 'enter', true);
    });
  });

  test('persists an Internet Presence social link after reload', async ({
    page
  }) => {
    await openProfileEditor(page);

    const socialInput = page.getByRole('textbox', { name: 'GitHub' });
    const saveButton = page
      .locator('[data-testid="internet-presence"]')
      .getByRole('button', { name: translations.buttons.save });
    const updatedAlert = page
      .getByRole('alert')
      .filter({ hasText: translations.flash['updated-socials'] })
      .first();

    await socialInput.fill(githubUrl);

    await expect(saveButton).not.toBeDisabled();
    await saveButton.click();
    await expect(updatedAlert).toBeVisible();

    await page.reload();
    await page.getByRole('button', { name: 'Edit my profile' }).click();

    await expect(socialInput).toHaveValue(githubUrl);
  });
});
