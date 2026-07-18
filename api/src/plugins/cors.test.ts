import {
  describe,
  test,
  expect,
  beforeAll,
  afterAll,
  afterEach,
  vi
} from 'vitest';
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

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('should only debug log for /status/* routes', async () => {
    const spies = NON_DEBUG_LOG_LEVELS.map(level =>
      vi.spyOn(fastify.log, level)
    );
    const debugSpy = vi.spyOn(fastify.log, 'debug');
    await fastify.inject({
      url: '/status/ping'
    });

    spies.forEach(spy => {
      expect(spy).not.toHaveBeenCalled();
    });
    expect(debugSpy).toHaveBeenCalled();
  });

  test('should debug log if the origin is undefined', async () => {
    const spies = NON_DEBUG_LOG_LEVELS.map(level =>
      vi.spyOn(fastify.log, level)
    );
    const debugSpy = vi.spyOn(fastify.log, 'debug');
    await fastify.inject({
      url: '/api/some-endpoint'
    });

    spies.forEach(spy => {
      expect(spy).not.toHaveBeenCalled();
    });
    expect(debugSpy).toHaveBeenCalled();
  });

  test('should warn on a request from a disallowed origin', async () => {
    const warnSpy = vi.spyOn(fastify.log, 'warn');
    await fastify.inject({
      url: '/api/some-endpoint',
      headers: { origin: 'https://disallowed.example.com' }
    });

    expect(warnSpy).toHaveBeenCalledWith(
      { origin: 'https://disallowed.example.com' },
      'Received request from disallowed origin'
    );
  });
});
