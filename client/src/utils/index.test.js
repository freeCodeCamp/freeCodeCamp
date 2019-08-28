/* global expect */

import { getBlocksFromChallengeUrl } from './index';

describe('client/src utilities', () => {
  describe('index.js', () => {
    const mockUrl =
      'https://freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/using-the-test-method';
    const expectedBlocks = {
      superBlock: 'javascript-algorithms-and-data-structures',
      block: 'regular-expressions'
    };

    describe('getBlocksFromChallengeUrl', () => {
      it('returns an object', () => {
        expect(typeof getBlocksFromChallengeUrl(mockUrl)).toEqual('object');
      });

      it('returns super blocks and blocks for a challenge url', () => {
        expect(getBlocksFromChallengeUrl(mockUrl)).toEqual(expectedBlocks);
      });
    });
  });
});
