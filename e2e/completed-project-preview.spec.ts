import { execSync } from 'node:child_process';

import { test, expect, Page } from '@playwright/test';

import tributePageCSS from './fixtures/tribute-page-css.json';
import tributePageHTML from './fixtures/tribute-page-html.json';
import { authedRequest } from './utils/request';

const htmlFile = {
  contents: tributePageHTML['tribute-page-html'].contents,
  key: 'indexhtml',
  ext: 'html',
  name: 'index',
  history: ['index.html']
};

const cssFile = {
  contents: tributePageCSS['tribute-page-css'].contents,
  key: 'stylescss',
  ext: 'css',
  name: 'styles',
  history: ['styles.css']
};

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
  showTimeLine: true
};

async function expectPreviewToBeShown(page: Page) {
  const modalHeading = page.getByRole('heading', {
    name: 'Build a Tribute Page',
    exact: true
  });
  await expect(modalHeading).toBeVisible();

  const projectPreview = page.frameLocator('#fcc-project-preview-frame');
  await expect(projectPreview.getByText('Tribute page text')).toBeVisible();
}

test.describe('Completed project preview', () => {
  test.use({ storageState: 'playwright/.auth/development-user.json' });

  test.beforeEach(async ({ request }) => {
    execSync('node ./tools/scripts/seed/seed-demo-user');

    await authedRequest({
      request,
      method: 'post',
      endpoint: '/modern-challenge-completed',
      data: {
        id: tributePageHTML['tribute-page-html'].id,
        challengeType: 14,
        files: [htmlFile, cssFile]
      }
    });

    await authedRequest({
      request,
      endpoint: '/update-my-profileui',
      method: 'put',
      data: {
        profileUI: unlockedProfile
      }
    });
  });

  test('it should be viewable on the timeline', async ({ page }) => {
    await page.goto('/developmentuser');

    if (!process.env.CI) {
      await page
        .getByRole('button', { name: 'Preview custom 404 page' })
        .click();
    }

    await expect(
      page.getByRole('heading', { name: '@developmentuser' })
    ).toBeVisible();
    // TODO: dry this up
    await page
      .getByRole('button', { name: 'View Solution for Build a Tribute Page' })
      .click();
    await page.getByRole('menuitem', { name: 'View Project' }).click();

    await expectPreviewToBeShown(page);
  });

  test('it should be viewable on the settings page', async ({ page }) => {
    await page.goto('/settings');
    // TODO: dry this up
    await page
      .getByRole('button', { name: 'View Solution for Build a Tribute Page' })
      .first()
      .click();
    await page.getByRole('menuitem', { name: 'View Project' }).click();

    await expectPreviewToBeShown(page);
  });
});
