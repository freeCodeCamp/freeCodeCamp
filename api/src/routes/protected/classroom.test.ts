import { describe, test, expect, beforeAll, afterEach, vi } from 'vitest';

import { createUserInput } from '../../utils/create-user.js';
import {
  createSuperRequest,
  defaultUserEmail,
  defaultUserId,
  devLogin,
  resetDefaultUser,
  setupServer,
  superRequest
} from '../../../vitest.utils.js';

describe('classroom routes', () => {
  setupServer();

  describe('Authenticated user', () => {
    let setCookies: string[];
    let superPost: ReturnType<typeof createSuperRequest>;

    const classroomUserEmail = 'student1@example.com';
    const nonClassroomUserEmail = 'student2@example.com';
    const classroomUserId = '000000000000000000000001';
    const nonClassroomUserId = '000000000000000000000002';

    beforeAll(async () => {
      setCookies = await devLogin();
      superPost = createSuperRequest({ method: 'POST', setCookies });
    });

    afterEach(async () => {
      vi.restoreAllMocks();

      // Cleanup users created by these tests
      await fastifyTestInstance.prisma.user.deleteMany({
        where: { email: { in: [classroomUserEmail, nonClassroomUserEmail] } }
      });

      // Reset default user to a clean state
      await resetDefaultUser();
    });

    describe('POST /api/protected/classroom/get-user-id', () => {
      test('returns 400 for missing email', async () => {
        const missingRes = await superPost(
          '/api/protected/classroom/get-user-id'
        ).send({});

        expect(missingRes.status).toBe(400);
      });

      test('returns 200 with empty userId for invalid email format', async () => {
        const invalidRes = await superPost(
          '/api/protected/classroom/get-user-id'
        ).send({ email: 'not-an-email' });

        expect(invalidRes.status).toBe(200);
        expect(invalidRes.body).toStrictEqual({ userId: '' });
      });

      test('returns 200 with empty userId when no classroom account matches email', async () => {
        // Default user is not a classroom account by default
        const res = await superPost(
          '/api/protected/classroom/get-user-id'
        ).send({ email: defaultUserEmail });

        expect(res.status).toBe(200);
        expect(res.body).toStrictEqual({ userId: '' });
      });

      test('returns 200 with userId for a classroom account', async () => {
        // Make the default user a classroom account
        await fastifyTestInstance.prisma.user.update({
          where: { id: defaultUserId },
          data: { isClassroomAccount: true }
        });

        const res = await superPost(
          '/api/protected/classroom/get-user-id'
        ).send({ email: defaultUserEmail });

        expect(res.status).toBe(200);
        expect(res.body).toStrictEqual({ userId: defaultUserId });
      });

      test('returns 500 when the database query fails', async () => {
        vi.spyOn(
          fastifyTestInstance.prisma.user,
          'findFirst'
        ).mockRejectedValue(new Error('test'));

        const res = await superPost(
          '/api/protected/classroom/get-user-id'
        ).send({ email: defaultUserEmail });

        expect(res.status).toBe(500);
        expect(res.body).toStrictEqual({ error: 'Failed to retrieve user id' });
      });
    });

    describe('POST /api/protected/classroom/get-user-data', () => {
      test('returns 400 when more than 50 userIds are provided', async () => {
        const tooMany = Array.from({ length: 51 }, (_, i) => `id-${i}`);

        const res = await superPost(
          '/api/protected/classroom/get-user-data'
        ).send({ userIds: tooMany });

        expect(res.status).toBe(400);
        expect(res.body).toStrictEqual({
          error: 'Too many users requested. Maximum 50 allowed.'
        });
      });

      test('returns data only for classroom accounts', async () => {
        const now = Date.now();

        // Make default user a classroom account with one completed challenge
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

        // Create an additional classroom user
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

        // Create a non-classroom user that should be filtered out
        await fastifyTestInstance.prisma.user.create({
          data: {
            ...createUserInput(nonClassroomUserEmail),
            id: nonClassroomUserId,
            isClassroomAccount: false,
            completedChallenges: []
          }
        });

        const res = await superPost(
          '/api/protected/classroom/get-user-data'
        ).send({
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

        expect(responseBody.data[defaultUserId]?.[0]).toMatchObject({
          id: 'challenge-default',
          completedDate: now
        });
        expect(responseBody.data[classroomUserId]?.[0]).toMatchObject({
          id: 'challenge-student',
          completedDate: now + 1
        });
      });

      test('returns 500 when the database query fails', async () => {
        vi.spyOn(fastifyTestInstance.prisma.user, 'findMany').mockRejectedValue(
          new Error('test')
        );

        const res = await superPost(
          '/api/protected/classroom/get-user-data'
        ).send({ userIds: [defaultUserId] });

        expect(res.status).toBe(500);
        expect(res.body).toStrictEqual({
          error: 'Failed to retrieve user data'
        });
      });
    });
  });

  describe('Unauthenticated user', () => {
    test('POST requests are rejected with 401', async () => {
      const res = await superRequest(
        '/api/protected/classroom/get-user-id',
        {
          method: 'POST'
        },
        { sendCSRFToken: false }
      ).send({ email: 'someone@example.com' });

      expect(res.status).toBe(401);
    });
  });
});
