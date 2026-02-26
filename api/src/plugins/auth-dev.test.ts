import {
  describe,
  test,
  expect,
  beforeAll,
  beforeEach,
  afterAll
} from 'vitest';
import Fastify, { FastifyInstance } from 'fastify';

import { checkCanConnectToDb, defaultUserEmail } from '../../vitest.utils.js';
import {
  HOME_LOCATION,
  GROWTHBOOK_FASTIFY_API_HOST,
  GROWTHBOOK_FASTIFY_CLIENT_KEY
} from '../utils/env.js';
import { devAuth } from '../plugins/auth-dev.js';
import prismaPlugin from '../db/prisma.js';
import auth from './auth.js';
import cookies from './cookies.js';
import growthBook from './growth-book.js';

import { newUser } from './__fixtures__/user.js';

describe('dev login', () => {
  let fastify: FastifyInstance;

  beforeAll(async () => {
    fastify = Fastify();

    await fastify.register(cookies);
    await fastify.register(auth);
    await fastify.register(devAuth);
    await fastify.register(prismaPlugin);
    await checkCanConnectToDb(fastify.prisma);
    await fastify.register(growthBook, {
      apiHost: GROWTHBOOK_FASTIFY_API_HOST,
      clientKey: GROWTHBOOK_FASTIFY_CLIENT_KEY
    });
  });

  beforeEach(async () => {
    await fastify.prisma.user.deleteMany({
      where: { email: defaultUserEmail }
    });
  });

  afterAll(async () => {
    await fastify.prisma.user.deleteMany({
      where: { email: defaultUserEmail }
    });
    await fastify.prisma.$runCommandRaw({ dropDatabase: 1 });
    await fastify.close();
  });

  describe('GET /signin', () => {
    test('should create an account if one does not exist', async () => {
      const before = await fastify.prisma.user.count({});
      await fastify.inject({
        method: 'GET',
        url: '/signin'
      });

      const after = await fastify.prisma.user.count({});

      expect(before).toBe(0);
      expect(after).toBe(before + 1);
    });

    test('should populate the user with the correct data', async () => {
      await fastify.inject({
        method: 'GET',
        url: '/signin'
      });

      const user = await fastify.prisma.user.findFirstOrThrow({
        where: { email: defaultUserEmail }
      });

      expect(user).toEqual(newUser(defaultUserEmail));
      expect(user.username).toBe(user.usernameDisplay);
    });

    test('should set the jwt_access_token cookie', async () => {
      const res = await fastify.inject({
        method: 'GET',
        url: '/signin'
      });

      expect(res.statusCode).toBe(302);

      expect(res.cookies).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ name: 'jwt_access_token' })
        ])
      );
    });

    test.todo('should create a session');

    test('should redirect to the Referer (if it is a valid origin)', async () => {
      const res = await fastify.inject({
        method: 'GET',
        url: '/signin',
        headers: {
          referer: 'https://www.freecodecamp.org/some-path/or/other'
        }
      });

      expect(res.statusCode).toBe(302);
      expect(res.headers.location).toBe(
        'https://www.freecodecamp.org/some-path/or/other'
      );
    });

    test('should redirect to /valid-language/learn when signing in from /valid-language', async () => {
      const res = await fastify.inject({
        method: 'GET',
        url: '/signin',
        headers: {
          referer: 'https://www.freecodecamp.org/espanol'
        }
      });

      expect(res.statusCode).toBe(302);
      expect(res.headers.location).toBe(
        'https://www.freecodecamp.org/espanol/learn'
      );
    });

    test('should handle referers with trailing slahes', async () => {
      const res = await fastify.inject({
        method: 'GET',
        url: '/signin',
        headers: {
          referer: 'https://www.freecodecamp.org/espanol/'
        }
      });

      expect(res.statusCode).toBe(302);
      expect(res.headers.location).toBe(
        'https://www.freecodecamp.org/espanol/learn'
      );
    });

    test('should redirect to /learn by default', async () => {
      const res = await fastify.inject({
        method: 'GET',
        url: '/signin'
      });

      expect(res.statusCode).toBe(302);
      expect(res.headers.location).toBe(`${HOME_LOCATION}/learn`);
    });
  });
});
