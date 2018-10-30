'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DOCUMENTATION_NOTE = undefined;
exports.default = validateCLIOptions;

var _chalk;

function _load_chalk() {
  return _chalk = _interopRequireDefault(require('chalk'));
}

var _jestConfig;

function _load_jestConfig() {
  return _jestConfig = require('jest-config');
}

var _utils;

function _load_utils() {
  return _utils = require('./utils');
}

var _deprecated;

function _load_deprecated() {
  return _deprecated = require('./deprecated');
}

var _default_config;

function _load_default_config() {
  return _default_config = _interopRequireDefault(require('./default_config'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

const BULLET = (_chalk || _load_chalk()).default.bold('\u25cf');
const DOCUMENTATION_NOTE = exports.DOCUMENTATION_NOTE = `  ${(_chalk || _load_chalk()).default.bold('CLI Options Documentation:')}
  https://facebook.github.io/jest/docs/en/cli.html
`;

const createCLIValidationError = (unrecognizedOptions, allowedOptions) => {
  let title = `${BULLET} Unrecognized CLI Parameter`;
  let message;
  const comment = `  ${(_chalk || _load_chalk()).default.bold('CLI Options Documentation')}:\n` + `  https://facebook.github.io/jest/docs/en/cli.html\n`;

  if (unrecognizedOptions.length === 1) {
    const unrecognized = unrecognizedOptions[0];
    const didYouMeanMessage = (0, (_utils || _load_utils()).createDidYouMeanMessage)(unrecognized, Array.from(allowedOptions));
    message = `  Unrecognized option ${(_chalk || _load_chalk()).default.bold((0, (_utils || _load_utils()).format)(unrecognized))}.` + (didYouMeanMessage ? ` ${didYouMeanMessage}` : '');
  } else {
    title += 's';
    message = `  Following options were not recognized:\n` + `  ${(_chalk || _load_chalk()).default.bold((0, (_utils || _load_utils()).format)(unrecognizedOptions))}`;
  }

  return new (_utils || _load_utils()).ValidationError(title, message, comment);
};

const logDeprecatedOptions = (deprecatedOptions, deprecationEntries, argv) => {
  deprecatedOptions.forEach(opt => {
    (0, (_deprecated || _load_deprecated()).deprecationWarning)(argv, opt, deprecationEntries, Object.assign({}, (_default_config || _load_default_config()).default, {
      comment: DOCUMENTATION_NOTE
    }));
  });
};

function validateCLIOptions(argv, options) {
  const yargsSpecialOptions = ['$0', '_', 'help', 'h'];
  const allowedOptions = Object.keys(options).reduce((acc, option) => acc.add(option).add(options[option].alias || option), new Set(yargsSpecialOptions));
  const unrecognizedOptions = Object.keys(argv).filter(arg => !allowedOptions.has(arg));

  if (unrecognizedOptions.length) {
    throw createCLIValidationError(unrecognizedOptions, allowedOptions);
  }

  const CLIDeprecations = Object.keys((_jestConfig || _load_jestConfig()).deprecationEntries).reduce((acc, entry) => {
    if (options[entry]) {
      acc[entry] = (_jestConfig || _load_jestConfig()).deprecationEntries[entry];
      if (options[entry].alias) {
        acc[options[entry].alias] = (_jestConfig || _load_jestConfig()).deprecationEntries[entry];
      }
    }
    return acc;
  }, {});
  const deprecations = new Set(Object.keys(CLIDeprecations));
  const deprecatedOptions = Object.keys(argv).filter(arg => deprecations.has(arg) && argv[arg] != null);

  if (deprecatedOptions.length) {
    logDeprecatedOptions(deprecatedOptions, CLIDeprecations, argv);
  }

  return true;
}