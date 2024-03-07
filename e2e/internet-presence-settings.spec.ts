import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

const settingsPageElement = {
  githubInput: 'internet-github-input',
  githubCheckmark: 'internet-github-check',
  linkedinCheckmark: 'internet-linkedin-check',
  twitterCheckmark: 'internet-twitter-check',
  personalWebsiteCheckmark: 'internet-website-check',
  flashMessageAlert: 'flash-message',
  internetPresenceForm: 'internet-presence'
} as const;

test.use({ storageState: 'playwright/.auth/certified-user.json' });

test.beforeEach(async ({ page }) => {
  await page.goto('/settings');
});

test.describe('Your Internet Presence', () => {
  test('should display the section with save button being disabled', async ({
    page
  }) => {
    await expect(
      page.getByRole('heading', {
        level: 2,
        name: translations.settings.headings.internet
      })
    ).toBeVisible();

    await expect(
      page
        .getByTestId(settingsPageElement.internetPresenceForm)
        .getByRole('button', { name: translations.buttons.save })
    ).toBeVisible();
  });

  const socials = [
    {
      name: 'github',
      url: 'https://github.com/certified-user',
      label: 'GitHub',
      checkTestId: settingsPageElement.githubCheckmark
    },
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/certified-user',
      label: 'LinkedIn',
      checkTestId: settingsPageElement.linkedinCheckmark
    },
    {
      name: 'twitter',
      url: 'https://twitter.com/certified-user',
      label: 'Twitter',
      checkTestId: settingsPageElement.twitterCheckmark
    },
    {
      name: 'website',
      url: 'https://certified-user.com',
      label: translations.settings.labels.personal,
      checkTestId: settingsPageElement.personalWebsiteCheckmark
    }
  ];

  socials.forEach(social => {
    test(`should hide ${social.name} checkmark by default`, async ({
      page
    }) => {
      await expect(page.getByTestId(social.checkTestId)).toBeHidden();
    });

    test(`should update ${social.name} URL`, async ({ browserName, page }) => {
      test.skip(browserName === 'webkit', 'csrf_token cookie is being deleted');

      const socialInput = page.getByLabel(social.label);
      await socialInput.fill(social.url);
      const socialCheckmark = page.getByTestId(social.checkTestId);
      await expect(socialCheckmark).toBeVisible();

      const saveButton = page
        .getByTestId(settingsPageElement.internetPresenceForm)
        .getByRole('button', { name: translations.buttons.save });

      await expect(saveButton).toBeVisible();
      await saveButton.click();
      await expect(
        page.getByTestId(settingsPageElement.flashMessageAlert)
      ).toContainText('We have updated your social links');

      // clear value before next test
      await socialInput.clear();
      await Promise.all([
        page.waitForResponse(
          response =>
            response.url().includes('update-my-socials') &&
            response.status() === 200
        ),
        saveButton.click()
      ]);
      await expect(socialCheckmark).toBeHidden();
    });
  });
});
