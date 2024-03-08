import Fastify, { FastifyInstance } from 'fastify';
import jwt from 'jsonwebtoken';

import { AUTH0_DOMAIN, JWT_SECRET } from '../utils/env';
// import cookies from './cookies';
import { auth0Client } from './auth0';

describe('auth0 plugin', () => {
  let fastify: FastifyInstance;

  beforeEach(async () => {
    fastify = Fastify();
    // TODO: Uncomment when a test fails because of the lack of it.
    // await fastify.register(cookies);
    await fastify.register(auth0Client);
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

    it('should add the returnTo, origin and pathPrefix to the state', async () => {
      const res = await fastify.inject({
        method: 'GET',
        url: '/signin',
        headers: {
          Referer: 'https://www.freecodecamp.org/espanol/settings'
        }
      });

      const redirectUrl = new URL(res.headers.location!);
      const stateParam = redirectUrl.searchParams.get('state');
      const state = jwt.verify(stateParam as string, JWT_SECRET) as Record<
        string,
        string
      >;
      expect(state.returnTo).toBe(
        'https://www.freecodecamp.org/espanol/settings'
      );
      expect(state.origin).toBe('https://www.freecodecamp.org');
      expect(state.pathPrefix).toBe('espanol');
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

    it('should redirect to auth0 if authentication fails', async () => {
      getAccessTokenFromAuthorizationCodeFlowSpy.mockRejectedValueOnce(
        'any error'
      );

      const res = await fastify.inject({
        method: 'GET',
        url: '/auth/auth0/callback'
      });

      const redirectUrl = new URL(res.headers.location!);
      expect(redirectUrl.host).toMatch(AUTH0_DOMAIN);
      expect(res.statusCode).toBe(302);
    });

    it('should log an error if the state is invalid', async () => {});
  });
});
