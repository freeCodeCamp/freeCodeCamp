import type {
  PartiallyCompletedChallenge,
  CompletedChallenge
} from '@prisma/client';

import { canSubmitCodeRoadCertProject } from './challenge-helpers';

const id = 'abc';

const partiallyCompletedChallenges: PartiallyCompletedChallenge[] = [
  {
    id,
    completedDate: 1
  }
];
const completedChallenges: CompletedChallenge[] = [
  {
    id,
    completedDate: 1,
    challengeType: 1,
    files: [],
    githubLink: null,
    solution: null,
    isManuallyApproved: false
  }
];

describe('Challenge Helpers', () => {
  describe('canSubmitCodeRoadCertProject', () => {
    it('returns true if the user has completed the required challenges or partially completed them', () => {
      expect(
        canSubmitCodeRoadCertProject(id, {
          partiallyCompletedChallenges,
          completedChallenges
        })
      ).toBe(true);

      expect(
        canSubmitCodeRoadCertProject(id, {
          partiallyCompletedChallenges: [],
          completedChallenges
        })
      ).toBe(true);

      expect(
        canSubmitCodeRoadCertProject(id, {
          partiallyCompletedChallenges,
          completedChallenges: []
        })
      ).toBe(true);
    });

    it('returns false if the user has not completed the required challenges', () => {
      expect(
        canSubmitCodeRoadCertProject(id, {
          partiallyCompletedChallenges: [],
          completedChallenges: []
        })
      ).toBe(false);
    });

    it('returns false if the id is undefined', () => {
      expect(
        canSubmitCodeRoadCertProject(undefined, {
          partiallyCompletedChallenges,
          completedChallenges
        })
      ).toBe(false);
    });
  });
});
