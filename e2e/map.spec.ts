import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';
import intro from '../client/i18n/locales/english/intro.json';

import { SuperBlockStage, superBlockStages } from '../shared/config/curriculum';
import { superBlocksWithoutLastWord } from '../client/src/utils/superblock-map-titles';

test.beforeEach(async ({ page }) => {
  await page.goto('/learn');
});

const superBlocksWithLinks = [
  ...superBlockStages[SuperBlockStage.Core],
  ...superBlockStages[SuperBlockStage.Next],
  ...superBlockStages[SuperBlockStage.English],
  ...superBlockStages[SuperBlockStage.NextEnglish],
  ...superBlockStages[SuperBlockStage.Professional],
  ...superBlockStages[SuperBlockStage.Extra],
  ...superBlockStages[SuperBlockStage.Legacy]
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
    const curriculumBtns = page.getByTestId('curriculum-map-button');
    await expect(curriculumBtns).toHaveCount(superBlocksWithLinks.length);

    for (let i = 0; i < superBlocksWithLinks.length; i++) {
      const addLastWord = !Object.values(superBlocksWithoutLastWord).includes(
        superBlocksWithLinks[i]
      );

      const name = addLastWord
        ? `${intro[superBlocksWithLinks[i]].title} Certification`
        : intro[superBlocksWithLinks[i]].title;

      const superblockLink = page.getByRole('link', {
        exact: true,
        name
      });

      await expect(superblockLink).toBeVisible();
      await expect(superblockLink).toHaveAttribute(
        'href',
        `/learn/${superBlocksWithLinks[i]}/`
      );
    }
  });
});
