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

async function setupServer() {
  const fastify = Fastify();
  await fastify.register(db);
  await checkCanConnectToDb(fastify.prisma);
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
    vi.restoreAllMocks();
  });

  test('should log an error and capture an exception if there are multiple users with the same email', async () => {
    const user1 = await fastify.prisma.user.create({
      data: createUserInput(email)
    });
    const user2 = await fastify.prisma.user.create({
      data: createUserInput(email)
    });

    const userIds = [user1.id, user2.id];

    const logError = vi.spyOn(fastify.log, 'error');
    const captureException = vi.fn();
    const count = vi.fn();
    // @ts-expect-error - Only mocks part of the Sentry object.
    fastify.Sentry = { captureException, metrics: { count } };

    await findOrCreateUser(fastify, email);

    expect(logError).toHaveBeenCalledWith(
      { audit: true, userIds, email },
      'Multiple user records found'
    );
    expect(captureException).toHaveBeenCalledWith(
      new Error('Multiple user records found for: ' + userIds.join(', '))
    );
    expect(count).toHaveBeenCalledWith('user.duplicate_email_detected', 1);
  });

  test('should NOT log an error or capture an exception if there is only one user with the email', async () => {
    await fastify.prisma.user.create({ data: createUserInput(email) });

    const logError = vi.spyOn(fastify.log, 'error');
    const captureException = vi.fn();
    // @ts-expect-error - Only mocks part of the Sentry object.
    fastify.Sentry = { captureException };

    await findOrCreateUser(fastify, email);

    expect(logError).not.toHaveBeenCalled();
    expect(captureException).not.toHaveBeenCalled();
  });

  test('should NOT log an error or capture an exception if there are no users with the email', async () => {
    const logError = vi.spyOn(fastify.log, 'error');
    const captureException = vi.fn();
    const count = vi.fn();
    // @ts-expect-error - Only mocks part of the Sentry object.
    fastify.Sentry = { captureException, metrics: { count } };

    await findOrCreateUser(fastify, email);

    expect(logError).not.toHaveBeenCalled();
    expect(captureException).not.toHaveBeenCalled();
    expect(count).toHaveBeenCalledWith('user.created', 1);
  });

  describe('drip campaign logic', () => {
    test('should create a drip campaign record when a new user is created and feature flag is enabled', async () => {
      vi.spyOn(fastify.gb, 'isOn').mockImplementationOnce(() => true);

      const count = vi.fn();
      // @ts-expect-error - Only mocks part of the Sentry object.
      fastify.Sentry = { ...fastify.Sentry, metrics: { count } };

      const user = await findOrCreateUser(fastify, email);

      const dripCampaign = await fastify.prisma.dripCampaign.findFirst({
        where: { userId: user.id }
      });

      expect(dripCampaign).toBeDefined();
      expect(dripCampaign?.userId).toBe(user.id);
      expect(dripCampaign?.email).toBe(email);
      expect(['A', 'B']).toContain(dripCampaign?.variant);
      expect(count).toHaveBeenCalledWith(
        'growthbook.signup_flag_evaluated',
        1,
        {
          attributes: { flag: 'drip-campaign', result: 'success' }
        }
      );
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

      const captureException = vi.fn();
      const count = vi.fn();
      // @ts-expect-error - Only mocks part of the Sentry object.
      fastify.Sentry = { captureException, metrics: { count } };

      const originalCreate = fastify.prisma.dripCampaign.create;

      fastify.prisma.dripCampaign.create = vi
        .fn()
        .mockRejectedValueOnce(new Error('Database error'));

      const logError = vi.spyOn(fastify.log, 'error');

      const user = await findOrCreateUser(fastify, email);

      expect(user).toBeDefined();
      expect(user.id).toBeTruthy();

      const dbError: unknown = expect.objectContaining({
        message: 'Database error'
      });
      expect(logError).toHaveBeenCalledWith(
        { err: dbError, userId: user.id },
        'Failed to create drip campaign record for user'
      );
      expect(captureException).toHaveBeenCalledOnce();
      expect(count).toHaveBeenCalledWith(
        'growthbook.signup_flag_evaluated',
        1,
        {
          attributes: { flag: 'drip-campaign', result: 'failed' }
        }
      );

      fastify.prisma.dripCampaign.create = originalCreate;
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
