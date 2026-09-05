import { describe, test, expect, beforeEach, vi } from 'vitest';
import Fastify, { type FastifyInstance } from 'fastify';

import { COOKIE_DOMAIN } from '../utils/env.js';
import cookies from './cookies.js';
import csrf, { CSRF_COOKIE, CSRF_SECRET_COOKIE, CSRF_HEADER } from './csrf.js';

vi.mock('../utils/env', async importOriginal => {
  const actual = await importOriginal<typeof import('../utils/env.js')>();
  return {
    ...actual,
    COOKIE_DOMAIN: 'www.example.com',
    FREECODECAMP_NODE_ENV: 'production'
  };
});

async function setupServer() {
  const fastify = Fastify({ logger: true, disableRequestLogging: true });
  await fastify.register(cookies);
  await fastify.register(csrf);
  // eslint-disable-next-line @typescript-eslint/unbound-method
  fastify.addHook('onRequest', fastify.csrfProtection);

  fastify.get('/', (_req, reply) => {
    void reply.send({ foo: 'bar' });
  });

  // Mock signout route for the exemption test
  fastify.get('/signout', (_req, reply) => {
    void reply.send({ ok: true });
  });

  return fastify;
}

describe('CSRF protection', () => {
  let fastify: FastifyInstance;
  beforeEach(async () => {
    fastify = await setupServer();
  });

  test('should receive a new CSRF token with the expected properties', async () => {
    const response = await fastify.inject({
      method: 'GET',
      url: '/'
    });

    // onRequest generates the token even if the unauthenticated request returns 403
    expect(response.statusCode).toEqual(403);

    const csrfTokenCookie = response.cookies.find(
      cookie => cookie.name === CSRF_COOKIE
    );

    expect(csrfTokenCookie).toBeDefined();
    const { value, ...rest } = csrfTokenCookie!;

    expect(value).toHaveLength(52);
    expect(rest).toStrictEqual({
      name: CSRF_COOKIE,
      path: '/',
      sameSite: 'Strict',
      domain: COOKIE_DOMAIN,
      secure: true
    });
  });

  test('should return 403 if the _csrf secret is missing', async () => {
    const response = await fastify.inject({
      method: 'GET',
      url: '/'
    });

    expect(response.statusCode).toEqual(403);
  });

  test('should return 403 if the csrf_token is invalid', async () => {
    const response = await fastify.inject({
      method: 'GET',
      url: '/',
      cookies: {
        _csrf: 'foo'
      },
      headers: {
        [CSRF_HEADER]: 'invalid-token-signature'
      }
    });

    expect(response.statusCode).toEqual(403);
  });

  test('should not set CSRF cookie on /signout even with query parameters', async () => {
    const response = await fastify.inject({
      method: 'GET',
      url: '/signout?redirect=true'
    });

    const csrfTokenCookie = response.cookies.find(
      cookie => cookie.name === CSRF_COOKIE
    );

    expect(csrfTokenCookie).toBeUndefined();
  });

  test('should allow the request if the csrf_token is valid', async () => {
    const csrfResponse = await fastify.inject({
      method: 'GET',
      url: '/'
    });

    const csrfTokenCookie = csrfResponse.cookies.find(
      cookie => cookie.name === CSRF_COOKIE
    );
    const csrfSecretCookie = csrfResponse.cookies.find(
      cookie => cookie.name === CSRF_SECRET_COOKIE
    );

    expect(csrfTokenCookie).toBeDefined();
    expect(csrfSecretCookie).toBeDefined();

    const res = await fastify.inject({
      method: 'GET',
      url: '/',
      cookies: {
        _csrf: csrfSecretCookie!.value
      },
      headers: {
        [CSRF_HEADER]: csrfTokenCookie!.value
      }
    });

    expect(res.json()).toEqual({ foo: 'bar' });
    expect(res.statusCode).toEqual(200);
  });
});
