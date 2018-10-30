'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * This source code is licensed under the MIT license found in the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */

exports.createReporterError = createReporterError;
exports.createArrayReporterError = createArrayReporterError;
exports.validateReporters = validateReporters;

var _jestValidate;

function _load_jestValidate() {
  return _jestValidate = require('jest-validate');
}

var _chalk;

function _load_chalk() {
  return _chalk = _interopRequireDefault(require('chalk'));
}

var _jestGetType;

function _load_jestGetType() {
  return _jestGetType = _interopRequireDefault(require('jest-get-type'));
}

var _utils;

function _load_utils() {
  return _utils = require('./utils');
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const validReporterTypes = ['array', 'string'];
const ERROR = `${(_utils || _load_utils()).BULLET}Reporter Validation Error`;

/**
 * Reporter Validation Error is thrown if the given arguments
 * within the reporter are not valid.
 *
 * This is a highly specific reporter error and in the future will be
 * merged with jest-validate. Till then, we can make use of it. It works
 * and that's what counts most at this time.
 */
function createReporterError(reporterIndex, reporterValue) {
  const errorMessage = `  Reporter at index ${reporterIndex} must be of type:\n` + `    ${(_chalk || _load_chalk()).default.bold.green(validReporterTypes.join(' or '))}\n` + `  but instead received:\n` + `    ${(_chalk || _load_chalk()).default.bold.red((0, (_jestGetType || _load_jestGetType()).default)(reporterValue))}`;

  return new (_jestValidate || _load_jestValidate()).ValidationError(ERROR, errorMessage, (_utils || _load_utils()).DOCUMENTATION_NOTE);
}

function createArrayReporterError(arrayReporter, reporterIndex, valueIndex, value, expectedType, valueName) {
  const errorMessage = `  Unexpected value for ${valueName} ` + `at index ${valueIndex} of reporter at index ${reporterIndex}\n` + '  Expected:\n' + `    ${(_chalk || _load_chalk()).default.bold.red(expectedType)}\n` + '  Got:\n' + `    ${(_chalk || _load_chalk()).default.bold.green((0, (_jestGetType || _load_jestGetType()).default)(value))}\n` + `  Reporter configuration:\n` + `    ${(_chalk || _load_chalk()).default.bold.green(JSON.stringify(arrayReporter, null, 2).split('\n').join('\n    '))}`;

  return new (_jestValidate || _load_jestValidate()).ValidationError(ERROR, errorMessage, (_utils || _load_utils()).DOCUMENTATION_NOTE);
}

function validateReporters(reporterConfig) {
  return reporterConfig.every((reporter, index) => {
    if (Array.isArray(reporter)) {
      validateArrayReporter(reporter, index);
    } else if (typeof reporter !== 'string') {
      throw createReporterError(index, reporter);
    }

    return true;
  });
}

function validateArrayReporter(arrayReporter, reporterIndex) {
  var _arrayReporter = _slicedToArray(arrayReporter, 2);

  const path = _arrayReporter[0],
        options = _arrayReporter[1];

  if (typeof path !== 'string') {
    throw createArrayReporterError(arrayReporter, reporterIndex, 0, path, 'string', 'Path');
  } else if (typeof options !== 'object') {
    throw createArrayReporterError(arrayReporter, reporterIndex, 1, options, 'object', 'Reporter Configuration');
  }
}