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
"use strict";

/* Validation functions copied from check-types package - https://www.npmjs.com/package/check-types */

const toString = Object.prototype.toString;

function isFunction(data) {
  return typeof data === "function";
}

function isNonEmptyString(data) {
  return isString(data) && data !== "";
}

function isDate(data) {
  return isInstanceStrict(data, Date) && isInteger(data.getTime());
}

function isEmptyString(data) {
  return data === "" || (data instanceof String && data.toString() === "");
}

function isString(data) {
  return typeof data === "string" || data instanceof String;
}

function isObject(data) {
  return toString.call(data) === "[object Object]";
}
function isInstanceStrict(data, prototype) {
  try {
    return data instanceof prototype;
  } catch (error) {
    return false;
  }
}

function isUrlStringOrObject(data) {
  return (
    isNonEmptyString(data) ||
    (isObject(data) &&
      "hostname" in data &&
      "pathname" in data &&
      "protocol" in data) ||
    isInstanceStrict(data, URL)
  );
}

function isInteger(data) {
  return typeof data === "number" && data % 1 === 0;
}
/* End validation functions */

function validate(bool, cb, options) {
  if (!isFunction(cb)) {
    options = cb;
    cb = null;
  }
  if (!isObject(options)) options = { Error: "Failed Check" };
  if (!bool) {
    if (cb) {
      cb(new ParameterError(options));
    } else {
      throw new ParameterError(options);
    }
  }
}

class ParameterError extends Error {
  constructor(...params) {
    super(...params);
  }
}

exports.ParameterError = ParameterError;
exports.isFunction = isFunction;
exports.isNonEmptyString = isNonEmptyString;
exports.isDate = isDate;
exports.isEmptyString = isEmptyString;
exports.isString = isString;
exports.isObject = isObject;
exports.isUrlStringOrObject = isUrlStringOrObject;
exports.validate = validate;
