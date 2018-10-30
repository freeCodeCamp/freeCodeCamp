'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.printElementAsLeaf = exports.printElement = exports.printComment = exports.printText = exports.printChildren = exports.printProps = undefined;

var _escape_html = require('./escape_html');

var _escape_html2 = _interopRequireDefault(_escape_html);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Return empty string if keys is empty.
/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

const printProps = exports.printProps = (keys, props, config, indentation, depth, refs, printer) => {
  const indentationNext = indentation + config.indent;
  const colors = config.colors;
  return keys.map(key => {
    const value = props[key];
    let printed = printer(value, config, indentationNext, depth, refs);

    if (typeof value !== 'string') {
      if (printed.indexOf('\n') !== -1) {
        printed = config.spacingOuter + indentationNext + printed + config.spacingOuter + indentation;
      }
      printed = '{' + printed + '}';
    }

    return config.spacingInner + indentation + colors.prop.open + key + colors.prop.close + '=' + colors.value.open + printed + colors.value.close;
  }).join('');
};

// Return empty string if children is empty.
const printChildren = exports.printChildren = (children, config, indentation, depth, refs, printer) => {
  return children.map(child => config.spacingOuter + indentation + (typeof child === 'string' ? printText(child, config) : printer(child, config, indentation, depth, refs))).join('');
};

const printText = exports.printText = (text, config) => {
  const contentColor = config.colors.content;
  return contentColor.open + (0, _escape_html2.default)(text) + contentColor.close;
};

const printComment = exports.printComment = (comment, config) => {
  const commentColor = config.colors.comment;
  return commentColor.open + '<!--' + (0, _escape_html2.default)(comment) + '-->' + commentColor.close;
};

// Separate the functions to format props, children, and element,
// so a plugin could override a particular function, if needed.
// Too bad, so sad: the traditional (but unnecessary) space
// in a self-closing tagColor requires a second test of printedProps.
const printElement = exports.printElement = (type, printedProps, printedChildren, config, indentation) => {
  const tagColor = config.colors.tag;
  return tagColor.open + '<' + type + (printedProps && tagColor.close + printedProps + config.spacingOuter + indentation + tagColor.open) + (printedChildren ? '>' + tagColor.close + printedChildren + config.spacingOuter + indentation + tagColor.open + '</' + type : (printedProps && !config.min ? '' : ' ') + '/') + '>' + tagColor.close;
};

const printElementAsLeaf = exports.printElementAsLeaf = (type, config) => {
  const tagColor = config.colors.tag;
  return tagColor.open + '<' + type + tagColor.close + ' …' + tagColor.open + ' />' + tagColor.close;
};