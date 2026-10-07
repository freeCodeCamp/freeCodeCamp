'use strict';

const internals = {};


module.exports = function (input) {

    if (!input) {
        return '';
    }

    let escaped = '';

    for (let i = 0; i < input.length; ++i) {

        const charCode = input.charCodeAt(i);

        if (internals.isSafe(charCode)) {
            escaped += input[i];
        }
        else {
            escaped += internals.escapeHtmlChar(charCode);
        }
    }

    return escaped;
};


internals.escapeHtmlChar = function (charCode) {

    const namedEscape = internals.namedHtml.get(charCode);
    if (namedEscape) {
        return namedEscape;
    }

    if (charCode >= 256) {
        return '&#' + charCode + ';';
    }

    const hexValue = charCode.toString(16).padStart(2, '0');
    return `&#x${hexValue};`;
};


internals.isSafe = function (charCode) {

    return internals.safeCharCodes.has(charCode);
};


internals.namedHtml = new Map([
    [38, '&amp;'],
    [60, '&lt;'],
    [62, '&gt;'],
    [34, '&quot;'],
    [160, '&nbsp;'],
    [162, '&cent;'],
    [163, '&pound;'],
    [164, '&curren;'],
    [169, '&copy;'],
    [174, '&reg;']
]);


internals.safeCharCodes = (function () {

    const safe = new Set();

    for (let i = 32; i < 123; ++i) {

        if ((i >= 97) ||                    // a-z
            (i >= 65 && i <= 90) ||         // A-Z
            (i >= 48 && i <= 57) ||         // 0-9
            i === 32 ||                     // space
            i === 46 ||                     // .
            i === 44 ||                     // ,
            i === 45 ||                     // -
            i === 58 ||                     // :
            i === 95) {                     // _

            safe.add(i);
        }
    }

    return safe;
}());
