import { setupServer, superGet } from '../jest.utils';

jest.mock('./utils/env', () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return {
    ...jest.requireActual('./utils/env'),
    // eslint-disable-next-line @typescript-eslint/naming-convention
    FREECODECAMP_NODE_ENV: 'production'
  };
});

describe('production', () => {
  describe('GET /', () => {
    setupServer();

    test('have a 200 response', async () => {
      const res = await superGet('/');
      expect(res.statusCode).toBe(200);
    });

    test('return { "hello": "world"}', async () => {
      const res = await superGet('/');
      expect(res.body).toEqual({ hello: 'world' });
    });

    test('should have OWASP recommended headers', async () => {
      const res = await superGet('/');
      expect(res.headers).toMatchObject({
        'cache-control': 'no-store',
        'content-security-policy': "frame-ancestors 'none'",
        'content-type': 'application/json; charset=utf-8',
        'x-content-type-options': 'nosniff',
        'x-frame-options': 'DENY',
        'strict-transport-security': 'max-age=300; includeSubDomains'
      });
    });
  });
});
