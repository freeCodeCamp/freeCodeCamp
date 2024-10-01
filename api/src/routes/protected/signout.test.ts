import { createSuperRequest, devLogin, setupServer } from '../../../jest.utils';
import { HOME_LOCATION } from '../../utils/env';

describe('GET /signout', () => {
  let superGet: ReturnType<typeof createSuperRequest>;
  setupServer();

  beforeEach(async () => {
    const setCookies = await devLogin();
    superGet = createSuperRequest({ method: 'GET', setCookies });
  });
  it('should clear all the cookies', async () => {
    const res = await superGet('/signout');

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    const setCookie = res.headers['set-cookie'];
    expect(setCookie).toEqual(
      expect.arrayContaining([
        expect.stringMatching(
          /^jwt_access_token=; Path=\/; Expires=Thu, 01 Jan 1970 00:00:00 GMT/
        ),
        expect.stringMatching(
          /^csrf_token=; Path=\/; Expires=Thu, 01 Jan 1970 00:00:00 GMT/
        ),
        expect.stringMatching(
          /^_csrf=; Path=\/; Expires=Thu, 01 Jan 1970 00:00:00 GMT/
        )
      ])
    );
    expect(setCookie).toHaveLength(3);
  });

  it('should redirect to / on the client by default', async () => {
    const res = await superGet('/signout');

    // This happens because localhost:8000 is not an allowed origin and so
    // normalizeParams rejects it and sets the returnTo to /learn. TODO:
    // separate the validation and normalization logic.
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    expect(res.headers.location).toBe(`${HOME_LOCATION}/learn`);
    expect(res.status).toBe(302);
  });
});
