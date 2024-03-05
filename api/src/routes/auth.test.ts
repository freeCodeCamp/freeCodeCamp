/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { createSuperRequest, devLogin, setupServer } from '../../jest.utils';
import { AUTH0_DOMAIN } from '../utils/env';

jest.mock('../utils/env', () => {
  console.log('mocking env');
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
      expect(res.headers.location).toMatch(
        // TODO: create regex escape function and apply to AUTH0_DOMAIN
        new RegExp(`https://${AUTH0_DOMAIN}/authorize`)
      );
    });
  });
});
