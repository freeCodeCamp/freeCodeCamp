import { execSync } from 'child_process';
import { test, expect } from '@playwright/test';

import translations from '../client/i18n/locales/english/translations.json';
import { alertToBeVisible } from './utils/alerts';

const settingsTestIds = {
  settingsHeading: 'settings-heading',
  portfolioItems: 'portfolio-items'
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

test.describe('Settings - Certified User', () => {
  test.use({ storageState: 'playwright/.auth/certified-user.json' });

  test.beforeEach(async ({ page }) => {
    execSync('node ./tools/scripts/seed/seed-demo-user --certified-user');
    await page.goto('/settings');
  });

  test('Should render correctly', async ({ page }) => {
    // Title
    await expect(page).toHaveTitle(settingsObject.pageTitle);

    // Header
    const header = page.getByTestId(settingsTestIds.settingsHeading);
    await expect(header).toBeVisible();
    await expect(header).toContainText(
      `${translations.settings.for.replace(
        settingsObject.userNamePlaceholder,
        settingsObject.certifiedUsername
      )}`
    );

    // Privacy Settings
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
    await expect(page.getByText(translations.settings.data)).toBeVisible();
    const downloadButton = page.getByRole('link', {
      name: translations.buttons['download-data']
    });
    await expect(downloadButton).toBeVisible();

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

    // Certifications
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

    // Legacy Certifications
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

    // Danger Zone
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

// In order to claim the Full Stack cert, the user needs to complete 6 certs.
// Instead of simulating 6 cert claim flows,
// we use the data of Certified User but remove the Full Stack cert.
test.describe('Settings - Certified User without Full Stack Certification', () => {
  test.use({ storageState: 'playwright/.auth/certified-user.json' });

  test.beforeEach(async ({ page }) => {
    execSync(
      'node ./tools/scripts/seed/seed-demo-user --certified-user --set-false isFullStackCert'
    );
    await page.goto('/settings');
  });

  test.afterAll(() => {
    execSync('node ./tools/scripts/seed/seed-demo-user --certified-user');
  });

  test('should allow claiming Full Stack cert if the user has completed all requirements', async ({
    page
  }) => {
    const claimButton = page.getByRole('button', {
      name: 'Claim Certification Legacy Full Stack'
    });
    const showButton = page.getByRole('link', {
      name: 'Show Certification Legacy Full Stack'
    });

    await expect(claimButton).toBeVisible();
    await expect(claimButton).toBeEnabled();
    await claimButton.click();

    await alertToBeVisible(
      page,
      '@certifieduser, you have successfully claimed the Legacy Full Stack Certification! Congratulations on behalf of the freeCodeCamp.org team!'
    );
    await expect(claimButton).toBeHidden();
    await expect(showButton).toBeVisible();
    await expect(showButton).toHaveAttribute(
      'href',
      '/certification/certifieduser/full-stack'
    );
  });
});

test.describe('Settings - New User', () => {
  test.use({ storageState: 'playwright/.auth/development-user.json' });

  test.beforeEach(async ({ page }) => {
    execSync('node ./tools/scripts/seed/seed-demo-user');
    await page.goto('/settings');
  });

  test.afterAll(() => {
    execSync('node ./tools/scripts/seed/seed-demo-user --certified-user');
  });

  test('should not allow claiming Full Stack cert if the user has not completed all the required certs', async ({
    page
  }) => {
    const claimFullStackCertButton = page.getByRole('button', {
      name: 'Claim Certification Legacy Full Stack'
    });

    const claimRwdCertButton = page.getByRole('button', {
      name: 'Claim Certification Responsive Web Design'
    });

    // Buttons for normal certs are enabled
    await expect(claimRwdCertButton).toBeVisible();
    await expect(claimRwdCertButton).toBeEnabled();

    // Button for full stack cert is disabled if the user hasn't claimed the required certs
    await expect(claimFullStackCertButton).toBeVisible();
    await expect(claimFullStackCertButton).toBeDisabled();
  });
});
