import { execSync } from 'child_process';
import { expect, test } from '@playwright/test';

import { clearEditor, focusEditor, getEditors } from './utils/editor';

test.describe('Super Block Page - Authenticated User', () => {
  test.use({ storageState: 'playwright/.auth/development-user.json' });

  test.beforeEach(() => {
    execSync('node ./tools/scripts/seed/seed-demo-user');
  });

  test.afterAll(() => {
    execSync('node ./tools/scripts/seed/seed-demo-user --certified-user');
  });

  test.describe('Super Block in List View', () => {
    test('should expand the correct block when user goes to the page from breadcrumb click', async ({
      page
    }) => {
      await page.goto(
        '/learn/javascript-algorithms-and-data-structures-v8/learn-basic-javascript-by-building-a-role-playing-game/step-2'
      );

      await page
        .getByRole('link', {
          name: 'Learn Basic JavaScript by Building a Role Playing Game'
        })
        .click();

      await page.waitForURL(
        '/learn/javascript-algorithms-and-data-structures-v8/#learn-basic-javascript-by-building-a-role-playing-game'
      );

      await expect(
        page.getByRole('button', {
          name: 'Learn Basic JavaScript by Building a Role Playing Game'
        })
      ).toHaveAttribute('aria-expanded', 'true');
    });

    test('should expand the block of the most recently completed challenge', async ({
      page,
      isMobile,
      browserName
    }) => {
      test.setTimeout(20000);

      await page.goto('/learn/javascript-algorithms-and-data-structures-v8');

      // The first block is expanded by default
      await expect(
        page.getByRole('button', {
          name: 'Learn Introductory JavaScript by Building a Pyramid Generator'
        })
      ).toHaveAttribute('aria-expanded', 'true');

      await expect(
        page.getByRole('button', {
          name: 'Learn Basic JavaScript by Building a Role Playing Game'
        })
      ).toHaveAttribute('aria-expanded', 'false');

      await page.goto(
        '/learn/javascript-algorithms-and-data-structures-v8/learn-basic-javascript-by-building-a-role-playing-game/step-2'
      );

      const editor = getEditors(page);
      await focusEditor({ page, isMobile });
      await clearEditor({ page, browserName });
      await editor.fill('<script></script>');
      await page.getByRole('button', { name: /check your code/i }).click();
      await page.getByRole('button', { name: /submit and go/i }).click();

      // The submit button navigates user to the next challenge.
      // Allow that navigation to complete before going back to the super block page.
      await page.waitForURL(
        '/learn/javascript-algorithms-and-data-structures-v8/learn-basic-javascript-by-building-a-role-playing-game/step-3'
      );

      // Go back to the super block page
      await page.goto('/learn/javascript-algorithms-and-data-structures-v8');

      await expect(
        page.getByRole('button', {
          name: 'Learn Introductory JavaScript by Building a Pyramid Generator'
        })
      ).toHaveAttribute('aria-expanded', 'false');

      await expect(
        page.getByRole('button', {
          name: 'Learn Basic JavaScript by Building a Role Playing Game'
        })
      ).toHaveAttribute('aria-expanded', 'true');
    });
  });

  test.describe('Super Block in Accordion View', () => {
    test('should expand the correct block when user goes to the page from breadcrumb click', async ({
      page
    }) => {
      await page.goto(`/learn/full-stack-developer/workshop-cafe-menu/step-2`);

      await page
        .getByRole('link', {
          name: 'Design a Cafe Menu'
        })
        .click();

      await page.waitForURL('/learn/full-stack-developer/#workshop-cafe-menu');

      // Chapter
      await expect(
        page.getByRole('button', {
          name: 'CSS',
          exact: true
        })
      ).toHaveAttribute('aria-expanded', 'true');

      // Module
      await expect(
        page.getByRole('button', {
          name: 'Basic CSS'
        })
      ).toHaveAttribute('aria-expanded', 'true');

      // Block
      await expect(
        page.getByRole('button', {
          name: 'Workshop Design a Cafe Menu'
        })
      ).toHaveAttribute('aria-expanded', 'true');
    });

    test('should expand the block of the most recently completed challenge', async ({
      page,
      isMobile,
      browserName
    }) => {
      test.setTimeout(20000);

      await page.goto('/learn/full-stack-developer');

      // First chapter
      await expect(
        page.getByRole('button', {
          name: 'Welcome',
          exact: true
        })
      ).toHaveAttribute('aria-expanded', 'true');

      // First module
      await expect(
        page.getByRole('button', {
          name: 'Getting Started with freeCodeCamp'
        })
      ).toHaveAttribute('aria-expanded', 'true');

      // First block
      await expect(
        page.getByRole('button', {
          name: 'Lecture Welcome to freeCodeCamp'
        })
      ).toHaveAttribute('aria-expanded', 'true');

      await page.goto('/learn/full-stack-developer/workshop-blog-page/step-2');

      const editor = getEditors(page);
      await focusEditor({ page, isMobile });
      await clearEditor({ page, browserName });
      await editor.fill('<head></head>');
      await page.getByRole('button', { name: /check your code/i }).click();
      await page.getByRole('button', { name: /submit and go/i }).click();

      // The submit button navigates user to the next challenge.
      // Allow that navigation to complete before going back to the super block page.
      await page.waitForURL(
        '/learn/full-stack-developer/workshop-blog-page/step-3'
      );

      // Go back to the super block page
      await page.goto('/learn/full-stack-developer');

      // The entire first chapter is collapsed
      await expect(
        page.getByRole('button', {
          name: 'Welcome',
          exact: true
        })
      ).toHaveAttribute('aria-expanded', 'false');

      // HTML chapter
      await expect(
        page.getByRole('button', {
          name: 'HTML',
          exact: true
        })
      ).toHaveAttribute('aria-expanded', 'true');

      // Semantic HTML module
      await expect(
        page.getByRole('button', {
          name: 'Semantic HTML',
          exact: true
        })
      ).toHaveAttribute('aria-expanded', 'true');

      // Cat Blog Page block
      await expect(
        page.getByRole('button', {
          name: 'Workshop Build a Cat Blog Page'
        })
      ).toHaveAttribute('aria-expanded', 'true');
    });
  });
});

test.describe('Super Block Page - Unauthenticated User', () => {
  test.use({ storageState: { cookies: [], origins: [] } });

  test.describe('Super Block in List View', () => {
    test('should expand the first block of the super block', async ({
      page
    }) => {
      await page.goto('/learn/javascript-algorithms-and-data-structures-v8/');

      await expect(
        page.getByRole('button', {
          name: 'Learn Introductory JavaScript by Building a Pyramid Generator'
        })
      ).toHaveAttribute('aria-expanded', 'true');

      await page.goto('/learn/a2-english-for-developers/');

      await expect(
        page.getByRole('button', {
          name: 'Learn Greetings in your First Day at the Office'
        })
      ).toHaveAttribute('aria-expanded', 'true');
    });
  });

  test.describe('Super Block in Accordion View', () => {
    test('should expand the first block of the super block', async ({
      page
    }) => {
      await page.goto('/learn/full-stack-developer');

      // First chapter
      await expect(
        page.getByRole('button', {
          name: 'Welcome',
          exact: true
        })
      ).toHaveAttribute('aria-expanded', 'true');

      // First module
      await expect(
        page.getByRole('button', {
          name: 'Getting Started with freeCodeCamp'
        })
      ).toHaveAttribute('aria-expanded', 'true');

      // First block
      await expect(
        page.getByRole('button', {
          name: 'Lecture Welcome to freeCodeCamp'
        })
      ).toHaveAttribute('aria-expanded', 'true');
    });
  });
});
