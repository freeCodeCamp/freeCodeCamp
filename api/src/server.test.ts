/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import request from 'supertest';

describe('GET /', () => {
  test('have a 200 response', async () => {
    const res = await request(fastifyTestInstance?.server).get('/');
    expect(res?.statusCode).toBe(200);
  });

  test('return { "hello": "world"}', async () => {
    const res = await request(fastifyTestInstance?.server).get('/');
    expect(res?.body).toEqual({ hello: 'world' });
  });

  test('should have OWASP recommended headers', async () => {
    const res = await request(fastifyTestInstance?.server).get('/');
    // We also set Strict-Transport-Security, but only in production.
    expect(res?.headers).toMatchObject({
      'cache-control': 'no-store',
      'content-security-policy': "frame-ancestors 'none'",
      'content-type': 'application/json; charset=utf-8',
      'x-content-type-options': 'nosniff',
      'x-frame-options': 'DENY'
    });
  });
});
