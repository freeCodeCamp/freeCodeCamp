"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const validate_1 = require("./validate");
function inRange(num, range) {
    return num >= range[0] && num <= range[1];
}
(0, vitest_1.describe)('isValidUsername', () => {
    (0, vitest_1.it)('rejects strings with less than 3 characters', () => {
        (0, vitest_1.expect)((0, validate_1.isValidUsername)('')).toStrictEqual(validate_1.usernameTooShort);
        (0, vitest_1.expect)((0, validate_1.isValidUsername)('12')).toStrictEqual(validate_1.usernameTooShort);
        (0, vitest_1.expect)((0, validate_1.isValidUsername)('a')).toStrictEqual(validate_1.usernameTooShort);
        (0, vitest_1.expect)((0, validate_1.isValidUsername)('12a')).toStrictEqual(validate_1.validationSuccess);
    });
    (0, vitest_1.it)('rejects strings which are http response status codes 100-599', () => {
        (0, vitest_1.expect)((0, validate_1.isValidUsername)('429')).toStrictEqual(validate_1.usernameIsHttpStatusCode);
        (0, vitest_1.expect)((0, validate_1.isValidUsername)('789')).toStrictEqual(validate_1.validationSuccess);
    });
    (0, vitest_1.it)('rejects non-ASCII characters', () => {
        (0, vitest_1.expect)((0, validate_1.isValidUsername)('👀👂👄')).toStrictEqual(validate_1.invalidCharError);
    });
    (0, vitest_1.it)('rejects with invalidCharError even if the string is too short', () => {
        (0, vitest_1.expect)((0, validate_1.isValidUsername)('.')).toStrictEqual(validate_1.invalidCharError);
    });
    (0, vitest_1.it)('accepts alphanumeric characters', () => {
        (0, vitest_1.expect)((0, validate_1.isValidUsername)('abcdefghijklmnopqrstuvwxyz0123456789')).toStrictEqual(validate_1.validationSuccess);
    });
    (0, vitest_1.it)('accepts hyphens and underscores', () => {
        (0, vitest_1.expect)((0, validate_1.isValidUsername)('a-b')).toStrictEqual(validate_1.validationSuccess);
        (0, vitest_1.expect)((0, validate_1.isValidUsername)('a_b')).toStrictEqual(validate_1.validationSuccess);
    });
    (0, vitest_1.it)('rejects all other ASCII characters', () => {
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
            (0, vitest_1.expect)((0, validate_1.isValidUsername)(base + char)).toStrictEqual(expected);
        }
    });
});
const baseUrl = 'https://learn.microsoft.com/';
(0, vitest_1.describe)('isMicrosoftTranscriptLink', () => {
    (0, vitest_1.it)('should reject links to domains other than learn.microsoft.com', () => {
        {
            (0, vitest_1.expect)((0, validate_1.isMicrosoftTranscriptLink)('https://lean.microsoft.com')).toBe(false);
            (0, vitest_1.expect)((0, validate_1.isMicrosoftTranscriptLink)('https://learn.microsft.com')).toBe(false);
        }
    });
    (0, vitest_1.it)('should reject links without a username', () => {
        (0, vitest_1.expect)((0, validate_1.isMicrosoftTranscriptLink)(`${baseUrl}/en-us/users/`)).toBe(false);
    });
    (0, vitest_1.it)('should reject links without a unique id', () => {
        (0, vitest_1.expect)((0, validate_1.isMicrosoftTranscriptLink)(`${baseUrl}/en-us/users/moT01/transcript`)).toBe(false);
    });
    (0, vitest_1.it)('should reject links with anything after the unique id', () => {
        (0, vitest_1.expect)((0, validate_1.isMicrosoftTranscriptLink)(`${baseUrl}/en-us/users/moT01/transcript/any-id/more-stuff`)).toBe(false);
    });
    (0, vitest_1.it)('should reject the placeholder link', () => {
        (0, vitest_1.expect)((0, validate_1.isMicrosoftTranscriptLink)('https://learn.microsoft.com/LOCALE/users/USERNAME/transcript/ID')).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isMicrosoftTranscriptLink)('https://learn.microsoft.com/LOCALE/users/USERNAME/transcript/ID/')).toBe(false);
    });
    vitest_1.it.each(['en-us', 'fr-fr', 'lang-country'])('should accept links with the %s locale', locale => {
        (0, vitest_1.expect)((0, validate_1.isMicrosoftTranscriptLink)(`https://learn.microsoft.com/${locale}/users/moT01/transcript/any-id`)).toBe(true);
    });
});
