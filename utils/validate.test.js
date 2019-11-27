/* global describe expect it */

const {
  isValidUsername,
  usernameTooShort,
  validationSuccess,
  usernameIsHttpStatusCode,
  invalidCharError
} = require('./validate');

function inRange(num, range) {
  return num >= range[0] && num <= range[1];
}

describe('isValidUsername', () => {
  it('rejects strings with less than 3 characters', () => {
    expect(isValidUsername('')).toStrictEqual(usernameTooShort);
    expect(isValidUsername('12')).toStrictEqual(usernameTooShort);
    expect(isValidUsername('a')).toStrictEqual(usernameTooShort);
    expect(isValidUsername('12a')).toStrictEqual(validationSuccess);
  });
  it('rejects strings which are http response status codes 100-599', () => {
    expect(isValidUsername('429')).toStrictEqual(usernameIsHttpStatusCode);
    expect(isValidUsername('789')).toStrictEqual(validationSuccess);
  });
  it('rejects non-ASCII characters', () => {
    expect(isValidUsername('👀👂👄')).toStrictEqual(invalidCharError);
  });
  it('rejects with invalidCharError even if the string is too short', () => {
    expect(isValidUsername('.')).toStrictEqual(invalidCharError);
  });
  it('accepts alphanumeric characters', () => {
    expect(
      isValidUsername('abcdefghijklmnopqrstuvwxyz0123456789')
    ).toStrictEqual(validationSuccess);
  });
  it('accepts hyphens and underscores', () => {
    expect(isValidUsername('a-b')).toStrictEqual(validationSuccess);
    expect(isValidUsername('a_b')).toStrictEqual(validationSuccess);
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
      expect(isValidUsername(base + char)).toStrictEqual(expected);
    }
  });
});
