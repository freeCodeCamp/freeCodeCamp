import React from 'react';
import { runSaga } from 'redux-saga';
import { describe, test, it, expect, beforeEach, vi, type Mock } from 'vitest';
import { render } from '../../../../utils/test-utils';

import { getCompletedPercentage } from '../../../utils/get-completion-percentage';
import { fireConfetti } from '../../../utils/fire-confetti';
import { createStore } from '../../../redux/create-store';
import { executeChallengeSaga } from '../redux/execute-challenge-saga';
import {
  challengeDataSelector,
  challengeMetaSelector,
  challengeTestsSelector,
  isBuildEnabledSelector,
  isBlockNewlyCompletedSelector,
  currentBlockIdsSelector
} from '../redux/selectors';
import {
  completedChallengesIdsSelector,
  allChallengesInfoSelector
} from '../../../redux/selectors';
import { getTestRunner } from '../utils/build';
import CompletionModal, { combineFileData } from './completion-modal';
vi.mock('../../../analytics');
vi.mock('../../../utils/fire-confetti');
vi.mock('../../../components/Progress');
vi.mock('../redux/selectors');
vi.mock('../../../redux/selectors');
vi.mock('../utils/build');
vi.mock('../../../utils/get-words');
vi.mock('@freecodecamp/challenge-builder/build');
const mockFireConfetti = fireConfetti as Mock;
const mockTestRunner = vi.fn().mockReturnValue({ pass: true });
const mockBuildEnabledSelector = isBuildEnabledSelector as Mock;
const mockChallengeTestsSelector = challengeTestsSelector as Mock;
const mockChallengeMetaSelector = challengeMetaSelector as Mock;
const mockChallengeDataSelector = challengeDataSelector as Mock;
const mockIsBlockNewlyCompletedSelector = isBlockNewlyCompletedSelector as Mock;
const mockCurrentBlockIdsSelector = vi.mocked(currentBlockIdsSelector);
const mockCompletedChallengesIdsSelector =
  completedChallengesIdsSelector as unknown as Mock;
const mockAllChallengesInfoSelector =
  allChallengesInfoSelector as unknown as Mock;
const mockGetTestRunner = getTestRunner as Mock;
mockBuildEnabledSelector.mockReturnValue(true);
mockChallengeTestsSelector.mockReturnValue([
  { text: 'Test 1', testString: 'mock test code' }
]);
mockChallengeMetaSelector.mockReturnValue({
  challengeType: 'mock_challenge_type'
});
mockChallengeDataSelector.mockReturnValue({
  challengeFiles: ['mock_challenge_files']
});
mockGetTestRunner.mockReturnValue(mockTestRunner);

const completedChallengesIds = ['1', '3', '5'];
const currentBlockIds = ['1', '3', '5', '7'];
const id = '7';
const fakeCompletedChallengesIds = ['1', '3', '5', '7', '8'];

describe('<CompletionModal />', () => {
  describe('fireConfetti', () => {
    beforeEach(() => {
      mockFireConfetti.mockClear();
    });
    test('should fire when block is completed and challenge data exists', async () => {
      const payload = { showCompletionModal: true };
      const challengeId = 'bd7158d8c442eddfaeb5bd18';
      const blockIds = ['step1', 'step2', 'step3', challengeId];
      const store = createStore({
        challenge: {
          modal: { completion: true },
          challengeMeta: {
            id: challengeId,
            certification: 'responsive-web-design'
          }
        }
      });
      mockIsBlockNewlyCompletedSelector.mockReturnValue(true);
      mockChallengeMetaSelector.mockReturnValue({
        id: challengeId,
        isLastChallengeInBlock: true,
        challengeType: 'mock_challenge_type'
      });
      mockCurrentBlockIdsSelector.mockReturnValue(blockIds);
      mockCompletedChallengesIdsSelector.mockReturnValue(['step1', 'step2']);
      mockAllChallengesInfoSelector.mockReturnValue({
        challengeNodes: [{ challenge: { id: challengeId } }],
        certificateNodes: []
      });
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await runSaga(store, executeChallengeSaga, { payload }).done;
      expect(mockFireConfetti).toHaveBeenCalledTimes(1);
    });
    test('should not fire when challenge data is empty (saga guard)', async () => {
      const payload = { showCompletionModal: true };
      const challengeId = 'bd7158d8c442eddfaeb5bd18';
      const store = createStore({
        challenge: {
          modal: { completion: true },
          challengeMeta: {
            id: challengeId,
            certification: 'responsive-web-design'
          }
        }
      });
      mockIsBlockNewlyCompletedSelector.mockReturnValue(true);
      mockChallengeMetaSelector.mockReturnValue({
        id: challengeId,
        isLastChallengeInBlock: true,
        challengeType: 'mock_challenge_type'
      });
      mockAllChallengesInfoSelector.mockReturnValue({
        challengeNodes: [],
        certificateNodes: []
      });
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await runSaga(store, executeChallengeSaga, { payload }).done;
      expect(mockFireConfetti).toHaveBeenCalledTimes(0);
    });
    test('should not fire when block is not completed', async () => {
      const payload = { showCompletionModal: true };
      const store = createStore({
        challenge: {
          modal: { completion: true },
          challengeMeta: {
            id: 'bd7158d8c442eddfaeb5bd18',
            certification: 'responsive-web-design' // Make sure the certification matches
          }
        }
      });
      mockIsBlockNewlyCompletedSelector.mockReturnValue(false);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await runSaga(store, executeChallengeSaga, { payload }).done;
      expect(mockFireConfetti).toHaveBeenCalledTimes(0);
    });
    test('should not fire if certification project has been completed', () => {
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

      expect(mockFireConfetti).toHaveBeenCalledTimes(0);
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

  describe('File Download Content', () => {
    it('Should label each section appropriately', () => {
      const indexHtml = {
        name: 'index',
        ext: 'html',
        contents: 'some html elements'
      };
      const stylesCSS = {
        name: 'styles',
        ext: 'css',
        contents: 'some css styles'
      };
      const scriptJS = {
        name: 'script',
        ext: 'js',
        contents: 'some javascript'
      };
      const result = combineFileData([indexHtml, stylesCSS, scriptJS]);
      expect(result).toContain('** start of index.html **');
      expect(result).toContain('** end of index.html **');
      expect(result).toContain('** start of styles.css **');
      expect(result).toContain('** end of styles.css **');
      expect(result).toContain('** start of script.js **');
      expect(result).toContain('** end of script.js **');
    });
  });
});
