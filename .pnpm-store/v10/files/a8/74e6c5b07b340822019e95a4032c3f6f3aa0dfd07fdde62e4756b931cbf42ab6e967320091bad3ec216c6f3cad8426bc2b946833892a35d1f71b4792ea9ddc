"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isIdentStart(c) {
    return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c === '-') || (c === '_');
}
exports.isIdentStart = isIdentStart;
function isIdent(c) {
    return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9') || c === '-' || c === '_';
}
exports.isIdent = isIdent;
function isHex(c) {
    return (c >= 'a' && c <= 'f') || (c >= 'A' && c <= 'F') || (c >= '0' && c <= '9');
}
exports.isHex = isHex;
function escapeIdentifier(s) {
    var len = s.length;
    var result = '';
    var i = 0;
    while (i < len) {
        var chr = s.charAt(i);
        if (exports.identSpecialChars[chr]) {
            result += '\\' + chr;
        }
        else {
            if (!(chr === '_' || chr === '-' ||
                (chr >= 'A' && chr <= 'Z') ||
                (chr >= 'a' && chr <= 'z') ||
                (i !== 0 && chr >= '0' && chr <= '9'))) {
                var charCode = chr.charCodeAt(0);
                if ((charCode & 0xF800) === 0xD800) {
                    var extraCharCode = s.charCodeAt(i++);
                    if ((charCode & 0xFC00) !== 0xD800 || (extraCharCode & 0xFC00) !== 0xDC00) {
                        throw Error('UCS-2(decode): illegal sequence');
                    }
                    charCode = ((charCode & 0x3FF) << 10) + (extraCharCode & 0x3FF) + 0x10000;
                }
                result += '\\' + charCode.toString(16) + ' ';
            }
            else {
                result += chr;
            }
        }
        i++;
    }
    return result;
}
exports.escapeIdentifier = escapeIdentifier;
function escapeStr(s) {
    var len = s.length;
    var result = '';
    var i = 0;
    var replacement;
    while (i < len) {
        var chr = s.charAt(i);
        if (chr === '"') {
            chr = '\\"';
        }
        else if (chr === '\\') {
            chr = '\\\\';
        }
        else if ((replacement = exports.strReplacementsRev[chr]) !== undefined) {
            chr = replacement;
        }
        result += chr;
        i++;
    }
    return "\"" + result + "\"";
}
exports.escapeStr = escapeStr;
exports.identSpecialChars = {
    '!': true,
    '"': true,
    '#': true,
    '$': true,
    '%': true,
    '&': true,
    '\'': true,
    '(': true,
    ')': true,
    '*': true,
    '+': true,
    ',': true,
    '.': true,
    '/': true,
    ';': true,
    '<': true,
    '=': true,
    '>': true,
    '?': true,
    '@': true,
    '[': true,
    '\\': true,
    ']': true,
    '^': true,
    '`': true,
    '{': true,
    '|': true,
    '}': true,
    '~': true
};
exports.strReplacementsRev = {
    '\n': '\\n',
    '\r': '\\r',
    '\t': '\\t',
    '\f': '\\f',
    '\v': '\\v'
};
exports.singleQuoteEscapeChars = {
    n: '\n',
    r: '\r',
    t: '\t',
    f: '\f',
    '\\': '\\',
    '\'': '\''
};
exports.doubleQuotesEscapeChars = {
    n: '\n',
    r: '\r',
    t: '\t',
    f: '\f',
    '\\': '\\',
    '"': '"'
};
