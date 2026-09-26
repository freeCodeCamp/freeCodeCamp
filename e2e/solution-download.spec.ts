import { test, expect } from '@playwright/test';

import translations from '../client/i18n/locales/english/translations.json';
import { clearEditor, getEditors } from './utils/editor';

test.use({ storageState: { cookies: [], origins: [] } });

test('downloads a ZIP after passing a code challenge', async ({
  page,
  isMobile,
  browserName
}) => {
  await page.goto(
    '/learn/javascript-algorithms-and-data-structures/basic-javascript/declare-javascript-variables'
  );
  if (isMobile) await page.getByRole('tab', { name: 'Code' }).click();
  await getEditors(page).focus();
  await clearEditor({ page, browserName, isMobile });
  await page.keyboard.insertText('var myName;');

  const downloadLink = page
    .locator('.buttons-row-container')
    .getByRole('link', {
      name: translations.learn['download-solution']
    });
  await expect(downloadLink).not.toBeVisible();
  await page
    .getByRole('button', { name: translations.buttons['check-code'] })
    .click();
  await expect(downloadLink).toHaveAttribute(
    'download',
    'declare-javascript-variables.zip'
  );
  await page
    .getByTestId('independentLowerJaw-submission-hint-close-button')
    .click();
  await expect(downloadLink).toBeVisible();

  const downloadPromise = page.waitForEvent('download');
  await downloadLink.click();
  const download = await downloadPromise;

  expect(download.suggestedFilename()).toBe('declare-javascript-variables.zip');
  expect(await download.failure()).toBeNull();
});
