import Fastify, { FastifyInstance } from 'fastify';

import { defaultUserEmail } from '../../jest.utils';
import { HOME_LOCATION } from '../utils/env';
import { devAuth } from '../plugins/auth-dev';
import prismaPlugin from '../db/prisma';
import auth from './auth';
import cookies from './cookies';

import { newUser } from './__fixtures__/user';

describe('dev login', () => {
  let fastify: FastifyInstance;

  beforeAll(async () => {
    fastify = Fastify();

    await fastify.register(cookies);
    await fastify.register(auth);
    await fastify.register(devAuth);
    await fastify.register(prismaPlugin);
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
    await fastify.close();
  });

  describe('GET /signin', () => {
    it('should create an account if one does not exist', async () => {
      const before = await fastify.prisma.user.count({});
      await fastify.inject({
        method: 'GET',
        url: '/signin'
      });

      const after = await fastify.prisma.user.count({});

      expect(before).toBe(0);
      expect(after).toBe(before + 1);
    });

    it('should populate the user with the correct data', async () => {
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

    it('should set the jwt_access_token cookie', async () => {
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

    it.todo('should create a session');

    it('should redirect to the Referer (if it is a valid origin)', async () => {
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

    it('should redirect to /valid-language/learn when signing in from /valid-language', async () => {
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

    it('should handle referers with trailing slahes', async () => {
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

    it('should redirect to /learn by default', async () => {
      const res = await fastify.inject({
        method: 'GET',
        url: '/signin'
      });

      expect(res.statusCode).toBe(302);
      expect(res.headers.location).toBe(`${HOME_LOCATION}/learn`);
    });
  });
});
