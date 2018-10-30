'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.worker = undefined;

let worker = exports.worker = (() => {
  var _ref2 = _asyncToGenerator(function* (_ref) {
    let config = _ref.config,
        globalConfig = _ref.globalConfig,
        path = _ref.path,
        rawModuleMap = _ref.rawModuleMap;

    try {
      return yield (0, (_run_test || _load_run_test()).default)(path, globalConfig, config, getResolver(config, rawModuleMap));
    } catch (error) {
      throw formatError(error);
    }
  });

  return function worker(_x) {
    return _ref2.apply(this, arguments);
  };
})();

var _exit;

function _load_exit() {
  return _exit = _interopRequireDefault(require('exit'));
}

var _jestHasteMap;

function _load_jestHasteMap() {
  return _jestHasteMap = _interopRequireDefault(require('jest-haste-map'));
}

var _jestMessageUtil;

function _load_jestMessageUtil() {
  return _jestMessageUtil = require('jest-message-util');
}

var _jestRuntime;

function _load_jestRuntime() {
  return _jestRuntime = _interopRequireDefault(require('jest-runtime'));
}

var _run_test;

function _load_run_test() {
  return _run_test = _interopRequireDefault(require('./run_test'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * This source code is licensed under the MIT license found in the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */

// Make sure uncaught errors are logged before we exit.
process.on('uncaughtException', err => {
  console.error(err.stack);
  (0, (_exit || _load_exit()).default)(1);
});

const formatError = error => {
  if (typeof error === 'string') {
    var _separateMessageFromS = (0, (_jestMessageUtil || _load_jestMessageUtil()).separateMessageFromStack)(error);

    const message = _separateMessageFromS.message,
          stack = _separateMessageFromS.stack;

    return {
      message,
      stack,
      type: 'Error'
    };
  }

  return {
    code: error.code || undefined,
    message: error.message,
    stack: error.stack,
    type: 'Error'
  };
};

const resolvers = Object.create(null);
const getResolver = (config, rawModuleMap) => {
  // In watch mode, the raw module map with all haste modules is passed from
  // the test runner to the watch command. This is because jest-haste-map's
  // watch mode does not persist the haste map on disk after every file change.
  // To make this fast and consistent, we pass it from the TestRunner.
  if (rawModuleMap) {
    return (_jestRuntime || _load_jestRuntime()).default.createResolver(config, new (_jestHasteMap || _load_jestHasteMap()).default.ModuleMap(rawModuleMap));
  } else {
    const name = config.name;
    if (!resolvers[name]) {
      resolvers[name] = (_jestRuntime || _load_jestRuntime()).default.createResolver(config, (_jestRuntime || _load_jestRuntime()).default.createHasteMap(config).readModuleMap());
    }
    return resolvers[name];
  }
};