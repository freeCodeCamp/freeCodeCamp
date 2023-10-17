import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';
test.use({ storageState: 'playwright/.auth/certified-user.json' });

const settingsTestIds = {
  settingsHeading: 'settings-heading',
  usernameSettings: 'username-settings',
  newEmail: 'new-email-input',
  confirmEmail: 'confirm-email-input',
  internetPresence: 'internet-presence',
  portfolioItems: 'portfolio-items',
  camperIdentity: 'camper-identity'
};

const settingsObject = {
  email: 'foo@bar.com',
  certifiedUsername: 'certifieduser',
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

const certifications = [
  translations.certification.title['Responsive Web Design'],
  translations.certification.title['JavaScript Algorithms and Data Structures'],
  translations.certification.title['Front End Development Libraries'],
  translations.certification.title['Data Visualization'],
  translations.certification.title['Relational Database'],
  translations.certification.title['Back End Development and APIs'],
  translations.certification.title['Quality Assurance'],
  translations.certification.title['Scientific Computing with Python'],
  translations.certification.title['Data Analysis with Python'],
  translations.certification.title['Information Security'],
  translations.certification.title['Machine Learning with Python'],
  translations.certification.title['College Algebra with Python'],
  translations.certification.title['Foundational C# with Microsoft']
];

const legacyCertifications = [
  translations.certification.title['Legacy Front End'],
  translations.certification.title['Legacy Back End'],
  translations.certification.title['Legacy Data Visualization'],
  translations.certification.title[
    'Legacy Information Security and Quality Assurance'
  ]
];

test.describe('Settings', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/settings');
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Should have the correct page title', async ({ page }) => {
    await expect(page).toHaveTitle(settingsObject.pageTitle);
  });

  test('Should display the correct header', async ({ page }) => {
    const header = page.getByTestId(settingsTestIds.settingsHeading);
    await expect(header).toBeVisible();
    await expect(header).toContainText(
      `${translations.settings.for.replace(
        settingsObject.userNamePlaceholder,
        settingsObject.certifiedUsername
      )}`
    );
  });

  test('Should validate Username Settings', async ({ page }) => {
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
      .fill(settingsObject.certifiedUsername);
    const saveButton = page.getByRole('button', {
      name: translations.settings.labels.username
    });
    await expect(saveButton).toBeVisible();
    await saveButton.press('Enter');
  });

  test('Should validate Email Settings', async ({ page }) => {
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

  test('Should validate Privacy Settings', async ({ page }) => {
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

  test('Should validate Internet Presence Settings', async ({ page }) => {
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
  test('Should validate Portfolio Settings', async ({ page }) => {
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

  test('Should validate Personal Portfolio Settings', async ({ page }) => {
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
  test('Should validate Accademy Honesty Settings', async ({ page }) => {
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
  test('Should validate Certification Settings', async ({ page }) => {
    await expect(
      page.getByRole('heading', {
        name: translations.settings.headings.certs,
        exact: true
      })
    ).toBeVisible();
    for (let i = 0; i < certifications.length; i++) {
      await expect(
        page.getByRole('heading', {
          name: certifications[i],
          exact: true
        })
      ).toBeVisible();
      await expect(
        page.getByRole('link', {
          name: `${translations.buttons['show-cert']} ${certifications[i]}`
        })
      ).toBeVisible();
    }
  });

  test('Should validate Legacy Certification Settings', async ({ page }) => {
    await expect(
      page.getByRole('heading', {
        name: translations.settings.headings['legacy-certs'],
        exact: true
      })
    ).toBeVisible();
    for (let i = 0; i < legacyCertifications.length; i++) {
      await expect(
        page.getByRole('heading', {
          name: legacyCertifications[i],
          exact: true
        })
      ).toBeVisible();
      await expect(
        page.getByRole('link', {
          name: `${translations.buttons['show-cert']} ${legacyCertifications[i]}`,
          exact: true
        })
      ).toBeVisible();
    }
  });
  test('Should validate Danger Section Settings', async ({ page }) => {
    await expect(
      page.getByRole('tab', {
        name: translations.settings.danger.heading,
        exact: true
      })
    ).toBeVisible();
    await expect(
      page.getByText(translations.settings.danger['be-careful'], {
        exact: true
      })
    ).toBeVisible();
    await page
      .getByRole('button', {
        name: translations.settings.danger.reset,
        exact: true
      })
      .click();
    await page
      .getByRole('button', {
        name: translations.settings.danger['nevermind-2'],
        exact: true
      })
      .click();
    await expect(
      page.getByRole('button', {
        name: translations.settings.danger['reset-confirm'],
        exact: true
      })
    ).toBeVisible();
    await page
      .getByRole('button', {
        name: translations.settings.danger.delete,
        exact: true
      })
      .click();
    await page
      .getByRole('button', {
        name: translations.settings.danger.nevermind,
        exact: true
      })
      .click();
    await expect(
      page.getByRole('button', {
        name: translations.settings.danger.certain,
        exact: true
      })
    ).toBeVisible();
  });
});
