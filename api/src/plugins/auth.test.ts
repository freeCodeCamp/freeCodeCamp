import { describe, test, expect, beforeEach, afterEach } from 'vitest';
import Fastify, { FastifyInstance } from 'fastify';
import jwt from 'jsonwebtoken';

import { JWT_SECRET } from '../utils/env.js';
import {
  type Token,
  createAccessToken,
  createRefreshToken
} from '../utils/tokens.js';
import { deriveSigningKey } from '../utils/keys.js';
import cookies, {
  sign as signCookie,
  unsign as unsignCookie
} from './cookies.js';
import auth from './auth.js';

const ACCESS_KEY = deriveSigningKey(JWT_SECRET, 'fcc:access-token');
const REFRESH_KEY = deriveSigningKey(JWT_SECRET, 'fcc:refresh-token');

async function setupServer() {
  const fastify = Fastify();
  await fastify.register(cookies);
  await fastify.register(auth);
  return fastify;
}

const THIRTY_DAYS_IN_SECONDS = 2592000;

describe('auth', () => {
  let fastify: FastifyInstance;

  beforeEach(async () => {
    fastify = await setupServer();
  });

  afterEach(async () => {
    await fastify.close();
  });

  describe('setAccessTokenCookie', () => {
    test('should sign the access token with HKDF-derived key', async () => {
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
      const unsignedTwice = jwt.verify(unsignedOnce.value!, ACCESS_KEY) as {
        accessToken: Token;
      };
      expect(unsignedTwice.accessToken).toEqual(token);
      expect(rest).toMatchObject({
        name: 'jwt_access_token',
        path: '/',
        sameSite: 'Lax',
        maxAge: THIRTY_DAYS_IN_SECONDS
      });
    });
  });

  describe('setRefreshTokenCookie', () => {
    test('should sign the refresh token with HKDF-derived key', async () => {
      const token = createRefreshToken('test-id');
      fastify.get('/test', async (req, reply) => {
        reply.setRefreshTokenCookie(token);
        return { ok: true };
      });

      const res = await fastify.inject({
        method: 'GET',
        url: '/test'
      });

      const { value, ...rest } = res.cookies[0]!;
      const unsignedOnce = unsignCookie(value);
      const unsignedTwice = jwt.verify(unsignedOnce.value!, REFRESH_KEY) as {
        refreshToken: Token;
      };
      expect(unsignedTwice.refreshToken).toEqual(token);
      expect(rest).toMatchObject({
        name: 'jwt_refresh_token',
        path: '/',
        sameSite: 'Lax',
        maxAge: THIRTY_DAYS_IN_SECONDS
      });
    });
  });

  describe('authorize', () => {
    beforeEach(() => {
      fastify.get('/test', (_req, reply) => {
        void reply.send({ ok: true });
      });
      fastify.addHook('onRequest', fastify.authorize);
    });

    test('should deny if the access token is missing', async () => {
      expect.assertions(4);

      fastify.addHook('onRequest', (req, _reply, done) => {
        expect(req.accessDeniedMessage).toEqual({
          type: 'info',
          content: 'Access token is required for this request'
        });
        expect(req.user).toBeNull();
        done();
      });

      const res = await fastify.inject({
        method: 'GET',
        url: '/test'
      });

      expect(res.json()).toEqual({ ok: true });
      expect(res.statusCode).toEqual(200);
    });

    test('should deny if the access token is not signed', async () => {
      expect.assertions(4);

      fastify.addHook('onRequest', (req, _reply, done) => {
        expect(req.accessDeniedMessage).toEqual({
          type: 'info',
          content: 'Access token is required for this request'
        });
        expect(req.user).toBeNull();
        done();
      });

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

      expect(res.json()).toEqual({ ok: true });
      expect(res.statusCode).toEqual(200);
    });

    test('should deny if the access token is invalid', async () => {
      expect.assertions(4);

      fastify.addHook('onRequest', (req, _reply, done) => {
        expect(req.accessDeniedMessage).toEqual({
          type: 'info',
          content: 'Your access token is invalid'
        });
        expect(req.user).toBeNull();
        done();
      });

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

      expect(res.json()).toEqual({ ok: true });
      expect(res.statusCode).toEqual(200);
    });

    test('should deny if the access token has expired', async () => {
      expect.assertions(4);

      fastify.addHook('onRequest', (req, _reply, done) => {
        expect(req.accessDeniedMessage).toEqual({
          type: 'info',
          content: 'Access token is no longer valid'
        });
        expect(req.user).toBeNull();
        done();
      });

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

      expect(res.json()).toEqual({ ok: true });
      expect(res.statusCode).toEqual(200);
    });

    test('should deny if the user is not found', async () => {
      expect.assertions(4);

      fastify.addHook('onRequest', (req, _reply, done) => {
        expect(req.accessDeniedMessage).toEqual({
          type: 'info',
          content: 'Your access token is invalid'
        });
        expect(req.user).toBeNull();
        done();
      });

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

      expect(res.json()).toEqual({ ok: true });
      expect(res.statusCode).toEqual(200);
    });

    test('should populate the request with the user if the token is valid', async () => {
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
      expect(res.statusCode).toEqual(200);
    });

    test('should accept new-style access token signed with HKDF key', async () => {
      const fakeUser = { id: '456', username: 'new-style-user' };
      // @ts-expect-error prisma isn't defined, since we're not building the
      // full application here.
      fastify.prisma = { user: { findUnique: () => fakeUser } };
      fastify.get('/test-new', req => {
        expect(req.user).toEqual(fakeUser);
        return { ok: true };
      });

      const accessToken = createAccessToken('456');
      expect(accessToken.typ).toBe('access');

      const token = jwt.sign({ accessToken }, ACCESS_KEY);
      const res = await fastify.inject({
        method: 'GET',
        url: '/test-new',
        cookies: {
          jwt_access_token: signCookie(token)
        }
      });

      expect(res.json()).toEqual({ ok: true });
      expect(res.statusCode).toEqual(200);
    });

    test('should accept legacy tokens without typ field', async () => {
      const fakeUser = { id: '789', username: 'legacy-user' };
      // @ts-expect-error prisma isn't defined, since we're not building the
      // full application here.
      fastify.prisma = { user: { findUnique: () => fakeUser } };
      fastify.get('/test-legacy', req => {
        expect(req.user).toEqual(fakeUser);
        return { ok: true };
      });

      const legacyToken: Token = {
        userId: '789',
        id: 'legacy-id-abc',
        ttl: 77760000000,
        created: new Date().toISOString()
      };

      const token = jwt.sign({ accessToken: legacyToken }, JWT_SECRET);
      const res = await fastify.inject({
        method: 'GET',
        url: '/test-legacy',
        cookies: {
          jwt_access_token: signCookie(token)
        }
      });

      expect(res.json()).toEqual({ ok: true });
      expect(res.statusCode).toEqual(200);
    });

    test('should reject refresh token in access token cookie (HKDF-signed)', async () => {
      expect.assertions(4);

      fastify.addHook('onRequest', (req, _reply, done) => {
        expect(req.accessDeniedMessage).toEqual({
          type: 'info',
          content: 'Your access token is invalid'
        });
        expect(req.user).toBeNull();
        done();
      });

      const refreshToken = createRefreshToken('123');
      const token = jwt.sign({ accessToken: refreshToken }, ACCESS_KEY);

      const res = await fastify.inject({
        method: 'GET',
        url: '/test',
        cookies: {
          jwt_access_token: signCookie(token)
        }
      });

      expect(res.json()).toEqual({ ok: true });
      expect(res.statusCode).toEqual(200);
    });

    test('should reject refresh token in access token cookie (legacy-signed)', async () => {
      expect.assertions(4);

      fastify.addHook('onRequest', (req, _reply, done) => {
        expect(req.accessDeniedMessage).toEqual({
          type: 'info',
          content: 'Your access token is invalid'
        });
        expect(req.user).toBeNull();
        done();
      });

      const refreshToken = createRefreshToken('123');
      const token = jwt.sign({ accessToken: refreshToken }, JWT_SECRET);

      const res = await fastify.inject({
        method: 'GET',
        url: '/test',
        cookies: {
          jwt_access_token: signCookie(token)
        }
      });

      expect(res.json()).toEqual({ ok: true });
      expect(res.statusCode).toEqual(200);
    });
  });

  describe('onRequest Hook', () => {
    test('should update the jwt_access_token with 30-day maxAge', async () => {
      const rawValue = 'should-not-change';
      fastify.get('/test', (req, reply) => {
        reply.send({ ok: true });
      });

      const res = await fastify.inject({
        method: 'GET',
        url: '/test',
        cookies: {
          jwt_access_token: signCookie(rawValue)
        }
      });

      expect(res.cookies[0]).toMatchObject({
        value: signCookie(rawValue),
        maxAge: THIRTY_DAYS_IN_SECONDS
      });

      expect(res.json()).toStrictEqual({ ok: true });
      expect(res.statusCode).toBe(200);
    });

    test('should update the jwt_refresh_token with 30-day maxAge', async () => {
      const rawValue = 'refresh-should-not-change';
      fastify.get('/test', (req, reply) => {
        reply.send({ ok: true });
      });

      const res = await fastify.inject({
        method: 'GET',
        url: '/test',
        cookies: {
          jwt_refresh_token: signCookie(rawValue)
        }
      });

      expect(res.cookies[0]).toMatchObject({
        value: signCookie(rawValue),
        maxAge: THIRTY_DAYS_IN_SECONDS
      });

      expect(res.json()).toStrictEqual({ ok: true });
      expect(res.statusCode).toBe(200);
    });

    test('should do nothing if there is no jwt_access_token', async () => {
      fastify.get('/test', (req, reply) => {
        reply.send({ ok: true });
      });

      const res = await fastify.inject({
        method: 'GET',
        url: '/test'
      });

      expect(res.cookies).toHaveLength(0);
      expect(res.json()).toStrictEqual({ ok: true });
      expect(res.statusCode).toBe(200);
    });
  });
});
