import Fastify, { FastifyInstance } from 'fastify';
import jwt from 'jsonwebtoken';

import { COOKIE_DOMAIN, HOME_LOCATION, JWT_SECRET } from '../utils/env';
import { createAccessToken } from '../utils/tokens';
import cookies, { sign as signCookie } from './cookies';
import codeFlowAuth from './code-flow-auth';

describe('auth', () => {
  let fastify: FastifyInstance;

  beforeEach(async () => {
    fastify = Fastify();
    await fastify.register(cookies);
    await fastify.register(codeFlowAuth);
  });

  afterEach(async () => {
    await fastify.close();
  });

  describe('setAccessTokenCookie', () => {
    // We won't need to keep doubly signing the cookie when we migrate the
    // authentication, but for the MVP we have to be able to read the cookies
    // set by the api-server. So, double signing:
    it('should doubly sign the cookie', async () => {
      const token = createAccessToken('test-id');
      fastify.get('/test', async (req, reply) => {
        reply.setAccessTokenCookie(token);
        return { ok: true };
      });

      const singlySignedToken = jwt.sign({ accessToken: token }, JWT_SECRET);
      const doublySignedToken = signCookie(singlySignedToken);

      const res = await fastify.inject({
        method: 'GET',
        url: '/test'
      });

      expect(res.cookies[0]).toEqual(
        expect.objectContaining({
          name: 'jwt_access_token',
          value: doublySignedToken,
          path: '/',
          sameSite: 'Lax',
          domain: COOKIE_DOMAIN,
          maxAge: 77760000000
        })
      );
    });
  });

  describe('authorize', () => {
    beforeEach(() => {
      fastify.addHook('onRequest', fastify.authorize);
      fastify.get('/test', () => {
        return { message: 'ok' };
      });
    });

    it('should reject if the access token is missing', async () => {
      const res = await fastify.inject({
        method: 'GET',
        url: '/test'
      });

      expect(res.json()).toEqual({
        type: 'info',
        message: 'Access token is required for this request'
      });
      expect(res.statusCode).toBe(401);
    });

    it('should reject if the access token is not signed', async () => {
      const token = jwt.sign(
        { accessToken: createAccessToken('123') },
        JWT_SECRET
      );
      const res = await fastify.inject({
        method: 'GET',
        url: '/test',
        cookies: {
          jwt_access_token: token
        }
      });

      expect(res.json()).toEqual({
        type: 'info',
        message: 'Access token is required for this request'
      });
      expect(res.statusCode).toBe(401);
    });

    it('should reject if the access token is invalid', async () => {
      const token = jwt.sign(
        { accessToken: createAccessToken('123') },
        'invalid-secret'
      );

      const res = await fastify.inject({
        method: 'GET',
        url: '/test',
        cookies: {
          jwt_access_token: signCookie(token)
        }
      });

      expect(res.json()).toEqual({
        type: 'info',
        message: 'Your access token is invalid'
      });
      expect(res.statusCode).toBe(401);
    });

    it('should reject if the access token has expired', async () => {
      const token = jwt.sign(
        { accessToken: createAccessToken('123', -1) },
        JWT_SECRET
      );

      const res = await fastify.inject({
        method: 'GET',
        url: '/test',
        cookies: {
          jwt_access_token: signCookie(token)
        }
      });

      expect(res.json()).toEqual({
        type: 'info',
        message: 'Access token is no longer valid'
      });
      expect(res.statusCode).toBe(401);
    });

    it.todo('should reject if the user is not found');

    it('should populate the request with the user if the token is valid', async () => {
      const fakeUser = { id: '123', username: 'test-user' };
      // @ts-expect-error prisma isn't defined, since we're not building the
      // full application here.
      fastify.prisma = { user: { findUnique: () => fakeUser } };

      fastify.get('/test-user', req => {
        return { user: req.user };
      });
      const token = jwt.sign(
        { accessToken: createAccessToken('123') },
        JWT_SECRET
      );

      const res = await fastify.inject({
        method: 'GET',
        url: '/test-user',
        cookies: {
          jwt_access_token: signCookie(token)
        }
      });
      expect(res.json()).toEqual({ user: fakeUser });
    });
  });

  // NOTE: fastify.inject handles all the mocking, but we need a way to access
  // the system under test. Reply.redirect is just there so that we can assert
  // what getValidReferrer returns.
  describe('getValidReferrer', () => {
    const fCCDotOrg = 'https://www.freecodecamp.org';
    beforeEach(() => {
      fastify.get('/test', async (req, reply) => {
        void reply.redirect(req.getValidReferrer());
      });
    });

    it('should use HOME_LOCATION as the default origin', async () => {
      const res = await fastify.inject({
        method: 'GET',
        url: '/test',
        headers: {
          referer: 'https://an.n.random.origin'
        }
      });

      expect(res.headers.location).toBe(HOME_LOCATION);
    });

    it('should use the referer as the origin if it is a valid origin', async () => {
      const res = await fastify.inject({
        method: 'GET',
        url: '/test',
        headers: {
          referer: fCCDotOrg
        }
      });

      expect(res.headers.location).toBe(fCCDotOrg);
    });

    it('should ignore everything after the origin', async () => {
      const res = await fastify.inject({
        method: 'GET',
        url: '/test',
        headers: {
          referer: fCCDotOrg + '/stuff/?and=things'
        }
      });

      expect(res.headers.location).toBe(fCCDotOrg);
    });

    it('should default to HOME_LOCATION if the referer is gibberish', async () => {
      const res = await fastify.inject({
        method: 'GET',
        url: '/test',
        headers: {
          referer: 'gibberish'
        }
      });

      expect(res.headers.location).toBe(HOME_LOCATION);
    });

    it('should log a warning if the referer is invalid', async () => {
      const warnSpy = jest.spyOn(fastify.log, 'warn');
      const fakeFCCDotOrg = 'https://www.freecodecampp.org';
      const res = await fastify.inject({
        method: 'GET',
        url: '/test',
        headers: {
          referer: fakeFCCDotOrg
        }
      });

      expect(res.headers.location).toBe(HOME_LOCATION);
      expect(warnSpy).toHaveBeenCalledWith('Invalid referer: ' + fakeFCCDotOrg);
    });
  });
});
