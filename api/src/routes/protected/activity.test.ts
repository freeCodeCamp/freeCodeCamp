import { describe, test, expect, beforeAll, afterEach } from 'vitest';
import { startOfDay } from 'date-fns';

import {
  defaultUserId,
  devLogin,
  setupServer,
  superRequest
} from '../../../vitest.utils.js';

describe('Activity Routes', () => {
  setupServer();

  let setCookies: string[];

  beforeAll(async () => {
    setCookies = await devLogin();
  });

  afterEach(async () => {
    await fastifyTestInstance.prisma.user.updateMany({
      where: { id: defaultUserId },
      data: {
        lastActivityUrl: null,
        activityTimestamps: [],
        currentChallengeId: ''
      }
    });
  });

  describe('POST /activity', () => {
    test('returns 401 for unauthenticated requests', async () => {
      const res = await superRequest('/status/ping', { method: 'GET' });
      const csrfCookies = res.get('Set-Cookie');

      const response = await superRequest('/activity', {
        method: 'POST',
        setCookies: csrfCookies
      }).send({
        challengeId: 'abc123',
        url: '/learn/javascript'
      });

      expect(response.status).toBe(401);
    });

    test('returns 400 for missing challengeId', async () => {
      const response = await superRequest('/activity', {
        method: 'POST',
        setCookies
      }).send({ url: '/learn/javascript' });

      expect(response.status).toBe(400);
    });

    test('returns 400 for missing url', async () => {
      const response = await superRequest('/activity', {
        method: 'POST',
        setCookies
      }).send({ challengeId: 'abc123' });

      expect(response.status).toBe(400);
    });

    test('returns 400 for url not starting with /learn/', async () => {
      const response = await superRequest('/activity', {
        method: 'POST',
        setCookies
      }).send({ challengeId: 'abc123', url: '/settings' });

      expect(response.status).toBe(400);
    });

    test('updates currentChallengeId, lastActivityUrl, and activityTimestamps', async () => {
      const testUrl =
        '/learn/javascript-algorithms-and-data-structures/basic-javascript/comment-your-javascript-code';
      const testChallengeId = 'bd7123c8c441eddfaeb5bdef';

      const response = await superRequest('/activity', {
        method: 'POST',
        setCookies
      }).send({ challengeId: testChallengeId, url: testUrl });

      expect(response.status).toBe(200);
      expect(response.body).toStrictEqual({
        message: 'flash.activity-updated',
        type: 'success'
      });

      const user = await fastifyTestInstance.prisma.user.findFirst({
        where: { id: defaultUserId }
      });

      expect(user?.currentChallengeId).toBe(testChallengeId);
      expect(user?.lastActivityUrl).toBe(testUrl);

      const todayStart = startOfDay(new Date()).getTime();
      expect(user?.activityTimestamps).toStrictEqual([todayStart]);
    });

    test('does not duplicate activityTimestamps for same day', async () => {
      const firstUrl = '/learn/javascript/basic-javascript/step-1';
      const secondUrl = '/learn/javascript/basic-javascript/step-2';

      await superRequest('/activity', {
        method: 'POST',
        setCookies
      }).send({ challengeId: 'challenge1', url: firstUrl });

      await superRequest('/activity', {
        method: 'POST',
        setCookies
      }).send({ challengeId: 'challenge2', url: secondUrl });

      const user = await fastifyTestInstance.prisma.user.findFirst({
        where: { id: defaultUserId }
      });

      // Only one timestamp entry for today
      const todayStart = startOfDay(new Date()).getTime();
      expect(user?.activityTimestamps).toStrictEqual([todayStart]);

      // But resume fields reflect the latest challenge
      expect(user?.currentChallengeId).toBe('challenge2');
      expect(user?.lastActivityUrl).toBe(secondUrl);
    });
  });
});
