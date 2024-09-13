import { BlockTypes, HelpCategories } from '../../../shared/config/blocks';
import { challengeTypes } from '../../../shared/config/challenge-types';
import { SuperBlocks } from '../../../shared/config/curriculum';

import { isGridBased, gridBasedSuperBlocks } from './curriculum-layout';

describe('isGridBased', () => {
  it(`should return false if challenge type is ${challengeTypes.pythonProject}`, () => {
    expect(
      isGridBased({
        superBlock: SuperBlocks.SciCompPy,
        challengeType: challengeTypes.pythonProject,
        helpCategory: HelpCategories.Python
      })
    ).toEqual(false);
  });

  it(`should return true if block type is ${BlockTypes.workshop} and help category is ${HelpCategories.HtmlCss}`, () => {
    expect(
      isGridBased({
        superBlock: SuperBlocks.FrontEndDevelopment,
        challengeType: challengeTypes.html,
        blockType: BlockTypes.workshop,
        helpCategory: HelpCategories.HtmlCss
      })
    ).toEqual(true);
  });

  it(`should return true if block type is ${BlockTypes.workshop} and help category is ${HelpCategories.JavaScript}`, () => {
    expect(
      isGridBased({
        superBlock: SuperBlocks.FrontEndDevelopment,
        challengeType: challengeTypes.html,
        blockType: BlockTypes.workshop,
        helpCategory: HelpCategories.JavaScript
      })
    ).toEqual(true);
  });

  it(`should return false if block type is ${BlockTypes.workshop} and help category is not either ${HelpCategories.HtmlCss} or ${HelpCategories.JavaScript}`, () => {
    expect(
      isGridBased({
        superBlock: SuperBlocks.FrontEndDevelopment,
        challengeType: challengeTypes.html,
        blockType: BlockTypes.workshop,
        helpCategory: HelpCategories.BackendDevelopment
      })
    ).toEqual(false);
  });

  it('should return true if the superblock is one of `gridBasedSuperBlocks`', () => {
    gridBasedSuperBlocks.forEach(item => {
      expect(
        isGridBased({
          superBlock: item,
          challengeType: challengeTypes.html,
          helpCategory: HelpCategories.HtmlCss
        })
      ).toEqual(true);
    });
  });
});
