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
) => {
  // TODO: handle the case where there are multiple users with the same email.
  // e.g. use findMany and throw an error if more than one is found.
  const existingUser = await fastify.prisma.user.findFirst({
    where: { email },
    select: { id: true }
  });
  return (
    existingUser ??
    (await fastify.prisma.user.create({
      data: createUserInput(email),
      select: { id: true }
    }))
  );
};
