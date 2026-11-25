import Fastify from 'fastify';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import type { ClickHouseConfiguration } from '../utils/clickhouse-config.js';

const { clickhouse, createClient, count, configuration } = vi.hoisted(() => ({
  clickhouse: {
    close: vi.fn(),
    ping: vi.fn()
  },
  createClient: vi.fn(),
  count: vi.fn(),
  configuration: { current: undefined as ClickHouseConfiguration | undefined }
}));

vi.mock('@clickhouse/client', () => ({ createClient }));
vi.mock('@sentry/node', () => ({ metrics: { count } }));
vi.mock('../utils/env.js', () => ({
  get CLICKHOUSE_CONFIG() {
    return configuration.current;
  }
}));

import clickhousePlugin from './clickhouse.js';

describe('clickhousePlugin', () => {
  beforeEach(() => {
    configuration.current = {
      url: 'http://localhost:8123',
      username: 'default',
      password: '',
      database: 'test'
    };
  });
  afterEach(() => {
    vi.clearAllMocks();
  });

  test('decorates Fastify and closes the client', async () => {
    createClient.mockReturnValue(clickhouse);
    clickhouse.ping.mockResolvedValue({ success: true });
    const fastify = Fastify();

    await fastify.register(clickhousePlugin);

    expect(fastify.clickhouse).toBe(clickhouse);
    expect(createClient).toHaveBeenCalledWith({
      ...configuration.current,
      request_timeout: 5000,
      clickhouse_settings: {
        async_insert: 1,
        wait_for_async_insert: 1,
        async_insert_use_adaptive_busy_timeout: 0,
        async_insert_busy_timeout_ms: 100,
        date_time_input_format: 'best_effort'
      }
    });
    expect(clickhouse.ping).toHaveBeenCalledWith({
      select: true,
      abort_signal: expect.any(AbortSignal) as unknown
    });

    await fastify.close();
    expect(clickhouse.close).toHaveBeenCalledOnce();
  });

  test.each(['unconfigured', 'explicitly disabled'])(
    'does not create a client when %s',
    async mode => {
      if (mode === 'unconfigured') configuration.current = undefined;
      const fastify = Fastify();
      await fastify.register(
        clickhousePlugin,
        mode === 'explicitly disabled' ? { configuration: false } : {}
      );
      expect(fastify.hasDecorator('clickhouse')).toBe(false);
      expect(createClient).not.toHaveBeenCalled();
      expect(clickhouse.ping).not.toHaveBeenCalled();
      await fastify.close();
    }
  );

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
