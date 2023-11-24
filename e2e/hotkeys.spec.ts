import { test, expect } from '@playwright/test';

import translations from '../client/i18n/locales/english/translations.json';

const course =
  '/learn/2022/responsive-web-design/build-a-survey-form-project/build-a-survey-form';
const editorPaneLabel =
  'Editor content;Press Alt+F1 for Accessibility Options.';

test.use({ storageState: 'playwright/.auth/certified-user.json' });

test('User can interact with the app using the keyboard', async ({
  page,
  browserName
}) => {
  test.skip(
    browserName === 'webkit',
    'Failing on webkit for no apparent reason. Can not reproduce locally.'
  );

  // Enable keyboard shortcuts
  await page.goto('/settings');
  const keyboardShortcutGroup = page.getByRole('group', {
    name: translations.settings.labels['keyboard-shortcuts']
  });
  await keyboardShortcutGroup
    .getByRole('button', { name: translations.buttons.on, exact: true })
    .click();

  await page.goto(course);

  await page.getByLabel(editorPaneLabel).focus();
  await page.getByLabel(editorPaneLabel).press('Escape');
  await expect(page.getByLabel(editorPaneLabel)).not.toBeFocused();
  await page.keyboard.press('r');
  await expect(page.getByTestId('instructions-panel')).toBeFocused();

  await page.keyboard.press('n');
  const nextCourse =
    '**/learn-the-css-box-model-by-building-a-rothko-painting/step-1';
  await page.waitForURL(nextCourse);
  // Ensure that the page content is loaded before simulating user interactions.
  await expect(
    page.getByText("Here's a preview of what you will build")
  ).toBeVisible();

  await page.keyboard.press('p');
  const previousCourse = '**/build-a-survey-form';
  await page.waitForURL(previousCourse);
  // Ensure that the page content is loaded before simulating user interactions.
  await page.getByText('Start coding!').click();

  await page.getByLabel(editorPaneLabel).focus();
  await page.getByLabel(editorPaneLabel).press('Escape');
  await expect(page.getByLabel(editorPaneLabel)).not.toBeFocused();
  await page.keyboard.press('e');
  await expect(page.getByLabel(editorPaneLabel)).toBeFocused();

  await page.keyboard.press('Control+Enter');
  await expect(page.getByTestId('test-fail-icon').first()).toBeVisible();

  // Show shortcuts (shift+/) is covered by the shortcuts-modal tests
});
