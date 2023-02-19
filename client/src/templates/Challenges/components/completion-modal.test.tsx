import { getCompletedPercentage } from '../../../utils/get-completion-percentage';

jest.mock('../../../analytics');

const completedChallengesIds = ['1', '3', '5'],
  currentBlockIds = ['1', '3', '5', '7'],
  id = '7',
  fakeCompletedChallengesIds = ['1', '3', '5', '7', '8'];

describe('<CompletionModal />', () => {
  describe('getCompletedPercentage', () => {
    it('returns 25 if one out of four challenges are complete', () => {
      expect(
        getCompletedPercentage([], currentBlockIds, currentBlockIds[1])
      ).toBe(25);
    });

    it('returns 75 if three out of four challenges are complete', () => {
      expect(
        getCompletedPercentage(
          completedChallengesIds,
          currentBlockIds,
          completedChallengesIds[0]
        )
      ).toBe(75);
    });

    it('returns 100 if all challenges have been completed', () => {
      expect(
        getCompletedPercentage(completedChallengesIds, currentBlockIds, id)
      ).toBe(100);
    });

    it('returns 100 if more challenges have been complete than exist', () => {
      expect(
        getCompletedPercentage(fakeCompletedChallengesIds, currentBlockIds, id)
      ).toBe(100);
    });
  });
});
