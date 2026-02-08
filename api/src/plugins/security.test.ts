import { describe, test, expect, beforeEach, vi } from 'vitest';
import Fastify, { type FastifyInstance } from 'fastify';

let mockNodeEnv = 'production';
vi.mock('../utils/env', async importOriginal => {
  const actual = await importOriginal<typeof import('../utils/env.js')>();
  return {
    ...actual,
    get FREECODECAMP_NODE_ENV() {
      return mockNodeEnv;
    }
  };
});

async function setupServer() {
  const { default: security } = await import('./security.js');
  const fastify = Fastify();
  await fastify.register(security);

  fastify.get('/', (_req, reply) => {
    void reply.send({ hello: 'world' });
  });
  return fastify;
}

describe('security headers', () => {
  let fastify: FastifyInstance;

  beforeEach(async () => {
    mockNodeEnv = 'production';
    fastify = await setupServer();
  });

  test('should set Cache-Control header', async () => {
    const response = await fastify.inject({ method: 'GET', url: '/' });
    expect(response.headers['cache-control']).toBe('no-store');
  });

  test('should set Content-Security-Policy header', async () => {
    const response = await fastify.inject({ method: 'GET', url: '/' });
    expect(response.headers['content-security-policy']).toBe(
      "frame-ancestors 'none'"
    );
  });

  test('should set X-Content-Type-Options header', async () => {
    const response = await fastify.inject({ method: 'GET', url: '/' });
    expect(response.headers['x-content-type-options']).toBe('nosniff');
  });

  test('should set X-Frame-Options header', async () => {
    const response = await fastify.inject({ method: 'GET', url: '/' });
    expect(response.headers['x-frame-options']).toBe('DENY');
  });

  test('should set Strict-Transport-Security header in production', async () => {
    const response = await fastify.inject({ method: 'GET', url: '/' });
    expect(response.headers['strict-transport-security']).toBe(
      'max-age=63072000; includeSubDomains; preload'
    );
  });

  test('should not set Strict-Transport-Security header in development', async () => {
    mockNodeEnv = 'development';
    fastify = await setupServer();
    const response = await fastify.inject({ method: 'GET', url: '/' });
    expect(response.headers['strict-transport-security']).toBeUndefined();
  });
});
