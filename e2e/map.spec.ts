import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

test.beforeEach(async ({ page }) => {
  await page.goto('/learn');
});

const LANDING_PAGE_LINKS = [
  {
    slug: 'responsive-web-design-v9',
    name: 'Responsive Web Design Certification'
  },
  {
    slug: 'javascript-v9',
    name: 'JavaScript Certification'
  },
  {
    slug: 'front-end-development-libraries-v9',
    name: 'Front End Development Libraries Certification'
  },
  {
    slug: 'python-v9',
    name: 'Python Certification'
  },
  {
    slug: 'relational-databases-v9',
    name: 'Relational Databases Certification'
  },
  {
    slug: 'back-end-development-and-apis-v9',
    name: 'Back End Development and APIs Certification'
  },
  {
    slug: 'full-stack-developer-v9',
    name: 'Certified Full Stack Developer Curriculum'
  },
  {
    slug: 'a2-english-for-developers',
    name: 'A2 English for Developers Certification'
  },
  {
    slug: 'b1-english-for-developers',
    name: 'B1 English for Developers Certification (Beta)'
  },
  {
    slug: 'foundational-c-sharp-with-microsoft',
    name: 'Free Foundational C# with Microsoft Certification'
  },
  { slug: 'the-odin-project', name: 'The Odin Project - freeCodeCamp Remix' },
  { slug: 'coding-interview-prep', name: 'Coding Interview Prep' },
  { slug: 'project-euler', name: 'Project Euler' },
  { slug: 'rosetta-code', name: 'Rosetta Code' }
];

test.describe('Map Component', () => {
  test('should render correctly', async ({ page }) => {
    await expect(
      page.getByText(translations.landing['core-certs-heading'])
    ).toBeVisible();
    await expect(
      page.getByText(translations.landing['professional-certs-heading'])
    ).toBeVisible();
    await expect(
      page.getByText(translations.landing['interview-prep-heading'])
    ).toBeVisible();
    const curriculumBtns = page.getByTestId('curriculum-map-button');
    await expect(curriculumBtns).toHaveCount(14);

    for (const { name, slug } of LANDING_PAGE_LINKS) {
      const superblockLink = page.getByRole('link', {
        exact: true,
        name
      });

      await expect(superblockLink).toBeVisible();
      await expect(superblockLink).toHaveAttribute('href', `/learn/${slug}/`);
    }
  });
});
