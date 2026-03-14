import { describe, test, expect, beforeAll, afterEach } from 'vitest';

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
        lastActivityTimestamp: null
      }
    });
  });

  describe('POST /activity', () => {
    test('returns 401 for unauthenticated requests', async () => {
      const response = await superRequest('/activity', {
        method: 'POST'
      }).send({ url: '/learn/javascript' });

      expect(response.status).toBe(401);
    });

    test('returns 400 for missing url in body', async () => {
      const response = await superRequest('/activity', {
        method: 'POST',
        setCookies
      }).send({});

      expect(response.status).toBe(400);
    });

    test('returns 400 for empty url string', async () => {
      const response = await superRequest('/activity', {
        method: 'POST',
        setCookies
      }).send({ url: '' });

      expect(response.status).toBe(400);
    });

    test('returns 200 and updates user activity for valid request', async () => {
      const testUrl =
        '/learn/javascript-algorithms-and-data-structures/basic-javascript/comment-your-javascript-code';

      const response = await superRequest('/activity', {
        method: 'POST',
        setCookies
      }).send({ url: testUrl });

      expect(response.status).toBe(200);
      expect(response.body).toStrictEqual({
        message: 'flash.activity-updated',
        type: 'success'
      });

      const user = await fastifyTestInstance.prisma.user.findFirst({
        where: { id: defaultUserId }
      });

      expect(user?.lastActivityUrl).toBe(testUrl);
      expect(user?.lastActivityTimestamp).toBeGreaterThan(0);
    });

    test('overwrites previous activity with new activity', async () => {
      const firstUrl = '/learn/javascript/basic-javascript/step-1';
      const secondUrl = '/learn/javascript/basic-javascript/step-2';

      await superRequest('/activity', {
        method: 'POST',
        setCookies
      }).send({ url: firstUrl });

      const response = await superRequest('/activity', {
        method: 'POST',
        setCookies
      }).send({ url: secondUrl });

      expect(response.status).toBe(200);

      const user = await fastifyTestInstance.prisma.user.findFirst({
        where: { id: defaultUserId }
      });

      expect(user?.lastActivityUrl).toBe(secondUrl);
    });
  });
});
