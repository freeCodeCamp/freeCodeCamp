const COOKIE_DOMAIN = 'test.com';
import Fastify, { FastifyInstance } from 'fastify';

import { createUserInput } from '../utils/create-user';
import { AUTH0_DOMAIN, HOME_LOCATION } from '../utils/env';
import prismaPlugin from '../db/prisma';
import cookies, { sign, unsign } from './cookies';
import { auth0Client } from './auth0';
import redirectWithMessage, { formatMessage } from './redirect-with-message';
import auth from './auth';
import bouncer from './bouncer';
import { newUser } from './__fixtures__/user';

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
    await fastify.register(auth);
    await fastify.register(bouncer);
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
      // @ts-expect-error - Only mocks part of the Sentry object.
      fastify.Sentry = { captureException: () => '' };
    });

    afterEach(async () => {
      jest.restoreAllMocks();
      await fastify.prisma.user.deleteMany({ where: { email } });
    });

    it('should redirect to the client if authentication fails', async () => {
      getAccessTokenFromAuthorizationCodeFlowSpy.mockRejectedValueOnce(
        'any error'
      );

      const res = await fastify.inject({
        method: 'GET',
        url: '/auth/auth0/callback'
      });

      expect(res.headers.location).toMatch(
        `${HOME_LOCATION}/learn?${formatMessage({ type: 'danger', content: 'flash.generic-error' })}`
      );
      expect(res.statusCode).toBe(302);
    });

    it('should redirect to the client if the state is invalid', async () => {
      const res = await fastify.inject({
        method: 'GET',
        url: '/auth/auth0/callback?state=invalid'
      });

      expect(res.headers.location).toMatch(
        `${HOME_LOCATION}/learn?${formatMessage({ type: 'danger', content: 'flash.generic-error' })}`
      );
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
      userinfoSpy.mockResolvedValueOnce(Promise.reject(Error('any error')));

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

    it('redirects with the signin-success message on success', async () => {
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

    it('should use the login-returnto cookie if present and valid', async () => {
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

    it('should redirect home if the login-returnto cookie is invalid', async () => {
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

    it('should redirect to email-sign-up if the user has not acceptedPrivacyTerms', async () => {
      mockAuthSuccess();
      // Using an italian path to make sure redirection works.
      const italianReturnTo = 'https://www.freecodecamp.org/italian/settings';

      const res = await fastify.inject({
        method: 'GET',
        url: '/auth/auth0/callback?state=valid',
        cookies: {
          'login-returnto': sign(italianReturnTo)
        }
      });

      expect(res.headers.location).toEqual(
        expect.stringContaining(
          'https://www.freecodecamp.org/italian/email-sign-up?'
        )
      );
    });

    it('should populate the user with the correct data', async () => {
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
