import { test, expect, type Page } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

test.use({ storageState: 'playwright/.auth/certified-user.json' });

const settingsTestIds = {
  settingsHeading: 'settings-heading',
  usernameSettings: 'username-settings',
  newEmail: 'new-email',
  confirmEmail: 'confirm-email',
  internetPresence: 'internet-presence',
  portfolioItems: 'portfolio-items',
  camperIdentity: 'camper-identity'
};

const settingsObject = {
  email: 'foo@bar.com',
  username: 'developmentuser',
  testEmail: 'test@gmail.com',
  pageTitle: `${translations.buttons.settings} | freeCodeCamp.org`,
  userNamePlaceholder: '{{username}}',
  testUser: 'testuser',
  errorCode: '404',
  invalidUserName: 'user!',
  tooShortUserName: 'us',
  private: 'Private',
  public: 'Public',
  supportEmail: 'support@freecodecamp.org',
  supportEmailPlaceholder: '<0>{{email}}</0>'
};

test.describe('Settings', () => {
  let page: Page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('/settings');
  });

  test.afterAll(async () => {
    await page.close();
  });

  test('Should have the correct page title', async () => {
    await expect(page).toHaveTitle(settingsObject.pageTitle);
  });

  test('Should display the correct header', async () => {
    const header = page.getByTestId(settingsTestIds.settingsHeading);
    await expect(header).toBeVisible();
    await expect(header).toContainText(
      `${translations.settings.for.replace(
        settingsObject.userNamePlaceholder,
        settingsObject.username
      )}`
    );
  });

  test('Should validate Username Settings', async () => {
    await expect(
      page
        .locator('strong')
        .filter({ hasText: translations.settings.labels.username })
    ).toBeVisible();
    await expect(
      page.getByTestId(settingsTestIds.usernameSettings)
    ).toBeVisible();
    await page
      .getByTestId(settingsTestIds.usernameSettings)
      .fill(settingsObject.testUser);
    await expect(
      page.getByText(translations.settings.username.validating)
    ).toBeVisible();
    await page
      .getByTestId(settingsTestIds.usernameSettings)
      .fill(settingsObject.errorCode);
    await expect(
      page.getByText(
        translations.settings.username['is a reserved error code'].replace(
          settingsObject.userNamePlaceholder,
          settingsObject.errorCode
        )
      )
    ).toBeVisible();
    await page
      .getByTestId(settingsTestIds.usernameSettings)
      .fill(settingsObject.invalidUserName);
    await expect(
      page.getByText(
        translations.settings.username['contains invalid characters'].replace(
          settingsObject.userNamePlaceholder,
          settingsObject.invalidUserName
        )
      )
    ).toBeVisible();
    await page
      .getByTestId(settingsTestIds.usernameSettings)
      .fill(settingsObject.tooShortUserName);
    await expect(
      page.getByText(
        translations.settings.username['is too short'].replace(
          settingsObject.userNamePlaceholder,
          settingsObject.tooShortUserName
        )
      )
    ).toBeVisible();
    await page
      .getByTestId(settingsTestIds.usernameSettings)
      .fill(settingsObject.username);
    const saveButton = page.getByRole('button', {
      name: translations.settings.labels.username
    });
    await expect(saveButton).toBeVisible();
    await saveButton.press('Enter');
    await expect(
      page.getByText(translations.flash['username-used'])
    ).toBeVisible();
  });

  test('Should validate Email Settings', async () => {
    await expect(
      page.getByRole('heading', { name: translations.settings.email.heading })
    ).toBeVisible();
    await expect(page.getByText(`${settingsObject.email}`)).toBeVisible();
    await expect(
      page.getByText(translations.settings.email.new, { exact: true })
    ).toBeVisible();
    await expect(
      page.getByText(translations.settings.email.confirm, { exact: true })
    ).toBeVisible();
    await expect(
      page
        .getByRole('group', { name: translations.settings.email.weekly })
        .locator('p')
    ).toBeVisible();
    await expect(
      page.getByText(translations.buttons['yes-please'])
    ).toBeVisible();
    await page
      .getByTestId(settingsTestIds.newEmail)
      .fill(settingsObject.testEmail);
    await page
      .getByTestId(settingsTestIds.confirmEmail)
      .fill(settingsObject.testEmail);
    const saveEmailButton = page.getByRole('button', {
      name: translations.settings.email.heading
    });
    await expect(saveEmailButton).toBeVisible();
    await saveEmailButton.click();
    const noWeeklyBtn = page.getByText(translations.buttons['no-thanks']);
    await expect(noWeeklyBtn).toBeVisible();
    await noWeeklyBtn.click();
    await expect(
      page
        .getByRole('group', { name: "Send me Quincy's weekly email" })
        .locator('p')
    ).toBeVisible();
  });

  test('Should validate Privacy Settings', async () => {
    await expect(
      page.getByRole('heading', {
        name: translations.settings.headings.privacy
      })
    ).toBeVisible();
    await expect(page.getByText(translations.settings.privacy)).toBeVisible();
    await expect(
      page
        .locator('p')
        .filter({ hasText: translations.settings.labels['my-profile'] })
    ).toBeVisible();
    await expect(
      page
        .locator('p')
        .filter({ hasText: translations.settings.labels['my-name'] })
    ).toBeVisible();
    await expect(
      page
        .locator('p')
        .filter({ hasText: translations.settings.labels['my-about'] })
    ).toBeVisible();
    await expect(
      page
        .locator('p')
        .filter({ hasText: translations.settings.labels['my-points'] })
    ).toBeVisible();
    await expect(
      page
        .locator('p')
        .filter({ hasText: translations.settings.labels['my-certs'] })
    ).toBeVisible();
    await expect(
      page
        .locator('p')
        .filter({ hasText: translations.settings.labels['my-donations'] })
    ).toBeVisible();
    await expect(
      page
        .locator('p')
        .filter({ hasText: translations.settings.labels['my-heatmap'] })
    ).toBeVisible();
    await expect(
      page
        .locator('p')
        .filter({ hasText: translations.settings.labels['my-location'] })
    ).toBeVisible();
    await expect(
      page
        .locator('p')
        .filter({ hasText: translations.settings.labels['my-timeline'] })
    ).toBeVisible();
    await expect(
      page
        .locator('p')
        .filter({ hasText: translations.settings.labels['my-portfolio'] })
    ).toBeVisible();
    await expect(
      page.getByText(settingsObject.private, { exact: true })
    ).toHaveCount(10);
    await expect(
      page.getByText(settingsObject.public, { exact: true })
    ).toHaveCount(10);
    const saveButton = page.getByRole('button', {
      name: translations.settings.headings.privacy
    });
    await expect(saveButton).toBeVisible();
    await saveButton.press('Enter');
    await expect(page.getByText(translations.settings.data)).toBeVisible();
    const downloadButton = page.getByRole('link', {
      name: translations.buttons['download-data']
    });
    await expect(downloadButton).toBeVisible();
    await downloadButton.click();
  });

  test('Should validate Internet Presence Settings', async () => {
    await expect(
      page.getByRole('heading', {
        name: translations.settings.headings.internet
      })
    ).toBeVisible();
    await expect(
      page.getByTestId(settingsTestIds.internetPresence)
    ).toBeVisible();
    const saveButton = page.getByRole('button', {
      name: translations.settings.headings.internet
    });
    await expect(saveButton).toBeVisible();
    await saveButton.press('Enter');
  });
  test('Should validate Portfolio Settings', async () => {
    await expect(
      page.getByRole('heading', {
        name: translations.settings.headings.portfolio
      })
    ).toBeVisible();
    await expect(
      page.getByText(translations.settings['share-projects'])
    ).toBeVisible();
    const addPortfolioButton = page.getByText(
      translations.buttons['add-portfolio']
    );
    await expect(addPortfolioButton).toBeVisible();
    await addPortfolioButton.click();
    await expect(
      page.getByTestId(settingsTestIds.portfolioItems)
    ).toBeVisible();
    const saveButton = page.getByRole('button', {
      name: translations.buttons['save-portfolio']
    });
    await expect(saveButton).toBeVisible();
    await saveButton.press('Enter');
    const removeButton = page.getByRole('button', {
      name: translations.buttons['remove-portfolio']
    });
    await expect(removeButton).toBeVisible();
    await removeButton.click();
  });

  test('Should validate Personal Portfolio Settings', async () => {
    await expect(
      page.getByRole('heading', {
        name: translations.settings.headings['personal-info']
      })
    ).toBeVisible();
    await expect(
      page.getByTestId(settingsTestIds.camperIdentity)
    ).toBeVisible();
    const saveButton = page.getByRole('button', {
      name: translations.settings.headings['personal-info']
    });
    await expect(saveButton).toBeVisible();
    await saveButton.press('Enter');
    await expect(
      page
        .getByRole('group', {
          name: translations.settings.labels['night-mode'],
          exact: true
        })
        .locator('p')
    ).toBeVisible();
    await expect(page.locator('#legendsound')).toBeVisible();
    await expect(
      page.getByText(translations.settings['sound-volume'])
    ).toBeVisible();
    await expect(
      page
        .getByRole('group', {
          name: translations.settings.labels['keyboard-shortcuts']
        })
        .locator('p')
    ).toBeVisible();
    await expect(
      page.getByText(translations.settings['scrollbar-width'])
    ).toBeVisible();
    const addPortfolioButton = page.getByText(
      translations.buttons['add-portfolio']
    );
    await expect(addPortfolioButton).toBeVisible();
    await addPortfolioButton.click();
    const removeButton = page.getByRole('button', {
      name: translations.buttons['remove-portfolio']
    });
    await expect(removeButton).toBeVisible();
    await removeButton.click();
  });
  test('Should validate Accademy Honesty Settings', async () => {
    await expect(
      page.getByRole('heading', {
        name: translations.settings.headings.honesty
      })
    ).toBeVisible();
    await expect(
      page.getByTestId(settingsTestIds.camperIdentity)
    ).toBeVisible();
    const saveButton = page.getByRole('button', {
      name: translations.settings.headings['personal-info']
    });
    await expect(saveButton).toBeVisible();
    await saveButton.press('Enter');
    await expect(
      page.getByText(translations.settings.honesty.p1)
    ).toBeVisible();
    await expect(
      page.getByText(translations.settings.honesty.p2)
    ).toBeVisible();
    await expect(
      page.getByText(translations.settings.honesty.p3)
    ).toBeVisible();
    await expect(
      page.getByText(translations.settings.honesty.p4)
    ).toBeVisible();
    await expect(
      page.getByText(translations.settings.honesty.p5)
    ).toBeVisible();
    await expect(
      page.getByText(translations.settings.honesty.p6)
    ).toBeVisible();
    await expect(
      page.getByText(
        translations.settings.honesty.p7.replace(
          settingsObject.supportEmailPlaceholder,
          settingsObject.supportEmail
        )
      )
    ).toBeVisible();
  });
});
