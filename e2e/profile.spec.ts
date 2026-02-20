import { test, expect } from '@playwright/test';

import translations from '../client/i18n/locales/english/translations.json';

const certs = [
  {
    name: 'Foundational C# with Microsoft',
    url: '/certification/certifieduser/foundational-c-sharp-with-microsoft'
  }
];

const legacyCerts = [
  {
    name: 'Legacy Responsive Web Design V8',
    url: '/certification/certifieduser/responsive-web-design'
  },
  {
    name: 'Legacy JavaScript Algorithms and Data Structures V8',
    url: '/certification/certifieduser/javascript-algorithms-and-data-structures-v8'
  },
  {
    name: 'Frontend Development Libraries V8',
    url: '/certification/certifieduser/front-end-development-libraries'
  },
  {
    name: 'Data Visualization V8',
    url: '/certification/certifieduser/data-visualization'
  },
  {
    name: 'Relational Database V8',
    url: '/certification/certifieduser/relational-database-v8'
  },
  {
    name: 'Backend Development and APIs V8',
    url: '/certification/certifieduser/back-end-development-and-apis'
  },
  {
    name: 'Quality Assurance',
    url: '/certification/certifieduser/quality-assurance-v7'
  },
  {
    name: 'Scientific Computing with Python',
    url: '/certification/certifieduser/scientific-computing-with-python-v7'
  },
  {
    name: 'Data Analysis with Python',
    url: '/certification/certifieduser/data-analysis-with-python-v7'
  },
  {
    name: 'Information Security',
    url: '/certification/certifieduser/information-security-v7'
  },
  {
    name: 'Machine Learning with Python',
    url: '/certification/certifieduser/machine-learning-with-python-v7'
  },
  {
    name: 'College Algebra with Python',
    url: '/certification/certifieduser/college-algebra-with-python-v8'
  },
  {
    name: 'Legacy Frontend',
    url: '/certification/certifieduser/legacy-front-end'
  },
  {
    name: 'Legacy JavaScript Algorithms and Data Structures V7',
    url: '/certification/certifieduser/javascript-algorithms-and-data-structures'
  },
  {
    name: 'Legacy Backend',
    url: '/certification/certifieduser/legacy-back-end'
  },
  {
    name: 'Legacy Data Visualization',
    url: '/certification/certifieduser/legacy-data-visualization'
  },
  {
    name: 'Legacy Information Security and Quality Assurance',
    url: '/certification/certifieduser/information-security-and-quality-assurance'
  },
  {
    name: 'Legacy Full-Stack',
    url: '/certification/certifieduser/full-stack'
  }
];

test.describe('Profile - Owner View', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/certifieduser');
  });

  test('renders the camper profile correctly', async ({ page }) => {
    const avatar = page
      .getByRole('img', {
        name: translations.icons.avatar,
        includeHidden: true
      })
      .last();
    await expect(avatar).toBeVisible();
    await expect(
      page.getByRole('heading', { name: '@certifieduser' })
    ).toBeVisible();
    await expect(page.getByText('Full Stack User')).toBeVisible();
    await expect(page.getByText('Joined November 2020')).toBeVisible();
    await expect(
      page.getByText(translations.profile.contributor)
    ).toBeVisible();
  });

  test('displays certifications correctly', async ({ page }) => {
    for (const cert of certs) {
      const link = page
        .getByRole('link', {
          name: `View ${cert.name} Certification`
        })
        .first();
      await expect(link).toBeVisible();
      await expect(link).toHaveAttribute('href', cert.url);
    }

    for (const cert of legacyCerts) {
      const link = page
        .getByRole('link', {
          name: `View ${cert.name} Certification`
        })
        .last();
      await expect(link).toBeVisible();
      await expect(link).toHaveAttribute('href', cert.url);
    }
  });

  test('displays the timeline correctly', async ({ page }) => {
    await expect(page.getByRole('table')).toBeVisible();
  });

  test('shows widget headers with toggles for owner', async ({ page }) => {
    // Stats widget header
    await expect(
      page.getByRole('heading', { name: translations.profile.stats })
    ).toBeVisible();

    // Activity (HeatMap) widget header
    await expect(
      page.getByRole('heading', { name: translations.profile.activity })
    ).toBeVisible();

    // Timeline widget header
    await expect(
      page.getByRole('heading', { name: translations.profile.timeline })
    ).toBeVisible();
  });

  test('does not show a separate social-link button', async ({ page }) => {
    await expect(
      page.getByRole('button', {
        name: translations.profile['add-new-social-link']
      })
    ).toHaveCount(0);
  });

  test('should not show portfolio when empty', async ({ page }) => {
    // @certifieduser doesn't have portfolio - but as owner they should see the
    // empty state with widget header
    await expect(
      page.getByText(translations.profile['no-portfolio'])
    ).toBeVisible();
  });
});

test.describe('Profile - Personal Info Modal', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/certifieduser');
  });

  test('opens personal info modal and shows form fields', async ({ page }) => {
    const editButton = page.getByRole('button', {
      name: translations.profile['edit-personal-info']
    });
    await editButton.click();

    // Modal header
    await expect(
      page.getByRole('heading', {
        name: translations.profile['edit-personal-info']
      })
    ).toBeVisible();

    // Personal info form fields
    await expect(page.getByTestId('camper-identity')).toBeVisible();
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

    // Privacy toggles inside modal
    await expect(
      page.getByRole('group', {
        name: translations.settings.labels['my-name']
      })
    ).toBeVisible();
    await expect(
      page.getByRole('group', {
        name: translations.settings.labels['my-location']
      })
    ).toBeVisible();
    await expect(
      page.getByRole('group', {
        name: translations.settings.labels['my-about']
      })
    ).toBeVisible();
  });

  test('save button is disabled when no changes', async ({ page }) => {
    const editButton = page.getByRole('button', {
      name: translations.profile['edit-personal-info']
    });
    await editButton.click();

    const saveButton = page.getByRole('button', {
      name: `Save ${translations.profile['edit-personal-info']}`
    });
    await expect(saveButton).toBeDisabled();
  });
});

test.describe('Profile - Internet Presence In Personal Info Modal', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/certifieduser');
  });

  test('opens personal info modal with social link fields', async ({
    page
  }) => {
    const editButton = page.getByRole('button', {
      name: translations.profile['edit-personal-info']
    });
    await editButton.click();

    await expect(
      page.getByRole('heading', {
        name: translations.profile['edit-personal-info']
      })
    ).toBeVisible();

    await expect(page.getByTestId('internet-presence')).toBeVisible();
    await expect(page.getByLabel('GitHub')).toBeVisible();
    await expect(page.getByLabel('LinkedIn')).toBeVisible();
    await expect(
      page.getByRole('textbox', { name: 'X', exact: true })
    ).toBeVisible();
    await expect(page.getByLabel('Bluesky')).toBeVisible();
    await expect(
      page.getByLabel(translations.settings.labels.personal)
    ).toBeVisible();
  });
});

test.describe('Profile - Add New Actions', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/certifieduser');
  });

  test('opens portfolio modal from add new project action', async ({
    page
  }) => {
    await page
      .getByRole('button', {
        name: translations.profile['add-new-project']
      })
      .click();

    await expect(
      page.getByRole('heading', {
        name: translations.profile['edit-portfolio']
      })
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: translations.buttons['add-portfolio'] })
    ).toBeVisible();
  });

  test('opens experience modal from add new experience action', async ({
    page
  }) => {
    await page
      .getByRole('button', {
        name: translations.profile['add-new-experience']
      })
      .click();

    await expect(
      page.getByRole('heading', {
        name: translations.profile['edit-experience']
      })
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: translations.profile.experience.add })
    ).toBeVisible();
  });
});

test.describe("Profile - Visitor's View", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/publicUser');
  });

  test('displays the public username', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: '@publicuser' })
    ).toBeVisible();
  });

  test('does not show edit buttons for visitors', async ({ page }) => {
    const editButtons = page.getByRole('button', {
      name: /Edit/
    });
    await expect(editButtons).toHaveCount(0);
  });

  test('does not show toggle switches for visitors', async ({ page }) => {
    await expect(page.locator('.widget-toggle')).toHaveCount(0);
  });

  test('does not show private badge for visitors', async ({ page }) => {
    await expect(page.locator('.private-badge')).toHaveCount(0);
  });
});
