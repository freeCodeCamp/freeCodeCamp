import { test, expect, type Page } from '@playwright/test';
import superblockTexts from '../client/i18n/locales/english/intro.json';

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

    const superblockIcon = page.getByTestId('superblock-icon');
    await expect(superblockIcon).toBeVisible();

    const algorithmIcon = superblockIcon.getByTestId('algorithm-icon');
    await expect(algorithmIcon).toBeVisible();
  });

  test('Should have relevant course description in the superblock', async () => {
    const description = page.getByTestId('superblock-description-box');
    const childParagraphs = description.getByTestId(
      'superblock-description-para'
    );

    // container should be visible
    await expect(description).toBeVisible();

    // container should have 2 paragraphs
    await expect(childParagraphs).toHaveCount(2);

    // checks if received content is equal to the expected content
    const receivedTexts = await childParagraphs.allInnerTexts();
    expect(receivedTexts).toEqual(
      superblockTexts['coding-interview-prep'].intro
    );
  });

  test('Should display the note if it exists', async () => {
    const noteText = page.getByTestId('superblock-note');

    await expect(noteText).toBeVisible();
    await expect(noteText).toContainText(
      superblockTexts['coding-interview-prep'].note
    );
  });
});
