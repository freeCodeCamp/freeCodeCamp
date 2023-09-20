import { test, expect, type Page } from '@playwright/test';

test.describe('Certification intro page', () => {
  let page: Page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('/learn/coding-interview-prep/');
  });

  test.afterAll(async () => {
    await page.close();
  });

  test('Should have a relevant page title ', async () => {
    await expect(page).toHaveTitle('Coding Interview Prep | freeCodeCamp.org');
  });

  test('Should have course heading and relevant icon image in the superblock', async () => {
    const heading = page.getByTestId('superblock-heading');
    await expect(heading).toBeVisible();
    await expect(heading).toContainText('Coding Interview Prep');

    const icon = page.getByTestId('algorithm-icon');
    expect(icon).toBeDefined();
  });

  test('Should have relevant course description in the superblock', async () => {
    const description = page.getByTestId('superblock-description-box');
    const childParagraphs = description.locator('p');

    // container should be visible
    await expect(description).toBeVisible();

    // container should have 2 paragraphs
    await expect(childParagraphs).toHaveCount(2);

    // expected content
    const expectedTexts = [
      "If you're looking for free coding exercises to prepare for your next job interview, we've got you covered.",
      'This section contains hundreds of coding challenges that test your knowledge of algorithms, data structures, and mathematics. It also has a number of take-home projects you can use to strengthen your skills, or add to your portfolio.'
    ];

    // checks if received content is equal to the expected content
    const receivedTexts = await childParagraphs.allInnerTexts();
    expect(receivedTexts).toEqual(expectedTexts);
  });

  test('Should display the note if it exists', async () => {
    const noteText = page.getByTestId('superblock-note');

    await expect(noteText).toBeVisible();
    await expect(noteText).toContainText(
      "The Project Euler Project has been moved to it's own course. Go back to curriculum to see the list of courses we offer."
    );
  });
});
