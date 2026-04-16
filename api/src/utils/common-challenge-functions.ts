import type { ExamResults, user } from '@prisma/client';
import { FastifyInstance } from 'fastify';
import { omit, pick, uniqBy } from 'lodash-es';
import { challengeTypes } from '@freecodecamp/shared/config/challenge-types';
import { challenges, savableChallenges } from './get-challenges.js';
import { normalizeDate } from './normalize.js';

export const jsCertProjectIds = [
  'aaa48de84e1ecc7c742e1124',
  'a7f4d8f2483413a6ce226cac',
  '56533eb9ac21ba0edf2244e2',
  'aff0395860f5d3034dc0bfc9',
  'aa2e6f85cab2ab736c9a9b24'
];

export const multifileCertProjectIds = challenges
  .filter(c => c.challengeType === challengeTypes.multifileCertProject)
  .map(c => c.id);

export const multifilePythonCertProjectIds = challenges
  .filter(c => c.challengeType === challengeTypes.multifilePythonCertProject)
  .map(c => c.id);

export const msTrophyChallenges = challenges
  .filter(challenge => challenge.challengeType === challengeTypes.msTrophy)
  .map(({ id, msTrophyId }) => ({ id, msTrophyId }));

type SavedChallengeFile = {
  key: string;
  ext: string; // NOTE: This is Ext type in client
  name: string;
  history: string[];
  contents: string;
};

type SavedChallenge = {
  id: string;
  lastSavedDate: number;
  files: SavedChallengeFile[];
};

// TODO: Confirm this type - read comments below
type CompletedChallengeFile = {
  key: string;
  ext: string; // NOTE: This is Ext type in client
  name: string;
  contents: string;

  // These values are present in prop-types and ajax.ts builds with it
  // editableRegionBoundaries?: number[];
  // usesMultifileEditor?: boolean;
  // error: null | string | unknown;
  // head: string;
  // tail: string;
  // seed: string;
  // id: string;
  // history: string[];

  // This value is present in prisma schema
  path?: string | null;
};

// TODO: Should probably prefer `import{CompletedChallenge}from'@prisma/client'` instead of defining it here
export type CompletedChallenge = {
  id: string;
  solution?: string | null;
  githubLink?: string | null;
  challengeType?: number | null;
  completedDate: number;
  isManuallyApproved?: boolean | null;
  files?: CompletedChallengeFile[];
  examResults?: ExamResults | null;
};

/**
 * Helper function to save a user's challenge data. Used in challenge
 * submission endpoints.
 *
 * @param challengeId The id of the submitted challenge.
 * @param savedChallenges The user's saved challenges array.
 * @param challenge The saveble challenge.
 * @returns Update or push the saved challenges.
 */
export function saveUserChallengeData(
  challengeId: string,
  savedChallenges: SavedChallenge[],
  challenge: Omit<SavedChallenge, 'lastSavedDate'>
) {
  const challengeToSave: SavedChallenge = {
    id: challengeId,
    lastSavedDate: Date.now(),
    files: challenge.files?.map(file =>
      pick(file, ['contents', 'key', 'name', 'ext', 'history'])
    )
  };

  const savedIndex = savedChallenges.findIndex(({ id }) => challengeId === id);

  if (savedIndex >= 0) {
    savedChallenges[savedIndex] = challengeToSave;
  } else {
    savedChallenges.push(challengeToSave);
  }

  return savedChallenges;
}

/**
 * Helper function to update a user's challenge data. Used in challenge
 * submission endpoints.
 * TODO: Keep refactoring. This function does too much.
 * @param fastify The Fastify instance.
 * @param user The existing user record.
 * @param challengeId The id of the submitted challenge.
 * @param _completedChallenge The challenge submission.
 * @returns Information about the update.
 */
export async function updateUserChallengeData(
  fastify: FastifyInstance,
  user: Pick<
    user,
    | 'id'
    | 'completedChallenges'
    | 'needsModeration'
    | 'savedChallenges'
    | 'progressTimestamps'
    | 'partiallyCompletedChallenges'
    | 'updateCount'
  >,
  challengeId: string,
  _completedChallenge: CompletedChallenge
) {
  // Atomic optimistic locking with retry loop to prevent race conditions
  let currentUser = user;

  for (let retryCount = 0; retryCount < 5; retryCount++) {
    const {
      completedChallenges = [],
      needsModeration = false,
      savedChallenges = [],
      progressTimestamps = [],
      partiallyCompletedChallenges = [],
      updateCount = 0
    } = currentUser;

    const { files, completedDate: newProgressTimeStamp = Date.now() } =
      _completedChallenge;
    let completedChallenge: CompletedChallenge;

    if (savableChallenges.has(challengeId)) {
      completedChallenge = {
        ..._completedChallenge,
        files: files?.map(
          file =>
            pick(file, [
              'contents',
              'key',
              'index',
              'name',
              'path',
              'ext'
            ]) as CompletedChallengeFile
        ),
        completedDate: normalizeDate(_completedChallenge.completedDate)
      };
    } else {
      completedChallenge = omit(_completedChallenge, ['files']);
    }

    const existingChallenge = completedChallenges.find(
      ({ id }) => challengeId === id
    );
    const alreadyCompleted = !!existingChallenge;

    const finalChallenge = alreadyCompleted
      ? {
          ...completedChallenge,
          completedDate: normalizeDate(existingChallenge.completedDate)
        }
      : completedChallenge;

    // Deduplicate on the fly to fix existing duplicate entries
    const uniqueCompletedChallenges = uniqBy(completedChallenges, 'id');

    const userProgressTimestamps =
      !alreadyCompleted && progressTimestamps && Array.isArray(progressTimestamps)
        ? [...progressTimestamps, newProgressTimeStamp]
        : progressTimestamps;

    let savedChallengesUpdate = savedChallenges;
    if (savableChallenges.has(challengeId)) {
      const challengeToSave: SavedChallenge = {
        id: challengeId,
        lastSavedDate: newProgressTimeStamp,
        files: files?.map(file =>
          pick(file, ['contents', 'key', 'name', 'ext', 'history'])
        ) as SavedChallengeFile[]
      };

      const isSaved = savedChallenges.some(({ id }) => challengeId === id);

      savedChallengesUpdate = isSaved
        ? savedChallenges.map(x => (x.id === challengeId ? challengeToSave : x))
        : [...savedChallenges, challengeToSave];
    }

    // remove from partiallyCompleted on submit
    const userPartiallyCompletedChallenges = partiallyCompletedChallenges.filter(
      challenge => challenge.id !== challengeId
    );

    // Build the update data for nested list fields
    const completedChallengesUpdate = alreadyCompleted
      ? uniqueCompletedChallenges.map(x =>
          x.id === challengeId
            ? finalChallenge
            : { ...x, completedDate: normalizeDate(x.completedDate as number) }
        )
      : [...uniqueCompletedChallenges, finalChallenge];

    // Atomic transaction: lock-check then write
    const { count } = await fastify.prisma.$transaction(async transaction => {
      // Try to acquire lock by incrementing updateCount if it matches
      const lockResult = await transaction.user.updateMany({
        where: { id: currentUser.id, updateCount },
        data: { updateCount: { increment: 1 } }
      });

      // If lock acquired (count === 1), proceed with data write
      if (lockResult.count === 1) {
        // Build update data with explicit type handling for JSON fields
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const updateData: any = {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment
          completedChallenges: completedChallengesUpdate as any,
          needsModeration: needsModeration || undefined,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment
          savedChallenges: savedChallengesUpdate as any,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment
          progressTimestamps: userProgressTimestamps as any,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment
          partiallyCompletedChallenges: userPartiallyCompletedChallenges as any
        };
        await transaction.user.update({
          where: { id: currentUser.id },
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          data: updateData
        });
      }

      return lockResult;
    });

    // If lock was acquired, return success
    if (count === 1) {
      const { savedChallenges: userSavedChallenges } =
        await fastify.prisma.user.findUniqueOrThrow({
          where: { id: currentUser.id },
          select: { savedChallenges: true }
        });

      return {
        alreadyCompleted,
        completedDate: finalChallenge.completedDate,
        userSavedChallenges
      };
    }

    // Lock miss: fetch fresh user state and retry
    currentUser = await fastify.prisma.user.findUniqueOrThrow({
      where: { id: currentUser.id },
      select: {
        id: true,
        completedChallenges: true,
        needsModeration: true,
        savedChallenges: true,
        progressTimestamps: true,
        partiallyCompletedChallenges: true,
        updateCount: true
      }
    });
  }

  throw new Error('Concurrent update error: Failed to acquire lock after 5 retries');
}
