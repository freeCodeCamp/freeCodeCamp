import { describe, test, expect, beforeEach, afterEach, vi } from 'vitest';
import Fastify, { type FastifyInstance } from 'fastify';
import runtimeMetrics from './runtime-metrics.js';

const gauge = vi.fn();

describe('runtime-metrics', () => {
  let fastify: FastifyInstance;

  beforeEach(() => {
    vi.useFakeTimers();
    gauge.mockClear();
    fastify = Fastify();
    // @ts-expect-error we're mocking the Sentry plugin
    fastify.Sentry = { metrics: { gauge } };
  });

  afterEach(async () => {
    await fastify.close();
    vi.useRealTimers();
  });

  test('emits the memory rss gauge tagged with the byte unit', async () => {
    await fastify.register(runtimeMetrics);
    await vi.advanceTimersByTimeAsync(15_000);

    expect(gauge).toHaveBeenCalledWith(
      'runtime.memory_rss_bytes',
      expect.any(Number),
      { unit: 'byte' }
    );
  });

  test('emits the event loop delay gauge tagged with the millisecond unit', async () => {
    await fastify.register(runtimeMetrics);
    await vi.advanceTimersByTimeAsync(15_000);

    expect(gauge).toHaveBeenCalledWith(
      'runtime.event_loop_delay_p99_ms',
      expect.any(Number),
      { unit: 'millisecond' }
    );
  });
});
