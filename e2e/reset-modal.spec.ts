import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

const resetText = translations.learn['reset'];
const resetWarnText = translations.learn['reset-warn'];
const resetWarnText2 = translations.learn['reset-warn-2'];
const resetLessonButtonText = translations.buttons['reset-lesson'];

async function seed() {
  // ...
}

test.beforeAll(async () => {
  await seed();
});

test.beforeEach(async ({ page }) => {
  await page.goto(
    '/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-1'
  );
});

test.afterEach(async ({ page }) => {
  await page.close();
});

test('Correct Reset Text', async ({ page }) => {
  const resetTextVar = page.getByTestId('reset-text');
  await expect(resetTextVar).toContainText(resetText);
});
test('Correct Reset Warn Text', async ({ page }) => {
  const resetWarnTextVar = page.getByTestId('reset-warn-text');
  await expect(resetWarnTextVar).toContainText(resetWarnText);
});
test('Correct Reset Warn Text 2', async ({ page }) => {
  const resetWarnText2Var = page.getByTestId('reset-warn-text-2');
  await expect(resetWarnText2Var).toContainText(resetWarnText2);
});

test('Correct Reset Lesson Button Text', async ({ page }) => {
  const resetLessonButtonTextVar = page.getByTestId('reset-lesson-button');
  await expect(resetLessonButtonTextVar).toBeVisible();
  await expect(resetLessonButtonTextVar).toContainText(resetLessonButtonText);
});
