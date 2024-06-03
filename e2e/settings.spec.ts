import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';
test.use({ storageState: 'playwright/.auth/certified-user.json' });

const settingsTestIds = {
  settingsHeading: 'settings-heading',
  internetPresence: 'internet-presence',
  portfolioItems: 'portfolio-items',
  camperIdentity: 'camper-identity'
};

const settingsObject = {
  email: 'foo@bar.com',
  userNamePlaceholder: '{{username}}',
  certifiedUsername: 'certifieduser',
  testEmail: 'test@gmail.com',
  pageTitle: `${translations.buttons.settings} | freeCodeCamp.org`,
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

  test('Should validate Privacy Settings', async ({ page }) => {
    await expect(
      page.getByRole('heading', {
        name: translations.settings.headings.privacy
      })
    ).toBeVisible();
    await expect(page.getByText(translations.settings.privacy)).toBeVisible();
    await expect(
      page
        .getByRole('group', {
          name: translations.settings.labels['my-profile']
        })
        .locator('p')
        .filter({ hasText: translations.settings.labels['my-profile'] })
    ).toBeVisible();
    await expect(
      page
        .getByRole('group', {
          name: translations.settings.labels['my-name']
        })
        .locator('p')
        .filter({ hasText: translations.settings.labels['my-name'] })
    ).toBeVisible();
    await expect(
      page
        .getByRole('group', {
          name: translations.settings.labels['my-about']
        })
        .locator('p')
        .filter({ hasText: translations.settings.labels['my-about'] })
    ).toBeVisible();
    await expect(
      page
        .getByRole('group', {
          name: translations.settings.labels['my-points']
        })
        .locator('p')
        .filter({ hasText: translations.settings.labels['my-points'] })
    ).toBeVisible();
    await expect(
      page
        .getByRole('group', {
          name: translations.settings.labels['my-certs']
        })
        .locator('p')
        .filter({ hasText: translations.settings.labels['my-certs'] })
    ).toBeVisible();
    await expect(
      page
        .getByRole('group', {
          name: translations.settings.labels['my-donations']
        })
        .locator('p')
        .filter({ hasText: translations.settings.labels['my-donations'] })
    ).toBeVisible();
    await expect(
      page
        .getByRole('group', {
          name: translations.settings.labels['my-heatmap']
        })
        .locator('p')
        .filter({ hasText: translations.settings.labels['my-heatmap'] })
    ).toBeVisible();
    await expect(
      page
        .getByRole('group', {
          name: translations.settings.labels['my-location']
        })
        .locator('p')
        .filter({ hasText: translations.settings.labels['my-location'] })
    ).toBeVisible();
    await expect(
      page
        .getByRole('group', {
          name: translations.settings.labels['my-timeline']
        })
        .locator('p')
        .filter({ hasText: translations.settings.labels['my-timeline'] })
    ).toBeVisible();
    await expect(
      page
        .getByRole('group', {
          name: translations.settings.labels['my-portfolio']
        })
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
  });

  test('Should validate Personal Information Settings', async ({ page }) => {
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
    await expect(saveButton).toBeDisabled();
    await expect(
      page.getByLabel(translations.settings.labels.name, { exact: true })
    ).toHaveValue('Full Stack User');
    await expect(
      page.getByLabel(translations.settings.labels.location)
    ).toHaveValue('');
    await expect(
      page.getByLabel(translations.settings.labels.picture)
    ).toHaveValue('');
    await expect(
      page.getByLabel(translations.settings.labels.about)
    ).toHaveValue('');
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
        .first()
    ).toBeVisible();
    await expect(
      page.getByText(translations.settings['scrollbar-width'])
    ).toBeVisible();
  });

  test('Should validate Academy Honesty Settings', async ({ page }) => {
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

  test('Should display the Danger section properly', async ({ page }) => {
    await expect(page.getByText('Danger Zone')).toBeVisible();
    await expect(
      page.getByText(
        'Please be careful. Changes in this section are permanent.'
      )
    ).toBeVisible();
    await expect(
      page.getByRole('button', {
        name: 'Reset all of my progress'
      })
    ).toBeVisible();
    await expect(
      page.getByRole('button', {
        name: 'Delete my account'
      })
    ).toBeVisible();
  });
});
