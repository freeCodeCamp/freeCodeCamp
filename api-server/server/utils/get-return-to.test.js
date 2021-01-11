/* global describe expect it */

const { homeLocation } = require('../../../config/env');
const jwt = require('jsonwebtoken');

const getReturnTo = require('./get-return-to');

const validJWTSecret = 'this is a super secret string';
const invalidJWTSecret = 'This is not correct secret';
const validReturnTo = 'https://www.freecodecamp.org/settings';
const invalidReturnTo = 'https://www.freecodecamp.org.fake/settings';
const defaultReturnTo = `${homeLocation}/learn`;

describe('get-return-to', () => {
  describe('getReturnTo', () => {
    it('should extract returnTo from a jwt', () => {
      expect.assertions(1);

      const encryptedReturnTo = jwt.sign(
        { returnTo: validReturnTo },
        validJWTSecret
      );
      expect(getReturnTo(encryptedReturnTo, validJWTSecret)).toStrictEqual({
        returnTo: validReturnTo,
        success: true
      });
    });

    it('should return a default url if the secrets do not match', () => {
      expect.assertions(1);

      const encryptedReturnTo = jwt.sign(
        { returnTo: validReturnTo },
        invalidJWTSecret
      );
      expect(getReturnTo(encryptedReturnTo, validJWTSecret)).toStrictEqual({
        returnTo: defaultReturnTo,
        success: false
      });
    });

    it('should return a default url for unknown origins', () => {
      expect.assertions(1);
      const encryptedReturnTo = jwt.sign(
        { returnTo: invalidReturnTo },
        validJWTSecret
      );
      expect(getReturnTo(encryptedReturnTo, validJWTSecret)).toStrictEqual({
        returnTo: defaultReturnTo,
        success: false
      });
    });
  });
});
