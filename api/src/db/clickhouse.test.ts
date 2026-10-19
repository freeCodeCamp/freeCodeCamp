import Fastify from 'fastify';
import { afterEach, describe, expect, test, vi } from 'vitest';

const { clickhouse, createClient, count } = vi.hoisted(() => ({
  clickhouse: {
    close: vi.fn(),
    ping: vi.fn()
  },
  createClient: vi.fn(),
  count: vi.fn()
}));

vi.mock('@clickhouse/client', () => ({ createClient }));
vi.mock('@sentry/node', () => ({ metrics: { count } }));

import clickhousePlugin from './clickhouse.js';

describe('clickhousePlugin', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test('decorates Fastify and closes the client', async () => {
    createClient.mockReturnValue(clickhouse);
    clickhouse.ping.mockResolvedValue({ success: true });
    const fastify = Fastify();

    await fastify.register(clickhousePlugin);

    expect(fastify.clickhouse).toBe(clickhouse);
    expect(clickhouse.ping).toHaveBeenCalledWith({ select: true });

    await fastify.close();
    expect(clickhouse.close).toHaveBeenCalledOnce();
  });

  test('does not prevent startup when the connection fails', async () => {
    const error = new Error('ClickHouse unavailable');
    createClient.mockReturnValue(clickhouse);
    clickhouse.ping.mockRejectedValue(error);
    const fastify = Fastify();
    const logError = vi.spyOn(fastify.log, 'error');

    await expect(fastify.register(clickhousePlugin)).resolves.toBe(fastify);

    expect(count).toHaveBeenCalledWith('clickhouse.connect_failed', 1);
    expect(logError).toHaveBeenCalledWith(
      error,
      'ClickHouse connection failed'
    );

    await fastify.close();
  });
});
