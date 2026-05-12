import { test, expect } from '@playwright/test';

import translations from '../client/i18n/locales/english/translations.json';
import { focusEditor, getEditors } from './utils/editor';

interface ChallengeTest {
  text: string;
  testString: string;
}

interface PageData {
  result: {
    data: {
      challengeNode: {
        challenge: { tests: ChallengeTest[] };
      };
    };
  };
}

const challengePath = '/learn/rosetta-code/rosetta-code-challenges/100-doors';

test.describe('Solution Download', () => {
  test.use({ storageState: { cookies: [], origins: [] } });

  test.beforeEach(async ({ page, isMobile }) => {
    await page.route(
      `**/page-data${challengePath}/page-data.json`,
      async route => {
        const response = await route.fetch();
        const pageData = JSON.parse(await response.text()) as PageData;
        pageData.result.data.challengeNode.challenge.tests = [
          { text: 'Mock test', testString: 'assert(true)' }
        ];
        await route.fulfill({
          contentType: 'application/json',
          body: JSON.stringify(pageData)
        });
      }
    );

    await page.goto(challengePath);
    await focusEditor({ page, isMobile });
    await getEditors(page).fill('// solution');

    const checkButton = isMobile
      ? page.getByRole('button', { name: translations.buttons.run })
      : page.getByRole('button', {
          name: translations.buttons['check-code']
        });
    await checkButton.click();
    await page.getByRole('dialog').waitFor({ state: 'visible' });
  });

  test('download button has a .zip filename attribute', async ({ page }) => {
    const downloadLink = page.getByRole('link', {
      name: translations.learn['download-solution']
    });
    await expect(downloadLink).toBeVisible();
    const downloadAttr = await downloadLink.getAttribute('download');
    expect(downloadAttr).toMatch(/\.zip$/);
  });

  test('clicking download triggers a .zip file download', async ({ page }) => {
    const [download] = await Promise.all([
      page.waitForEvent('download'),
      page
        .getByRole('link', { name: translations.learn['download-solution'] })
        .click()
    ]);
    expect(download.suggestedFilename()).toMatch(/\.zip$/);
  });
});
