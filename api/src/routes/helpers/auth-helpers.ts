import { FastifyInstance } from 'fastify';
import { createUserInput } from '../../utils/create-user.js';
import { assignVariantBucket } from '../../utils/drip-campaign.js';

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
  // TODO: handle the case where there are multiple users with the same email.
  // e.g. use findMany and throw an error if more than one is found.
  const existingUser = await fastify.prisma.user.findMany({
    where: { email },
    select: { id: true, acceptedPrivacyTerms: true }
  });
  if (existingUser.length > 1) {
    const userIds = existingUser.map(user => user.id);
    fastify.log.error(
      { audit: true, userIds, email },
      'Multiple user records found'
    );
    fastify.Sentry?.captureException(
      new Error('Multiple user records found for the same email'),
      {
        extra: { userIds },
        fingerprint: ['dup-account-multiple-user-records']
      }
    );
    fastify.Sentry?.metrics?.count('user.duplicate_email_detected', 1);
  }

  if (existingUser[0]) {
    return existingUser[0];
  }

  // Create new user
  const newUser = await fastify.prisma.user.create({
    data: createUserInput(email),
    select: { id: true, acceptedPrivacyTerms: true }
  });

  fastify.Sentry?.metrics?.count('user.created', 1);

  // Create drip campaign record if feature flag is enabled
  if (fastify.gb.isOn('drip-campaign')) {
    try {
      const variant = assignVariantBucket(newUser.id);
      await fastify.prisma.dripCampaign.create({
        data: {
          userId: newUser.id,
          email,
          variant
        }
      });
      fastify.log.info(
        { userId: newUser.id, variant },
        'Drip campaign record created for user'
      );
      fastify.Sentry?.metrics?.count('growthbook.signup_flag_evaluated', 1, {
        attributes: { flag: 'drip-campaign', result: 'success' }
      });
    } catch (err) {
      fastify.Sentry?.captureException(err);
      fastify.log.error(
        { err, userId: newUser.id },
        'Failed to create drip campaign record for user'
      );
      fastify.Sentry?.metrics?.count('growthbook.signup_flag_evaluated', 1, {
        attributes: { flag: 'drip-campaign', result: 'failed' }
      });
    }
  }

  return newUser;
};
