import { describe, test, expect, afterEach, vi } from 'vitest';
import type {
  PartiallyCompletedChallenge,
  CompletedChallenge
} from '@prisma/client';

import { createFetchMock } from '../../../vitest.utils.js';
import {
  canSubmitCodeRoadCertProject,
  verifyTrophyWithMicrosoft,
  decodeFiles,
  decodeBase64,
  encodeBase64
} from './challenge-helpers.js';

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
    isManuallyApproved: false,
    examResults: null
  }
];

describe('Challenge Helpers', () => {
  describe('canSubmitCodeRoadCertProject', () => {
    test('returns true if the user has completed the required challenges or partially completed them', () => {
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

    test('returns false if the user has not completed the required challenges', () => {
      expect(
        canSubmitCodeRoadCertProject(id, {
          partiallyCompletedChallenges: [],
          completedChallenges: []
        })
      ).toBe(false);
    });

    test('returns false if the id is undefined', () => {
      expect(
        canSubmitCodeRoadCertProject(undefined, {
          partiallyCompletedChallenges,
          completedChallenges
        })
      ).toBe(false);
    });
  });

  describe('verifyTrophyWithMicrosoft', () => {
    const userId = 'abc123';
    const msUsername = 'ANRandom';
    const msTrophyId = 'learn.wwl.get-started-c-sharp-part-3.trophy';
    const verifyData = { msUsername, msTrophyId };
    const achievementsUrl = `https://learn.microsoft.com/api/achievements/user/${userId}`;

    afterEach(() => vi.clearAllMocks());

    test("handles failure to reach Microsoft's profile api", async () => {
      const notOk = createFetchMock({ ok: false });
      vi.spyOn(globalThis, 'fetch').mockImplementation(notOk);

      const verification = await verifyTrophyWithMicrosoft(verifyData);

      expect(verification).toEqual({
        type: 'error',
        message: 'flash.ms.profile.err',
        variables: {
          msUsername
        }
      });
    });

    test("handles failure to reach Microsoft's achievements api", async () => {
      const fetchProfile = createFetchMock({ body: { userId } });
      const fetchAchievements = createFetchMock({ ok: false });
      vi.spyOn(globalThis, 'fetch')
        .mockImplementationOnce(fetchProfile)
        .mockImplementationOnce(fetchAchievements);

      const verification = await verifyTrophyWithMicrosoft(verifyData);

      expect(verification).toEqual({
        type: 'error',
        message: 'flash.ms.trophy.err-3'
      });
    });

    test('handles the case where the user has no achievements', async () => {
      const fetchProfile = createFetchMock({ body: { userId } });
      const fetchAchievements = createFetchMock({ body: { achievements: [] } });
      vi.spyOn(globalThis, 'fetch')
        .mockImplementationOnce(fetchProfile)
        .mockImplementationOnce(fetchAchievements);

      const verification = await verifyTrophyWithMicrosoft(verifyData);

      expect(verification).toEqual({
        type: 'error',
        message: 'flash.ms.trophy.err-6'
      });
    });

    test("handles failure to find the trophy in the user's achievements", async () => {
      const fetchProfile = createFetchMock({ body: { userId } });
      const fetchAchievements = createFetchMock({
        body: { achievements: [{ typeId: 'fake-id' }] }
      });
      vi.spyOn(globalThis, 'fetch')
        .mockImplementationOnce(fetchProfile)
        .mockImplementationOnce(fetchAchievements);

      const verification = await verifyTrophyWithMicrosoft(verifyData);

      expect(verification).toEqual({
        type: 'error',
        message: 'flash.ms.trophy.err-4',
        variables: {
          msUsername
        }
      });
    });

    test('returns msUserAchievementsApiUrl on success', async () => {
      const fetchProfile = createFetchMock({ body: { userId } });
      const fetchAchievements = createFetchMock({
        body: { achievements: [{ typeId: msTrophyId }] }
      });
      vi.spyOn(globalThis, 'fetch')
        .mockImplementationOnce(fetchProfile)
        .mockImplementationOnce(fetchAchievements);

      const verification = await verifyTrophyWithMicrosoft(verifyData);

      expect(verification).toEqual({
        type: 'success',
        msUserAchievementsApiUrl: achievementsUrl
      });
    });
  });

  describe('decodeFiles', () => {
    test('decodes base64 encoded file contents', () => {
      const encodedFiles = [
        {
          contents: btoa('console.log("Hello, world!");')
        },
        {
          contents: btoa('<h1>Hello, world!</h1>')
        }
      ];

      const decodedFiles = decodeFiles(encodedFiles);

      expect(decodedFiles).toEqual([
        {
          contents: 'console.log("Hello, world!");'
        },
        {
          contents: '<h1>Hello, world!</h1>'
        }
      ]);
    });

    test('leaves all other file properties unchanged', () => {
      const encodedFiles = [
        {
          contents: btoa('console.log("Hello, world!");'),
          ext: '.js',
          history: [],
          key: 'file1',
          name: 'hello.js'
        }
      ];

      const decodedFiles = decodeFiles(encodedFiles);

      expect(decodedFiles).toEqual([
        {
          contents: 'console.log("Hello, world!");',
          ext: '.js',
          history: [],
          key: 'file1',
          name: 'hello.js'
        }
      ]);
    });

    test('can handle unicode characters', () => {
      const encodedFiles = [
        {
          contents: encodeBase64('console.log("Hello, ✅🚀!");')
        }
      ];

      const decodedFiles = decodeFiles(encodedFiles);

      expect(decodedFiles).toEqual([
        {
          contents: 'console.log("Hello, ✅🚀!");'
        }
      ]);
    });
  });

  describe('decodeBase64', () => {
    test('decodes a base64 encoded string', () => {
      const encoded = encodeBase64('Hello, world!');
      const decoded = decodeBase64(encoded);
      expect(decoded).toBe('Hello, world!');
    });

    test('can handle unicode characters', () => {
      const original = 'Hello, ✅🚀!';
      const encoded = encodeBase64(original);
      const decoded = decodeBase64(encoded);
      expect(decoded).toBe(original);
    });
  });
});
