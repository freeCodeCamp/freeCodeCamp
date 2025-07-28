import { FastifyInstance } from 'fastify';
import { createUserInput } from '../../utils/create-user';

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
  const existingUser = await fastify.prisma.user.findMany({
    where: {
      OR: [
        {
          email: email
        },
        {
          email: lowerCaseEmail
        }
      ]
      // Assumption that this is less efficient
      // email: {
      //   in: [email, lowerCaseEmail]
      // },
      // Might not be ideal, because it uses RegEx: https://www.prisma.io/docs/orm/prisma-client/queries/case-sensitivity#mongodb-provider
      // email: {
      //   mode: "insensitive",
      //   equals: email
      // }
    },
    select: { id: true, acceptedPrivacyTerms: true }
  });
  if (existingUser.length > 1) {
    fastify.Sentry.captureException(
      new Error(
        `Multiple user records found for: ${existingUser.map(user => user.id).join(', ')}`
      )
    );
  }

  return (
    existingUser[0] ??
    (await fastify.prisma.user.create({
      data: createUserInput(lowerCaseEmail),
      select: { id: true, acceptedPrivacyTerms: true }
    }))
  );
};
