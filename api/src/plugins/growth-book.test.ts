import Fastify, { type FastifyInstance } from 'fastify';
import growthBook from './growth-book';

const captureException = jest.fn();

describe('growth-book', () => {
  let fastify: FastifyInstance;
  beforeAll(() => {
    fastify = Fastify();
    // @ts-expect-error we're mocking the Sentry plugin
    fastify.Sentry = { captureException };
  });

  afterAll(async () => {
    await fastify.close();
  });

  it('should log the error if the GrowthBook initialization fails', async () => {
    const spy = jest.spyOn(fastify.log, 'error');

    await fastify.register(growthBook, {
      apiHost: 'invalid-url',
      clientKey: 'invalid-key'
    });

    expect(spy).toHaveBeenCalledWith('Failed to initialize GrowthBook');
    expect(captureException).toHaveBeenCalled();
  });
});
