import { test, expect, type Page } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

let page: Page;

type StaticDataTransalations = {
  [key: string]: string;
};

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto('/learn');
});

test.afterAll(async () => {
  await page.close();
});

test('the page should render with correct title', async () => {
  await expect(page).toHaveTitle(
    'Learn to Code — For Free — Coding Courses for Busy People'
  );
});

test('the page should have the correct header', async () => {
  await expect(
    page.getByRole('heading', { name: `${translations.learn.heading}` })
  ).toBeVisible();
});

test('the page should have all static data correctly placed', async () => {
  const staticDataIterable: StaticDataTransalations =
    translations.learn['read-this'];
  let staticDataKey: keyof StaticDataTransalations;
  for (staticDataKey in staticDataIterable) {
    const urlSafeTranslations = staticDataIterable[staticDataKey].split('<0>');
    await expect(page.getByText(`${urlSafeTranslations[0]}`)).toBeVisible();
  }
});

test('the page renders all curriculum certifications', async () => {
  const curriculumBtns = page.getByTestId('curriculum-map-button');
  await expect(curriculumBtns).toHaveCount(15);
});
