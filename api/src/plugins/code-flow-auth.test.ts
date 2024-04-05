import Fastify, { FastifyInstance } from 'fastify';
import jwt from 'jsonwebtoken';

import { COOKIE_DOMAIN, JWT_SECRET } from '../utils/env';
import { AccessToken, createAccessToken } from '../utils/tokens';
import cookies, { sign as signCookie, unsign as unsignCookie } from './cookies';
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

      const res = await fastify.inject({
        method: 'GET',
        url: '/test'
      });

      const { value, ...rest } = res.cookies[0]!;
      const unsignedOnce = unsignCookie(value);
      const unsignedTwice = jwt.verify(unsignedOnce.value!, JWT_SECRET) as {
        accessToken: AccessToken;
      };
      expect(unsignedTwice.accessToken).toEqual(token);
      expect(rest).toEqual({
        name: 'jwt_access_token',
        path: '/',
        sameSite: 'Lax',
        domain: COOKIE_DOMAIN,
        maxAge: token.ttl
      });
    });

    // TODO: Post-MVP sync the cookie max-age with the token ttl (i.e. the
    // max-age should be the ttl/1000, not ttl)
    it('should set the max-age of the cookie to match the ttl of the token', async () => {
      const token = createAccessToken('test-id', 123000);
      fastify.get('/test', async (req, reply) => {
        reply.setAccessTokenCookie(token);
        return { ok: true };
      });

      const res = await fastify.inject({
        method: 'GET',
        url: '/test'
      });

      expect(res.cookies[0]).toEqual(
        expect.objectContaining({
          maxAge: 123000
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

    it('should reject if the user is not found', async () => {
      // @ts-expect-error prisma isn't defined, since we're not building the
      // full application here.
      fastify.prisma = { user: { findUnique: () => null } };
      const token = jwt.sign(
        { accessToken: createAccessToken('123') },
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
        message: 'Your access token is invalid'
      });
    });

    it('should populate the request with the user if the token is valid', async () => {
      const fakeUser = { id: '123', username: 'test-user' };
      // @ts-expect-error prisma isn't defined, since we're not building the
      // full application here.
      fastify.prisma = { user: { findUnique: () => fakeUser } };
      fastify.get('/test-user', req => {
        expect(req.user).toEqual(fakeUser);
        return { ok: true };
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

      expect(res.json()).toEqual({ ok: true });
    });
  });
});
