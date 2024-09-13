import { BlockTypes } from '../../../shared/config/blocks';
import { challengeTypes } from '../../../shared/config/challenge-types';
import { SuperBlocks } from '../../../shared/config/curriculum';

import { isGridBased, gridBasedSuperBlocks } from './curriculum-layout';

describe('isGridBased', () => {
  it(`should return false if challenge type is ${challengeTypes.pythonProject}`, () => {
    expect(
      isGridBased({
        superBlock: SuperBlocks.SciCompPy,
        challengeType: challengeTypes.pythonProject
      })
    ).toEqual(false);
  });

  it(`should return true if block type is ${BlockTypes.workshop}`, () => {
    expect(
      isGridBased({
        superBlock: SuperBlocks.FrontEndDevelopment,
        challengeType: challengeTypes.html,
        blockType: BlockTypes.workshop
      })
    ).toEqual(true);
  });

  it('should return true if the superblock is one of `gridBasedSuperBlocks`', () => {
    gridBasedSuperBlocks.forEach(item => {
      expect(
        isGridBased({
          superBlock: item,
          challengeType: challengeTypes.html
        })
      ).toEqual(true);
    });
  });
});
