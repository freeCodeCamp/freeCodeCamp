import { describe, test, expect, beforeEach, afterEach, vi } from 'vitest';
import Fastify, { type FastifyInstance } from 'fastify';

vi.mock('../utils/env', async importOriginal => {
  const actual = await importOriginal<typeof import('../utils/env.js')>();
  return {
    ...actual,
    TPA_API_BEARER_TOKEN: 'test-api-secret-key'
  };
});

import serviceBearerAuth from './service-bearer-auth.js';

describe('service-bearer-auth plugin', () => {
  let fastify: FastifyInstance;

  beforeEach(async () => {
    fastify = Fastify();
    await fastify.register(serviceBearerAuth);
    fastify.addHook('onRequest', fastify.validateBearerToken);
    fastify.get('/test', (_req, reply) => {
      void reply.send({ ok: true });
    });
  });

  afterEach(async () => {
    await fastify.close();
  });

  test('should allow request with valid bearer token', async () => {
    const res = await fastify.inject({
      method: 'GET',
      url: '/test',
      headers: {
        authorization: 'Bearer test-api-secret-key'
      }
    });

    expect(res.statusCode).toEqual(200);
    expect(res.json()).toEqual({ ok: true });
  });

  test('should return 401 when authorization header is missing', async () => {
    const res = await fastify.inject({
      method: 'GET',
      url: '/test'
    });

    expect(res.statusCode).toEqual(401);
    expect(res.json()).toEqual({ error: 'Bearer token is required' });
  });

  test('should return 401 when authorization header has no Bearer prefix', async () => {
    const res = await fastify.inject({
      method: 'GET',
      url: '/test',
      headers: {
        authorization: 'test-api-secret-key'
      }
    });

    expect(res.statusCode).toEqual(401);
    expect(res.json()).toEqual({ error: 'Bearer token is required' });
  });

  test('should return 401 when bearer token is empty', async () => {
    const res = await fastify.inject({
      method: 'GET',
      url: '/test',
      headers: {
        authorization: 'Bearer '
      }
    });

    expect(res.statusCode).toEqual(401);
    expect(res.json()).toEqual({ error: 'Invalid bearer token' });
  });

  test('should return 401 when bearer token is wrong', async () => {
    const res = await fastify.inject({
      method: 'GET',
      url: '/test',
      headers: {
        authorization: 'Bearer wrong-key'
      }
    });

    expect(res.statusCode).toEqual(401);
    expect(res.json()).toEqual({ error: 'Invalid bearer token' });
  });
});
