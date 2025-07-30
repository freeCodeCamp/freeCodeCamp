import { FastifyInstance } from 'fastify';
import { ObjectId } from 'mongodb';
import { type user } from '@prisma/client';
import { omit } from 'lodash';

import { createUserInput } from '../../utils/create-user';
import { removeNulls } from '../../utils/normalize';

/**
 * Finds an existing user with the given email or creates a new user if none exists.
 * @param fastify - The Fastify instance.
 * @param email - The email of the user.
 * @returns The existing or newly created user.
 */
export const findOrCreateUser = async (
  fastify: FastifyInstance,
  email: string
): Promise<{ id: string; acceptedPrivacyTerms: boolean }> => {
  const lowerCaseEmail = email.toLowerCase();
  // TODO: handle the case where there are multiple users with the same email.
  // e.g. use findMany and throw an error if more than one is found.
  const existingUsers = await fastify.prisma.user.findMany({
    where: {
      // https://www.mongodb.com/docs/manual/reference/operator/query/or/#-or-versus--in
      email: {
        in: [email, lowerCaseEmail]
      }
    },
    select: { id: true, acceptedPrivacyTerms: true }
  });

  if (existingUsers.length > 1) {
    const userIds = existingUsers.map(user => user.id);
    fastify.log.info(`Multiple user records found for: ${userIds.join(', ')}`);

    try {
      const users = await fastify.prisma.user.findMany({
        where: { email }
      });
      // Merge the duplicate users
      const mergedData = mergeDuplicateUsers(users);
      const oldestUserId = mergedData.id;

      const userWithoutId = omit(mergedData, ['id']);

      // Update the oldest user with merged data
      await fastify.prisma.user.update({
        where: { id: oldestUserId },
        data: removeNulls(userWithoutId) as Parameters<
          typeof fastify.prisma.user.update
        >[0]['data']
      });

      const duplicateUserIds = userIds.filter(i => i !== oldestUserId);

      // Delete the duplicate users (keep the oldest)
      await fastify.prisma.user.deleteMany({
        where: {
          id: { in: duplicateUserIds } // Remove all except the (oldest)
        }
      });

      fastify.log.info(
        `Successfully merged ${users.length} duplicate user accounts for email: ${email}`
      );

      return {
        id: oldestUserId,
        acceptedPrivacyTerms: Boolean(mergedData.acceptedPrivacyTerms)
      };
    } catch (error) {
      fastify.log.error(
        error,
        `Failed to merge duplicate users for email: ${email}`
      );
      fastify.Sentry.captureException(error);

      // Fallback to returning the first user if merge fails
      return {
        id: existingUsers[0]!.id,
        acceptedPrivacyTerms: existingUsers[0]!.acceptedPrivacyTerms
      };
    }
  }

  return existingUsers[0]
    ? {
        id: existingUsers[0].id,
        acceptedPrivacyTerms: existingUsers[0].acceptedPrivacyTerms
      }
    : await fastify.prisma.user.create({
        data: createUserInput(lowerCaseEmail),
        select: { id: true, acceptedPrivacyTerms: true }
      });
};

/**
 * Merges duplicate user records.
 * @param users - Array of duplicate user records to merge.
 * @returns The merged user data that should be used to update the oldest record.
 */
export const mergeDuplicateUsers = (users: user[]): user => {
  if (users.length <= 1) {
    throw new Error('At least two users are required for merging');
  }

  // Sort users by ObjectId (oldest first) - ObjectId contains timestamp in first 4 bytes
  const sortedUsers = users.sort((a, b) => {
    const aTime = new ObjectId(a.id).getTimestamp().getTime();
    const bTime = new ObjectId(b.id).getTimestamp().getTime();
    return aTime - bTime;
  });

  const oldestUser = sortedUsers[0]!;
  const newestUser = sortedUsers[sortedUsers.length - 1]!;

  // Start with a partial merge object
  const mergedData = structuredClone(oldestUser);

  // Certification fields - if any user has true, keep true
  const certificationFields: (keyof user)[] = [
    'isApisMicroservicesCert',
    'isBackEndCert',
    'isDataAnalysisPyCertV7',
    'isDataVisCert',
    'isFoundationalCSharpCertV8',
    'isFrontEndCert',
    'isFrontEndLibsCert',
    'isFullStackCert',
    'isInfosecCertV7',
    'isInfosecQaCert',
    'isJsAlgoDataStructCert',
    'isJsAlgoDataStructCertV8',
    'isMachineLearningPyCertV7',
    'isQaCertV7',
    'isRelationalDatabaseCertV8',
    'isRespWebDesignCert',
    'isSciCompPyCertV7',
    'is2018DataVisCert',
    'is2018FullStackCert',
    'isCollegeAlgebraPyCertV8'
  ];

  // Handle certification fields - keep true if any user has true
  certificationFields.forEach(field => {
    const hasTrue = sortedUsers.some(user => user[field] === true);
    if (hasTrue) {
      (mergedData as Record<string, unknown>)[field] = true;
    } else {
      (mergedData as Record<string, unknown>)[field] = oldestUser[field];
    }
  });

  // Concatenate completedChallenges from all users
  const allCompletedChallenges = sortedUsers.flatMap(
    user => user.completedChallenges || []
  );
  // Remove duplicates based on challenge id
  const uniqueCompletedChallenges = allCompletedChallenges.filter(
    (challenge, index, arr) =>
      arr.findIndex(c => c.id === challenge.id) === index
  );
  mergedData.completedChallenges = uniqueCompletedChallenges;

  // Concatenate completedDailyCodingChallenges from all users
  const allCompletedDailyChallenges = sortedUsers.flatMap(
    user => user.completedDailyCodingChallenges || []
  );
  // Remove duplicates based on challenge id
  const uniqueCompletedDailyChallenges = allCompletedDailyChallenges.filter(
    (challenge, index, arr) =>
      arr.findIndex(c => c.id === challenge.id) === index
  );
  mergedData.completedDailyCodingChallenges = uniqueCompletedDailyChallenges;

  // Concatenate progressTimestamps from all users
  const allProgressTimestamps = sortedUsers.flatMap(user => {
    if (Array.isArray(user.progressTimestamps)) {
      return user.progressTimestamps;
    }
    return [];
  });
  mergedData.progressTimestamps =
    allProgressTimestamps.length > 0 ? allProgressTimestamps : null;

  // Handle string fields - if both populated, keep newest record's value
  const stringFields: (keyof user)[] = [
    'about',
    'currentChallengeId',
    'email',
    'externalId',
    'githubProfile',
    'linkedin',
    'location',
    'name',
    'newEmail',
    'password',
    'picture',
    'theme',
    'timezone',
    'twitter',
    'username',
    'usernameDisplay',
    'verificationToken',
    'website'
  ];

  stringFields.forEach(field => {
    const oldestValue = oldestUser[field] as string | null | undefined;
    const newestValue = newestUser[field] as string | null | undefined;

    // If oldest user doesn't have this field or it's empty/null, check other users
    if (!oldestValue || oldestValue === '') {
      for (const user of sortedUsers) {
        const userValue = user[field] as string | null | undefined;
        if (userValue && userValue !== '') {
          (mergedData as Record<string, unknown>)[field] = userValue;
          break;
        }
      }
    } else if (
      newestValue &&
      newestValue !== '' &&
      newestValue !== oldestValue
    ) {
      // If both oldest and newest have values and they're different, keep newest
      (mergedData as Record<string, unknown>)[field] = newestValue;
    } else {
      // Keep the oldest user's value
      (mergedData as Record<string, unknown>)[field] = oldestValue;
    }
  });

  // Handle array fields - concatenate and remove duplicates where applicable
  const arrayFields: (keyof user)[] = [
    'donationEmails',
    'partiallyCompletedChallenges',
    'portfolio',
    'savedChallenges',
    'quizAttempts',
    'yearsTopContributor'
  ];

  arrayFields.forEach(field => {
    const allItems = sortedUsers.flatMap(user => {
      const fieldValue = user[field];
      if (Array.isArray(fieldValue)) {
        return fieldValue;
      }
      return [];
    });

    if (
      field === 'partiallyCompletedChallenges' ||
      field === 'savedChallenges' ||
      field === 'quizAttempts'
    ) {
      // Remove duplicates based on id
      const unique = allItems.filter((item, index, arr) => {
        const typedItem = item as { id: string };
        return (
          arr.findIndex(i => (i as { id: string }).id === typedItem.id) ===
          index
        );
      });
      (mergedData as Record<string, unknown>)[field] = unique;
    } else if (field === 'portfolio') {
      // Remove duplicates based on id
      const unique = allItems.filter((item, index, arr) => {
        const typedItem = item as { id: string };
        return (
          arr.findIndex(i => (i as { id: string }).id === typedItem.id) ===
          index
        );
      });
      (mergedData as Record<string, unknown>)[field] = unique;
    } else {
      // For simple arrays like donationEmails, yearsTopContributor
      (mergedData as Record<string, unknown>)[field] = [...new Set(allItems)];
    }
  });

  // Handle special fields that should preserve data if any user has them
  const preserveFields: (keyof user)[] = [
    'acceptedPrivacyTerms',
    'emailVerified',
    'isDonating',
    'isHonest',
    'keyboardShortcuts',
    'sendQuincyEmail'
  ];

  preserveFields.forEach(field => {
    // If any user has true, keep true; otherwise use oldest user's value
    const hasTrue = sortedUsers.some(user => user[field] === true);
    if (hasTrue) {
      (mergedData as Record<string, unknown>)[field] = true;
    } else {
      (mergedData as Record<string, unknown>)[field] = oldestUser[field];
    }
  });

  // Handle profileUI - merge all settings, preferring true values
  const allProfileUIs = sortedUsers.map(user => user.profileUI).filter(Boolean);
  if (allProfileUIs.length > 0) {
    const mergedProfileUI = {
      isLocked: false,
      showAbout: false,
      showCerts: false,
      showDonation: false,
      showHeatMap: false,
      showLocation: false,
      showName: false,
      showPoints: false,
      showPortfolio: false,
      showTimeLine: false
    };

    const profileUIFields: (keyof typeof mergedProfileUI)[] = [
      'isLocked',
      'showAbout',
      'showCerts',
      'showDonation',
      'showHeatMap',
      'showLocation',
      'showName',
      'showPoints',
      'showPortfolio',
      'showTimeLine'
    ];

    profileUIFields.forEach(field => {
      // If any profileUI has this field as true, keep true
      const hasTrue = allProfileUIs.some(
        ui => (ui as Record<string, unknown>)?.[field] === true
      );
      if (hasTrue) {
        mergedProfileUI[field] = true;
      } else {
        // Use oldest user's value as default
        const oldestValue = (oldestUser.profileUI as Record<string, unknown>)?.[
          field
        ];
        mergedProfileUI[field] =
          typeof oldestValue === 'boolean' ? oldestValue : false;
      }
    });
    mergedData.profileUI = mergedProfileUI;
  } else {
    mergedData.profileUI = oldestUser.profileUI;
  }

  // Handle date fields
  const dateFields: (keyof user)[] = ['emailAuthLinkTTL', 'emailVerifyTTL'];

  dateFields.forEach(field => {
    // Use the oldest user's value as default, or first non-null value
    let value = oldestUser[field];
    if (!value) {
      for (const user of sortedUsers) {
        if (user[field]) {
          value = user[field];
          break;
        }
      }
    }
    (mergedData as Record<string, unknown>)[field] = value;
  });

  // Handle other fields that should be preserved from oldest user
  const otherFields: (keyof user)[] = [
    'rand',
    'unsubscribeId',
    'isClassroomAccount',
    'isBanned',
    'isCheater',
    'needsModeration'
  ];

  otherFields.forEach(field => {
    // Use oldest user's value, or first non-null value if oldest doesn't have it
    let value = oldestUser[field];
    if (value === null || value === undefined) {
      for (const user of sortedUsers) {
        if (user[field] !== null && user[field] !== undefined) {
          value = user[field];
          break;
        }
      }
    }
    (mergedData as Record<string, unknown>)[field] = value;
  });

  return mergedData;
};
