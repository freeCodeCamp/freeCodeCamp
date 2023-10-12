import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

test.beforeEach(async ({ page }) => {
  await page.goto('/learn');
});

test.afterEach(async ({ page }) => {
  await page.close();
});

const superBlocksWithLinks = [
  { title: 'Responsive Web Design', link: '/2022/responsive-web-design/' },
  {
    title: 'JavaScript Algorithms and Data Structures',
    link: '/javascript-algorithms-and-data-structures/'
  },
  {
    title: 'Front End Development Libraries',
    link: '/front-end-development-libraries/'
  },
  { title: 'Data Visualization', link: '/data-visualization/' },
  { title: 'Relational Database', link: '/relational-database/' },
  {
    title: 'Back End Development and APIs',
    link: '/back-end-development-and-apis/'
  },
  { title: 'Quality Assurance', link: '/quality-assurance/' },
  {
    title: 'Scientific Computing with Python',
    link: '/scientific-computing-with-python/'
  },
  { title: 'Data Analysis with Python', link: '/data-analysis-with-python/' },
  { title: 'Information Security', link: '/information-security/' },
  {
    title: 'Machine Learning with Python',
    link: '/machine-learning-with-python/'
  },
  {
    title: 'College Algebra with Python',
    link: '/college-algebra-with-python/'
  },
  {
    title: 'Foundational C# with Microsoft',
    link: '/foundational-c-sharp-with-microsoft/'
  },
  { title: 'Coding Interview Prep', link: '/coding-interview-prep/' },
  { title: 'Project Euler', link: '/project-euler/' }
];

test.describe('Map Component E2E Test Suite', () => {
  test('Verifies the headings', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    await expect(
      page.getByText(translations.landing['core-certs-heading'])
    ).toBeVisible();
    await expect(
      page.getByText(translations.landing['professional-certs-heading'])
    ).toBeVisible();
    await expect(
      page.getByText(translations.landing['interview-prep-heading'])
    ).toBeVisible();
  });

  test('verifies all the certifications links rendered correctly', async ({
    page,
    browserName
  }) => {
    test.skip(browserName === 'webkit');
    const curriculumBtns = page.getByTestId('curriculum-map-button');
    await expect(curriculumBtns).toHaveCount(15);
    for (let i = 0; i < superBlocksWithLinks.length; i++) {
      const superblockLink = page.getByRole('link', {
        name: superBlocksWithLinks[i].title
      });
      expect(await superblockLink.getAttribute('href')).toBe(
        `/learn${superBlocksWithLinks[i].link}`
      );
      await superblockLink.click();
    }
  });
});
