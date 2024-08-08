import type { Document, ObjectId } from 'mongodb';

/**
 * Main function used to migrate the document.
 */
export default function migrator(document: Document): User1 {
  const updatedDocument = {} as User1;

  if (
    typeof document === 'object' &&
    document !== null &&
    !Array.isArray(document)
  ) {
    if ('completedChallenges' in document) {
      // TODO: what more can be done to convince typescript this is valid??
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
      const completedChallenges = document.completedChallenges;

      if (Array.isArray(completedChallenges)) {
        const completedChallengesNeedingModeration = completedChallenges.filter(
          ({ isManuallyApproved }) => isManuallyApproved === false
        ).length;
        updatedDocument.completedChallengesNeedingModeration =
          completedChallengesNeedingModeration;
      }
    }
  }

  return updatedDocument;
}

export type User1 = {
  _id: ObjectId;
  completedChallenges: CompletedChallenge[];
  completedChallengesNeedingModeration: number;
};

export type CompletedChallenge =
  | {
      id: string;
      challengeType: number;
      isManuallyApproved: boolean;
      files: File[];
    }
  | {
      id: string;
      challengeType: number;
    };

export type File = {
  name: string;
  path: string;
  key: number;
  seed: string;
};
