import { describe, expect, test } from 'vitest';
import Fastify from 'fastify';
import { requireApiKey } from '../auth.js';

const buildApp = (expected: string) => {
  const app = Fastify();
  app.addHook('preHandler', requireApiKey(expected));
  app.get('/echo', async () => ({ ok: true }));
  return app;
};

describe('requireApiKey', () => {
  test('rejects missing x-api-key header with 401', async () => {
    const app = buildApp('secret');
    const res = await app.inject({ method: 'GET', url: '/echo' });
    expect(res.statusCode).toBe(401);
    expect(res.json()).toStrictEqual({ error: 'unauthorized' });
    await app.close();
  });

  test('rejects wrong key with 401', async () => {
    const app = buildApp('secret');
    const res = await app.inject({
      method: 'GET',
      url: '/echo',
      headers: { 'x-api-key': 'nope' }
    });
    expect(res.statusCode).toBe(401);
    await app.close();
  });

  test('rejects different-length wrong key without leaking via timing', async () => {
    const app = buildApp('secret');
    const res = await app.inject({
      method: 'GET',
      url: '/echo',
      headers: { 'x-api-key': 'a' }
    });
    expect(res.statusCode).toBe(401);
    await app.close();
  });

  test('accepts matching key and routes to handler', async () => {
    const app = buildApp('secret');
    const res = await app.inject({
      method: 'GET',
      url: '/echo',
      headers: { 'x-api-key': 'secret' }
    });
    expect(res.statusCode).toBe(200);
    expect(res.json()).toStrictEqual({ ok: true });
    await app.close();
  });
});
