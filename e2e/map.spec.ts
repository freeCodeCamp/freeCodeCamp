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

const superBlocksWithLinks = [
  ...superBlockOrder[SuperBlockStages.FrontEnd],
  ...superBlockOrder[SuperBlockStages.Backend],
  ...superBlockOrder[SuperBlockStages.Python],
  ...superBlockOrder[SuperBlockStages.Professional],
  ...superBlockOrder[SuperBlockStages.Extra]
];

test.describe('Map Component', () => {
  test('should render correctly', async ({ page }) => {
    await expect(
      page.getByText(translations.landing['core-certs-heading'])
    ).toBeVisible();
    await expect(
      page.getByText(translations.landing['professional-certs-heading'])
    ).toBeVisible();
    await expect(
      page.getByText(translations.landing['interview-prep-heading'])
    ).toBeVisible();
    // const curriculumBtns = page.getByTestId('curriculum-map-button');
    // await expect(curriculumBtns).toHaveCount(15);
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
