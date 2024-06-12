/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import type { Prisma } from '@prisma/client';
import { setupServer, superRequest } from '../../jest.utils';
import { HOME_LOCATION } from '../utils/env';
import { createUserInput } from '../utils/create-user';

const urlEncodedInfoMessage1 =
  '?messages=info%5B0%5D%3DWe%2520could%2520not%2520find%2520an%2520account%2520to%2520unsubscribe.';
const urlEncodedInfoMessage2 =
  '?messages=info%5B0%5D%3DWe%2520were%2520unable%2520to%2520process%2520this%2520request%252C%2520please%2520check%2520and%2520try%2520again.';
const urlEncodedInfoMessage3 =
  '?messages=info%5B0%5D%3DWe%2520could%2520not%2520find%2520an%2520account%2520to%2520resubscribe.';
const urlEncodedSuccessMessage1 =
  '?messages=success%5B0%5D%3DWe%2527ve%2520successfully%2520updated%2520your%2520email%2520preferences.';
const urlEncodedSuccessMessage2 =
  '?messages=success%5B0%5D%3DWe%2527ve%2520successfully%2520updated%2520your%2520email%2520preferences.%2520Thank%2520you%2520for%2520resubscribing.';

const unsubscribeId1 = 'abcde';
const unsubscribeId2 = 'abcdef';
const unsubscribeId3 = 'abcdefg';

const testUserData1: Prisma.userCreateInput[] = [
  {
    ...createUserInput('user1@freecodecamp.org'),
    unsubscribeId: unsubscribeId1,
    sendQuincyEmail: true
  },
  {
    ...createUserInput('user1@freecodecamp.org'),
    unsubscribeId: unsubscribeId2,
    sendQuincyEmail: true
  },
  {
    ...createUserInput('user2@freecodecamp.org'),
    unsubscribeId: unsubscribeId2,
    sendQuincyEmail: true
  },
  {
    ...createUserInput('user3@freecodecamp.org'),
    unsubscribeId: unsubscribeId3,
    sendQuincyEmail: true
  }
];

const testUserData2: Prisma.userCreateInput[] = [
  {
    ...createUserInput('user1@freecodecamp.org'),
    unsubscribeId: unsubscribeId1,
    sendQuincyEmail: false
  },
  {
    ...createUserInput('user2@freecodecamp.org'),
    unsubscribeId: unsubscribeId2,
    sendQuincyEmail: false
  },
  {
    ...createUserInput('user3@freecodecamp.org'),
    unsubscribeId: unsubscribeId2,
    sendQuincyEmail: false
  }
];

describe('Email Subscription endpoints', () => {
  setupServer();

  describe('GET /ue/:unsubscribeId', () => {
    test('should 302 redirect with info message if no ID', async () => {
      const response = await superRequest('/ue/', { method: 'GET' });
      expect(response.headers.location).toStrictEqual(
        `${HOME_LOCATION}${urlEncodedInfoMessage1}`
      );
      expect(response.status).toBe(302);
    });

    test('should 302 redirect with info message if bad ID', async () => {
      const response = await superRequest('/ue/54321edcba', { method: 'GET' });
      expect(response.headers.location).toStrictEqual(
        `${HOME_LOCATION}${urlEncodedInfoMessage1}`
      );
      expect(response.status).toBe(302);
    });

    test("1: should set 'sendQuincyEmail' to 'false' for users with matching email and 302 redirect with success message", async () => {
      await fastifyTestInstance.prisma.user.createMany({
        data: testUserData1
      });

      const response = await superRequest(`/ue/${unsubscribeId1}`, {
        method: 'GET'
      });

      const users = await fastifyTestInstance.prisma.user.findMany({
        where: {
          OR: [
            { unsubscribeId: unsubscribeId1 },
            { unsubscribeId: unsubscribeId2 },
            { unsubscribeId: unsubscribeId3 }
          ]
        }
      });

      expect(users).toHaveLength(4);
      users.forEach(user => {
        if (['user1@freecodecamp.org'].includes(user.email)) {
          expect(user.sendQuincyEmail).toBe(false);
        } else {
          expect(user.sendQuincyEmail).toBe(true);
        }
      });

      expect(response.headers.location).toStrictEqual(
        `${HOME_LOCATION}/unsubscribed/${unsubscribeId1}${urlEncodedSuccessMessage1}`
      );

      expect(response.status).toBe(302);
      // TODO: If any assertions fail before this call, other tests will fail for no actual reason.
      await fastifyTestInstance.prisma.user.deleteMany({
        where: {
          OR: [
            { unsubscribeId: unsubscribeId1 },
            { unsubscribeId: unsubscribeId2 },
            { unsubscribeId: unsubscribeId3 }
          ]
        }
      });
    });

    test("2: should set 'sendQuincyEmail' to 'false' for all users with matching email and 302 redirect with success message", async () => {
      await fastifyTestInstance.prisma.user.createMany({
        data: testUserData1
      });

      const response = await superRequest(`/ue/${unsubscribeId2}`, {
        method: 'GET'
      });

      const users = await fastifyTestInstance.prisma.user.findMany({
        where: {
          OR: [
            { unsubscribeId: unsubscribeId1 },
            { unsubscribeId: unsubscribeId2 },
            { unsubscribeId: unsubscribeId3 }
          ]
        }
      });

      expect(users).toHaveLength(4);
      users.forEach(user => {
        if (
          ['user1@freecodecamp.org', 'user2@freecodecamp.org'].includes(
            user.email
          )
        ) {
          expect(user.sendQuincyEmail).toBe(false);
        } else {
          expect(user.sendQuincyEmail).toBe(true);
        }
      });

      expect(response.headers.location).toStrictEqual(
        `${HOME_LOCATION}/unsubscribed/${unsubscribeId2}${urlEncodedSuccessMessage1}`
      );

      expect(response.status).toBe(302);
      // TODO: If any assertions fail before this call, other tests will fail for no actual reason.
      await fastifyTestInstance.prisma.user.deleteMany({
        where: {
          OR: [
            { unsubscribeId: unsubscribeId1 },
            { unsubscribeId: unsubscribeId2 },
            { unsubscribeId: unsubscribeId3 }
          ]
        }
      });
    });
  });

  describe('GET /resubscribe/:unsubscribeId', () => {
    test('should 302 redirect with info message if no ID', async () => {
      const response = await superRequest('/resubscribe/', { method: 'GET' });
      expect(response.headers.location).toStrictEqual(
        `${HOME_LOCATION}${urlEncodedInfoMessage2}`
      );
      expect(response.status).toBe(302);
    });

    test('should 302 redirect with info message if bad ID', async () => {
      const response = await superRequest('/resubscribe/54321edcba', {
        method: 'GET'
      });
      expect(response.headers.location).toStrictEqual(
        `${HOME_LOCATION}${urlEncodedInfoMessage3}`
      );
      expect(response.status).toBe(302);
    });

    test("should set 'sendQuincyEmail' to 'true' for user with matching ID and 302 redirect with success message", async () => {
      await fastifyTestInstance.prisma.user.createMany({
        data: testUserData2
      });

      const response = await superRequest(`/resubscribe/${unsubscribeId1}`, {
        method: 'GET'
      });

      const users = await fastifyTestInstance.prisma.user.findMany({
        where: {
          OR: [
            { unsubscribeId: unsubscribeId1 },
            { unsubscribeId: unsubscribeId2 }
          ]
        }
      });

      expect(users).toHaveLength(3);
      users.forEach(user => {
        if (user.unsubscribeId === unsubscribeId1) {
          expect(user.sendQuincyEmail).toBe(true);
        } else {
          expect(user.sendQuincyEmail).toBe(false);
        }
      });

      expect(response.headers.location).toStrictEqual(
        `${HOME_LOCATION}${urlEncodedSuccessMessage2}`
      );

      expect(response.status).toBe(302);
      await fastifyTestInstance.prisma.user.deleteMany({
        where: {
          OR: [
            { unsubscribeId: unsubscribeId1 },
            { unsubscribeId: unsubscribeId2 }
          ]
        }
      });
    });

    test("should set 'sendQuincyEmail' to 'true' for first user with matching ID and 302 redirect with success message", async () => {
      await fastifyTestInstance.prisma.user.createMany({
        data: testUserData2
      });

      const response = await superRequest(`/resubscribe/${unsubscribeId2}`, {
        method: 'GET'
      });

      const users = await fastifyTestInstance.prisma.user.findMany({
        where: {
          OR: [
            { unsubscribeId: unsubscribeId1 },
            { unsubscribeId: unsubscribeId2 }
          ]
        }
      });

      expect(users).toHaveLength(3);
      users.forEach(user => {
        if (user.email === 'user2@freecodecamp.org') {
          expect(user.sendQuincyEmail).toBe(true);
        } else {
          expect(user.sendQuincyEmail).toBe(false);
        }
      });

      expect(response.headers.location).toStrictEqual(
        `${HOME_LOCATION}${urlEncodedSuccessMessage2}`
      );

      expect(response.status).toBe(302);
      await fastifyTestInstance.prisma.user.deleteMany({
        where: {
          OR: [
            { unsubscribeId: unsubscribeId1 },
            { unsubscribeId: unsubscribeId2 }
          ]
        }
      });
    });
  });
});
