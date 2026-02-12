import { expect, test } from '@playwright/test';
import intro from '../client/i18n/locales/english/intro.json';
import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';

const archivedSuperBlocks = [
  intro[SuperBlocks.RespWebDesignNew].title,
  intro[SuperBlocks.JsAlgoDataStructNew].title,
  intro[SuperBlocks.FrontEndDevLibs].title,
  intro[SuperBlocks.DataVis].title,
  intro[SuperBlocks.RelationalDb].title,
  intro[SuperBlocks.BackEndDevApis].title,
  intro[SuperBlocks.QualityAssurance].title,
  intro[SuperBlocks.SciCompPy].title,
  intro[SuperBlocks.DataAnalysisPy].title,
  intro[SuperBlocks.InfoSec].title,
  intro[SuperBlocks.MachineLearningPy].title,
  intro[SuperBlocks.CollegeAlgebraPy].title,
  intro[SuperBlocks.RespWebDesign].title,
  intro[SuperBlocks.JsAlgoDataStruct].title,
  intro[SuperBlocks.PythonForEverybody].title
];

test.describe('Archive Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/learn/archive');
  });

  test('Links to /learn', async ({ page }) => {
    const newCurriculumLink = page.locator(
      '.archived-warning a[href="/learn"]'
    );
    await expect(newCurriculumLink).toBeVisible();
  });

  test('Links to all archived superblocks in order', async ({ page }) => {
    const curriculumBtns = page.getByTestId('curriculum-map-button');
    await expect(curriculumBtns).toHaveCount(archivedSuperBlocks.length);
    for (let index = 0; index < archivedSuperBlocks.length; index++) {
      const btn = curriculumBtns.nth(index);
      const link = btn.getByRole('link', { name: archivedSuperBlocks[index] });
      await expect(link).toBeVisible();
    }
  });
});
