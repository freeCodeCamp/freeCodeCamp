'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _deprecated;

function _load_deprecated() {
  return _deprecated = require('./deprecated');
}

var _warnings;

function _load_warnings() {
  return _warnings = require('./warnings');
}

var _errors;

function _load_errors() {
  return _errors = require('./errors');
}

var _example_config;

function _load_example_config() {
  return _example_config = _interopRequireDefault(require('./example_config'));
}

var _condition;

function _load_condition() {
  return _condition = _interopRequireDefault(require('./condition'));
}

var _utils;

function _load_utils() {
  return _utils = require('./utils');
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  comment: '',
  condition: (_condition || _load_condition()).default,
  deprecate: (_deprecated || _load_deprecated()).deprecationWarning,
  deprecatedConfig: {},
  error: (_errors || _load_errors()).errorMessage,
  exampleConfig: (_example_config || _load_example_config()).default,
  title: {
    deprecation: (_utils || _load_utils()).DEPRECATION,
    error: (_utils || _load_utils()).ERROR,
    warning: (_utils || _load_utils()).WARNING
  },
  unknown: (_warnings || _load_warnings()).unknownOptionWarning
}; /**
    * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
    *
    * This source code is licensed under the MIT license found in the
    * LICENSE file in the root directory of this source tree.
    *
    * 
    */