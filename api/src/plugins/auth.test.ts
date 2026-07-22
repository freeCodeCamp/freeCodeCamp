import { Writable } from 'stream';
import { describe, test, expect, beforeEach, afterEach, vi } from 'vitest';
import Fastify, { FastifyInstance } from 'fastify';
import { pino } from 'pino';
import jwt from 'jsonwebtoken';

import { COOKIE_DOMAIN, JWT_SECRET } from '../utils/env.js';
import { type Token, createAccessToken } from '../utils/tokens.js';
import { getLoggerOptions } from '../utils/logger.js';
import cookies, {
  sign as signCookie,
  unsign as unsignCookie
} from './cookies.js';
import auth from './auth.js';

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
    // We won't need to keep doubly signing the cookie when we migrate the
    // authentication, but for the MVP we have to be able to read the cookies
    // set by the api-server. So, double signing:
    test('should doubly sign the cookie', async () => {
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
        accessToken: Token;
      };
      expect(unsignedTwice.accessToken).toEqual(token);
      expect(rest).toEqual({
        name: 'jwt_access_token',
        path: '/',
        sameSite: 'Lax',
        domain: COOKIE_DOMAIN,
        maxAge: THIRTY_DAYS_IN_SECONDS,
        httpOnly: true,
        secure: true
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

    test('identifies the Sentry user by id only, never email', async () => {
      const setUser = vi.fn();
      // @ts-expect-error Sentry isn't decorated in this minimal test app.
      fastify.Sentry = { setUser };
      const fakeUser = {
        id: '123',
        username: 'test-user',
        email: 'foo@bar.com'
      };
      // @ts-expect-error prisma isn't built in this minimal test app.
      fastify.prisma = { user: { findUnique: () => fakeUser } };
      fastify.get('/test-pii', () => ({ ok: true }));

      const token = jwt.sign(
        { accessToken: createAccessToken('123') },
        JWT_SECRET
      );
      await fastify.inject({
        method: 'GET',
        url: '/test-pii',
        cookies: {
          jwt_access_token: signCookie(token)
        }
      });

      expect(setUser).toHaveBeenLastCalledWith({ id: '123' });
    });
  });

  describe('req.getAuthedUser', () => {
    test('returns message when access token is missing', async () => {
      fastify.get('/test', async req => {
        return req.getAuthedUser();
      });

      const res = await fastify.inject({
        method: 'GET',
        url: '/test'
      });

      expect(res.json()).toEqual({
        message: 'Access token is required for this request'
      });
    });

    test('returns message when access token is not signed', async () => {
      fastify.get('/test', async req => {
        return req.getAuthedUser();
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

      expect(res.json()).toEqual({
        message: 'Access token is required for this request'
      });
    });

    test('returns message when access token is invalid', async () => {
      fastify.get('/test', async req => {
        return req.getAuthedUser();
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

      expect(res.json()).toEqual({
        message: 'Your access token is invalid'
      });
    });

    test('returns message when access token has expired', async () => {
      fastify.get('/test', async req => {
        return req.getAuthedUser();
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

      expect(res.json()).toEqual({
        message: 'Access token is no longer valid'
      });
    });

    test('returns message when user is not found', async () => {
      // @ts-expect-error prisma isn't defined, since we're not building the
      // full application here.
      fastify.prisma = { user: { findUnique: () => null } };

      fastify.get('/test', async req => {
        return req.getAuthedUser();
      });

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
        message: 'Your access token is invalid'
      });
    });

    test('returns user when token is valid', async () => {
      const fakeUser = { id: '123', username: 'test-user' };
      // @ts-expect-error prisma isn't defined, since we're not building the
      // full application here.
      fastify.prisma = { user: { findUnique: () => fakeUser } };

      fastify.get('/test', async req => {
        return req.getAuthedUser();
      });

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
        user: fakeUser
      });
    });
  });

  describe('authorizeExamEnvironmentToken', () => {
    beforeEach(() => {
      fastify.get('/test', (_req, reply) => {
        void reply.send({ ok: true });
      });
      fastify.addHook('onRequest', fastify.authorizeExamEnvironmentToken);
    });

    test('captures an Error if the decoded payload is not an object', async () => {
      const captureException = vi.fn();
      // @ts-expect-error Sentry isn't decorated in this minimal test app.
      fastify.Sentry = { captureException };

      const token = jwt.sign('just-a-string-payload', JWT_SECRET);

      const res = await fastify.inject({
        method: 'GET',
        url: '/test',
        headers: { 'exam-environment-authorization-token': token }
      });

      expect(res.statusCode).toBe(500);
      expect(captureException).toHaveBeenCalledExactlyOnceWith(
        expect.objectContaining({
          message:
            'Unreachable: exam-environment token decoded payload is not an object'
        })
      );
    });

    test('does not capture an exception for expected token verification failures', async () => {
      const captureException = vi.fn();
      // @ts-expect-error Sentry isn't decorated in this minimal test app.
      fastify.Sentry = { captureException };

      const res = await fastify.inject({
        method: 'GET',
        url: '/test',
        headers: { 'exam-environment-authorization-token': 'invalid-token' }
      });

      expect(res.statusCode).toBe(403);
      expect(captureException).not.toHaveBeenCalled();
    });
  });

  describe('onRequest Hook', () => {
    test('should update the jwt_access_token to httpOnly and secure', async () => {
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
        httpOnly: true,
        secure: true,
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

  describe('request logging', () => {
    test('binds the userId onto logs for authed requests', async () => {
      const lines: string[] = [];
      const sink = new Writable({
        write(chunk: Buffer, _enc, cb) {
          lines.push(chunk.toString());
          cb();
        }
      });
      const app = Fastify({
        loggerInstance: pino(getLoggerOptions('info'), sink)
      });
      await app.register(cookies);
      await app.register(auth);
      const fakeUser = { id: 'user-42', username: 'test-user' };
      // @ts-expect-error prisma isn't built in this minimal test app.
      app.prisma = { user: { findUnique: () => fakeUser } };
      app.addHook('onRequest', app.authorize);
      app.get('/me', () => ({ ok: true }));

      const token = jwt.sign(
        { accessToken: createAccessToken('user-42') },
        JWT_SECRET
      );
      await app.inject({
        method: 'GET',
        url: '/me',
        cookies: {
          jwt_access_token: signCookie(token)
        }
      });
      await app.close();

      const completed = lines
        .map(line => JSON.parse(line) as Record<string, unknown>)
        .find(entry => entry.msg === 'request completed');
      expect(completed?.userId).toBe('user-42');
    });
  });

  describe('auth.access_denied metric', () => {
    let count: ReturnType<typeof vi.fn>;

    beforeEach(() => {
      count = vi.fn();
      // @ts-expect-error Sentry isn't decorated in this minimal test app.
      fastify.Sentry = { metrics: { count } };
      fastify.get('/user/session-user', (_req, reply) => {
        void reply.send({ ok: true });
      });
      fastify.get('/other', (_req, reply) => {
        void reply.send({ ok: true });
      });
      fastify.addHook('onRequest', fastify.authorize);
    });

    test('skips the metric for the anonymous session-user poll', async () => {
      await fastify.inject({ method: 'GET', url: '/user/session-user' });

      expect(count).not.toHaveBeenCalled();
    });

    test('still counts an invalid token on the session-user route', async () => {
      const token = jwt.sign(
        { accessToken: createAccessToken('123') },
        'invalid-secret'
      );

      await fastify.inject({
        method: 'GET',
        url: '/user/session-user',
        cookies: { jwt_access_token: signCookie(token) }
      });

      expect(count).toHaveBeenCalledExactlyOnceWith('auth.access_denied', 1, {
        attributes: { reason: 'Your access token is invalid' }
      });
    });

    test('still counts an expired token on the session-user route', async () => {
      const token = jwt.sign(
        { accessToken: createAccessToken('123', -1) },
        JWT_SECRET
      );

      await fastify.inject({
        method: 'GET',
        url: '/user/session-user',
        cookies: { jwt_access_token: signCookie(token) }
      });

      expect(count).toHaveBeenCalledExactlyOnceWith('auth.access_denied', 1, {
        attributes: { reason: 'Access token is no longer valid' }
      });
    });

    test('counts a missing token on other routes', async () => {
      await fastify.inject({ method: 'GET', url: '/other' });

      expect(count).toHaveBeenCalledExactlyOnceWith('auth.access_denied', 1, {
        attributes: { reason: 'Access token is required for this request' }
      });
    });
  });
});
