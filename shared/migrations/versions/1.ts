import type { Document } from 'mongodb';
import { Prisma, user } from '../../config/prisma/version-1';

/**
 * Main function used to migrate the document.
 *
 * First migrator is special in that it takes a generic `Document` type. The second+ migrators will expect the type of the document to be the same as the previous migrator's output.
 */
export function migrator(document: Document): user {
  const updatedDocument = {} as user;

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
        // updatedDocument.completedChallengesNeedingModeration =
        //   completedChallengesNeedingModeration;
      }
    }
  }

  return updatedDocument;
}
