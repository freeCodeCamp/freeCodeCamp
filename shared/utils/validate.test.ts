import {
  isValidUsername,
  usernameTooShort,
  validationSuccess,
  usernameIsHttpStatusCode,
  invalidCharError,
  isMicrosoftTranscriptLink
} from './validate';

function inRange(num: number, range: number[]) {
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
    const allowedCharactersList = ['-', '_', '+'];
    const numbers = [48, 57];
    const upperCase = [65, 90];
    const lowerCase = [97, 122];
    const base = 'user';
    const finalCode = 127;

    for (let code = 0; code <= finalCode; code++) {
      const char = String.fromCharCode(code);
      let expected: { valid: boolean; error: null | string } = invalidCharError;
      if (allowedCharactersList.includes(char)) expected = validationSuccess;
      if (inRange(code, numbers)) expected = validationSuccess;
      if (inRange(code, upperCase)) expected = validationSuccess;
      if (inRange(code, lowerCase)) expected = validationSuccess;
      expect(isValidUsername(base + char)).toStrictEqual(expected);
    }
  });
});

const baseUrl = 'https://learn.microsoft.com/';

describe('isMicrosoftTranscriptLink', () => {
  it('should reject links to domains other than learn.microsoft.com', () => {
    {
      expect(isMicrosoftTranscriptLink('https://lean.microsoft.com')).toBe(
        false
      );
      expect(isMicrosoftTranscriptLink('https://learn.microsft.com')).toBe(
        false
      );
    }
  });

  it('should reject links without a username', () => {
    expect(isMicrosoftTranscriptLink(`${baseUrl}/en-us/users/`)).toBe(false);
  });

  it('should reject links without a unique id', () => {
    expect(
      isMicrosoftTranscriptLink(`${baseUrl}/en-us/users/moT01/transcript`)
    ).toBe(false);
  });

  it('should reject links with anything after the unique id', () => {
    expect(
      isMicrosoftTranscriptLink(
        `${baseUrl}/en-us/users/moT01/transcript/any-id/more-stuff`
      )
    ).toBe(false);
  });

  it('should reject the placeholder link', () => {
    expect(
      isMicrosoftTranscriptLink(
        'https://learn.microsoft.com/LOCALE/users/USERNAME/transcript/ID'
      )
    ).toBe(false);
    expect(
      isMicrosoftTranscriptLink(
        'https://learn.microsoft.com/LOCALE/users/USERNAME/transcript/ID/'
      )
    ).toBe(false);
  });

  it.each(['en-us', 'fr-fr', 'lang-country'])(
    'should accept links with the %s locale',
    locale => {
      expect(
        isMicrosoftTranscriptLink(
          `https://learn.microsoft.com/${locale}/users/moT01/transcript/any-id`
        )
      ).toBe(true);
    }
  );
});
