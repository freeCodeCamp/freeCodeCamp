import { describe, test, expect, vi } from 'vitest';
import jwt from 'jsonwebtoken';

import {
  getReturnTo,
  normalizeParams,
  getRedirectParams,
  getPrefixedLandingPath,
  getLoginRedirectParams
} from './redirection.js';
import { HOME_LOCATION } from './env.js';

const validJWTSecret = 'this is a super secret string';
const invalidJWTSecret = 'This is not correct secret';
const validReturnTo = 'https://www.freecodecamp.org/settings';
const invalidReturnTo = 'https://www.freecodecamp.org.fake/settings';
const defaultReturnTo = 'https://www.freecodecamp.org/learn';
const defaultOrigin = 'https://www.freecodecamp.org';
const defaultPrefix = '';

const defaultObject = {
  returnTo: defaultReturnTo,
  origin: defaultOrigin,
  pathPrefix: defaultPrefix
};

// TODO: tidy this up (the mocking is a bit of a mess)
describe('redirection', () => {
  describe('getReturnTo', () => {
    test('should extract returnTo from a jwt', () => {
      expect.assertions(1);

      const encryptedReturnTo = jwt.sign(
        { returnTo: validReturnTo, origin: defaultOrigin },
        validJWTSecret
      );
      expect(
        getReturnTo(encryptedReturnTo, validJWTSecret, defaultOrigin)
      ).toStrictEqual({
        ...defaultObject,
        returnTo: validReturnTo
      });
    });

    test('should return a default url if the secrets do not match', () => {
      expect.assertions(1);
      const encryptedReturnTo = jwt.sign(
        { returnTo: validReturnTo },
        invalidJWTSecret
      );
      expect(
        getReturnTo(encryptedReturnTo, validJWTSecret, defaultOrigin)
      ).toStrictEqual(defaultObject);
    });

    test('should return a default url for unknown origins', () => {
      expect.assertions(1);
      const encryptedReturnTo = jwt.sign(
        { returnTo: invalidReturnTo },
        validJWTSecret
      );
      expect(
        getReturnTo(encryptedReturnTo, validJWTSecret, defaultOrigin)
      ).toStrictEqual(defaultObject);
    });
  });
  describe('normalizeParams', () => {
    test('should return a {returnTo, origin, pathPrefix} object', () => {
      expect.assertions(2);
      const keys = Object.keys(normalizeParams({}));
      const expectedKeys = ['returnTo', 'origin', 'pathPrefix'];
      expect(keys.length).toBe(3);
      expect(keys).toEqual(expect.arrayContaining(expectedKeys));
    });
    test('should default to process.env.HOME_LOCATION', () => {
      expect.assertions(1);
      expect(normalizeParams({}, defaultOrigin)).toEqual(defaultObject);
    });
    test('should convert an unknown pathPrefix to ""', () => {
      expect.assertions(1);
      const brokenPrefix = {
        ...defaultObject,
        pathPrefix: 'not-really-a-name'
      };
      expect(normalizeParams(brokenPrefix, defaultOrigin)).toEqual(
        defaultObject
      );
    });
    test('should not change a known pathPrefix', () => {
      expect.assertions(1);
      const spanishPrefix = {
        ...defaultObject,
        pathPrefix: 'espanol'
      };
      expect(normalizeParams(spanishPrefix, defaultOrigin)).toEqual(
        spanishPrefix
      );
    });
    // we *could*, in principle, grab the path and send them to
    // process.env.HOME_LOCATION/path, but if the origin is wrong something unexpected is
    // going on. In that case it's probably best to just send them to
    // process.env.HOME_LOCATION/learn.
    test('should return default parameters if the origin is unknown', () => {
      expect.assertions(1);
      const exampleOrigin = {
        ...defaultObject,
        origin: 'http://example.com',
        pathPrefix: 'espanol'
      };
      expect(normalizeParams(exampleOrigin, defaultOrigin)).toEqual(
        defaultObject
      );
    });
    test('should return default parameters if the returnTo is unknown', () => {
      expect.assertions(1);
      const exampleReturnTo = {
        ...defaultObject,
        returnTo: 'http://example.com/path',
        pathPrefix: 'espanol'
      };
      expect(normalizeParams(exampleReturnTo, defaultOrigin)).toEqual(
        defaultObject
      );
    });

    test('should reject returnTo without trailing slashes', () => {
      const exampleReturnTo = {
        ...defaultObject,
        returnTo: 'https://www.freecodecamp.dev'
      };
      expect(normalizeParams(exampleReturnTo, defaultOrigin)).toEqual(
        defaultObject
      );
    });

    test('should not modify the returnTo if it is valid', () => {
      const exampleReturnTo = {
        ...defaultObject,
        returnTo: 'https://www.freecodecamp.dev/'
      };
      expect(normalizeParams(exampleReturnTo, defaultOrigin)).toEqual(
        exampleReturnTo
      );
    });
  });

  describe('getRedirectParams', () => {
    test('should return origin, pathPrefix and returnTo given valid headers', () => {
      const req = {
        headers: {
          referer: `https://www.freecodecamp.org/espanol/learn/rosetta-code/`
        }
      };

      const expectedReturn = {
        origin: 'https://www.freecodecamp.org',
        pathPrefix: 'espanol',
        returnTo: 'https://www.freecodecamp.org/espanol/learn/rosetta-code/'
      };

      const result = getRedirectParams(req);
      expect(result).toEqual(expectedReturn);
    });

    test('should strip off any query parameters from the referer', () => {
      const req = {
        headers: {
          referer: `https://www.freecodecamp.org/espanol/learn/rosetta-code/?query=param`
        }
      };

      const expectedReturn = {
        origin: 'https://www.freecodecamp.org',
        pathPrefix: 'espanol',
        returnTo: 'https://www.freecodecamp.org/espanol/learn/rosetta-code/'
      };

      const result = getRedirectParams(req);
      expect(result).toEqual(expectedReturn);
    });

    test('should returnTo the origin if the referer is missing', () => {
      const req = {
        headers: {}
      };

      const expectedReturn = {
        returnTo: `${HOME_LOCATION}/`,
        origin: HOME_LOCATION,
        pathPrefix: ''
      };

      const result = getRedirectParams(req);
      expect(result).toEqual(expectedReturn);
    });

    test('should returnTo the origin if the referrer is invalid', () => {
      const req = {
        headers: {
          referer: 'invalid-url'
        }
      };

      const expectedReturn = {
        returnTo: `${HOME_LOCATION}/`,
        origin: HOME_LOCATION,
        pathPrefix: ''
      };

      const result = getRedirectParams(req);
      expect(result).toEqual(expectedReturn);
    });
  });

  describe('getLoginRedirectParams', () => {
    test('should use the login-returnto cookie if present', () => {
      const mockReq = {
        cookies: {
          'login-returnto': 'https://www.freecodecamp.org/espanol/learn'
        },
        unsignCookie: (rawValue: string) => ({ value: rawValue })
      };

      const expectedReturn = {
        origin: 'https://www.freecodecamp.org',
        pathPrefix: 'espanol',
        returnTo: 'https://www.freecodecamp.org/espanol/learn'
      };

      const result = getLoginRedirectParams(mockReq);
      expect(result).toEqual(expectedReturn);
    });
  });

  describe('getPrefixedLandingPath', () => {
    test('should return the origin when no pathPrefix is provided', () => {
      const result = getPrefixedLandingPath(defaultOrigin);
      expect(result).toEqual(defaultOrigin);
    });

    test('should append pathPrefix to origin when pathPrefix is provided', () => {
      const expectedPath = `${defaultOrigin}/learn`;
      const result = getPrefixedLandingPath(defaultOrigin, 'learn');
      expect(result).toEqual(expectedPath);
    });

    test('should handle empty origin', () => {
      const pathPrefix = 'learn';
      const expectedPath = '/learn';
      const result = getPrefixedLandingPath('', pathPrefix);
      expect(result).toEqual(expectedPath);
    });

    test('should handle empty pathPrefix', () => {
      const result = getPrefixedLandingPath(defaultOrigin, '');
      expect(result).toEqual(defaultOrigin);
    });
  });
});
