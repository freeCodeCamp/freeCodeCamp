import Fastify, { FastifyInstance } from 'fastify';

import db from '../../db/prisma';
import { createUserInput } from '../../utils/create-user';
import { checkCanConnectToDb } from '../../../jest.utils';
import { findOrCreateUser } from './auth-helpers';

const captureException = jest.fn();

async function setupServer() {
  const fastify = Fastify();
  await fastify.register(db);
  await checkCanConnectToDb(fastify.prisma);
  // @ts-expect-error we're mocking the Sentry plugin
  fastify.Sentry = { captureException };
  return fastify;
}

describe('findOrCreateUser', () => {
  let fastify: FastifyInstance;
  const email = 'test@user.com';
  beforeAll(async () => {
    fastify = await setupServer();
  });

  afterEach(async () => {
    await fastify.prisma.user.deleteMany({
      where: {
        email: {
          in: [email, email.toUpperCase()]
        }
      }
    });
    await fastify.close();
    jest.clearAllMocks();
  });

  it('should send a message to Sentry if there are multiple users with the same email', async () => {
    const user1 = await fastify.prisma.user.create({
      data: createUserInput(email)
    });
    const user2 = await fastify.prisma.user.create({
      data: createUserInput(email)
    });

    const ids = [user1.id, user2.id];

    await findOrCreateUser(fastify, email);

    expect(captureException).toHaveBeenCalledTimes(1);
    expect(captureException).toHaveBeenCalledWith(
      new Error(`Multiple user records found for: ${ids.join(', ')}`)
    );
  });

  it('should NOT send a message if there is only one user with the email', async () => {
    await fastify.prisma.user.create({ data: createUserInput(email) });

    await findOrCreateUser(fastify, email);

    expect(captureException).not.toHaveBeenCalled();
  });

  it('should NOT send a message if there are no users with the email', async () => {
    await findOrCreateUser(fastify, email);

    expect(captureException).not.toHaveBeenCalled();
  });

  it('should NOT create a user if there is an account with case-insensitive email matches', async () => {
    const upperCaseEmail = email.toUpperCase();

    // Create a user with uppercase email
    const existingUser = await fastify.prisma.user.create({
      data: createUserInput(email)
    });

    // Try to find or create with lowercase email
    const result = await findOrCreateUser(fastify, upperCaseEmail);

    // Should return the existing user, not create a new one
    expect(result.id).toBe(existingUser.id);

    // Verify only one user exists in the database
    const allUsers = await fastify.prisma.user.findMany({
      where: {
        email: {
          in: [upperCaseEmail, email]
        }
      }
    });
    expect(allUsers).toHaveLength(1);
  });
});
