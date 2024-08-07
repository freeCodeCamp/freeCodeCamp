import { getCsrfToken, getCookies } from './jest.utils';

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

describe('setCookiesToCookies', () => {
  test('returns a string of cookies', () => {
    expect(getCookies(fakeCookies)).toEqual(
      '_csrf=123; csrf_token=abc-123; sessionId=CV-abc.123'
    );
  });
  test('handles bare cookies', () => {
    expect(getCookies(['_csrf=123'])).toEqual('_csrf=123');
  });

  test('throws an error if the cookies are malformed', () => {
    expect(() => getCookies(['_csrf'])).toThrow();
  });
});
