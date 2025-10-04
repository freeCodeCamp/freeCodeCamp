import { describe, test, expect } from 'vitest';
import { getCsrfToken, getCookies, serializeDates } from './vitest.utils.js';

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

describe('serializeDates', () => {
  function isAsymmetricMatcher(x: unknown): x is typeof expect.any {
    return (
      typeof x === 'object' &&
      x !== null &&
      typeof (x as { asymmetricMatch?: unknown }).asymmetricMatch === 'function'
    );
  }

  test('returns primitives unchanged', () => {
    expect(serializeDates(42)).toBe(42);
    expect(serializeDates('hello')).toBe('hello');
    expect(serializeDates(true)).toBe(true);
  });

  test('converts Date to ISO string', () => {
    const d = new Date('2020-01-01T00:00:00.000Z');
    expect(serializeDates(d)).toBe(d.toISOString());
  });

  test('recursively converts nested objects with Date', () => {
    const input = {
      a: new Date('2021-05-05T05:05:05.000Z'),
      b: { c: new Date('2022-06-06T06:06:06.000Z') }
    };
    const output = serializeDates(input);
    expect(output).toEqual({
      a: input.a.toISOString(),
      b: { c: input.b.c.toISOString() }
    });
  });

  test('recursively converts arrays with Date and nested structures', () => {
    const d1 = new Date('2020-02-02T02:02:02.000Z');
    const d2 = new Date('2023-03-03T03:03:03.000Z');
    const d3 = new Date('2024-04-04T04:04:04.000Z');
    const arr: [Date, { x: Date; y: Date[] }] = [d1, { x: d2, y: [d3] }];
    const out = serializeDates(arr);
    expect(out).toEqual([
      d1.toISOString(),
      { x: d2.toISOString(), y: [d3.toISOString()] }
    ]);
  });

  test('handles null and undefined', () => {
    expect(serializeDates(null)).toBeNull();
    expect(serializeDates(undefined)).toBeUndefined();
  });

  test('preserves asymmetric matchers', () => {
    type MatchersShape = { id: unknown; meta: { when: unknown } };
    const withMatchers: MatchersShape = {
      id: expect.any(String) as unknown,
      meta: { when: expect.stringMatching(/Z$/) as unknown }
    };
    const serialized = serializeDates(withMatchers);
    expect(isAsymmetricMatcher(serialized.id)).toBe(true);
    expect(isAsymmetricMatcher(serialized.meta.when)).toBe(true);

    // Serializing `Date`s yield strings that match the same patterns
    const body = {
      id: 'abc',
      meta: { when: new Date('2025-01-01T00:00:00.000Z') }
    };
    const wrapped = serializeDates(body);
    expect(typeof wrapped.id).toBe('string');
    expect(wrapped.meta.when).toMatch(/Z$/);
  });
});
