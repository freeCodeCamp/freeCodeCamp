/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { createSuperRequest, devLogin, setupServer } from '../../jest.utils';
import { AUTH0_DOMAIN } from '../utils/env';

jest.mock('../utils/env', () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return {
    ...jest.requireActual('../utils/env'),
    FCC_ENABLE_DEV_LOGIN_MODE: false
  };
});

describe('auth0 routes', () => {
  setupServer();
  describe('GET /signin', () => {
    let superGet: ReturnType<typeof createSuperRequest>;
    beforeAll(async () => {
      const setCookies = await devLogin();

      superGet = createSuperRequest({ method: 'GET', setCookies });
    });
    it('should redirect to the auth0 login page', async () => {
      const res = await superGet('/signin');

      expect(res.status).toBe(302);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      const redirectUrl = new URL(res.headers.location);
      expect(redirectUrl.host).toMatch(AUTH0_DOMAIN);
      expect(redirectUrl.pathname).toBe('/authorize');
    });
  });
});
