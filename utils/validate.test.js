/* global describe expect it */

const { validate } = require('./validate');

const invalidCharError = {
  valid: false,
  error: 'contains invalid characters'
};
const validationSuccess = { valid: true, error: null };
const usernameTooShort = { valid: false, error: 'is too short' };

function inRange(num, range) {
  return num >= range[0] && num <= range[1];
}

describe('validate', () => {
  it('rejects strings with less than 3 characters', () => {
    expect(validate('')).toStrictEqual(usernameTooShort);
    expect(validate('12')).toStrictEqual(usernameTooShort);
    expect(validate('a')).toStrictEqual(usernameTooShort);
    expect(validate('123')).toStrictEqual(validationSuccess);
  });
  it('rejects non-ASCII characters', () => {
    expect(validate('👀👂👄')).toStrictEqual(invalidCharError);
  });
  it('accepts alphanumeric characters', () => {
    expect(validate('abcdefghijklmnopqrstuvwxyz0123456789')).toStrictEqual(
      validationSuccess
    );
  });
  it('accepts hyphens and underscores', () => {
    expect(validate('a-b')).toStrictEqual(validationSuccess);
    expect(validate('a_b')).toStrictEqual(validationSuccess);
  });

  it('rejects all other ASCII characters', () => {
    const whiteList = ['-', '_', '+'];
    const numbers = [48, 57];
    const upperCase = [65, 90];
    const lowerCase = [97, 122];
    const base = 'user';
    const finalCode = 127;

    for (let code = 0; code <= finalCode; code++) {
      let char = String.fromCharCode(code);
      let expected = invalidCharError;
      if (whiteList.includes(char)) expected = validationSuccess;
      if (inRange(code, numbers)) expected = validationSuccess;
      if (inRange(code, upperCase)) expected = validationSuccess;
      if (inRange(code, lowerCase)) expected = validationSuccess;
      expect(validate(base + char)).toStrictEqual(expected);
    }
  });
});
