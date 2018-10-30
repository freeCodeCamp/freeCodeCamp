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

const elementSymbol = Symbol.for('react.element');

// Given element.props.children, or subtree during recursive traversal,
// return flattened array of children.
const getChildren = function (arg) {
  let children = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (Array.isArray(arg)) {
    arg.forEach(item => {
      getChildren(item, children);
    });
  } else if (arg != null && arg !== false) {
    children.push(arg);
  }
  return children;
};

const getType = element => {
  if (typeof element.type === 'string') {
    return element.type;
  }
  if (typeof element.type === 'function') {
    return element.type.displayName || element.type.name || 'Unknown';
  }
  return 'UNDEFINED';
};

const serialize = exports.serialize = (element, config, indentation, depth, refs, printer) => ++depth > config.maxDepth ? (0, _markup.printElementAsLeaf)(getType(element), config) : (0, _markup.printElement)(getType(element), (0, _markup.printProps)(Object.keys(element.props).filter(key => key !== 'children').sort(), element.props, config, indentation + config.indent, depth, refs, printer), (0, _markup.printChildren)(getChildren(element.props.children), config, indentation + config.indent, depth, refs, printer), config, indentation);

const test = exports.test = val => val && val.$$typeof === elementSymbol;

exports.default = { serialize, test };