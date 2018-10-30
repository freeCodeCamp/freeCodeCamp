'use strict';

var _jestUtil;

function _load_jestUtil() {
  return _jestUtil = require('jest-util');
}

var _jestMock;

function _load_jestMock() {
  return _jestMock = _interopRequireDefault(require('jest-mock'));
}

var _jsdom;

function _load_jsdom() {
  return _jsdom = require('jsdom');
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * 
 */

class JSDOMEnvironment {

  constructor(config) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    this.dom = new (_jsdom || _load_jsdom()).JSDOM('<!DOCTYPE html>', Object.assign({
      pretendToBeVisual: true,
      runScripts: 'dangerously',
      url: config.testURL,
      virtualConsole: new (_jsdom || _load_jsdom()).VirtualConsole().sendTo(options.console || console)
    }, config.testEnvironmentOptions));
    const global = this.global = this.dom.window.document.defaultView;
    // Node's error-message stack size is limited at 10, but it's pretty useful
    // to see more than that when a test fails.
    this.global.Error.stackTraceLimit = 100;
    (0, (_jestUtil || _load_jestUtil()).installCommonGlobals)(global, config.globals);

    // Report uncaught errors.
    this.errorEventListener = event => {
      if (userErrorListenerCount === 0 && event.error) {
        process.emit('uncaughtException', event.error);
      }
    };
    global.addEventListener('error', this.errorEventListener);

    // However, don't report them as uncaught if the user listens to 'error' event.
    // In that case, we assume the might have custom error handling logic.
    const originalAddListener = global.addEventListener;
    const originalRemoveListener = global.removeEventListener;
    let userErrorListenerCount = 0;
    global.addEventListener = function (name) {
      if (name === 'error') {
        userErrorListenerCount++;
      }
      return originalAddListener.apply(this, arguments);
    };
    global.removeEventListener = function (name) {
      if (name === 'error') {
        userErrorListenerCount--;
      }
      return originalRemoveListener.apply(this, arguments);
    };

    this.moduleMocker = new (_jestMock || _load_jestMock()).default.ModuleMocker(global);

    const timerConfig = {
      idToRef: id => id,
      refToId: ref => ref
    };

    this.fakeTimers = new (_jestUtil || _load_jestUtil()).FakeTimers({
      config,
      global,
      moduleMocker: this.moduleMocker,
      timerConfig
    });
  }

  setup() {
    return Promise.resolve();
  }

  teardown() {
    if (this.fakeTimers) {
      this.fakeTimers.dispose();
    }
    if (this.global) {
      if (this.errorEventListener) {
        this.global.removeEventListener('error', this.errorEventListener);
      }
      this.global.close();
    }
    this.errorEventListener = null;
    this.global = null;
    this.dom = null;
    this.fakeTimers = null;
    return Promise.resolve();
  }

  runScript(script) {
    if (this.dom) {
      return this.dom.runVMScript(script);
    }
    return null;
  }
}

module.exports = JSDOMEnvironment;