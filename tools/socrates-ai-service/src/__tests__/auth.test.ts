import { describe, expect, test, vi } from 'vitest';
import Fastify from 'fastify';
import { requireApiKey } from '../auth.js';

const buildApp = (expected: string, handler = vi.fn(async () => ({ ok: true }))) => {
  const app = Fastify();
  app.addHook('preHandler', requireApiKey(expected));
  app.get('/echo', handler);
  return { app, handler };
};

describe('requireApiKey', () => {
  test('rejects missing x-api-key header with 401 and never invokes the handler', async () => {
    const { app, handler } = buildApp('secret');
    const res = await app.inject({ method: 'GET', url: '/echo' });
    expect(res.statusCode).toBe(401);
    expect(res.json()).toStrictEqual({ error: 'unauthorized' });
    expect(handler).not.toHaveBeenCalled();
    await app.close();
  });

  test('rejects same-length wrong key with 401 (constant-time path)', async () => {
    const { app, handler } = buildApp('secret');
    const res = await app.inject({
      method: 'GET',
      url: '/echo',
      headers: { 'x-api-key': 'wrong!' }
    });
    expect(res.statusCode).toBe(401);
    expect(res.json()).toStrictEqual({ error: 'unauthorized' });
    expect(handler).not.toHaveBeenCalled();
    await app.close();
  });

  test('rejects different-length wrong key with 401 (length-mismatch short-circuit)', async () => {
    const { app, handler } = buildApp('secret');
    const res = await app.inject({
      method: 'GET',
      url: '/echo',
      headers: { 'x-api-key': 'a' }
    });
    expect(res.statusCode).toBe(401);
    expect(handler).not.toHaveBeenCalled();
    await app.close();
  });

  test('accepts matching key and routes to handler', async () => {
    const { app, handler } = buildApp('secret');
    const res = await app.inject({
      method: 'GET',
      url: '/echo',
      headers: { 'x-api-key': 'secret' }
    });
    expect(res.statusCode).toBe(200);
    expect(res.json()).toStrictEqual({ ok: true });
    expect(handler).toHaveBeenCalledTimes(1);
    await app.close();
  });

  test('rejects multi-value x-api-key — comma-joined or array — fail-closed', async () => {
    const { app } = buildApp('secret');
    const joined = await app.inject({
      method: 'GET',
      url: '/echo',
      headers: { 'x-api-key': ['secret', 'decoy'] }
    });
    expect(joined.statusCode).toBe(401);

    const empty = await app.inject({
      method: 'GET',
      url: '/echo',
      headers: { 'x-api-key': ['', 'secret'] }
    });
    expect(empty.statusCode).toBe(401);
    await app.close();
  });
});
