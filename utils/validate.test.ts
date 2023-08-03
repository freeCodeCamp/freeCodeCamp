import {
  isValidUsername,
  usernameTooShort,
  validationSuccess,
  usernameIsHttpStatusCode,
  invalidCharError,
  isMicrosoftLearnLink
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

const baseUrl =
  'https://learn.microsoft.com/en-us/training/achievements/learn.wwl.get-started-c-sharp-part-1.trophy';
describe('form-validators', () => {
  describe('isMicrosoftLearnLink', () => {
    it('should reject links to domains other than learn.microsoft.com', () => {
      {
        expect(isMicrosoftLearnLink('https://lean.microsoft.com')).toBe(false);
        expect(isMicrosoftLearnLink('https://learn.microsft.com')).toBe(false);
      }
    });

    it('should reject links without a sharingId', () => {
      expect(isMicrosoftLearnLink(`${baseUrl}?username=moT01`)).toBe(false);

      expect(isMicrosoftLearnLink(`${baseUrl}?username=moT01&sharingId=`)).toBe(
        false
      );
    });

    it('should reject links without a username', () => {
      expect(isMicrosoftLearnLink(`${baseUrl}?sharingId=Whatever`)).toBe(false);
      expect(isMicrosoftLearnLink(`${baseUrl}?sharingId=123&username=`)).toBe(
        false
      );
    });

    it('should reject links without the /training/achievements/ subpath', () => {
      expect(
        isMicrosoftLearnLink(
          'https://learn.microsoft.com/en-us/achievements/learn.wwl.get-started-c-sharp-part-1.trophy?username=moT01&sharingId=E2EF453C1F9208B8'
        )
      ).toBe(false);
    });

    it('should reject links with the wrong trophy subpath', () => {
      // missing .trophy
      expect(
        isMicrosoftLearnLink(
          'https://learn.microsoft.com/en-us/training/achievements/learn.wwl.get-started-c-sharp-part-1?username=moT01&sharingId=E2EF453C1F9208B8'
        )
      ).toBe(false);
      // no number
      expect(
        isMicrosoftLearnLink(
          'https://learn.microsoft.com/en-us/training/achievements/learn.wwl.get-started-c-sharp-part-a.trophy?username=moT01&sharingId=E2EF453C1F9208B8'
        )
      ).toBe(false);
    });

    it.each(['en-us', 'fr-fr', 'lang-country'])(
      'should accept links with the %s locale',
      locale => {
        expect(
          isMicrosoftLearnLink(
            `https://learn.microsoft.com/${locale}/training/achievements/learn.wwl.get-started-c-sharp-part-1.trophy?username=moT01&sharingId=E2EF453C1F9208B8`
          )
        ).toBe(true);
      }
    );
  });
});
