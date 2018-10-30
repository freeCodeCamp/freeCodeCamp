'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = JsApiReporter;
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

const noopTimer = {
  start() {},
  elapsed() {
    return 0;
  }
};

function JsApiReporter(options) {
  const timer = options.timer || noopTimer;
  let status = 'loaded';

  this.started = false;
  this.finished = false;
  this.runDetails = {};

  this.jasmineStarted = function () {
    this.started = true;
    status = 'started';
    timer.start();
  };

  let executionTime;

  this.jasmineDone = function (runDetails) {
    this.finished = true;
    this.runDetails = runDetails;
    executionTime = timer.elapsed();
    status = 'done';
  };

  this.status = function () {
    return status;
  };

  const suites = [];
  const suites_hash = {};

  this.suiteStarted = function (result) {
    suites_hash[result.id] = result;
  };

  this.suiteDone = function (result) {
    storeSuite(result);
  };

  this.suiteResults = function (index, length) {
    return suites.slice(index, index + length);
  };

  function storeSuite(result) {
    suites.push(result);
    suites_hash[result.id] = result;
  }

  this.suites = function () {
    return suites_hash;
  };

  const specs = [];

  this.specDone = function (result) {
    specs.push(result);
  };

  this.specResults = function (index, length) {
    return specs.slice(index, index + length);
  };

  this.specs = function () {
    return specs;
  };

  this.executionTime = function () {
    return executionTime;
  };
}