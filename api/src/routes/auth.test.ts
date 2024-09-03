/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { setupServer, superRequest } from '../../jest.utils';
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
    it('should redirect to the auth0 login page', async () => {
      const res = await superRequest('/signin', { method: 'GET' });

      expect(res.status).toBe(302);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      const redirectUrl = new URL(res.headers.location);
      expect(redirectUrl.host).toMatch(AUTH0_DOMAIN);
      expect(redirectUrl.pathname).toBe('/authorize');
    });
  });
});
