import Fastify, { type FastifyInstance } from 'fastify';
import cors from './cors';

describe('cors', () => {
  let fastify: FastifyInstance;
  beforeAll(async () => {
    fastify = Fastify();
    await fastify.register(cors);
  });

  it('should not log for /status/* routes', async () => {
    const logger = fastify.log.child({ req: { url: '/status/ping' } });
    const spy = jest.spyOn(logger, 'debug');
    await fastify.inject({
      url: '/status/ping'
    });
    expect(spy).not.toHaveBeenCalled();
  });
});
