import { type Page } from '@playwright/test';
import { test, expect } from './fixtures/isolated-user';

import tributePage from './fixtures/tribute-page.json';

import { authedRequest } from './utils/request';

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

async function expectPreviewToBeShown(page: Page) {
  await page
    .getByRole('button', { name: 'View Solution for Build a Tribute Page' })
    .first()
    .click();
  await page.getByRole('menuitem', { name: 'View Project' }).click();
  const modalHeading = page.getByRole('heading', {
    name: 'Build a Tribute Page',
    exact: true
  });
  await expect(modalHeading).toBeVisible();

  const projectPreview = page.frameLocator('#fcc-project-preview-frame');
  await expect(projectPreview.getByText('Tribute page text')).toBeVisible();
}

test.describe('Completed project preview', () => {
  test.use({ userPreset: 'development' });

  test.beforeEach(async ({ request }) => {
    await authedRequest({
      request,
      method: 'post',
      endpoint: '/modern-challenge-completed',
      data: {
        id: tributePage.id,
        challengeType: 14,
        files: [tributePage.htmlFile, tributePage.cssFile]
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

  test('it should be viewable on the timeline', async ({
    isolatedUser,
    page
  }) => {
    await page.goto(`/${isolatedUser.username}`);

    await expect(
      page.getByRole('heading', { name: `@${isolatedUser.username}` })
    ).toBeVisible();

    await expectPreviewToBeShown(page);
  });

  test('it should be viewable on the settings page', async ({ page }) => {
    await page.goto('/settings');

    await expectPreviewToBeShown(page);
  });
});
