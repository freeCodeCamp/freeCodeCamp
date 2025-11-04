import {
  describe,
  test,
  expect,
  beforeAll,
  afterEach,
  afterAll,
  vi
} from 'vitest';
import Fastify, { FastifyInstance } from 'fastify';

import db from '../../db/prisma.js';
import { createUserInput } from '../../utils/create-user.js';
import { checkCanConnectToDb } from '../../../vitest.utils.js';
import { findOrCreateUser } from './auth-helpers.js';

const captureException = vi.fn();

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

  afterAll(async () => {
    await fastify.prisma.$runCommandRaw({ dropDatabase: 1 });
    await fastify.close();
  });

  afterEach(async () => {
    await fastify.prisma.user.deleteMany({ where: { email } });
    await fastify.close();
    vi.clearAllMocks();
  });

  test('should send a message to Sentry if there are multiple users with the same email', async () => {
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

  test('should NOT send a message if there is only one user with the email', async () => {
    await fastify.prisma.user.create({ data: createUserInput(email) });

    await findOrCreateUser(fastify, email);

    expect(captureException).not.toHaveBeenCalled();
  });

  test('should NOT send a message if there are no users with the email', async () => {
    await findOrCreateUser(fastify, email);

    expect(captureException).not.toHaveBeenCalled();
  });
});
