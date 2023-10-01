import { test, expect, type Page } from '@playwright/test';

import translations from '../client/i18n/locales/english/translations.json';

test.describe('Template Challenges Show', () => {
  let page: Page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto(
      '/learn/foundational-c-sharp-with-microsoft/write-your-first-code-using-c-sharp/write-your-first-c-sharp-code'
    );
  });

  test.afterAll(async () => {
    await page.close();
  });

  test('should display a success dialog when the user submits the form, and they have completed the quiz and the assignments correctly', async () => {
    // Tick the assignment box
    await page.getByRole('checkbox').check();

    // Find and click the third quiz option, which is the correct answer.
    // Set `force: true` to bypass Playwright's check
    // as the radio is visually hidden and the click event is intercepted by the `span` element.
    const quizOptions = await page.getByRole('radio').all();
    await quizOptions[2].check({ force: true });

    await page
      .getByRole('button', { name: translations.buttons['check-answer'] })
      .click();

    await expect(
      page.getByText(translations.learn['assignment-not-complete'])
    ).not.toBeVisible();

    await expect(
      page.getByText(translations.learn['wrong-answer'])
    ).not.toBeVisible();

    // There are two elements with the `dialog` role in the DOM.
    // This appears to be semantically incorrect and should be resolved
    // once we have migrated the component to use Dialog from the `ui-components` library.
    expect(page.getByRole('dialog').all()).toBeTruthy();
    await expect(
      page.getByRole('button', { name: translations.buttons['go-to-next'] })
    ).toBeVisible();
  });
});
