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

class TestPathPatternPrompt extends (_pattern_prompt || _load_pattern_prompt()).default {

  constructor(pipe, prompt) {
    super(pipe, prompt);
    this._entityName = 'filenames';
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
    } catch (e) {}

    let tests = [];
    if (regex) {
      this._searchSources.forEach((_ref) => {
        let searchSource = _ref.searchSource,
            context = _ref.context;

        tests = tests.concat(searchSource.findMatchingTests(pattern).tests);
      });
    }

    return tests;
  }

  updateSearchSources(searchSources) {
    this._searchSources = searchSources;
  }
}
exports.default = TestPathPatternPrompt; /**
                                          * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
                                          *
                                          * This source code is licensed under the MIT license found in the
                                          * LICENSE file in the root directory of this source tree.
                                          *
                                          * 
                                          */