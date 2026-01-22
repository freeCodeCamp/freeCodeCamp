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
    fastify.Sentry.captureException(
      new Error(
        `Multiple user records found for: ${existingUser.map(user => user.id).join(', ')}`
      )
    );
  }

  if (existingUser[0]) {
    return existingUser[0];
  }

  // Create new user
  const newUser = await fastify.prisma.user.create({
    data: createUserInput(email),
    select: { id: true, acceptedPrivacyTerms: true }
  });

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
        `Drip campaign record created for user ${newUser.id} with variant ${variant}`
      );
    } catch (error) {
      // Log the error but don't fail user creation
      fastify.log.error(
        error,
        `Failed to create drip campaign record for user ${newUser.id}`
      );
      fastify.Sentry.captureException(error);
    }
  }

  return newUser;
};
