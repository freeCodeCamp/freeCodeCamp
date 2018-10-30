"use strict";

exports.__esModule = true;

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

exports.needsWhitespace = needsWhitespace;
exports.needsWhitespaceBefore = needsWhitespaceBefore;
exports.needsWhitespaceAfter = needsWhitespaceAfter;
exports.needsParens = needsParens;

var _whitespace = require("./whitespace");

var _whitespace2 = _interopRequireDefault(_whitespace);

var _parentheses = require("./parentheses");

var parens = _interopRequireWildcard(_parentheses);

var _babelTypes = require("babel-types");

var t = _interopRequireWildcard(_babelTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function expandAliases(obj) {
  var newObj = {};

  function add(type, func) {
    var fn = newObj[type];
    newObj[type] = fn ? function (node, parent, stack) {
      var result = fn(node, parent, stack);

      return result == null ? func(node, parent, stack) : result;
    } : func;
  }

  for (var _iterator = (0, _keys2.default)(obj), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var type = _ref;


    var aliases = t.FLIPPED_ALIAS_KEYS[type];
    if (aliases) {
      for (var _iterator2 = aliases, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);;) {
        var _ref2;

        if (_isArray2) {
          if (_i2 >= _iterator2.length) break;
          _ref2 = _iterator2[_i2++];
        } else {
          _i2 = _iterator2.next();
          if (_i2.done) break;
          _ref2 = _i2.value;
        }

        var alias = _ref2;

        add(alias, obj[type]);
      }
    } else {
      add(type, obj[type]);
    }
  }

  return newObj;
}

var expandedParens = expandAliases(parens);
var expandedWhitespaceNodes = expandAliases(_whitespace2.default.nodes);
var expandedWhitespaceList = expandAliases(_whitespace2.default.list);

function find(obj, node, parent, printStack) {
  var fn = obj[node.type];
  return fn ? fn(node, parent, printStack) : null;
}

function isOrHasCallExpression(node) {
  if (t.isCallExpression(node)) {
    return true;
  }

  if (t.isMemberExpression(node)) {
    return isOrHasCallExpression(node.object) || !node.computed && isOrHasCallExpression(node.property);
  } else {
    return false;
  }
}

function needsWhitespace(node, parent, type) {
  if (!node) return 0;

  if (t.isExpressionStatement(node)) {
    node = node.expression;
  }

  var linesInfo = find(expandedWhitespaceNodes, node, parent);

  if (!linesInfo) {
    var items = find(expandedWhitespaceList, node, parent);
    if (items) {
      for (var i = 0; i < items.length; i++) {
        linesInfo = needsWhitespace(items[i], node, type);
        if (linesInfo) break;
      }
    }
  }

  return linesInfo && linesInfo[type] || 0;
}

function needsWhitespaceBefore(node, parent) {
  return needsWhitespace(node, parent, "before");
}

function needsWhitespaceAfter(node, parent) {
  return needsWhitespace(node, parent, "after");
}

function needsParens(node, parent, printStack) {
  if (!parent) return false;

  if (t.isNewExpression(parent) && parent.callee === node) {
    if (isOrHasCallExpression(node)) return true;
  }

  return find(expandedParens, node, parent, printStack);
}