"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMicrosoftLearnLink = exports.isValidUsername = exports.isHttpStatusCode = exports.usernameIsHttpStatusCode = exports.usernameTooShort = exports.validationSuccess = exports.invalidCharError = void 0;
exports.invalidCharError = {
    valid: false,
    error: 'contains invalid characters'
};
exports.validationSuccess = { valid: true, error: null };
exports.usernameTooShort = {
    valid: false,
    error: 'is too short'
};
exports.usernameIsHttpStatusCode = {
    valid: false,
    error: 'is a reserved error code'
};
const validCharsRE = /^[a-zA-Z0-9\-_+]*$/;
const isHttpStatusCode = (str) => {
    const output = parseInt(str, 10);
    return !isNaN(output) && output >= 100 && output <= 599;
};
exports.isHttpStatusCode = isHttpStatusCode;
const isValidUsername = (str) => {
    if (!validCharsRE.test(str))
        return exports.invalidCharError;
    if (str.length < 3)
        return exports.usernameTooShort;
    if ((0, exports.isHttpStatusCode)(str))
        return exports.usernameIsHttpStatusCode;
    return exports.validationSuccess;
};
exports.isValidUsername = isValidUsername;
// example link: https://learn.microsoft.com/en-us/training/achievements/learn.wwl.get-started-c-sharp-part-1.trophy?username=moT01&sharingId=E2EF453C1F9208B8
const isMicrosoftLearnLink = (value) => {
    let url;
    try {
        url = new URL(value);
    }
    catch {
        return false;
    }
    const correctDomain = url.hostname === 'learn.microsoft.com';
    const correctPath = !!url.pathname.match(/^\/[^/]+\/training\/achievements\/learn\.wwl\.get-started-c-sharp-part-\d\.trophy$/);
    const hasSharingId = !!url.searchParams.get('sharingId');
    const hasUsername = !!url.searchParams.get('username');
    return correctDomain && correctPath && hasSharingId && hasUsername;
};
exports.isMicrosoftLearnLink = isMicrosoftLearnLink;
