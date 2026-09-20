import { describe, test, expect, vi } from 'vitest';
import { setupServer, superRequest } from '../../../vitest.utils.js';
import { DEPLOYMENT_VERSION } from '../../utils/env.js';

describe('/status', () => {
  setupServer();

  test('GET returns 200 status code with pong', async () => {
    const response = await superRequest('/status/ping', {
      method: 'GET'
    });

    expect(response.body).toStrictEqual({ msg: 'pong' });
    expect(response.status).toBe(200);
  });

  test('GET returns 200 status code with version', async () => {
    const response = await superRequest('/status/version', {
      method: 'GET'
    });

    expect(response.body).toStrictEqual({ version: DEPLOYMENT_VERSION });
    expect(response.status).toBe(200);
  });

  test('GET /status/ready returns 200 when the database is reachable', async () => {
    const response = await superRequest('/status/ready', { method: 'GET' });

    expect(response.body).toStrictEqual({ status: 'ready' });
    expect(response.status).toBe(200);
  });

  test('GET /status/ready returns 503 when the database is unreachable', async () => {
    const spy = vi
      .spyOn(fastifyTestInstance.prisma, '$runCommandRaw')
      .mockRejectedValueOnce(new Error('db down'));

    const response = await superRequest('/status/ready', { method: 'GET' });

    expect(response.body).toStrictEqual({ status: 'unavailable' });
    expect(response.status).toBe(503);

    spy.mockRestore();
  });

  test('counts a readiness.check_failed metric when the database is unreachable', async () => {
    const count = vi.fn();
    const originalSentry = fastifyTestInstance.Sentry;
    fastifyTestInstance.Sentry = {
      ...originalSentry,
      metrics: { ...originalSentry.metrics, count }
    };
    const dbSpy = vi
      .spyOn(fastifyTestInstance.prisma, '$runCommandRaw')
      .mockRejectedValueOnce(new Error('db down'));

    await superRequest('/status/ready', { method: 'GET' });

    expect(count).toHaveBeenCalledWith('readiness.check_failed', 1);

    dbSpy.mockRestore();
    fastifyTestInstance.Sentry = originalSentry;
  });
});
