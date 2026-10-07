'use strict';

const internals = {};


module.exports = function (input) {

    if (!input) {
        return '';
    }

    return input.replace(/[<>&\u2028\u2029]/g, internals.escape);
};


internals.escape = function (char) {

    return internals.replacements.get(char);
};


internals.replacements = new Map([
    ['<', '\\u003c'],
    ['>', '\\u003e'],
    ['&', '\\u0026'],
    ['\u2028', '\\u2028'],
    ['\u2029', '\\u2029']
]);
