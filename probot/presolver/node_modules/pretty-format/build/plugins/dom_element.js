'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serialize = exports.test = undefined;

var _markup = require('./lib/markup');

/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

const ELEMENT_NODE = 1;
const TEXT_NODE = 3;
const COMMENT_NODE = 8;

const ELEMENT_REGEXP = /^((HTML|SVG)\w*)?Element$/;

const testNode = (nodeType, name) => nodeType === ELEMENT_NODE && ELEMENT_REGEXP.test(name) || nodeType === TEXT_NODE && name === 'Text' || nodeType === COMMENT_NODE && name === 'Comment';

const test = exports.test = val => val && val.constructor && val.constructor.name && testNode(val.nodeType, val.constructor.name);

// Convert array of attribute objects to keys array and props object.
const keysMapper = attribute => attribute.name;
const propsReducer = (props, attribute) => {
  props[attribute.name] = attribute.value;
  return props;
};

const serialize = exports.serialize = (node, config, indentation, depth, refs, printer) => {
  if (node.nodeType === TEXT_NODE) {
    return (0, _markup.printText)(node.data, config);
  }

  if (node.nodeType === COMMENT_NODE) {
    return (0, _markup.printComment)(node.data, config);
  }

  const type = node.tagName.toLowerCase();
  if (++depth > config.maxDepth) {
    return (0, _markup.printElementAsLeaf)(type, config);
  }

  return (0, _markup.printElement)(type, (0, _markup.printProps)(Array.prototype.map.call(node.attributes, keysMapper).sort(), Array.prototype.reduce.call(node.attributes, propsReducer, {}), config, indentation + config.indent, depth, refs, printer), (0, _markup.printChildren)(Array.prototype.slice.call(node.childNodes), config, indentation + config.indent, depth, refs, printer), config, indentation);
};

exports.default = { serialize, test };