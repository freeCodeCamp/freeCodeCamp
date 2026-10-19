import { expect, test } from './fixtures/isolated-user';
import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';

test.use({ userPreset: 'certified' });

test.describe('Archive Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/learn/archive');
  });

  test('links back to the current curriculum', async ({ page }) => {
    const newCurriculumLink = page.locator(
      '.archived-warning a[href="/learn"]'
    );
    await newCurriculumLink.click();

    await expect(page).toHaveURL('/learn');
  });

  test('opens an archived superblock from the archive map', async ({
    page
  }) => {
    const archivedSuperBlockPath = `/learn/${SuperBlocks.RespWebDesignNew}/`;
    const archivedSuperBlockLink = page.locator(
      `a[href="${archivedSuperBlockPath}"]`
    );

    await archivedSuperBlockLink.click();

    await expect(page).toHaveURL(archivedSuperBlockPath);
  });
});
