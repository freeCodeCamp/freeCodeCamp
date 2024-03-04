import { createSuperRequest, devLogin } from '../../jest.utils';

describe('Rate Limiting', () => {
  let superPost: ReturnType<typeof createSuperRequest>;

  beforeEach(async () => {
    const setCookies = await devLogin();
    superPost = createSuperRequest({ method: 'GET', setCookies });
  });

  test('Should rate limit excessive requests', async () => {
    const route = '/status/ping';

    for (let i = 0; i < 5; i++) {
      // Not rate-limited yet
      const response = await superPost(route);
      expect(response.statusCode).not.toBe(429);
    }

    // Expect a 429 Too Many Requests response
    const rateLimitedResponse = await superPost(route);
    expect(rateLimitedResponse.statusCode).toBe(429);
  });
});
