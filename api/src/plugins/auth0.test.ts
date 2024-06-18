const COOKIE_DOMAIN = 'test.com';
import Fastify, { FastifyInstance } from 'fastify';

import { AUTH0_DOMAIN, HOME_LOCATION } from '../utils/env';
import prismaPlugin from '../db/prisma';
import cookies, { unsign } from './cookies';
import { auth0Client } from './auth0';
import redirectWithMessage, { formatMessage } from './redirect-with-message';
import codeFlowAuth from './code-flow-auth';

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
jest.mock('../utils/env', () => ({
  ...jest.requireActual('../utils/env'),
  COOKIE_DOMAIN
}));

describe('auth0 plugin', () => {
  let fastify: FastifyInstance;

  beforeAll(async () => {
    fastify = Fastify();

    await fastify.register(cookies);
    await fastify.register(redirectWithMessage);
    await fastify.register(codeFlowAuth);
    await fastify.register(auth0Client);
    await fastify.register(prismaPlugin);
  });

  afterAll(async () => {
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

    it('sets a login-returnto cookie', async () => {
      const returnTo = 'http://localhost:3000/learn';
      const res = await fastify.inject({
        method: 'GET',
        url: '/signin',
        headers: {
          referer: returnTo
        }
      });

      const cookie = res.cookies.find(c => c.name === 'login-returnto');
      expect(unsign(cookie!.value).value).toBe(returnTo);
      expect(cookie).toMatchObject({
        domain: COOKIE_DOMAIN,
        httpOnly: true,
        secure: true,
        sameSite: 'Lax'
      });
    });
  });

  describe('GET /auth/auth0/callback', () => {
    const email = 'new@user.com';
    let getAccessTokenFromAuthorizationCodeFlowSpy: jest.SpyInstance;
    let userinfoSpy: jest.SpyInstance;

    const mockAuthSuccess = () => {
      getAccessTokenFromAuthorizationCodeFlowSpy.mockResolvedValueOnce({
        token: 'any token'
      });
      userinfoSpy.mockResolvedValueOnce(Promise.resolve({ email }));
    };

    beforeEach(() => {
      getAccessTokenFromAuthorizationCodeFlowSpy = jest.spyOn(
        fastify.auth0OAuth,
        'getAccessTokenFromAuthorizationCodeFlow'
      );
      userinfoSpy = jest.spyOn(fastify.auth0OAuth, 'userinfo');
    });

    afterEach(async () => {
      jest.restoreAllMocks();
      await fastify.prisma.user.deleteMany({ where: { email } });
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

    it('should block requests with "access_denied" error', async () => {
      const res = await fastify.inject({
        method: 'GET',
        url: '/auth/auth0/callback?error=access_denied&error_description=Access denied from your location'
      });

      expect(res.statusCode).toBe(302);
      expect(res.headers.location).toMatch(`${HOME_LOCATION}/blocked`);

      const resWithoutDescription = await fastify.inject({
        method: 'GET',
        url: '/auth/auth0/callback?error=access_denied'
      });

      expect(resWithoutDescription.statusCode).toBe(302);
      expect(resWithoutDescription.headers.location).toMatch(
        `${HOME_LOCATION}/learn?messages=`
      );
    });

    it('creates a user if the state is valid', async () => {
      mockAuthSuccess();
      await fastify.inject({
        method: 'GET',
        url: '/auth/auth0/callback?state=valid'
      });

      expect(await fastify.prisma.user.count()).toBe(1);
    });

    it('handles userinfo errors', async () => {
      getAccessTokenFromAuthorizationCodeFlowSpy.mockResolvedValueOnce({
        token: 'any token'
      });
      userinfoSpy.mockResolvedValueOnce(Promise.reject('any error'));

      const res = await fastify.inject({
        method: 'GET',
        url: '/auth/auth0/callback?state=valid'
      });

      expect(res.headers.location).toMatch('/signin');
      expect(res.statusCode).toBe(302);
      expect(await fastify.prisma.user.count()).toBe(0);
    });

    it('handles invalid userinfo responses', async () => {
      getAccessTokenFromAuthorizationCodeFlowSpy.mockResolvedValueOnce({
        token: 'any token'
      });
      userinfoSpy.mockResolvedValueOnce(Promise.resolve({}));

      const res = await fastify.inject({
        method: 'GET',
        url: '/auth/auth0/callback?state=valid'
      });

      expect(res.headers.location).toMatch('/signin');
      expect(res.statusCode).toBe(302);
      expect(await fastify.prisma.user.count()).toBe(0);
    });

    it('redirects the signin-success message on success', async () => {
      mockAuthSuccess();

      const res = await fastify.inject({
        method: 'GET',
        url: '/auth/auth0/callback?state=valid'
      });

      expect(res.headers.location).toMatch(
        `?${formatMessage({ type: 'success', content: 'flash.signin-success' })}`
      );
      expect(res.statusCode).toBe(302);
    });

    it('should set the jwt_access_token cookie', async () => {
      mockAuthSuccess();

      const res = await fastify.inject({
        method: 'GET',
        url: '/auth/auth0/callback?state=valid'
      });

      expect(res.headers['set-cookie']).toEqual(
        expect.stringMatching(/jwt_access_token=/)
      );
    });

    // TODO: Test redirection for i18n clients. The must be a nice way to do
    // this without duplicating all the tests.
  });
});
