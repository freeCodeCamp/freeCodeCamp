import Fastify, { FastifyInstance } from 'fastify';

import db from '../../db/prisma';
import { createUserInput } from '../../utils/create-user';
import { checkCanConnectToDb } from '../../../jest.utils';
import { findOrCreateUser } from './auth-helpers';

async function setupServer() {
  const fastify = Fastify();
  await fastify.register(db);
  await checkCanConnectToDb(fastify.prisma);
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

  it("should NOT create a user if there is already an account with the lowercase version of the user's email", async () => {
    const upperCaseEmail = email.toUpperCase();

    // Create a user with lowercase email
    const existingUser = await fastify.prisma.user.create({
      data: createUserInput(email)
    });

    // Try to find or create with uppercase email
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

  it('should merge duplicate users when multiple users with same email exist', async () => {
    // Create two users with different completion data
    const user1 = await fastify.prisma.user.create({
      data: {
        ...createUserInput(email),
        name: 'User One',
        completedChallenges: [
          {
            id: 'challenge1',
            completedDate: new Date('2023-01-01'),
            files: []
          }
        ],
        isFrontEndCert: true,
        progressTimestamps: [123456789]
      }
    });

    await fastify.prisma.user.create({
      data: {
        ...createUserInput(email),
        name: 'User Two Updated',
        completedChallenges: [
          {
            id: 'challenge2',
            completedDate: new Date('2023-01-02'),
            files: []
          }
        ],
        isBackEndCert: true,
        progressTimestamps: [987654321]
      }
    });

    const result = await findOrCreateUser(fastify, email);

    // Should return the oldest user's ID
    expect(result.id).toBe(user1.id);

    // Verify that only one user exists now
    const remainingUsers = await fastify.prisma.user.findMany({
      where: { email }
    });
    expect(remainingUsers).toHaveLength(1);

    // Verify merged data
    const mergedUser = remainingUsers[0]!;
    expect(mergedUser.id).toBe(user1.id);
    expect(mergedUser.name).toBe('User Two Updated'); // Should be newest name
    expect(mergedUser.isFrontEndCert).toBe(true); // From user1
    expect(mergedUser.isBackEndCert).toBe(true); // From user2
    expect(mergedUser.completedChallenges).toHaveLength(2); // Combined
    expect(Array.isArray(mergedUser.progressTimestamps)).toBe(true);

    const progressTimestamps = mergedUser.progressTimestamps as number[];
    expect(progressTimestamps).toContain(123456789);
    expect(progressTimestamps).toContain(987654321);
  });
});
