import {
  describe,
  test,
  expect,
  beforeAll,
  afterAll,
  beforeEach,
  afterEach,
  vi,
  MockInstance
} from 'vitest';
import Fastify, { FastifyInstance } from 'fastify';

import { createUserInput } from '../utils/create-user.js';
import { AUTH0_DOMAIN, HOME_LOCATION } from '../utils/env.js';
import prismaPlugin from '../db/prisma.js';
import cookies, { sign, unsign } from './cookies.js';
import { auth0Client } from './auth0.js';
import redirectWithMessage, { formatMessage } from './redirect-with-message.js';
import auth from './auth.js';
import bouncer from './bouncer.js';
import { newUser } from './__fixtures__/user.js';

const COOKIE_DOMAIN = 'test.com';

vi.mock('../utils/env', async importOriginal => ({
  ...(await importOriginal<typeof import('../utils/env.js')>()),
  COOKIE_DOMAIN: 'test.com'
}));

describe('auth0 plugin', () => {
  let fastify: FastifyInstance;

  beforeAll(async () => {
    fastify = Fastify();

    await fastify.register(cookies);
    await fastify.register(redirectWithMessage);
    await fastify.register(auth);
    await fastify.register(bouncer);
    await fastify.register(auth0Client);
    await fastify.register(prismaPlugin);
  });

  describe('GET /signin/google', () => {
    test('should redirect directly to Google via Auth0 with connection param', async () => {
      const res = await fastify.inject({
        method: 'GET',
        url: '/signin/google'
      });
      const redirectUrl = new URL(res.headers.location!);
      expect(redirectUrl.host).toMatch(AUTH0_DOMAIN);
      expect(redirectUrl.pathname).toBe('/authorize');
      expect(redirectUrl.searchParams.get('connection')).toBe('google-oauth2');
      expect(res.statusCode).toBe(302);
    });

    test('sets a login-returnto cookie', async () => {
      const returnTo = 'http://localhost:3000/learn';
      const res = await fastify.inject({
        method: 'GET',
        url: '/signin/google',
        headers: { referer: returnTo }
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

  afterAll(async () => {
    await fastify.prisma.$runCommandRaw({ dropDatabase: 1 });
    await fastify.close();
  });

  describe('GET /signin', () => {
    test('should redirect to the auth0 login page', async () => {
      const res = await fastify.inject({
        method: 'GET',
        url: '/signin'
      });

      const redirectUrl = new URL(res.headers.location!);
      expect(redirectUrl.host).toMatch(AUTH0_DOMAIN);
      expect(redirectUrl.pathname).toBe('/authorize');
      expect(res.statusCode).toBe(302);
    });

    test('sets a login-returnto cookie', async () => {
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
    let getAccessTokenFromAuthorizationCodeFlowSpy: MockInstance;
    let userinfoSpy: MockInstance;

    const mockAuthSuccess = () => {
      getAccessTokenFromAuthorizationCodeFlowSpy.mockResolvedValueOnce({
        token: 'any token'
      });
      userinfoSpy.mockResolvedValueOnce(Promise.resolve({ email }));
    };

    beforeEach(() => {
      getAccessTokenFromAuthorizationCodeFlowSpy = vi.spyOn(
        fastify.auth0OAuth,
        'getAccessTokenFromAuthorizationCodeFlow'
      );
      userinfoSpy = vi.spyOn(fastify.auth0OAuth, 'userinfo');
      // @ts-expect-error - Only mocks part of the Sentry object.
      fastify.Sentry = { captureException: () => '' };
    });

    afterEach(async () => {
      vi.restoreAllMocks();
      await fastify.prisma.user.deleteMany({ where: { email } });
    });

    test('should redirect to the client if authentication fails', async () => {
      getAccessTokenFromAuthorizationCodeFlowSpy.mockRejectedValueOnce(
        'any error'
      );

      const res = await fastify.inject({
        method: 'GET',
        url: '/auth/auth0/callback'
      });

      expect(res.headers.location).toMatch(
        `${HOME_LOCATION}/?${formatMessage({ type: 'danger', content: 'flash.generic-error' })}`
      );
      expect(res.statusCode).toBe(302);
    });

    test('should redirect to the client if the state is invalid', async () => {
      const res = await fastify.inject({
        method: 'GET',
        url: '/auth/auth0/callback?state=invalid'
      });

      expect(res.headers.location).toMatch(
        `${HOME_LOCATION}/?${formatMessage({ type: 'danger', content: 'flash.generic-error' })}`
      );
      expect(res.statusCode).toBe(302);
    });

    test('should log an error if the state is invalid', async () => {
      vi.spyOn(fastify.log, 'error');
      const res = await fastify.inject({
        method: 'GET',
        url: '/auth/auth0/callback?state=invalid'
      });

      expect(fastify.log.error).toHaveBeenCalledWith(
        'Auth failed: invalid state'
      );
      expect(res.statusCode).toBe(302);
    });

    test('should log expected Auth0 errors', async () => {
      vi.spyOn(fastify.log, 'error');
      const auth0Error = Error('Response Error: 403 Forbidden');
      // @ts-expect-error - mocking a hapi/boom error
      auth0Error.data = {
        payload: {
          error: 'invalid_grant'
        }
      };

      getAccessTokenFromAuthorizationCodeFlowSpy.mockRejectedValueOnce(
        auth0Error
      );

      const res = await fastify.inject({
        method: 'GET',
        url: '/auth/auth0/callback?state=invalid'
      });

      expect(fastify.log.error).toHaveBeenCalledWith(
        auth0Error,
        'Auth failed: invalid_grant'
      );

      expect(res.statusCode).toBe(302);
    });

    test('should not create a user if the state is invalid', async () => {
      await fastify.inject({
        method: 'GET',
        url: '/auth/auth0/callback?state=invalid'
      });

      expect(await fastify.prisma.user.count()).toBe(0);
    });

    test('should block requests with "access_denied" error', async () => {
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

    test('creates a user if the state is valid', async () => {
      mockAuthSuccess();
      await fastify.inject({
        method: 'GET',
        url: '/auth/auth0/callback?state=valid'
      });

      expect(await fastify.prisma.user.count()).toBe(1);
    });

    test('handles userinfo errors', async () => {
      getAccessTokenFromAuthorizationCodeFlowSpy.mockResolvedValueOnce({
        token: 'any token'
      });
      userinfoSpy.mockResolvedValueOnce(Promise.reject(Error('any error')));
      const returnTo = 'https://www.freecodecamp.org/espanol/learn';

      const res = await fastify.inject({
        method: 'GET',
        url: '/auth/auth0/callback?state=valid',
        cookies: { 'login-returnto': sign(returnTo) }
      });

      expect(res.headers.location).toMatch(
        returnTo +
          `?${formatMessage({ type: 'danger', content: 'flash.generic-error' })}`
      );
      expect(res.statusCode).toBe(302);
      expect(await fastify.prisma.user.count()).toBe(0);
    });

    test('handles invalid userinfo responses', async () => {
      getAccessTokenFromAuthorizationCodeFlowSpy.mockResolvedValueOnce({
        token: 'any token'
      });
      userinfoSpy.mockResolvedValueOnce(Promise.resolve({}));
      const returnTo = 'https://www.freecodecamp.org/espanol/learn';

      const res = await fastify.inject({
        method: 'GET',
        url: '/auth/auth0/callback?state=valid',
        cookies: { 'login-returnto': sign(returnTo) }
      });

      expect(res.headers.location).toMatch(
        returnTo +
          `?${formatMessage({ type: 'danger', content: 'flash.no-email-in-userinfo' })}`
      );
      expect(res.statusCode).toBe(302);
      expect(await fastify.prisma.user.count()).toBe(0);
    });

    test('redirects with the signin-success message on success', async () => {
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

    test('should set the jwt_access_token cookie', async () => {
      mockAuthSuccess();

      const res = await fastify.inject({
        method: 'GET',
        url: '/auth/auth0/callback?state=valid'
      });

      expect(res.headers['set-cookie']).toEqual(
        expect.stringMatching(/jwt_access_token=/)
      );
    });

    test('should use the login-returnto cookie if present and valid', async () => {
      mockAuthSuccess();
      await fastify.prisma.user.create({
        data: { ...createUserInput(email), acceptedPrivacyTerms: true }
      });
      const returnTo = 'https://www.freecodecamp.org/espanol/learn';
      // /signin sets the cookie
      const req = await fastify.inject({
        method: 'GET',
        url: '/signin',
        headers: {
          referer: returnTo
        }
      });
      const returnToCookie = req.cookies.find(c => c.name === 'login-returnto');

      const res = await fastify.inject({
        method: 'GET',
        url: '/auth/auth0/callback?state=valid',
        cookies: { 'login-returnto': returnToCookie!.value }
      });

      expect(res.headers.location).toBe(
        `${returnTo}?${formatMessage({ type: 'success', content: 'flash.signin-success' })}`
      );
    });

    test('should redirect to learn if the user has signed in from the landing page', async () => {
      mockAuthSuccess();

      const returnTo = 'https://www.freecodecamp.org/';
      const res = await fastify.inject({
        method: 'GET',
        url: '/auth/auth0/callback?state=valid',
        cookies: {
          'login-returnto': sign(returnTo)
        }
      });

      expect(res.headers.location).toEqual(
        expect.stringContaining('https://www.freecodecamp.org/learn?')
      );
    });

    test('should redirect home if the login-returnto cookie is invalid', async () => {
      mockAuthSuccess();
      const returnTo = 'https://www.evilcodecamp.org/espanol/learn';
      // /signin sets the cookie
      const req = await fastify.inject({
        method: 'GET',
        url: '/signin',
        headers: {
          referer: returnTo
        }
      });
      const returnToCookie = req.cookies.find(c => c.name === 'login-returnto');

      const res = await fastify.inject({
        method: 'GET',
        url: '/auth/auth0/callback?state=valid',
        cookies: { 'login-returnto': returnToCookie!.value }
      });

      expect(res.headers.location).toMatch(HOME_LOCATION);
    });

    test('should populate the user with the correct data', async () => {
      mockAuthSuccess();

      await fastify.inject({
        method: 'GET',
        url: '/auth/auth0/callback?state=valid'
      });

      const user = await fastify.prisma.user.findFirstOrThrow({
        where: { email }
      });

      expect(user).toEqual(newUser(email));
      expect(user.username).toBe(user.usernameDisplay);
    });
  });
});
