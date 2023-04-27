import { setupServer, superGet } from '../jest.utils';
import { HOME_LOCATION } from './utils/env';

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

    test.each([
      'https://www.freecodecamp.org',
      'https://www.freecodecamp.dev',
      'https://beta.freecodecamp.org',
      'https://beta.freecodecamp.dev',
      'https://chinese.freecodecamp.org',
      'https://chinese.freecodecamp.dev'
    ])(
      'should have Access-Control-Allow-Origin header for %s',
      async origin => {
        const res = await superGet('/').set('origin', origin);
        expect(res.headers).toMatchObject({
          'access-control-allow-origin': origin
        });
      }
    );

    test('should have HOME_LOCATION Access-Control-Allow-Origin header for other origins', async () => {
      const res = await superGet('/').set('origin', 'https://www.google.com');
      expect(res.headers).toMatchObject({
        'access-control-allow-origin': HOME_LOCATION
      });
    });

    test('should have Access-Control-Allow-(Headers+Credentials) headers', async () => {
      const res = await superGet('/');
      expect(res.headers).toMatchObject({
        'access-control-allow-headers':
          'Origin, X-Requested-With, Content-Type, Accept',
        'access-control-allow-credentials': 'true'
      });
    });
  });
});
