import { test, expect } from '@playwright/test';

const settingsPageElement = {
  yourInternetPresenceSectionHeader: 'your-internet-presence-header',
  githubInput: 'internet-github-input',
  githubCheckmark: 'internet-github-check',
  linkedinInput: 'internet-linkedin-input',
  linkedinCheckmark: 'internet-linkedin-check',
  twitterInput: 'internet-twitter-input',
  twitterCheckmark: 'internet-twitter-check',
  personalWebsiteInput: 'internet-website-input',
  personalWebsiteCheckmark: 'internet-website-check',
  saveButton: 'internet-save-button',
  flashMessageAlert: 'flash-message'
} as const;

test.use({ storageState: 'playwright/.auth/certified-user.json' });

test.beforeEach(async ({ page }) => {
  await page.goto('/settings');
});

test.describe('Your Internet Presence', () => {
  test('should display section header on settings page', async ({ page }) => {
    await expect(
      page.getByTestId(settingsPageElement.yourInternetPresenceSectionHeader)
    ).toHaveText('Your Internet Presence');
  });

  const socials = [
    {
      name: 'github',
      url: 'https://github.com/certified-user',
      inputTestId: settingsPageElement.githubInput,
      checkTestId: settingsPageElement.githubCheckmark
    },
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/certified-user',
      inputTestId: settingsPageElement.linkedinInput,
      checkTestId: settingsPageElement.linkedinCheckmark
    },
    {
      name: 'twitter',
      url: 'https://twitter.com/certified-user',
      inputTestId: settingsPageElement.twitterInput,
      checkTestId: settingsPageElement.twitterCheckmark
    },
    {
      name: 'website',
      url: 'https://certified-user.com',
      inputTestId: settingsPageElement.personalWebsiteInput,
      checkTestId: settingsPageElement.personalWebsiteCheckmark
    }
  ];

  socials.forEach(social => {
    test(`should update ${social.name} URL`, async ({ browserName, page }) => {
      test.skip(browserName === 'webkit', 'csrf_token cookie is being deleted');

      await page.getByTestId(social.inputTestId).fill(social.url);
      await expect(page.getByTestId(social.checkTestId)).toBeVisible();

      await page.getByTestId(settingsPageElement.saveButton).click();
      await expect(
        page.getByTestId(settingsPageElement.flashMessageAlert)
      ).toContainText('We have updated your social links');

      // clear value before next test
      await page.getByTestId(social.inputTestId).clear();
      await Promise.all([
        page.waitForResponse(
          response =>
            response.url().includes('update-my-socials') &&
            response.status() === 200
        ),
        page.getByTestId(settingsPageElement.saveButton).click()
      ]);
    });
  });
});
