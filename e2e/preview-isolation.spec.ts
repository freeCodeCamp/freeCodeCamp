import { expect, type Page } from '@playwright/test';

import { test } from './fixtures/isolated-user';
import tributePage from './fixtures/tribute-page.json';

import { authedRequest } from './utils/request';

const sentinelAttribute = 'data-fcc-preview-isolation-sentinel';

const unlockedProfile = {
  isLocked: false,
  showAbout: true,
  showCerts: true,
  showDonation: true,
  showHeatMap: true,
  showLocation: true,
  showName: true,
  showPoints: true,
  showPortfolio: true,
  showExperience: true,
  showTimeLine: true
};

const probeHtmlFile = {
  ...tributePage.htmlFile,
  contents: `<head><link rel="stylesheet" href="styles.css"></head><body><main id="main"><div id="title">D</div><div id="tribute-info">s</div> Tribute page text<div id="isolation-probe">unset</div></main><script>
    var probe = document.getElementById('isolation-probe');
    try {
      window.parent.document.body.setAttribute('${sentinelAttribute}', 'reached');
      probe.textContent = 'reachable';
    } catch (err) {
      probe.textContent = err.name;
    }
  </script></body></html>`
};

async function openProjectPreview(page: Page) {
  await page
    .getByRole('button', { name: 'View Solution for Build a Tribute Page' })
    .first()
    .click();
  await page.getByRole('menuitem', { name: 'View Project' }).click();
  await expect(
    page.getByRole('heading', { name: 'Build a Tribute Page', exact: true })
  ).toBeVisible();
}

test.describe('Project preview isolation', () => {
  // The author owns the project; the shared viewer only reads its public profile.
  test.use({
    userPreset: 'development',
    storageState: 'playwright/.auth/certified-user.json'
  });

  test.beforeEach(async ({ isolatedUser, playwright }) => {
    const author = await playwright.request.newContext({
      storageState: isolatedUser.storageState
    });

    try {
      await authedRequest({
        request: author,
        method: 'post',
        endpoint: '/modern-challenge-completed',
        data: {
          id: tributePage.id,
          challengeType: 14,
          files: [probeHtmlFile, tributePage.cssFile]
        }
      });

      await authedRequest({
        request: author,
        endpoint: '/update-my-profileui',
        method: 'put',
        data: { profileUI: unlockedProfile }
      });
    } finally {
      await author.dispose();
    }
  });

  test('a stored project cannot reach the viewer document', async ({
    page,
    isolatedUser
  }) => {
    const pageErrors: string[] = [];
    page.on('pageerror', error => pageErrors.push(error.message));

    await page.goto(`/${isolatedUser.username}`);

    await expect(
      page.getByRole('heading', { name: `@${isolatedUser.username}` })
    ).toBeVisible();

    await openProjectPreview(page);

    const preview = page.frameLocator('#fcc-project-preview-frame');

    await expect(preview.getByText('Tribute page text')).toBeVisible();

    await expect(preview.locator('#isolation-probe')).toHaveText(
      'SecurityError'
    );

    const sentinel = await page.evaluate(
      attr => document.body.getAttribute(attr),
      sentinelAttribute
    );

    expect(sentinel).toBeNull();
    expect(pageErrors).toEqual([]);
  });
});
