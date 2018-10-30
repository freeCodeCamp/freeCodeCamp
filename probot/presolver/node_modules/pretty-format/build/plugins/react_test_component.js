'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.test = exports.serialize = undefined;

var _markup = require('./lib/markup');

/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

const testSymbol = Symbol.for('react.test.json');

const serialize = exports.serialize = (object, config, indentation, depth, refs, printer) => ++depth > config.maxDepth ? (0, _markup.printElementAsLeaf)(object.type, config) : (0, _markup.printElement)(object.type, object.props ? (0, _markup.printProps)(Object.keys(object.props).sort(),
// Despite ternary expression, Flow 0.51.0 found incorrect error:
// undefined is incompatible with the expected param type of Object
// $FlowFixMe
object.props, config, indentation + config.indent, depth, refs, printer) : '', object.children ? (0, _markup.printChildren)(object.children, config, indentation + config.indent, depth, refs, printer) : '', config, indentation);

const test = exports.test = val => val && val.$$typeof === testSymbol;

exports.default = { serialize, test };