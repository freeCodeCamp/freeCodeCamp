'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.test = exports.serialize = undefined;

var _collections = require('../collections');

/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

const asymmetricMatcher = Symbol.for('jest.asymmetricMatcher');
const SPACE = ' ';

const serialize = exports.serialize = (val, config, indentation, depth, refs, printer) => {
  const stringedValue = val.toString();

  if (stringedValue === 'ArrayContaining') {
    if (++depth > config.maxDepth) {
      return '[' + stringedValue + ']';
    }
    return stringedValue + SPACE + '[' + (0, _collections.printListItems)(val.sample, config, indentation, depth, refs, printer) + ']';
  }

  if (stringedValue === 'ObjectContaining') {
    if (++depth > config.maxDepth) {
      return '[' + stringedValue + ']';
    }
    return stringedValue + SPACE + '{' + (0, _collections.printObjectProperties)(val.sample, config, indentation, depth, refs, printer) + '}';
  }

  if (stringedValue === 'StringMatching') {
    return stringedValue + SPACE + printer(val.sample, config, indentation, depth, refs);
  }

  if (stringedValue === 'StringContaining') {
    return stringedValue + SPACE + printer(val.sample, config, indentation, depth, refs);
  }

  return val.toAsymmetricMatcher();
};

const test = exports.test = val => val && val.$$typeof === asymmetricMatcher;

exports.default = { serialize, test };