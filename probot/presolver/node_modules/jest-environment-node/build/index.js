'use strict';

var _vm;

function _load_vm() {
  return _vm = _interopRequireDefault(require('vm'));
}

var _jestUtil;

function _load_jestUtil() {
  return _jestUtil = require('jest-util');
}

var _jestMock;

function _load_jestMock() {
  return _jestMock = _interopRequireDefault(require('jest-mock'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class NodeEnvironment {

  constructor(config) {
    this.context = (_vm || _load_vm()).default.createContext();
    const global = this.global = (_vm || _load_vm()).default.runInContext('this', Object.assign(this.context, config.testEnvironmentOptions));
    global.global = global;
    global.clearInterval = clearInterval;
    global.clearTimeout = clearTimeout;
    global.Promise = Promise;
    global.setInterval = setInterval;
    global.setTimeout = setTimeout;
    (0, (_jestUtil || _load_jestUtil()).installCommonGlobals)(global, config.globals);
    this.moduleMocker = new (_jestMock || _load_jestMock()).default.ModuleMocker(global);

    const timerIdToRef = id => ({
      id,
      ref() {
        return this;
      },
      unref() {
        return this;
      }
    });

    const timerRefToId = timer => {
      return timer && timer.id || null;
    };

    const timerConfig = {
      idToRef: timerIdToRef,
      refToId: timerRefToId
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
    this.context = null;
    this.fakeTimers = null;
    return Promise.resolve();
  }

  // Disabling rule as return type depends on script's return type.
  /* eslint-disable flowtype/no-weak-types */
  runScript(script) {
    /* eslint-enable flowtype/no-weak-types */
    if (this.context) {
      return script.runInContext(this.context);
    }
    return null;
  }
} /**
   * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * 
   */

module.exports = NodeEnvironment;