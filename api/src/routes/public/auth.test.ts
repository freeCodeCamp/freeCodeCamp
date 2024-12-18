/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  setupServer,
  superRequest,
  createSuperRequest
} from '../../../jest.utils';
import { AUTH0_DOMAIN } from '../../utils/env';

const mockedFetch = jest.fn();
jest.spyOn(globalThis, 'fetch').mockImplementation(mockedFetch);

const newUserEmail = 'a.n.random@user.com';

const mockAuth0NotOk = () => ({
  ok: false
});

const mockAuth0InvalidEmail = () => ({
  ok: true,
  json: () => ({ email: 'invalid-email' })
});

const mockAuth0ValidEmail = () => ({
  ok: true,
  json: () => ({ email: newUserEmail })
});

jest.mock('../../utils/env', () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return {
    ...jest.requireActual('../../utils/env'),
    FCC_ENABLE_DEV_LOGIN_MODE: false
  };
});

describe('auth0 routes', () => {
  setupServer();
  describe('GET /signin', () => {
    it('should redirect to the auth0 login page', async () => {
      const res = await superRequest('/signin', { method: 'GET' });

      expect(res.status).toBe(302);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      const redirectUrl = new URL(res.headers.location);
      expect(redirectUrl.host).toMatch(AUTH0_DOMAIN);
      expect(redirectUrl.pathname).toBe('/authorize');
    });
  });

  describe('GET /mobile-login', () => {
    let superGet: ReturnType<typeof createSuperRequest>;

    beforeAll(() => {
      superGet = createSuperRequest({ method: 'GET' });
    });
    beforeEach(async () => {
      await fastifyTestInstance.prisma.userRateLimit.deleteMany({});
      await fastifyTestInstance.prisma.user.deleteMany({
        where: { email: newUserEmail }
      });
    });

    it('should be rate-limited', async () => {
      // Rather than spamming the endpoint, we can check the headers.
      const res = await superGet('/mobile-login');
      // These headers are semi-official
      // https://www.ietf.org/archive/id/draft-polli-ratelimit-headers-02.html
      // so should not depend on the details of the rate-limiting library
      expect(res.headers['ratelimit-limit']).toBe('10');
      expect(res.headers['ratelimit-remaining']).toBe('9');
      expect(res.headers['ratelimit-reset']).toMatch(/^\d+$/);

      const res2 = await superGet('/mobile-login');
      expect(res2.headers['ratelimit-remaining']).toBe('8');
    });

    it('should return 401 if the authorization header is invalid', async () => {
      mockedFetch.mockResolvedValueOnce(mockAuth0NotOk());
      const res = await superGet('/mobile-login').set(
        'Authorization',
        'Bearer invalid-token'
      );

      expect(res.body).toStrictEqual({
        type: 'danger',
        message: 'We could not log you in, please try again in a moment.'
      });
      expect(res.status).toBe(401);
    });

    it('should return 400 if the email is not valid', async () => {
      mockedFetch.mockResolvedValueOnce(mockAuth0InvalidEmail());
      const res = await superGet('/mobile-login').set(
        'Authorization',
        'Bearer valid-token'
      );

      expect(res.body).toStrictEqual({
        type: 'danger',
        message: 'The email is incorrectly formatted'
      });
      expect(res.status).toBe(400);
    });

    it('should set the jwt_access_token cookie if the authorization header is valid', async () => {
      mockedFetch.mockResolvedValueOnce(mockAuth0ValidEmail());
      const res = await superGet('/mobile-login').set(
        'Authorization',
        'Bearer valid-token'
      );

      expect(res.status).toBe(200);
      expect(res.get('Set-Cookie')).toEqual(
        expect.arrayContaining([expect.stringMatching(/jwt_access_token=/)])
      );
    });

    it('should create a user if they do not exist', async () => {
      mockedFetch.mockResolvedValueOnce(mockAuth0ValidEmail());
      const existingUserCount = await fastifyTestInstance.prisma.user.count();

      const res = await superGet('/mobile-login').set(
        'Authorization',
        'Bearer valid-token'
      );

      const newUserCount = await fastifyTestInstance.prisma.user.count();

      expect(existingUserCount).toBe(0);
      expect(newUserCount).toBe(1);
      expect(res.status).toBe(200);
    });

    it('should redirect to returnTo if already logged in', async () => {
      mockedFetch.mockResolvedValueOnce(mockAuth0ValidEmail());
      const firstRes = await superGet('/mobile-login').set(
        'Authorization',
        'Bearer valid-token'
      );

      expect(firstRes.status).toBe(200);

      const res = await superRequest('/mobile-login', {
        method: 'GET',
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        setCookies: firstRes.get('Set-Cookie')
      })
        .set('Authorization', 'Bearer does-not-matter')
        .set('Referer', 'https://www.freecodecamp.org/back-home');

      expect(res.status).toBe(302);
      expect(res.headers.location).toBe(
        'https://www.freecodecamp.org/back-home'
      );
    });
  });
});
