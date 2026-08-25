import { test, expect } from '@playwright/test';

test.describe('Block Navigation - Hash Updates', () => {
  test.use({ storageState: { cookies: [], origins: [] } });

  test('should update URL hash when clicking on a challenge link in a grid layout', async ({
    page
  }) => {
    await page.goto(
      '/learn/javascript-algorithms-and-data-structures-v8/#learn-introductory-javascript-by-building-a-pyramid-generator'
    );

    // Verify the hash is set correctly
    await expect(page).toHaveURL(
      /#learn-introductory-javascript-by-building-a-pyramid-generator$/
    );

    // Click on step 1 in the grid - the accessible name includes the sr-only text
    const step1Link = page.getByRole('link', { name: 'Step 1 Not Passed' });
    await expect(step1Link).toBeVisible();
    await step1Link.click();

    // Wait for navigation
    await page.waitForURL(/step-1$/);

    // Go back to verify the hash persists in history
    await page.goBack();
    await expect(page).toHaveURL(
      /#learn-introductory-javascript-by-building-a-pyramid-generator$/
    );
  });

  test('should update URL hash when clicking on a certification project', async ({
    page
  }) => {
    await page.goto('/learn/javascript-algorithms-and-data-structures-v8');

    // Click on the certification project link
    const projectLink = page.getByRole('link', {
      name: 'Build a Palindrome Checker Project Certification Project, Not completed'
    });
    await expect(projectLink).toBeVisible();
    await projectLink.click();

    // Wait for navigation
    await page.waitForURL(/build-a-palindrome-checker$/);

    // Go back to verify the hash persists in history
    await page.goBack();
    await expect(page).toHaveURL(/#build-a-palindrome-checker-project$/);
  });

  test('should update URL hash when clicking on a challenge in accordion layout (v9)', async ({
    page
  }) => {
    await page.goto('/learn/javascript-v9');

    await page.getByRole('button', { name: 'Algorithms', exact: true }).click();

    await page
      .getByRole('button', {
        name: /^Introduction to Common Searching and Sorting Algorithms/
      })
      .click();

    const challengeLink = page.getByRole('link', {
      name: /What Is Binary Search and How Does It Differ From Linear Search\?/
    });
    await expect(challengeLink).toBeVisible();
    await challengeLink.click();

    // Wait for navigation
    await page.waitForURL(
      /what-is-binary-search-and-how-does-it-differ-from-linear-search$/
    );

    // Go back to verify the hash persists in history
    await page.goBack();
    await expect(page).toHaveURL(
      /#lecture-introduction-to-common-searching-and-sorting-algorithms$/
    );
  });

  test('should update URL hash when clicking on a certification project in accordion layout (v9)', async ({
    page
  }) => {
    await page.goto('/learn/javascript-v9');

    // Click on the certification project link
    const projectLink = page.getByRole('link', {
      name: 'Build a Markdown to HTML Converter'
    });
    await expect(projectLink).toBeVisible();
    await projectLink.click();

    // Wait for navigation
    await page.waitForURL(/build-a-markdown-to-html-converter$/);

    // Go back to verify the hash persists in history
    await page.goBack();
    await expect(page).toHaveURL(/#lab-markdown-to-html-converter$/);
  });
});
