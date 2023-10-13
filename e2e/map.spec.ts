import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';
import intro from '../client/i18n/locales/english/intro.json';

import {
  SuperBlockStages,
  superBlockOrder
} from '../shared/config/superblocks';
test.beforeEach(async ({ page }) => {
  await page.goto('/learn');
});

test.afterEach(async ({ page }) => {
  await page.close();
});

const superBlocksWithLinks = [
  ...superBlockOrder[SuperBlockStages.FrontEnd],
  ...superBlockOrder[SuperBlockStages.Backend],
  ...superBlockOrder[SuperBlockStages.Python],
  ...superBlockOrder[SuperBlockStages.Professional],
  ...superBlockOrder[SuperBlockStages.Extra]
];

test.describe('Map Component E2E Test Suite', () => {
  test('Verifies the headings', async ({ page }) => {
    await expect(
      page.getByText(translations.landing['core-certs-heading'])
    ).toBeVisible();
    await expect(
      page.getByText(translations.landing['professional-certs-heading'])
    ).toBeVisible();
    await expect(
      page.getByText(translations.landing['interview-prep-heading'])
    ).toBeVisible();
  });

  test('verifies all the certifications links rendered correctly', async ({
    page
  }) => {
    const curriculumBtns = page.getByTestId('curriculum-map-button');
    await expect(curriculumBtns).toHaveCount(15);
    for (let i = 0; i < superBlocksWithLinks.length; i++) {
      const superblockLink = page.getByRole('link', {
        name: intro[superBlocksWithLinks[i]].title
      });
      expect(await superblockLink.getAttribute('href')).toBe(
        `/learn/${superBlocksWithLinks[i]}/`
      );
      await superblockLink.click();
    }
  });
});
