"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
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

function CallTracker() {
  let calls = [];

  this.track = function (context) {
    calls.push(context);
  };

  this.any = function () {
    return !!calls.length;
  };

  this.count = function () {
    return calls.length;
  };

  this.argsFor = function (index) {
    const call = calls[index];
    return call ? call.args : [];
  };

  this.all = function () {
    return calls;
  };

  this.allArgs = function () {
    const callArgs = [];
    for (let i = 0; i < calls.length; i++) {
      callArgs.push(calls[i].args);
    }

    return callArgs;
  };

  this.first = function () {
    return calls[0];
  };

  this.mostRecent = function () {
    return calls[calls.length - 1];
  };

  this.reset = function () {
    calls = [];
  };
}

exports.default = CallTracker;