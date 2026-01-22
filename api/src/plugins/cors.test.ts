import { describe, test, expect, beforeAll, afterAll, vi } from 'vitest';
import Fastify, { FastifyInstance, LogLevel } from 'fastify';
import cors from './cors.js';

const NON_DEBUG_LOG_LEVELS: LogLevel[] = [
  'fatal',
  'error',
  'warn',
  'info',
  'trace'
];

describe('cors', () => {
  let fastify: FastifyInstance;
  beforeAll(async () => {
    fastify = Fastify({ disableRequestLogging: true });
    await fastify.register(cors);
  });

  afterAll(async () => {
    await fastify.close();
  });

  test('should only debug log for /status/* routes', async () => {
    const logger = fastify.log.child({ req: { url: '/status/ping' } });
    const spies = NON_DEBUG_LOG_LEVELS.map(level => vi.spyOn(logger, level));
    const debugSpy = vi.spyOn(logger, 'debug');
    await fastify.inject({
      url: '/status/ping'
    });

    spies.forEach(spy => {
      expect(spy).not.toHaveBeenCalled();
    });
    expect(debugSpy).toHaveBeenCalled();
  });

  test('should debug log if the origin is undefined', async () => {
    const logger = fastify.log.child({ req: { url: '/api/some-endpoint' } });
    const spies = NON_DEBUG_LOG_LEVELS.map(level => vi.spyOn(logger, level));
    const debugSpy = vi.spyOn(logger, 'debug');
    await fastify.inject({
      url: '/api/some-endpoint'
    });

    spies.forEach(spy => {
      expect(spy).not.toHaveBeenCalled();
    });
    expect(debugSpy).toHaveBeenCalled();
  });
});
