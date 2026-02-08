import { describe, test, expect, beforeEach, vi } from 'vitest';
import Fastify, { type FastifyInstance } from 'fastify';

import { COOKIE_DOMAIN } from '../utils/env.js';
import cookies from './cookies.js';
import csrf, { CSRF_COOKIE, CSRF_SECRET_COOKIE } from './csrf.js';

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
    const newCookies = response.cookies;
    const csrfTokenCookie = newCookies.find(
      cookie => cookie.name === CSRF_COOKIE
    );

    const { value, ...rest } = csrfTokenCookie!;

    // The value is a random string - it's enough to check that it's not empty
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
    // The response body is determined by the error-handling plugin, so we don't
    // check it here.
  });

  test('should return 403 if the csrf_token is invalid', async () => {
    const response = await fastify.inject({
      method: 'GET',
      url: '/',
      cookies: {
        _csrf: 'foo',
        csrf_token: 'bar'
      }
    });
    expect(response.statusCode).toEqual(403);
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

    const res = await fastify.inject({
      method: 'GET',
      url: '/',
      cookies: {
        _csrf: csrfSecretCookie!.value
      },
      headers: {
        'csrf-token': csrfTokenCookie!.value
      }
    });

    expect(res.json()).toEqual({ foo: 'bar' });
    expect(res.statusCode).toEqual(200);
  });

  test('should sign the _csrf secret cookie but not the csrf_token cookie', async () => {
    const response = await fastify.inject({
      method: 'GET',
      url: '/'
    });

    const csrfTokenCookie = response.cookies.find(
      cookie => cookie.name === CSRF_COOKIE
    );
    const csrfSecretCookie = response.cookies.find(
      cookie => cookie.name === CSRF_SECRET_COOKIE
    );

    expect(csrfSecretCookie!.value).toMatch(/^s:/);
    expect(csrfTokenCookie!.value).not.toMatch(/^s:/);
  });
});
