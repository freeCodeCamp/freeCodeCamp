import Fastify, { FastifyInstance } from 'fastify';

import { AUTH0_DOMAIN } from '../utils/env';
import prismaPlugin from '../db/prisma';
// import cookies from './cookies';
import { auth0Client } from './auth0';

describe('auth0 plugin', () => {
  let fastify: FastifyInstance;

  beforeEach(async () => {
    fastify = Fastify();
    // TODO: Uncomment when a test fails because of the lack of it.
    // await fastify.register(cookies);
    await fastify.register(auth0Client);
    await fastify.register(prismaPlugin);
  });

  afterEach(async () => {
    await fastify.close();
  });

  describe('GET /signin', () => {
    it('should redirect to the auth0 login page', async () => {
      const res = await fastify.inject({
        method: 'GET',
        url: '/signin'
      });

      const redirectUrl = new URL(res.headers.location!);
      expect(redirectUrl.host).toMatch(AUTH0_DOMAIN);
      expect(redirectUrl.pathname).toBe('/authorize');
      expect(res.statusCode).toBe(302);
    });
  });

  describe('GET /auth/auth0/callback', () => {
    let getAccessTokenFromAuthorizationCodeFlowSpy: jest.SpyInstance;

    beforeEach(() => {
      getAccessTokenFromAuthorizationCodeFlowSpy = jest.spyOn(
        fastify.auth0OAuth,
        'getAccessTokenFromAuthorizationCodeFlow'
      );
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('should redirect to /signin if authentication fails', async () => {
      getAccessTokenFromAuthorizationCodeFlowSpy.mockRejectedValueOnce(
        'any error'
      );

      const res = await fastify.inject({
        method: 'GET',
        url: '/auth/auth0/callback'
      });

      expect(res.headers.location).toMatch('/signin');
      expect(res.statusCode).toBe(302);
    });

    it('should redirect to the /signin if the state is invalid', async () => {
      const res = await fastify.inject({
        method: 'GET',
        url: '/auth/auth0/callback?state=invalid'
      });

      expect(res.headers.location).toMatch('/signin');
      expect(res.statusCode).toBe(302);
    });

    it('should log an error if the state is invalid', async () => {
      jest.spyOn(fastify.log, 'error');
      const res = await fastify.inject({
        method: 'GET',
        url: '/auth/auth0/callback?state=invalid'
      });

      expect(fastify.log.error).toHaveBeenCalledWith(
        'Auth failed: invalid state'
      );
      expect(res.statusCode).toBe(302);
    });

    // TODO(Post-MVP): Expand the logging.
    it('should not log errors if the state is valid', async () => {
      jest.spyOn(fastify.log, 'error');
      getAccessTokenFromAuthorizationCodeFlowSpy.mockRejectedValueOnce(
        'any other error'
      );
      const res = await fastify.inject({
        method: 'GET',
        url: '/auth/auth0/callback?state=doesnt-matter' // state is not checked
        // because the spy is mocking the method
      });

      expect(fastify.log.error).not.toHaveBeenCalled();
      expect(res.statusCode).toBe(302);
    });

    it('should not create a user if the state is invalid', async () => {
      await fastify.inject({
        method: 'GET',
        url: '/auth/auth0/callback?state=invalid'
      });

      expect(await fastify.prisma.user.count()).toBe(0);
    });
  });
});
