import { describe, it, expect, beforeEach } from 'vitest';
import { devLogin, setupServer, superRequest } from '../../../vitest.utils.js';

describe('GET /signout', () => {
  setupServer();

  beforeEach(async () => {
    await devLogin();
  });
  it('should clear all the cookies', async () => {
    const res = await superRequest('/signout', { method: 'GET' });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    const setCookie = res.headers['set-cookie'];
    expect(setCookie).toEqual(
      expect.arrayContaining([
        expect.stringMatching(
          /^jwt_access_token=; Max-Age=0; Path=\/; Expires=Thu, 01 Jan 1970 00:00:00 GMT/
        ),
        expect.stringMatching(
          /^csrf_token=; Max-Age=0; Path=\/; Expires=Thu, 01 Jan 1970 00:00:00 GMT/
        ),
        expect.stringMatching(
          /^_csrf=; Max-Age=0; Path=\/; Expires=Thu, 01 Jan 1970 00:00:00 GMT/
        )
      ])
    );
    expect(setCookie).toHaveLength(3);
  });

  it('should redirect with a success flash message', async () => {
    const res = await superRequest('/signout', { method: 'GET' });
    expect(res.status).toBe(302);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    expect(res.headers['location']).toContain('success');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    expect(res.headers['location']).toContain('signout-success');
  });
});
