"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = require("./validate");
function inRange(num, range) {
    return num >= range[0] && num <= range[1];
}
describe('isValidUsername', () => {
    it('rejects strings with less than 3 characters', () => {
        expect((0, validate_1.isValidUsername)('')).toStrictEqual(validate_1.usernameTooShort);
        expect((0, validate_1.isValidUsername)('12')).toStrictEqual(validate_1.usernameTooShort);
        expect((0, validate_1.isValidUsername)('a')).toStrictEqual(validate_1.usernameTooShort);
        expect((0, validate_1.isValidUsername)('12a')).toStrictEqual(validate_1.validationSuccess);
    });
    it('rejects strings which are http response status codes 100-599', () => {
        expect((0, validate_1.isValidUsername)('429')).toStrictEqual(validate_1.usernameIsHttpStatusCode);
        expect((0, validate_1.isValidUsername)('789')).toStrictEqual(validate_1.validationSuccess);
    });
    it('rejects non-ASCII characters', () => {
        expect((0, validate_1.isValidUsername)('👀👂👄')).toStrictEqual(validate_1.invalidCharError);
    });
    it('rejects with invalidCharError even if the string is too short', () => {
        expect((0, validate_1.isValidUsername)('.')).toStrictEqual(validate_1.invalidCharError);
    });
    it('accepts alphanumeric characters', () => {
        expect((0, validate_1.isValidUsername)('abcdefghijklmnopqrstuvwxyz0123456789')).toStrictEqual(validate_1.validationSuccess);
    });
    it('accepts hyphens and underscores', () => {
        expect((0, validate_1.isValidUsername)('a-b')).toStrictEqual(validate_1.validationSuccess);
        expect((0, validate_1.isValidUsername)('a_b')).toStrictEqual(validate_1.validationSuccess);
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
            let expected = validate_1.invalidCharError;
            if (allowedCharactersList.includes(char))
                expected = validate_1.validationSuccess;
            if (inRange(code, numbers))
                expected = validate_1.validationSuccess;
            if (inRange(code, upperCase))
                expected = validate_1.validationSuccess;
            if (inRange(code, lowerCase))
                expected = validate_1.validationSuccess;
            expect((0, validate_1.isValidUsername)(base + char)).toStrictEqual(expected);
        }
    });
});
const baseUrl = 'https://learn.microsoft.com/en-us/training/achievements/learn.wwl.get-started-c-sharp-part-1.trophy';
describe('form-validators', () => {
    describe('isMicrosoftLearnLink', () => {
        it('should reject links to domains other than learn.microsoft.com', () => {
            {
                expect((0, validate_1.isMicrosoftLearnLink)('https://lean.microsoft.com')).toBe(false);
                expect((0, validate_1.isMicrosoftLearnLink)('https://learn.microsft.com')).toBe(false);
            }
        });
        it('should reject links without a sharingId', () => {
            expect((0, validate_1.isMicrosoftLearnLink)(`${baseUrl}?username=moT01`)).toBe(false);
            expect((0, validate_1.isMicrosoftLearnLink)(`${baseUrl}?username=moT01&sharingId=`)).toBe(false);
        });
        it('should reject links without a username', () => {
            expect((0, validate_1.isMicrosoftLearnLink)(`${baseUrl}?sharingId=Whatever`)).toBe(false);
            expect((0, validate_1.isMicrosoftLearnLink)(`${baseUrl}?sharingId=123&username=`)).toBe(false);
        });
        it('should reject links without the /training/achievements/ subpath', () => {
            expect((0, validate_1.isMicrosoftLearnLink)('https://learn.microsoft.com/en-us/achievements/learn.wwl.get-started-c-sharp-part-1.trophy?username=moT01&sharingId=E2EF453C1F9208B8')).toBe(false);
        });
        it('should reject links with the wrong trophy subpath', () => {
            // missing .trophy
            expect((0, validate_1.isMicrosoftLearnLink)('https://learn.microsoft.com/en-us/training/achievements/learn.wwl.get-started-c-sharp-part-1?username=moT01&sharingId=E2EF453C1F9208B8')).toBe(false);
            // no number
            expect((0, validate_1.isMicrosoftLearnLink)('https://learn.microsoft.com/en-us/training/achievements/learn.wwl.get-started-c-sharp-part-a.trophy?username=moT01&sharingId=E2EF453C1F9208B8')).toBe(false);
        });
        it.each(['en-us', 'fr-fr', 'lang-country'])('should accept links with the %s locale', locale => {
            expect((0, validate_1.isMicrosoftLearnLink)(`https://learn.microsoft.com/${locale}/training/achievements/learn.wwl.get-started-c-sharp-part-1.trophy?username=moT01&sharingId=E2EF453C1F9208B8`)).toBe(true);
        });
    });
});
