/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { describe, it, expect, vi, beforeAll, beforeEach } from 'vitest';
import {
  setupServer,
  superRequest,
  createSuperRequest
} from '../../../vitest.utils.js';
import { AUTH0_DOMAIN } from '../../utils/env.js';

const mockedFetch = vi.fn();
vi.spyOn(globalThis, 'fetch').mockImplementation(mockedFetch);

const newUserEmail = 'a.n.random@user.com';

const mockAuth0NotOk = () => ({
  ok: false,
  status: 503
});

const mockAuth0Unauthorized = () => ({
  ok: false,
  status: 401
});

const mockAuth0InvalidEmail = () => ({
  ok: true,
  json: () => ({ email: 'invalid-email' })
});

const mockAuth0ValidEmail = () => ({
  ok: true,
  json: () => ({ email: newUserEmail })
});

vi.mock('../../utils/env', async () => {
  const actual =
    await vi.importActual<typeof import('../../utils/env.js')>(
      '../../utils/env'
    );
  return {
    ...actual,
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
      await fastifyTestInstance.prisma.user.deleteMany({
        where: { email: newUserEmail }
      });
    });

    it('should capture and return 401 when Auth0 userinfo is down (5xx)', async () => {
      mockedFetch.mockResolvedValueOnce(mockAuth0NotOk());
      const count = vi.fn();
      const captureException = vi.fn();
      const originalSentry = fastifyTestInstance.Sentry;
      fastifyTestInstance.Sentry = {
        ...originalSentry,
        captureException,
        metrics: { ...originalSentry.metrics, count }
      };

      const res = await superGet('/mobile-login').set(
        'Authorization',
        'Bearer invalid-token'
      );

      expect(res.body).toStrictEqual({
        type: 'danger',
        message: 'We could not log you in, please try again in a moment.'
      });
      expect(res.status).toBe(401);
      expect(count).toHaveBeenCalledWith('auth.mobile_login_attempted', 1, {
        attributes: { result: 'failure', reason: 'no_email' }
      });
      expect(captureException).toHaveBeenCalledWith(
        new Error('Auth0 userinfo request failed'),
        { extra: { status: 503 } }
      );

      fastifyTestInstance.Sentry = originalSentry;
    });

    it('should not capture to Sentry for an expected Auth0 4xx (invalid or expired token)', async () => {
      mockedFetch.mockResolvedValueOnce(mockAuth0Unauthorized());
      const count = vi.fn();
      const captureException = vi.fn();
      const originalSentry = fastifyTestInstance.Sentry;
      fastifyTestInstance.Sentry = {
        ...originalSentry,
        captureException,
        metrics: { ...originalSentry.metrics, count }
      };

      const res = await superGet('/mobile-login').set(
        'Authorization',
        'Bearer invalid-token'
      );

      expect(res.status).toBe(401);
      expect(captureException).not.toHaveBeenCalled();

      fastifyTestInstance.Sentry = originalSentry;
    });

    it('should return 400 if the email is not valid', async () => {
      mockedFetch.mockResolvedValueOnce(mockAuth0InvalidEmail());
      const count = vi.fn();
      const originalSentry = fastifyTestInstance.Sentry;
      fastifyTestInstance.Sentry = {
        ...originalSentry,
        metrics: { ...originalSentry.metrics, count }
      };

      const res = await superGet('/mobile-login').set(
        'Authorization',
        'Bearer valid-token'
      );

      expect(res.body).toStrictEqual({
        type: 'danger',
        message: 'The email is incorrectly formatted'
      });
      expect(res.status).toBe(400);
      expect(count).toHaveBeenCalledWith('auth.mobile_login_attempted', 1, {
        attributes: { result: 'failure', reason: 'invalid_format' }
      });

      fastifyTestInstance.Sentry = originalSentry;
    });

    it('should set the jwt_access_token cookie if the authorization header is valid', async () => {
      mockedFetch.mockResolvedValueOnce(mockAuth0ValidEmail());
      const count = vi.fn();
      const originalSentry = fastifyTestInstance.Sentry;
      fastifyTestInstance.Sentry = {
        ...originalSentry,
        metrics: { ...originalSentry.metrics, count }
      };

      const res = await superGet('/mobile-login').set(
        'Authorization',
        'Bearer valid-token'
      );

      expect(res.status).toBe(200);
      expect(res.get('Set-Cookie')).toEqual(
        expect.arrayContaining([expect.stringMatching(/jwt_access_token=/)])
      );
      expect(count).toHaveBeenCalledWith('auth.mobile_login_attempted', 1, {
        attributes: { result: 'success' }
      });

      fastifyTestInstance.Sentry = originalSentry;
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
