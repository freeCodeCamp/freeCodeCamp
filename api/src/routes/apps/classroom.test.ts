import { describe, test, expect, afterEach, vi } from 'vitest';

vi.mock('../../utils/env', async importOriginal => {
  const actual = await importOriginal<typeof import('../../utils/env.js')>();
  return {
    ...actual,
    TPA_API_BEARER_TOKEN: 'test-classroom-api-secret'
  };
});

import request from 'supertest';

import { createUserInput } from '../../utils/create-user.js';
import {
  defaultUserEmail,
  defaultUserId,
  resetDefaultUser,
  setupServer
} from '../../../vitest.utils.js';

const BEARER_TOKEN = 'test-classroom-api-secret';

const classroomUserEmail = 'student1@example.com';
const nonClassroomUserEmail = 'student2@example.com';
const classroomUserId = '000000000000000000000001';
const nonClassroomUserId = '000000000000000000000002';

function post(url: string) {
  return request(fastifyTestInstance.server)
    .post(url)
    .set('authorization', `Bearer ${BEARER_TOKEN}`);
}

describe('classroom routes', () => {
  setupServer();

  afterEach(async () => {
    vi.restoreAllMocks();

    await fastifyTestInstance.prisma.user.deleteMany({
      where: { email: { in: [classroomUserEmail, nonClassroomUserEmail] } }
    });

    await resetDefaultUser();
  });

  describe('Without bearer token', () => {
    test('POST get-user-id returns 401', async () => {
      const res = await request(fastifyTestInstance.server)
        .post('/apps/classroom/get-user-id')
        .send({ email: 'someone@example.com' });

      expect(res.status).toBe(401);
      expect(res.body).toStrictEqual({ error: 'Bearer token is required' });
    });

    test('POST get-user-data returns 401', async () => {
      const res = await request(fastifyTestInstance.server)
        .post('/apps/classroom/get-user-data')
        .send({ userIds: [defaultUserId] });

      expect(res.status).toBe(401);
      expect(res.body).toStrictEqual({ error: 'Bearer token is required' });
    });
  });

  describe('With wrong bearer token', () => {
    test('POST get-user-id returns 401', async () => {
      const res = await request(fastifyTestInstance.server)
        .post('/apps/classroom/get-user-id')
        .set('authorization', 'Bearer wrong-key')
        .send({ email: 'someone@example.com' });

      expect(res.status).toBe(401);
      expect(res.body).toStrictEqual({ error: 'Invalid bearer token' });
    });

    test('POST get-user-data returns 401', async () => {
      const res = await request(fastifyTestInstance.server)
        .post('/apps/classroom/get-user-data')
        .set('authorization', 'Bearer wrong-key')
        .send({ userIds: [defaultUserId] });

      expect(res.status).toBe(401);
      expect(res.body).toStrictEqual({ error: 'Invalid bearer token' });
    });
  });

  describe('Authenticated with API key', () => {
    describe('POST /apps/classroom/get-user-id', () => {
      test('returns 400 for missing email', async () => {
        const res = await post('/apps/classroom/get-user-id').send({});

        expect(res.status).toBe(400);
      });

      test('returns 400 for invalid email format', async () => {
        const res = await post('/apps/classroom/get-user-id').send({
          email: 'not-an-email'
        });

        expect(res.status).toBe(400);
      });

      test('returns 200 with empty userId when no classroom account matches email', async () => {
        const res = await post('/apps/classroom/get-user-id').send({
          email: defaultUserEmail
        });

        expect(res.status).toBe(200);
        expect(res.body).toStrictEqual({ userId: '' });
      });

      test('returns 200 with userId for a classroom account', async () => {
        await fastifyTestInstance.prisma.user.update({
          where: { id: defaultUserId },
          data: { isClassroomAccount: true }
        });

        const res = await post('/apps/classroom/get-user-id').send({
          email: defaultUserEmail
        });

        expect(res.status).toBe(200);
        expect(res.body).toStrictEqual({ userId: defaultUserId });
      });

      test('returns 500 when the database query fails', async () => {
        const original = fastifyTestInstance.prisma.user.findFirst;
        fastifyTestInstance.prisma.user.findFirst = vi
          .fn()
          .mockRejectedValue(new Error('test')) as typeof original;

        const res = await post('/apps/classroom/get-user-id').send({
          email: defaultUserEmail
        });

        fastifyTestInstance.prisma.user.findFirst = original;

        expect(res.status).toBe(500);
        expect(res.body).toStrictEqual({
          error: 'Failed to retrieve user id'
        });
      });
    });

    describe('POST /apps/classroom/get-user-data', () => {
      test('returns 400 when more than 50 userIds are provided', async () => {
        const tooMany = Array.from(
          { length: 51 },
          (_, i) => `${String(i).padStart(24, '0')}`
        );

        const res = await post('/apps/classroom/get-user-data').send({
          userIds: tooMany
        });

        expect(res.status).toBe(400);
      });

      test('returns 200 with empty data for empty userIds array', async () => {
        const res = await post('/apps/classroom/get-user-data').send({
          userIds: []
        });

        expect(res.status).toBe(200);
        expect(res.body).toStrictEqual({ data: {} });
      });

      test('returns data only for classroom accounts', async () => {
        const now = Date.now();

        await fastifyTestInstance.prisma.user.update({
          where: { id: defaultUserId },
          data: {
            isClassroomAccount: true,
            completedChallenges: [
              {
                id: 'challenge-default',
                completedDate: now,
                files: []
              }
            ]
          }
        });

        await fastifyTestInstance.prisma.user.create({
          data: {
            ...createUserInput(classroomUserEmail),
            id: classroomUserId,
            isClassroomAccount: true,
            completedChallenges: [
              {
                id: 'challenge-student',
                completedDate: now + 1,
                files: []
              }
            ]
          }
        });

        await fastifyTestInstance.prisma.user.create({
          data: {
            ...createUserInput(nonClassroomUserEmail),
            id: nonClassroomUserId,
            isClassroomAccount: false,
            completedChallenges: []
          }
        });

        const res = await post('/apps/classroom/get-user-data').send({
          userIds: [defaultUserId, classroomUserId, nonClassroomUserId]
        });

        expect(res.status).toBe(200);
        const responseBody = res.body as {
          data: Record<
            string,
            Array<{ id: string; completedDate: number }> | undefined
          >;
        };
        expect(Object.keys(responseBody.data)).toEqual(
          expect.arrayContaining([defaultUserId, classroomUserId])
        );
        expect(responseBody.data).not.toHaveProperty(nonClassroomUserId);

        expect(responseBody.data[defaultUserId]?.[0]).toStrictEqual({
          id: 'challenge-default',
          completedDate: now
        });
        expect(responseBody.data[classroomUserId]?.[0]).toStrictEqual({
          id: 'challenge-student',
          completedDate: now + 1
        });
      });

      test('response contains only id and completedDate', async () => {
        const now = Date.now();

        await fastifyTestInstance.prisma.user.update({
          where: { id: defaultUserId },
          data: {
            isClassroomAccount: true,
            completedChallenges: [
              {
                id: 'challenge-shape-test',
                completedDate: now,
                solution: 'http://example.com/solution',
                files: [
                  {
                    contents: 'some code',
                    ext: 'js',
                    key: 'indexjs',
                    name: 'index'
                  }
                ]
              }
            ]
          }
        });

        const res = await post('/apps/classroom/get-user-data').send({
          userIds: [defaultUserId]
        });

        expect(res.status).toBe(200);
        const responseBody = res.body as {
          data: Record<string, Array<Record<string, unknown>>>;
        };
        const challenge = responseBody.data[defaultUserId]![0]!;
        expect(Object.keys(challenge)).toStrictEqual(['id', 'completedDate']);
      });

      test('returns 500 when the database query fails', async () => {
        const original = fastifyTestInstance.prisma.user.findMany;
        fastifyTestInstance.prisma.user.findMany = vi
          .fn()
          .mockRejectedValue(new Error('test')) as typeof original;

        const res = await post('/apps/classroom/get-user-data').send({
          userIds: [defaultUserId]
        });

        fastifyTestInstance.prisma.user.findMany = original;

        expect(res.status).toBe(500);
        expect(res.body).toStrictEqual({
          error: 'Failed to retrieve user data'
        });
      });
    });
  });
});
