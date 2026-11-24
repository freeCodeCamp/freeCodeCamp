import { expect, test, vi } from 'vitest';
import { challengeTypes } from '@freecodecamp/shared/config/challenge-types';
import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';
import { createChallengePages } from './challenge-page-creator';

test('includes the superblock in exam download page context', () => {
  const createPage = vi.fn();
  const node = {
    id: 'exam-node',
    challenge: {
      id: 'exam-challenge',
      superBlock: SuperBlocks.RespWebDesignV9,
      block: 'exam-responsive-web-design-certification',
      challengeType: challengeTypes.examDownload,
      fields: { slug: '/learn/responsive-web-design-v9/exam/' },
      solutions: []
    }
  };
  const nodeToPage = createChallengePages(createPage, {
    idToNextPathCurrentCurriculum: {},
    idToPrevPathCurrentCurriculum: {}
  });

  [node].forEach(nodeToPage);

  expect(createPage).toHaveBeenCalledWith(
    expect.objectContaining({
      component: expect.stringContaining('exam-download'),
      context: expect.objectContaining({
        superBlock: SuperBlocks.RespWebDesignV9
      })
    })
  );
});
