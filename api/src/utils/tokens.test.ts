jest.useFakeTimers();
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createAccessToken, createAuthToken, isExpired } from './tokens';

describe('createAccessToken', () => {
  it('creates an object with id, ttl, created and userId', () => {
    const userId = 'abc';

    const actual = createAccessToken(userId);

    expect(actual).toStrictEqual({
      id: expect.stringMatching(/[a-zA-Z0-9]{64}/),
      ttl: 77760000000,
      created: expect.stringMatching(
        /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/
      ),
      userId
    });
  });

  it('sets the ttl, defaulting to 77760000000 ms', () => {
    const userId = 'abc';
    const ttl = 123;
    const actual = createAccessToken(userId, ttl);

    expect(actual.ttl).toBe(ttl);
    expect(createAccessToken(userId).ttl).toBe(77760000000);
  });
});

describe('createAuthToken', () => {
  it('creates an object with id, ttl, created and userId', () => {
    const userId = 'abc';

    const actual = createAuthToken(userId);

    expect(actual).toStrictEqual({
      id: expect.stringMatching(/[a-zA-Z0-9]{64}/),
      ttl: 900000,
      created: expect.stringMatching(
        /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/
      ),
      userId
    });
  });

  it('sets the ttl, defaulting to 900000 ms', () => {
    const userId = 'abc';
    const ttl = 123;
    const actual = createAuthToken(userId, ttl);

    expect(actual.ttl).toBe(ttl);
    expect(createAuthToken(userId).ttl).toBe(900000);
  });
});

describe('isExpired', () => {
  it('returns true if the token expiry date is in the past', () => {
    const token = createAccessToken('abc', 1000);
    expect(isExpired(token)).toBe(false);
    jest.advanceTimersByTime(500);
    expect(isExpired(token)).toBe(false);
    jest.advanceTimersByTime(500);
    expect(isExpired(token)).toBe(false);
    jest.advanceTimersByTime(1);
    expect(isExpired(token)).toBe(true);
  });

  it('handles tokens with Date values for created', () => {
    const token = { ...createAccessToken('abc', 2000), created: new Date() };
    expect(isExpired(token)).toBe(false);
    jest.advanceTimersByTime(2000);
    expect(isExpired(token)).toBe(false);
    jest.advanceTimersByTime(1);
    expect(isExpired(token)).toBe(true);
  });
});
