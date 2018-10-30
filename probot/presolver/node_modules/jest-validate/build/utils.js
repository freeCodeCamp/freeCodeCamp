'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDidYouMeanMessage = exports.logValidationWarning = exports.ValidationError = exports.format = exports.WARNING = exports.ERROR = exports.DEPRECATION = undefined;

var _chalk;

function _load_chalk() {
  return _chalk = _interopRequireDefault(require('chalk'));
}

var _prettyFormat;

function _load_prettyFormat() {
  return _prettyFormat = _interopRequireDefault(require('pretty-format'));
}

var _leven;

function _load_leven() {
  return _leven = _interopRequireDefault(require('leven'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const BULLET = (_chalk || _load_chalk()).default.bold('\u25cf'); /**
                                                                  * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
                                                                  *
                                                                  * This source code is licensed under the MIT license found in the
                                                                  * LICENSE file in the root directory of this source tree.
                                                                  *
                                                                  * 
                                                                  */

const DEPRECATION = exports.DEPRECATION = `${BULLET} Deprecation Warning`;
const ERROR = exports.ERROR = `${BULLET} Validation Error`;
const WARNING = exports.WARNING = `${BULLET} Validation Warning`;

const format = exports.format = value => typeof value === 'function' ? value.toString() : (0, (_prettyFormat || _load_prettyFormat()).default)(value, { min: true });

class ValidationError extends Error {

  constructor(name, message, comment) {
    super();
    comment = comment ? '\n\n' + comment : '\n';
    this.name = '';
    this.message = (_chalk || _load_chalk()).default.red((_chalk || _load_chalk()).default.bold(name) + ':\n\n' + message + comment);
    Error.captureStackTrace(this, () => {});
  }
}

exports.ValidationError = ValidationError;
const logValidationWarning = exports.logValidationWarning = (name, message, comment) => {
  comment = comment ? '\n\n' + comment : '\n';
  console.warn((_chalk || _load_chalk()).default.yellow((_chalk || _load_chalk()).default.bold(name) + ':\n\n' + message + comment));
};

const createDidYouMeanMessage = exports.createDidYouMeanMessage = (unrecognized, allowedOptions) => {
  const suggestion = allowedOptions.find(option => {
    const steps = (0, (_leven || _load_leven()).default)(option, unrecognized);
    return steps < 3;
  });

  return suggestion ? `Did you mean ${(_chalk || _load_chalk()).default.bold(format(suggestion))}?` : '';
};