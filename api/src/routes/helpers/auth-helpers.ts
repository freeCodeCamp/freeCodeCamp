import { FastifyInstance } from 'fastify';
import { createUserInput } from '../../utils/create-user.js';
import { assignVariantBucket } from '../../utils/drip-campaign.js';

export class DuplicateUserEmailError extends Error {
  constructor(email: string, userIds: string[]) {
    super(`Multiple user records found for ${email}: ${userIds.join(', ')}`);
    this.name = 'DuplicateUserEmailError';
  }
}

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
  const existingUser = await fastify.prisma.user.findMany({
    where: { email },
    select: { id: true, acceptedPrivacyTerms: true }
  });
  if (existingUser.length > 1) {
    const error = new DuplicateUserEmailError(
      email,
      existingUser.map(user => user.id)
    );
    fastify.Sentry.captureException(error);
    throw error;
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
