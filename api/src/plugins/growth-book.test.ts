import { describe, test, expect, beforeAll, afterAll, vi } from 'vitest';
import Fastify, { type FastifyInstance } from 'fastify';
import growthBook from './growth-book.js';

const captureException = vi.fn();
const count = vi.fn();

describe('growth-book', () => {
  let fastify: FastifyInstance;
  beforeAll(() => {
    fastify = Fastify();
    // @ts-expect-error we're mocking the Sentry plugin
    fastify.Sentry = { captureException, metrics: { count } };
  });

  afterAll(async () => {
    await fastify.close();
  });

  test('should log and capture the error if the GrowthBook initialization fails', async () => {
    const spy = vi.spyOn(fastify.log, 'error');

    await fastify.register(growthBook, {
      apiHost: 'invalid-url',
      clientKey: 'invalid-key'
    });

    expect(spy).toHaveBeenCalled();
    expect(captureException).toHaveBeenCalled();
    expect(count).toHaveBeenCalledWith('growthbook.init_failed', 1);
  });
});
