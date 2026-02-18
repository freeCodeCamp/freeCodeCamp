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
import { assignVariantBucket } from '../../utils/drip-campaign.js';
import growthBook from '../../plugins/growth-book.js';
import {
  GROWTHBOOK_FASTIFY_API_HOST,
  GROWTHBOOK_FASTIFY_CLIENT_KEY
} from '../../utils/env.js';

const captureException = vi.fn();

async function setupServer() {
  const fastify = Fastify();
  await fastify.register(db);
  await checkCanConnectToDb(fastify.prisma);
  // @ts-expect-error we're mocking the Sentry plugin
  fastify.Sentry = { captureException };
  await fastify.register(growthBook, {
    apiHost: GROWTHBOOK_FASTIFY_API_HOST,
    clientKey: GROWTHBOOK_FASTIFY_CLIENT_KEY
  });
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
    await fastify.prisma.dripCampaign.deleteMany({ where: { email } });
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

  describe('drip campaign logic', () => {
    test('should create a drip campaign record when a new user is created and feature flag is enabled', async () => {
      vi.spyOn(fastify.gb, 'isOn').mockImplementationOnce(() => true);

      const user = await findOrCreateUser(fastify, email);

      const dripCampaign = await fastify.prisma.dripCampaign.findFirst({
        where: { userId: user.id }
      });

      expect(dripCampaign).toBeDefined();
      expect(dripCampaign?.userId).toBe(user.id);
      expect(dripCampaign?.email).toBe(email);
      expect(['A', 'B']).toContain(dripCampaign?.variant);
    });

    test('should assign a consistent variant based on userId', async () => {
      vi.spyOn(fastify.gb, 'isOn').mockImplementationOnce(() => true);

      const user = await findOrCreateUser(fastify, email);
      const expectedVariant = assignVariantBucket(user.id);

      const dripCampaign = await fastify.prisma.dripCampaign.findFirst({
        where: { userId: user.id }
      });

      expect(dripCampaign?.variant).toBe(expectedVariant);
    });

    test('should not create a drip campaign record when feature flag is disabled', async () => {
      vi.spyOn(fastify.gb, 'isOn').mockImplementationOnce(() => false);

      const user = await findOrCreateUser(fastify, email);

      const dripCampaign = await fastify.prisma.dripCampaign.findFirst({
        where: { userId: user.id }
      });

      expect(dripCampaign).toBeNull();
    });

    test('should not prevent user creation if drip campaign record creation fails', async () => {
      vi.spyOn(fastify.gb, 'isOn').mockImplementationOnce(() => true);

      // Mock dripCampaign.create to throw an error
      const originalDrip = fastify.prisma.dripCampaign;

      const createSpy = vi
        .spyOn(fastify.prisma, 'dripCampaign', 'get')
        .mockReturnValue({
          ...originalDrip,
          create: vi.fn().mockRejectedValueOnce(new Error('Database error'))
        });

      const user = await findOrCreateUser(fastify, email);

      expect(user).toBeDefined();
      expect(user.id).toBeTruthy();

      // Verify error was captured by Sentry
      expect(captureException).toHaveBeenCalledTimes(1);
      expect(captureException).toHaveBeenCalledWith(
        expect.objectContaining({
          message: 'Database error'
        })
      );

      createSpy.mockRestore();
    });

    test('should not create drip campaign for existing users', async () => {
      vi.spyOn(fastify.gb, 'isOn').mockImplementationOnce(() => true);

      // Create user first
      await fastify.prisma.user.create({ data: createUserInput(email) });

      // Call findOrCreateUser for existing user
      await findOrCreateUser(fastify, email);

      // Verify no drip campaign record was created
      const dripCampaigns = await fastify.prisma.dripCampaign.findMany({
        where: { email }
      });

      expect(dripCampaigns).toHaveLength(0);
    });
  });
});
