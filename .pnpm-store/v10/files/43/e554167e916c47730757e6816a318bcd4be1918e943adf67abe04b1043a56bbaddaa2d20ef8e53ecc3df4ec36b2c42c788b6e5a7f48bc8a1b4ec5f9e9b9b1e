'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = getValue;
exports.getLiteralValue = getLiteralValue;

var _Literal = require('./Literal');

var _Literal2 = _interopRequireDefault(_Literal);

var _JSXElement = require('./JSXElement');

var _JSXElement2 = _interopRequireDefault(_JSXElement);

var _JSXText = require('./JSXText');

var _JSXText2 = _interopRequireDefault(_JSXText);

var _JSXFragment = require('./JSXFragment');

var _JSXFragment2 = _interopRequireDefault(_JSXFragment);

var _expressions = require('./expressions');

var _expressions2 = _interopRequireDefault(_expressions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Composition map of types to their extractor functions.
var TYPES = {
  Literal: _Literal2.default,
  JSXElement: _JSXElement2.default,
  JSXExpressionContainer: _expressions2.default,
  JSXText: _JSXText2.default,
  JSXFragment: _JSXFragment2.default
};

// Composition map of types to their extractor functions to handle literals.
var LITERAL_TYPES = _extends({}, TYPES, {
  JSXElement: function JSXElement() {
    return null;
  },
  JSXExpressionContainer: _expressions.extractLiteral
});

/**
 * This function maps an AST value node
 * to its correct extractor function for its
 * given type.
 *
 * This will map correctly for *all* possible types.
 *
 * @param value - AST Value object on a JSX Attribute.
 */
function getValue(value) {
  if (!TYPES[value.type]) console.log(value.type);
  return TYPES[value.type](value);
}

/**
 * This function maps an AST value node
 * to its correct extractor function for its
 * given type.
 *
 * This will map correctly for *some* possible types that map to literals.
 *
 * @param value - AST Value object on a JSX Attribute.
 */
function getLiteralValue(value) {
  return LITERAL_TYPES[value.type](value);
}