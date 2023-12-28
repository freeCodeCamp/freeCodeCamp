import { test, expect } from '@playwright/test';

import translations from '../client/i18n/locales/english/translations.json';

test.beforeEach(({ browserName }) => {
  test.skip(
    browserName === 'webkit',
    'Failing on webkit for no apparent reason. Can not reproduce locally.'
  );
});

test('should render the modal content correctly', async ({ page }) => {
  await page.goto(
    '/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-2'
  );

  await page.getByRole('button', { name: translations.buttons.reset }).click();

  // There are two elements with the `dialog` role in the DOM.
  // This appears to be semantically incorrect and should be resolved
  // once we have migrated the component to use Dialog from the `ui-components` library.
  const dialogs = await page.getByRole('dialog').all();
  expect(dialogs).toHaveLength(2);

  await expect(
    page.getByRole('button', {
      name: translations.buttons.close
    })
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {
      name: translations.learn.reset
    })
  ).toBeVisible();

  await expect(page.getByText(translations.learn['reset-warn'])).toBeVisible();
  await expect(
    page.getByText(translations.learn['reset-warn-2'])
  ).toBeVisible();

  await expect(
    page.getByRole('button', {
      name: translations.buttons['reset-lesson']
    })
  ).toBeVisible();
});

test('User can reset challenge', async ({ page }) => {
  await page.goto(
    '/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-2'
  );

  const editorPaneLabel =
    'Editor content;Press Alt+F1 for Accessibility Options.';
  const challengeSolution = '<h2>Cat Photos</h2>';

  await page.getByLabel(editorPaneLabel).fill(challengeSolution);
  await expect(
    page
      .frameLocator('iframe[title="challenge preview"]')
      .getByRole('heading', { name: 'Cat Photos' })
  ).toBeVisible();

  await page
    .getByRole('button', {
      name: translations.buttons['check-code']
    })
    .click();

  await expect(
    page.getByText(translations.learn['sorry-keep-trying'])
  ).toBeVisible();

  await page.getByTestId('lowerJaw-reset-button').click();
  await page
    .getByRole('button', { name: translations.buttons['reset-lesson'] })
    .click();

  await expect(
    page
      .frameLocator('iframe[title="challenge preview"]')
      .getByRole('heading', { name: 'Cat Photos' })
  ).not.toBeVisible();
  await expect(
    page.getByText(translations.learn['sorry-keep-trying'])
  ).not.toBeVisible();
});

test('User can reset classic challenge', async ({ page }) => {
  await page.goto(
    '/learn/javascript-algorithms-and-data-structures/basic-javascript/comment-your-javascript-code'
  );

  const editorPaneLabel =
    'Editor content;Press Alt+F1 for Accessibility Options.';
  const challengeSolution = '// This is in-line comment';

  await page.getByLabel(editorPaneLabel).fill(challengeSolution);

  const submitButton = page.getByLabel('Run the tests use shortcut Ctrl+enter');
  await submitButton.click();

  await expect(
    page.locator('.view-lines').getByText(challengeSolution)
  ).toBeVisible();
  await expect(
    page.getByLabel(translations.icons.passed).locator('circle')
  ).toBeVisible();
  await expect(
    page.getByText(translations.learn['tests-completed'])
  ).toBeVisible();

  await page
    .getByRole('button', { name: translations.buttons['reset-lesson'] })
    .click();
  await page
    .getByRole('button', { name: translations.buttons['reset-lesson'] })
    .click();

  await expect(
    page.locator('.view-lines').getByText(challengeSolution)
  ).not.toBeVisible();
  await expect(
    page.getByLabel(translations.icons.passed).locator('circle')
  ).not.toBeVisible();
  await expect(
    page.getByText(translations.learn['tests-completed'])
  ).not.toBeVisible();
  await expect(page.getByText(translations.learn['test-output'])).toBeVisible();
});

test('should close when the user clicks the close button', async ({ page }) => {
  await page.goto(
    '/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-2'
  );

  await page.getByRole('button', { name: translations.buttons.reset }).click();

  // There are two elements with the `dialog` role in the DOM.
  // This appears to be semantically incorrect and should be resolved
  // once we have migrated the component to use Dialog from the `ui-components` library.
  const dialogs = await page.getByRole('dialog').all();
  expect(dialogs).toHaveLength(2);

  await page
    .getByRole('button', {
      name: translations.buttons.close
    })
    .click();

  await expect(page.getByRole('dialog')).toBeHidden();
});
