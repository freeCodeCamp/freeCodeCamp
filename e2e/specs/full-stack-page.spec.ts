import { test, expect } from '@playwright/test';

const requiredCerts = [
  {
    text: 'Responsive Web Design Certification',
    slug: '/learn/responsive-web-design-v9/'
  },
  {
    text: 'JavaScript Certification',
    slug: '/learn/javascript-v9/'
  },
  {
    text: 'Front End Development Libraries Certification',
    slug: '/learn/front-end-development-libraries-v9/'
  },
  {
    text: 'Python Certification',
    slug: '/learn/python-v9/'
  },
  {
    text: 'Relational Databases Certification',
    slug: '/learn/relational-databases-v9/'
  },
  {
    text: 'Back End Development and APIs Certification',
    slug: '/learn/back-end-development-and-apis-v9/'
  }
];

test.describe('Full Stack Developer V9 superBlock page', () => {
  test('lists and links to requirements', async ({ page }) => {
    await page.goto('/learn/full-stack-developer-v9/');

    const reqList = page.locator('.requirement-list');
    await expect(reqList).toBeVisible();

    const reqLinks = reqList.locator('.chapter.requirement .chapter-button');
    await expect(reqLinks).toHaveCount(requiredCerts.length);

    for (let i = 0; i < requiredCerts.length; i++) {
      const reqLink = reqLinks.nth(i);
      await expect(reqLink).toBeVisible();
      await expect(reqLink).toContainText(requiredCerts[i].text);
      await expect(reqLink).toHaveAttribute('href', requiredCerts[i].slug);
    }
  });

  if (process.env.SHOW_UPCOMING_CHANGES === 'true') {
    test('shows the exam', async ({ page }) => {
      await page.goto('/learn/full-stack-developer-v9/');
      const examChapterButton = page.locator('.chapter .chapter-button', {
        hasText: /certified full stack developer exam/i
      });

      await expect(examChapterButton).toBeVisible();
      await expect(examChapterButton).toHaveAttribute(
        'href',
        '/learn/full-stack-developer-v9/exam-certified-full-stack-developer/exam-certified-full-stack-developer'
      );
    });
  } else {
    test('shows the exam module and coming soon text', async ({ page }) => {
      await page.goto('/learn/full-stack-developer-v9/');
      const examChapterButton = page.locator('.chapter .chapter-button', {
        hasText: /certified full stack developer exam/i
      });
      await expect(examChapterButton).toBeVisible();

      const examModuleButton = page.locator('.module-button', {
        hasText: /certified full stack developer exam/i
      });
      await examModuleButton.click();

      const moduleIntro = page.locator('.module-intro');
      await expect(moduleIntro).toBeVisible();
      await expect(moduleIntro).toContainText('Coming Late 2026');
      await expect(moduleIntro).toContainText(
        'This exam will test what you have learned throughout the previous six certifications.'
      );
    });
  }
});
