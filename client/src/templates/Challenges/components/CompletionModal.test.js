/* global expect */

import { getCompletedPercent } from './CompletionModal';

const completedChallengesIds = ['1', '3', '5'],
  currentBlockIds = ['1', '3', '5', '7'],
  id = '7',
  fakeId = '12345',
  fakeCompletedChallengesIds = ['1', '3', '5', '7', '8'];

describe('<CompletionModal />', () => {
  describe('getCompletedPercent', () => {
    it('returns 0 if no challenges have been completed', () => {
      expect(getCompletedPercent([], currentBlockIds, fakeId)).toBe(0);
    });

    it('returns 25 if one out of four challenges are complete', () => {
      expect(getCompletedPercent([], currentBlockIds, currentBlockIds[1])).toBe(
        25
      );
    });

    it('returns 75 if three out of four challenges are complete', () => {
      expect(
        getCompletedPercent(
          completedChallengesIds,
          currentBlockIds,
          completedChallengesIds[0]
        )
      ).toBe(75);
    });

    it('returns 100 if all challenges have been completed', () => {
      expect(
        getCompletedPercent(completedChallengesIds, currentBlockIds, id)
      ).toBe(100);
    });

    it('returns 100 if more challenges have been complete than exist', () => {
      expect(
        getCompletedPercent(fakeCompletedChallengesIds, currentBlockIds, id)
      ).toBe(100);
    });
  });
});
