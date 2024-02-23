import { getCsrfToken } from './jest.utils';

const fakeCookies = [
  '_csrf=123; Path=/; HttpOnly; SameSite=Strict',
  'csrf_token=abc-123; Path=/',
  'sessionId=CV-abc.123; Path=/; Expires=Wed, 03 May 2023 16:29:53 GMT; HttpOnly'
];

describe('getCsrfToken', () => {
  test('returns csrf token if there is one', () => {
    expect(getCsrfToken(fakeCookies)).toEqual('abc-123');
  });

  test('returns undefined if there is no csrf token', () => {
    expect(
      getCsrfToken(['_csrf=123; Path=/; HttpOnly; SameSite=Strict'])
    ).toBeUndefined();
  });
});
