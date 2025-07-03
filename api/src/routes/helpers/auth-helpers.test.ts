import Fastify, { FastifyInstance } from 'fastify';

import db from '../../db/prisma';
import { createUserInput } from '../../utils/create-user';
import { findOrCreateUser } from './auth-helpers';

const captureException = jest.fn();

async function setupServer() {
  const fastify = Fastify();
  await fastify.register(db);
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
    await fastify.prisma.user.deleteMany({ where: { email } });
    await fastify.close();
    jest.clearAllMocks();
  });

  it('should send a message to Sentry if there are multiple users with the same email', async () => {
    await fastify.prisma.user.create({ data: createUserInput(email) });
    await fastify.prisma.user.create({ data: createUserInput(email) });

    await findOrCreateUser(fastify, email);

    expect(captureException).toHaveBeenCalledTimes(1);
    expect(captureException).toHaveBeenCalledWith(
      new Error('Multiple user records found for: test@user.com')
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
});
