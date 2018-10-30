'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SpyStrategy;
/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
// This file is a heavily modified fork of Jasmine. Original license:
/*
Copyright (c) 2008-2016 Pivotal Labs

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/* eslint-disable sort-keys */

function SpyStrategy(options) {
  options = options || {};

  const identity = options.name || 'unknown';
  const originalFn = options.fn || function () {};
  const getSpy = options.getSpy || function () {};
  let plan = function () {};

  this.identity = function () {
    return identity;
  };

  this.exec = function () {
    return plan.apply(this, arguments);
  };

  this.callThrough = function () {
    plan = originalFn;
    return getSpy();
  };

  this.returnValue = function (value) {
    plan = function () {
      return value;
    };
    return getSpy();
  };

  this.returnValues = function () {
    const values = Array.prototype.slice.call(arguments);
    plan = function () {
      return values.shift();
    };
    return getSpy();
  };

  this.throwError = function (something) {
    const error = something instanceof Error ? something : new Error(something);
    plan = function () {
      throw error;
    };
    return getSpy();
  };

  this.callFake = function (fn) {
    if (typeof fn !== 'function') {
      throw new Error('Argument passed to callFake should be a function, got ' + fn);
    }
    plan = fn;
    return getSpy();
  };

  this.stub = function (fn) {
    plan = function () {};
    return getSpy();
  };
}