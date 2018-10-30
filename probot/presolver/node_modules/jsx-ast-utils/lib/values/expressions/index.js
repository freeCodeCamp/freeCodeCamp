'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extract;
exports.extractLiteral = extractLiteral;

var _Literal = require('../Literal');

var _Literal2 = _interopRequireDefault(_Literal);

var _JSXElement = require('../JSXElement');

var _JSXElement2 = _interopRequireDefault(_JSXElement);

var _Identifier = require('./Identifier');

var _Identifier2 = _interopRequireDefault(_Identifier);

var _TaggedTemplateExpression = require('./TaggedTemplateExpression');

var _TaggedTemplateExpression2 = _interopRequireDefault(_TaggedTemplateExpression);

var _TemplateLiteral = require('./TemplateLiteral');

var _TemplateLiteral2 = _interopRequireDefault(_TemplateLiteral);

var _FunctionExpression = require('./FunctionExpression');

var _FunctionExpression2 = _interopRequireDefault(_FunctionExpression);

var _LogicalExpression = require('./LogicalExpression');

var _LogicalExpression2 = _interopRequireDefault(_LogicalExpression);

var _MemberExpression = require('./MemberExpression');

var _MemberExpression2 = _interopRequireDefault(_MemberExpression);

var _CallExpression = require('./CallExpression');

var _CallExpression2 = _interopRequireDefault(_CallExpression);

var _UnaryExpression = require('./UnaryExpression');

var _UnaryExpression2 = _interopRequireDefault(_UnaryExpression);

var _ThisExpression = require('./ThisExpression');

var _ThisExpression2 = _interopRequireDefault(_ThisExpression);

var _ConditionalExpression = require('./ConditionalExpression');

var _ConditionalExpression2 = _interopRequireDefault(_ConditionalExpression);

var _BinaryExpression = require('./BinaryExpression');

var _BinaryExpression2 = _interopRequireDefault(_BinaryExpression);

var _ObjectExpression = require('./ObjectExpression');

var _ObjectExpression2 = _interopRequireDefault(_ObjectExpression);

var _NewExpression = require('./NewExpression');

var _NewExpression2 = _interopRequireDefault(_NewExpression);

var _UpdateExpression = require('./UpdateExpression');

var _UpdateExpression2 = _interopRequireDefault(_UpdateExpression);

var _ArrayExpression = require('./ArrayExpression');

var _ArrayExpression2 = _interopRequireDefault(_ArrayExpression);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Composition map of types to their extractor functions.
var TYPES = {
  Identifier: _Identifier2.default,
  Literal: _Literal2.default,
  JSXElement: _JSXElement2.default,
  TaggedTemplateExpression: _TaggedTemplateExpression2.default,
  TemplateLiteral: _TemplateLiteral2.default,
  ArrowFunctionExpression: _FunctionExpression2.default,
  FunctionExpression: _FunctionExpression2.default,
  LogicalExpression: _LogicalExpression2.default,
  MemberExpression: _MemberExpression2.default,
  CallExpression: _CallExpression2.default,
  UnaryExpression: _UnaryExpression2.default,
  ThisExpression: _ThisExpression2.default,
  ConditionalExpression: _ConditionalExpression2.default,
  BinaryExpression: _BinaryExpression2.default,
  ObjectExpression: _ObjectExpression2.default,
  NewExpression: _NewExpression2.default,
  UpdateExpression: _UpdateExpression2.default,
  ArrayExpression: _ArrayExpression2.default
};

var noop = function noop() {
  return null;
};

// Composition map of types to their extractor functions to handle literals.
var LITERAL_TYPES = Object.assign({}, TYPES, {
  Literal: function Literal(value) {
    var extractedVal = TYPES.Literal.call(undefined, value);
    var isNull = extractedVal === null;
    // This will be convention for attributes that have null
    // value explicitly defined (<div prop={null} /> maps to 'null').
    return isNull ? 'null' : extractedVal;
  },
  Identifier: function Identifier(value) {
    var isUndefined = TYPES.Identifier.call(undefined, value) === undefined;
    return isUndefined ? undefined : null;
  },
  JSXElement: noop,
  ArrowFunctionExpression: noop,
  FunctionExpression: noop,
  LogicalExpression: noop,
  MemberExpression: noop,
  CallExpression: noop,
  UnaryExpression: function UnaryExpression(value) {
    var extractedVal = TYPES.UnaryExpression.call(undefined, value);
    return extractedVal === undefined ? null : extractedVal;
  },
  UpdateExpression: function UpdateExpression(value) {
    var extractedVal = TYPES.UpdateExpression.call(undefined, value);
    return extractedVal === undefined ? null : extractedVal;
  },
  ThisExpression: noop,
  ConditionalExpression: noop,
  BinaryExpression: noop,
  ObjectExpression: noop,
  NewExpression: noop,
  ArrayExpression: function ArrayExpression(value) {
    var extractedVal = TYPES.ArrayExpression.call(undefined, value);
    return extractedVal.filter(function (val) {
      return val !== null;
    });
  }
});

var errorMessage = function errorMessage(expression) {
  return 'The prop value with an expression type of ' + expression + ' could not be resolved.\n  Please file issue to get this fixed immediately.';
};

/**
 * This function maps an AST value node
 * to its correct extractor function for its
 * given type.
 *
 * This will map correctly for *all* possible expression types.
 *
 * @param - value - AST Value object with type `JSXExpressionContainer`
 * @returns The extracted value.
 */
function extract(value) {
  // Value will not have the expression property when we recurse.
  // The type for expression on ArrowFunctionExpression is a boolean.
  var expression = void 0;
  if (typeof value.expression !== 'boolean' && value.expression) {
    expression = value.expression;
  } else {
    expression = value;
  }
  var _expression = expression,
      type = _expression.type;


  if (TYPES[type] === undefined) {
    throw new Error(errorMessage(type));
  }

  return TYPES[type](expression);
}

/**
 * This function maps an AST value node
 * to its correct extractor function for its
 * given type.
 *
 * This will map correctly for *some* possible types that map to literals.
 *
 * @param - value - AST Value object with type `JSXExpressionContainer`
 * @returns The extracted value.
 */
function extractLiteral(value) {
  // Value will not have the expression property when we recurse.
  var expression = value.expression || value;
  var type = expression.type;


  if (LITERAL_TYPES[type] === undefined) {
    throw new Error(errorMessage(type));
  }

  return LITERAL_TYPES[type](expression);
}