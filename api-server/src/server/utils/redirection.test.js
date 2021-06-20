const jwt = require('jsonwebtoken');

const { getReturnTo, normalizeParams } = require('./redirection');

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

describe('redirection', () => {
  describe('getReturnTo', () => {
    it('should extract returnTo from a jwt', () => {
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

    it('should return a default url if the secrets do not match', () => {
      const oldLog = console.log;
      expect.assertions(2);
      console.log = jest.fn();
      const encryptedReturnTo = jwt.sign(
        { returnTo: validReturnTo },
        invalidJWTSecret
      );
      expect(
        getReturnTo(encryptedReturnTo, validJWTSecret, defaultOrigin)
      ).toStrictEqual(defaultObject);
      expect(console.log).toHaveBeenCalled();
      console.log = oldLog;
    });

    it('should return a default url for unknown origins', () => {
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
    it('should return a {returnTo, origin, pathPrefix} object', () => {
      expect.assertions(2);
      const keys = Object.keys(normalizeParams({}));
      const expectedKeys = ['returnTo', 'origin', 'pathPrefix'];
      expect(keys.length).toBe(3);
      expect(keys).toEqual(expect.arrayContaining(expectedKeys));
    });
    it('should default to homeLocation', () => {
      expect.assertions(1);
      expect(normalizeParams({}, defaultOrigin)).toEqual(defaultObject);
    });
    it('should convert an unknown pathPrefix to ""', () => {
      expect.assertions(1);
      const brokenPrefix = {
        ...defaultObject,
        pathPrefix: 'not-really-a-name'
      };
      expect(normalizeParams(brokenPrefix, defaultOrigin)).toEqual(
        defaultObject
      );
    });
    it('should not change a known pathPrefix', () => {
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
    // homeLocation/path, but if the origin is wrong something unexpected is
    // going on. In that case it's probably best to just send them to
    // homeLocation/learn.
    it('should return default parameters if the origin is unknown', () => {
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
    it('should return default parameters if the returnTo is unknown', () => {
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
  });
});
