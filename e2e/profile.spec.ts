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
    name: 'Front-End Development Libraries V8',
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
    name: 'Back-End Development and APIs V8',
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
    name: 'Legacy Front-End',
    url: '/certification/certifieduser/legacy-front-end'
  },
  {
    name: 'Legacy JavaScript Algorithms and Data Structures V7',
    url: '/certification/certifieduser/javascript-algorithms-and-data-structures'
  },
  {
    name: 'Legacy Back-End',
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

test.describe('Profile component', () => {
  test.describe('when viewing my own profile', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/certifieduser');
    });

    test('renders the camper profile correctly', async ({ page }) => {
      // There are multiple avatars on the page, one is in the navbar, one is in the page body.
      // The avatar we are interested in is the last one in the list
      const avatar = page
        .getByRole('img', {
          name: translations.icons.avatar,
          includeHidden: true // the svg has `aria-hidden` set to true
        })
        .last();

      // "visible" as in the element is in the DOM, but it is hidden from non-sighted users
      await expect(avatar).toBeVisible();

      await expect(
        page.getByRole('heading', { name: '@certifieduser' })
      ).toBeVisible();
      await expect(page.getByText('Full Stack User')).toBeVisible();
      await expect(page.getByText('Joined November 2020')).toBeVisible();
      await expect(
        page.getByText(translations.profile.contributor)
      ).toBeVisible();
      expect(
        await page.locator('.badge-card-description').textContent()
      ).toContain('Among most prolific volunteers');
    });

    test('displays certifications correctly', async ({ page }) => {
      await expect(
        page.getByRole('heading', { name: 'freeCodeCamp Certifications' })
      ).toBeVisible();
      await expect(
        page.getByRole('heading', { name: 'Legacy Certifications' })
      ).toBeVisible();

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

    test('should not show portfolio when empty', async ({ page }) => {
      // @certifieduser doesn't have portfolio information
      await expect(
        page.getByText(translations.profile.projects)
      ).not.toBeVisible();
    });

    test('displays the timeline correctly', async ({ page }) => {
      await expect(
        page.getByRole('heading', { name: 'Timeline' })
      ).toBeVisible();
      await expect(page.getByRole('table')).toBeVisible();
      await expect(
        page.getByRole('navigation', { name: 'Timeline Pagination' })
      ).toBeVisible();
    });
  });

  test.describe("when viewing someone else's profile", () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/publicUser');
    });

    test.describe('while logged in', () => {
      test('displays the public username', async ({ page }) => {
        await expect(
          page.getByRole('heading', { name: '@publicuser' })
        ).toBeVisible();
      });
    });

    test.describe('logged out', () => {
      test('displays the public username', async ({ page }) => {
        await expect(
          page.getByRole('heading', { name: '@publicuser' })
        ).toBeVisible();
      });
    });
  });
});
