import Fastify, { FastifyInstance, LogLevel } from 'fastify';
import cors from './cors';

const LOG_LEVELS: LogLevel[] = [
  'fatal',
  'error',
  'warn',
  'info',
  'debug',
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

  it('should not log for /status/* routes', async () => {
    const logger = fastify.log.child({ req: { url: '/status/ping' } });
    const spies = LOG_LEVELS.map(level => jest.spyOn(logger, level));
    await fastify.inject({
      url: '/status/ping'
    });

    spies.forEach(spy => {
      expect(spy).not.toHaveBeenCalled();
    });
  });

  it('should not log if the origin is undefined', async () => {
    const logger = fastify.log.child({ req: { url: '/api/some-endpoint' } });
    const spies = LOG_LEVELS.map(level => jest.spyOn(logger, level));
    await fastify.inject({
      url: '/api/some-endpoint'
    });

    spies.forEach(spy => {
      expect(spy).not.toHaveBeenCalled();
    });
  });
});
