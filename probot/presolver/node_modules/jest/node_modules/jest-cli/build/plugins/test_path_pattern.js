'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _base_watch_plugin;

function _load_base_watch_plugin() {
  return _base_watch_plugin = _interopRequireDefault(require('../base_watch_plugin'));
}

var _test_path_pattern_prompt;

function _load_test_path_pattern_prompt() {
  return _test_path_pattern_prompt = _interopRequireDefault(require('../test_path_pattern_prompt'));
}

var _active_filters_message;

function _load_active_filters_message() {
  return _active_filters_message = _interopRequireDefault(require('../lib/active_filters_message'));
}

var _Prompt;

function _load_Prompt() {
  return _Prompt = _interopRequireDefault(require('../lib/Prompt'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TestPathPatternPlugin extends (_base_watch_plugin || _load_base_watch_plugin()).default {

  constructor(options) {
    super(options);
    this._prompt = new (_Prompt || _load_Prompt()).default();
  }

  getUsageInfo() {
    return {
      key: 'p'.codePointAt(0),
      prompt: 'filter by a filename regex pattern'
    };
  }

  onKey(key) {
    this._prompt.put(key);
  }

  run(globalConfig, updateConfigAndRun) {
    return new Promise((res, rej) => {
      const testPathPatternPrompt = new (_test_path_pattern_prompt || _load_test_path_pattern_prompt()).default(this._stdout, this._prompt);

      testPathPatternPrompt.run(value => {
        updateConfigAndRun({ testPathPattern: value });
        res();
      }, rej, {
        header: (0, (_active_filters_message || _load_active_filters_message()).default)(globalConfig)
      });
    });
  }
} /**
   * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * 
   */

exports.default = TestPathPatternPlugin;