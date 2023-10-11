import React from 'react';
import { render } from '../../../../utils/test-utils';

import { getCompletedPercentage } from '../../../utils/get-completion-percentage';
import { fireConfetti } from '../../../utils/fire-confetti';
import { createStore } from '../../../redux/create-store';
import CompletionModal from './completion-modal';

jest.mock('../../../analytics');
jest.mock('../../../utils/fire-confetti');
jest.mock('../../../components/ProgressBar');
const mockFireConfetti = fireConfetti as jest.Mock;

const completedChallengesIds = ['1', '3', '5'],
  currentBlockIds = ['1', '3', '5', '7'],
  id = '7',
  fakeCompletedChallengesIds = ['1', '3', '5', '7', '8'];

describe('<CompletionModal />', () => {
  describe('fireConfetti', () => {
    beforeEach(() => {
      mockFireConfetti.mockClear();
    });
    test('should fire if certification project has been completed', () => {
      const store = createStore({
        challenge: {
          modal: { completion: true },
          challengeMeta: {
            // Build a Tribute Page's id:
            id: 'bd7158d8c442eddfaeb5bd18'
          }
        }
      });

      render(<CompletionModal />, store);

      expect(mockFireConfetti).toHaveBeenCalledTimes(1);
    });

    test('should NOT fire if the challenge is not a project', () => {
      const store = createStore({
        challenge: {
          modal: { completion: true },
          challengeMeta: {
            // id from learn-advanced-array-methods-by-building-a-statistics-calculator:
            id: '6352e79d15aae30fac58f48e'
          }
        }
      });

      render(<CompletionModal />, store);

      expect(mockFireConfetti).toHaveBeenCalledTimes(0);
    });
  });

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
