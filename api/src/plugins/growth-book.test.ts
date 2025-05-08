import Fastify, { type FastifyInstance } from 'fastify';
import growthBook from './growth-book';

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
jest.mock('../utils/env', () => ({
  ...jest.requireActual('../utils/env'),
  // We're only interested in the production behaviour
  FREECODECAMP_NODE_ENV: 'production'
}));

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

    expect(spy).toHaveBeenCalled();
    expect(captureException).toHaveBeenCalled();
  });
});
