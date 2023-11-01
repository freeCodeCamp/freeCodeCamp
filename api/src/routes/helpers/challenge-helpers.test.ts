import type {
  PartiallyCompletedChallenge,
  CompletedChallenge
} from '@prisma/client';

import {
  canSubmitCodeRoadCertProject,
  verifyTrophyWithMicrosoft
} from './challenge-helpers';

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

  describe('verifyTrophyWithMicrosoft', () => {
    test("calls Microsoft's profile and gamestatus apis", async () => {
      const userId = 'abc123';
      const mockedFetch = jest
        .fn()
        .mockResolvedValue(
          Promise.resolve({ ok: true, json: () => Promise.resolve({ userId }) })
        );

      jest.spyOn(globalThis, 'fetch').mockImplementation(mockedFetch);

      const msUsername = 'ANRandom';
      const msTrophyId = 'learn.wwl.get-started-c-sharp-part-3.trophy';
      const profileUrl = `https://learn.microsoft.com/api/profiles/${msUsername}`;
      const gamestatusUrl = `https://learn.microsoft.com/api/gamestatus/${userId}`;

      await verifyTrophyWithMicrosoft({ msUsername, msTrophyId });

      expect(mockedFetch).toHaveBeenCalledTimes(2);
      expect(mockedFetch).toHaveBeenNthCalledWith(1, profileUrl);
      expect(mockedFetch).toHaveBeenNthCalledWith(2, gamestatusUrl);
    });
  });
});
