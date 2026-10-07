"use strict";
/* ************************************************************************************
Extracted from check-types.js
https://gitlab.com/philbooth/check-types.js

MIT License

Copyright (c) 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019 Phil Booth

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

************************************************************************************ */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParameterError = void 0;
exports.isNonEmptyString = isNonEmptyString;
exports.isDate = isDate;
exports.isEmptyString = isEmptyString;
exports.isString = isString;
exports.isObject = isObject;
exports.isInteger = isInteger;
exports.validate = validate;
const utils_1 = require("./utils");
/* Validation functions copied from check-types package - https://www.npmjs.com/package/check-types */
/** Determines whether the argument is a non-empty string. */
function isNonEmptyString(data) {
    return isString(data) && data !== '';
}
/** Determines whether the argument is a *valid* Date. */
function isDate(data) {
    return data instanceof Date && isInteger(data.getTime());
}
/** Determines whether the argument is the empty string. */
function isEmptyString(data) {
    return data === '' || (data instanceof String && data.toString() === '');
}
/** Determines whether the argument is a string. */
function isString(data) {
    return typeof data === 'string' || data instanceof String;
}
/** Determines whether the string representation of the argument is "[object Object]". */
function isObject(data) {
    return (0, utils_1.objectToString)(data) === '[object Object]';
}
/** Determines whether the argument is an integer. */
function isInteger(data) {
    return typeof data === 'number' && data % 1 === 0;
}
/* -- End validation functions -- */
/**
 * When the first argument is false, an error is created with the given message. If a callback is
 * provided, the error is passed to the callback, otherwise the error is thrown.
 */
function validate(bool, cbOrMessage, message) {
    if (bool)
        return; // Validation passes
    const cb = typeof cbOrMessage === 'function' ? cbOrMessage : undefined;
    let options = typeof cbOrMessage === 'function' ? message : cbOrMessage;
    // The default message prior to v5 was '[object Object]' due to a bug, and the message is kept
    // for backwards compatibility.
    if (!isObject(options))
        options = '[object Object]';
    const err = new ParameterError((0, utils_1.safeToString)(options));
    if (cb)
        cb(err);
    else
        throw err;
}
/**
 * Represents a validation error.
 * @public
 */
class ParameterError extends Error {
}
exports.ParameterError = ParameterError;
