import type { ExamResults, user, Prisma } from '@prisma/client';
import { FastifyInstance } from 'fastify';
import { omit, pick } from 'lodash-es';
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
 *
 * Uses optimistic concurrency control (OCC) via the `updateCount` field to
 * prevent lost updates when concurrent requests race to write the same user
 * document. If a concurrent modification is detected the operation re-reads
 * fresh data and retries, up to MAX_RETRIES times.
 *
 * TODO: Keep refactoring. This function does too much.
 * @param fastify The Fastify instance.
 * @param user The existing user record (must include `updateCount` for OCC).
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
  const MAX_RETRIES = 3;
  let currentUser = user;

  for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
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

    const {
      completedChallenges = [],
      needsModeration = false,
      savedChallenges = [],
      progressTimestamps = [],
      partiallyCompletedChallenges = []
    } = currentUser;

    let savedChallengesUpdate: Prisma.userUpdateInput['savedChallenges'];

    const oldChallenge = completedChallenges.find(
      ({ id }) => challengeId === id
    );
    const alreadyCompleted = !!oldChallenge;

    const finalChallenge = alreadyCompleted
      ? {
          ...completedChallenge,
          completedDate: normalizeDate(oldChallenge.completedDate)
        }
      : completedChallenge;

    const userCompletedChallenges = alreadyCompleted
      ? completedChallenges.map(x =>
          x.id === challengeId
            ? finalChallenge
            : { ...x, completedDate: normalizeDate(x.completedDate) }
        )
      : { push: finalChallenge };

    // We can't use push, because progressTimestamps is a JSON blob and, until
    // we convert it to an array, push is not available. Since this could result
    // in the completedChallenges and progressTimestamps arrays being out of sync,
    // we should prioritize normalizing the data structure.
    // The OCC retry loop ensures each attempt operates on a fresh snapshot of
    // the document, preventing lost updates for this field across concurrent
    // requests.
    const userProgressTimestamps =
      !alreadyCompleted &&
      progressTimestamps &&
      Array.isArray(progressTimestamps)
        ? [...progressTimestamps, newProgressTimeStamp]
        : progressTimestamps;

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
        ? savedChallenges.map(x =>
            x.id === challengeId ? challengeToSave : x
          )
        : { push: challengeToSave };
    }

    // remove from partiallyCompleted on submit
    const userPartiallyCompletedChallenges = partiallyCompletedChallenges.filter(
      challenge => challenge.id !== challengeId
    );

    // Use optimistic concurrency control (OCC) to prevent lost updates when
    // two requests race to modify the same user document. The conditional
    // `updateCount` check ensures the update only applies to the exact
    // snapshot we read. If a concurrent request has already written, the
    // count will not match, `updateMany` will affect 0 documents, and we
    // retry with fresh data.
    const result = await fastify.prisma.user.updateMany({
      where: {
        id: currentUser.id,
        updateCount: { equals: currentUser.updateCount }
      },
      data: {
        completedChallenges: userCompletedChallenges,
        // TODO: `needsModeration` should be handled closer to source, because it exists in 3 states: true, false, undefined/null
        //       `undefined` in Prisma is a no-op
        needsModeration: needsModeration || undefined,
        savedChallenges: savedChallengesUpdate,
        progressTimestamps: userProgressTimestamps,
        partiallyCompletedChallenges: userPartiallyCompletedChallenges,
        updateCount: { increment: 1 }
      }
    });

    if (result.count > 0) {
      // Update succeeded. Fetch the post-write savedChallenges value since
      // updateMany does not support a select clause.
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

    // Another request wrote to this document between our read and this write.
    // Re-fetch a fresh snapshot and retry.
    currentUser = await fastify.prisma.user.findUniqueOrThrow({
      where: { id: user.id },
      select: {
        id: true,
        completedChallenges: true,
        partiallyCompletedChallenges: true,
        progressTimestamps: true,
        needsModeration: true,
        savedChallenges: true,
        updateCount: true
      }
    });
  }

  throw new Error(
    `Failed to update challenge data for user ${
      user.id
    } after ${MAX_RETRIES} attempts due to concurrent modifications.`
  );
}
