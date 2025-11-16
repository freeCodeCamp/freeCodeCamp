import { describe, it, expect } from 'vitest';
import type { AllChallengesInfo, ChallengeNode } from '../redux/prop-types';
import { challengeTypes } from '../../../shared-dist/config/challenge-types';
import {
  getCompletedPercentage,
  getCompletedChallengesInBlock,
  getCurrentBlockIds
} from './get-completion-percentage';

describe('get-completion-percentage', () => {
  describe('getCompletedPercentage', () => {
    it('calculates percentage when challenge not yet completed', () => {
      const completedChallengesIds = ['challenge-1', 'challenge-2'];
      const currentBlockIds = [
        'challenge-1',
        'challenge-2',
        'challenge-3',
        'challenge-4',
        'challenge-5'
      ];
      const currentChallengeId = 'challenge-3';

      const result = getCompletedPercentage(
        completedChallengesIds,
        currentBlockIds,
        currentChallengeId
      );

      expect(result).toBe(60);
    });

    it('calculates percentage when challenge already completed', () => {
      const completedChallengesIds = [
        'challenge-1',
        'challenge-2',
        'challenge-3'
      ];
      const currentBlockIds = [
        'challenge-1',
        'challenge-2',
        'challenge-3',
        'challenge-4',
        'challenge-5'
      ];
      const currentChallengeId = 'challenge-3';

      const result = getCompletedPercentage(
        completedChallengesIds,
        currentBlockIds,
        currentChallengeId
      );

      expect(result).toBe(60);
    });

    it('caps percentage at 100', () => {
      const completedChallengesIds = [
        'challenge-1',
        'challenge-2',
        'challenge-3'
      ];
      const currentBlockIds = ['challenge-1', 'challenge-2'];
      const currentChallengeId = 'challenge-3';

      const result = getCompletedPercentage(
        completedChallengesIds,
        currentBlockIds,
        currentChallengeId
      );

      expect(result).toBe(100);
    });

    it('handles undefined completedChallengesIds', () => {
      const currentBlockIds = ['challenge-1', 'challenge-2', 'challenge-3'];
      const currentChallengeId = 'challenge-1';

      const result = getCompletedPercentage(
        undefined,
        currentBlockIds,
        currentChallengeId
      );

      expect(result).toBe(33);
    });
  });

  describe('getCompletedChallengesInBlock', () => {
    it('counts new challenge when not already completed', () => {
      const completedChallengesIds = ['challenge-1', 'challenge-2'];
      const currentBlockIds = [
        'challenge-1',
        'challenge-2',
        'challenge-3',
        'challenge-4'
      ];
      const currentChallengeId = 'challenge-3';

      const result = getCompletedChallengesInBlock(
        completedChallengesIds,
        currentBlockIds,
        currentChallengeId
      );

      expect(result).toBe(3);
    });

    it('does not double-count when challenge already completed', () => {
      const completedChallengesIds = [
        'challenge-1',
        'challenge-2',
        'challenge-3'
      ];
      const currentBlockIds = [
        'challenge-1',
        'challenge-2',
        'challenge-3',
        'challenge-4'
      ];
      const currentChallengeId = 'challenge-3';

      const result = getCompletedChallengesInBlock(
        completedChallengesIds,
        currentBlockIds,
        currentChallengeId
      );

      expect(result).toBe(3);
    });

    it('only counts challenges in the current block', () => {
      const completedChallengesIds = [
        'block1-challenge-1',
        'block1-challenge-2',
        'block2-challenge-1',
        'block2-challenge-2'
      ];
      const currentBlockIds = ['block1-challenge-1', 'block1-challenge-2'];
      const currentChallengeId = 'block1-challenge-3';

      const result = getCompletedChallengesInBlock(
        completedChallengesIds,
        currentBlockIds,
        currentChallengeId
      );

      expect(result).toBe(3);
    });
  });

  describe('getCurrentBlockIds', () => {
    it('returns block IDs for non-project-based challenges', () => {
      const allChallengesInfo: AllChallengesInfo = {
        challengeNodes: [
          {
            challenge: {
              id: 'block-challenge-1',
              block: 'basic-html',
              certification: 'responsive-web-design'
            }
          } as Partial<ChallengeNode> as ChallengeNode,
          {
            challenge: {
              id: 'block-challenge-2',
              block: 'basic-html',
              certification: 'responsive-web-design'
            }
          } as Partial<ChallengeNode> as ChallengeNode,
          {
            challenge: {
              id: 'other-block-challenge',
              block: 'basic-css',
              certification: 'responsive-web-design'
            }
          } as Partial<ChallengeNode> as ChallengeNode
        ],
        certificateNodes: []
      };

      const result = getCurrentBlockIds(
        allChallengesInfo,
        'basic-html',
        'responsive-web-design',
        challengeTypes.step
      );

      expect(result).toEqual(['block-challenge-1', 'block-challenge-2']);
    });

    it('returns certificate IDs for project-based challenges when available', () => {
      const allChallengesInfo: AllChallengesInfo = {
        challengeNodes: [],
        certificateNodes: [
          {
            challenge: {
              certification: 'responsive-web-design',
              tests: [
                { id: 'cert-project-1' },
                { id: 'cert-project-2' },
                { id: 'cert-project-3' }
              ]
            }
          }
        ]
      };

      const result = getCurrentBlockIds(
        allChallengesInfo,
        'responsive-web-design-projects',
        'responsive-web-design',
        challengeTypes.frontEndProject
      );

      expect(result).toEqual([
        'cert-project-1',
        'cert-project-2',
        'cert-project-3'
      ]);
    });

    // this is a provisional fix to the issue mentioned in #63773
    it('falls back to block IDs when certificate not available', () => {
      const allChallengesInfo: AllChallengesInfo = {
        challengeNodes: [
          {
            challenge: {
              id: 'project-1',
              block: 'back-end-projects',
              certification: 'back-end-development'
            }
          } as Partial<ChallengeNode> as ChallengeNode,
          {
            challenge: {
              id: 'project-2',
              block: 'back-end-projects',
              certification: 'back-end-development'
            }
          } as Partial<ChallengeNode> as ChallengeNode
        ],
        certificateNodes: []
      };

      const result = getCurrentBlockIds(
        allChallengesInfo,
        'back-end-projects',
        'back-end-development',
        challengeTypes.backEndProject
      );

      expect(result).toEqual(['project-1', 'project-2']);
    });

    it('returns empty array when no matching challenges found', () => {
      const allChallengesInfo: AllChallengesInfo = {
        challengeNodes: [
          {
            challenge: {
              id: 'challenge-1',
              block: 'different-block',
              certification: 'responsive-web-design'
            }
          } as Partial<ChallengeNode> as ChallengeNode
        ],
        certificateNodes: []
      };

      const result = getCurrentBlockIds(
        allChallengesInfo,
        'non-existent-block',
        'responsive-web-design',
        challengeTypes.step
      );

      expect(result).toEqual([]);
    });
  });
});
