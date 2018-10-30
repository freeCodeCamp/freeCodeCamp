'use strict';

var _create_spy = require('./create_spy');

var _create_spy2 = _interopRequireDefault(_create_spy);

var _Env = require('./Env');

var _Env2 = _interopRequireDefault(_Env);

var _js_api_reporter = require('./js_api_reporter');

var _js_api_reporter2 = _interopRequireDefault(_js_api_reporter);

var _report_dispatcher = require('./report_dispatcher');

var _report_dispatcher2 = _interopRequireDefault(_report_dispatcher);

var _Spec = require('./Spec');

var _Spec2 = _interopRequireDefault(_Spec);

var _spy_registry = require('./spy_registry');

var _spy_registry2 = _interopRequireDefault(_spy_registry);

var _Suite = require('./Suite');

var _Suite2 = _interopRequireDefault(_Suite);

var _Timer = require('./Timer');

var _Timer2 = _interopRequireDefault(_Timer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.create = function (createOptions) {
  const j$ = Object.assign({}, createOptions);

  j$.DEFAULT_TIMEOUT_INTERVAL = 5000;

  j$.getEnv = function (options) {
    const env = j$.currentEnv_ = j$.currentEnv_ || new j$.Env(options);
    //jasmine. singletons in here (setTimeout blah blah).
    return env;
  };
  j$.createSpy = _create_spy2.default;
  j$.Env = (0, _Env2.default)(j$);
  j$.JsApiReporter = _js_api_reporter2.default;
  j$.ReportDispatcher = _report_dispatcher2.default;
  j$.Spec = _Spec2.default;
  j$.SpyRegistry = _spy_registry2.default;
  j$.Suite = _Suite2.default;
  j$.Timer = _Timer2.default;
  j$.version = '2.5.2-light';

  return j$;
};

// Interface is a reserved word in strict mode, so can't export it as ESM
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

exports.interface = function (jasmine, env) {
  const jasmineInterface = {
    describe(description, specDefinitions) {
      return env.describe(description, specDefinitions);
    },

    xdescribe(description, specDefinitions) {
      return env.xdescribe(description, specDefinitions);
    },

    fdescribe(description, specDefinitions) {
      return env.fdescribe(description, specDefinitions);
    },

    it() {
      return env.it.apply(env, arguments);
    },

    xit() {
      return env.xit.apply(env, arguments);
    },

    fit() {
      return env.fit.apply(env, arguments);
    },

    beforeEach() {
      return env.beforeEach.apply(env, arguments);
    },

    afterEach() {
      return env.afterEach.apply(env, arguments);
    },

    beforeAll() {
      return env.beforeAll.apply(env, arguments);
    },

    afterAll() {
      return env.afterAll.apply(env, arguments);
    },

    pending() {
      return env.pending.apply(env, arguments);
    },

    fail() {
      return env.fail.apply(env, arguments);
    },

    spyOn(obj, methodName, accessType) {
      return env.spyOn(obj, methodName, accessType);
    },

    jsApiReporter: new jasmine.JsApiReporter({
      timer: new jasmine.Timer()
    }),

    jasmine
  };

  return jasmineInterface;
};