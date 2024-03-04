import { createSuperRequest, devLogin, setupServer } from '../../jest.utils';

describe('Rate Limiting', () => {
  let superGet: ReturnType<typeof createSuperRequest>;

  beforeAll(async () => {
    process.env.TESTING_RATE_LIMIT = 'true';
    const setCookies = await devLogin();
    superGet = createSuperRequest({ method: 'GET', setCookies });
  });

  setupServer();

  test('Should rate limit excessive requests', async () => {
    const route = '/status/ping';

    for (let i = 0; i < 50; i++) {
      // Not rate-limited yet
      const response = await superGet(route);
      expect(response.statusCode).not.toBe(429);
    }

    // Expect a 429 Too Many Requests response
    const rateLimitedResponse = await superGet(route);
    expect(rateLimitedResponse.statusCode).toBe(429);

    // log if limiting is enabled
    console.log(
      'Rate limiting is enabled:',
      process.env.TESTING_RATE_LIMIT === 'true'
    );
  });

  afterAll(() => {
    process.env.TESTING_RATE_LIMIT = 'false';
  });
});
