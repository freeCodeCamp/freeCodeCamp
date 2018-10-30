'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Prompt;

function _load_Prompt() {
  return _Prompt = _interopRequireDefault(require('./lib/Prompt'));
}

var _pattern_mode_helpers;

function _load_pattern_mode_helpers() {
  return _pattern_mode_helpers = require('./lib/pattern_mode_helpers');
}

var _pattern_prompt;

function _load_pattern_prompt() {
  return _pattern_prompt = _interopRequireDefault(require('./pattern_prompt'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TestNamePatternPrompt extends (_pattern_prompt || _load_pattern_prompt()).default {

  constructor(pipe, prompt) {
    super(pipe, prompt);
    this._entityName = 'tests';
    this._cachedTestResults = [];
  }

  _onChange(pattern, options) {
    super._onChange(pattern, options);
    this._printPrompt(pattern, options);
  }

  _printPrompt(pattern, options) {
    const pipe = this._pipe;
    (0, (_pattern_mode_helpers || _load_pattern_mode_helpers()).printPatternCaret)(pattern, pipe);
    (0, (_pattern_mode_helpers || _load_pattern_mode_helpers()).printRestoredPatternCaret)(pattern, this._currentUsageRows, pipe);
  }

  _getMatchedTests(pattern) {
    let regex;

    try {
      regex = new RegExp(pattern, 'i');
    } catch (e) {
      return [];
    }

    const matchedTests = [];

    this._cachedTestResults.forEach((_ref) => {
      let testResults = _ref.testResults;
      return testResults.forEach((_ref2) => {
        let title = _ref2.title;

        if (regex.test(title)) {
          matchedTests.push(title);
        }
      });
    });

    return matchedTests;
  }

  updateCachedTestResults() {
    let testResults = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    this._cachedTestResults = testResults;
  }
}
exports.default = TestNamePatternPrompt; /**
                                          * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
                                          *
                                          * This source code is licensed under the MIT license found in the
                                          * LICENSE file in the root directory of this source tree.
                                          *
                                          * 
                                          */