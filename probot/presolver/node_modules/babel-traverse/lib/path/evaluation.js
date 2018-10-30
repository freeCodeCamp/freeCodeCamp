"use strict";

exports.__esModule = true;

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _map = require("babel-runtime/core-js/map");

var _map2 = _interopRequireDefault(_map);

exports.evaluateTruthy = evaluateTruthy;
exports.evaluate = evaluate;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VALID_CALLEES = ["String", "Number", "Math"];
var INVALID_METHODS = ["random"];

function evaluateTruthy() {
  var res = this.evaluate();
  if (res.confident) return !!res.value;
}

function evaluate() {
  var confident = true;
  var deoptPath = void 0;
  var seen = new _map2.default();

  function deopt(path) {
    if (!confident) return;
    deoptPath = path;
    confident = false;
  }

  var value = evaluate(this);
  if (!confident) value = undefined;
  return {
    confident: confident,
    deopt: deoptPath,
    value: value
  };

  function evaluate(path) {
    var node = path.node;


    if (seen.has(node)) {
      var existing = seen.get(node);
      if (existing.resolved) {
        return existing.value;
      } else {
        deopt(path);
        return;
      }
    } else {
      var item = { resolved: false };
      seen.set(node, item);

      var val = _evaluate(path);
      if (confident) {
        item.resolved = true;
        item.value = val;
      }
      return val;
    }
  }

  function _evaluate(path) {
    if (!confident) return;

    var node = path.node;


    if (path.isSequenceExpression()) {
      var exprs = path.get("expressions");
      return evaluate(exprs[exprs.length - 1]);
    }

    if (path.isStringLiteral() || path.isNumericLiteral() || path.isBooleanLiteral()) {
      return node.value;
    }

    if (path.isNullLiteral()) {
      return null;
    }

    if (path.isTemplateLiteral()) {
      var str = "";

      var i = 0;
      var _exprs = path.get("expressions");

      for (var _iterator = node.quasis, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var elem = _ref;

        if (!confident) break;

        str += elem.value.cooked;

        var expr = _exprs[i++];
        if (expr) str += String(evaluate(expr));
      }

      if (!confident) return;
      return str;
    }

    if (path.isConditionalExpression()) {
      var testResult = evaluate(path.get("test"));
      if (!confident) return;
      if (testResult) {
        return evaluate(path.get("consequent"));
      } else {
        return evaluate(path.get("alternate"));
      }
    }

    if (path.isExpressionWrapper()) {
      return evaluate(path.get("expression"));
    }

    if (path.isMemberExpression() && !path.parentPath.isCallExpression({ callee: node })) {
      var property = path.get("property");
      var object = path.get("object");

      if (object.isLiteral() && property.isIdentifier()) {
        var _value = object.node.value;
        var type = typeof _value === "undefined" ? "undefined" : (0, _typeof3.default)(_value);
        if (type === "number" || type === "string") {
          return _value[property.node.name];
        }
      }
    }

    if (path.isReferencedIdentifier()) {
      var binding = path.scope.getBinding(node.name);

      if (binding && binding.constantViolations.length > 0) {
        return deopt(binding.path);
      }

      if (binding && path.node.start < binding.path.node.end) {
        return deopt(binding.path);
      }

      if (binding && binding.hasValue) {
        return binding.value;
      } else {
        if (node.name === "undefined") {
          return binding ? deopt(binding.path) : undefined;
        } else if (node.name === "Infinity") {
          return binding ? deopt(binding.path) : Infinity;
        } else if (node.name === "NaN") {
          return binding ? deopt(binding.path) : NaN;
        }

        var resolved = path.resolve();
        if (resolved === path) {
          return deopt(path);
        } else {
          return evaluate(resolved);
        }
      }
    }

    if (path.isUnaryExpression({ prefix: true })) {
      if (node.operator === "void") {
        return undefined;
      }

      var argument = path.get("argument");
      if (node.operator === "typeof" && (argument.isFunction() || argument.isClass())) {
        return "function";
      }

      var arg = evaluate(argument);
      if (!confident) return;
      switch (node.operator) {
        case "!":
          return !arg;
        case "+":
          return +arg;
        case "-":
          return -arg;
        case "~":
          return ~arg;
        case "typeof":
          return typeof arg === "undefined" ? "undefined" : (0, _typeof3.default)(arg);
      }
    }

    if (path.isArrayExpression()) {
      var arr = [];
      var elems = path.get("elements");
      for (var _iterator2 = elems, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);;) {
        var _ref2;

        if (_isArray2) {
          if (_i2 >= _iterator2.length) break;
          _ref2 = _iterator2[_i2++];
        } else {
          _i2 = _iterator2.next();
          if (_i2.done) break;
          _ref2 = _i2.value;
        }

        var _elem = _ref2;

        _elem = _elem.evaluate();

        if (_elem.confident) {
          arr.push(_elem.value);
        } else {
          return deopt(_elem);
        }
      }
      return arr;
    }

    if (path.isObjectExpression()) {
      var obj = {};
      var props = path.get("properties");
      for (var _iterator3 = props, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);;) {
        var _ref3;

        if (_isArray3) {
          if (_i3 >= _iterator3.length) break;
          _ref3 = _iterator3[_i3++];
        } else {
          _i3 = _iterator3.next();
          if (_i3.done) break;
          _ref3 = _i3.value;
        }

        var prop = _ref3;

        if (prop.isObjectMethod() || prop.isSpreadProperty()) {
          return deopt(prop);
        }
        var keyPath = prop.get("key");
        var key = keyPath;
        if (prop.node.computed) {
          key = key.evaluate();
          if (!key.confident) {
            return deopt(keyPath);
          }
          key = key.value;
        } else if (key.isIdentifier()) {
          key = key.node.name;
        } else {
          key = key.node.value;
        }
        var valuePath = prop.get("value");
        var _value2 = valuePath.evaluate();
        if (!_value2.confident) {
          return deopt(valuePath);
        }
        _value2 = _value2.value;
        obj[key] = _value2;
      }
      return obj;
    }

    if (path.isLogicalExpression()) {
      var wasConfident = confident;
      var left = evaluate(path.get("left"));
      var leftConfident = confident;
      confident = wasConfident;
      var right = evaluate(path.get("right"));
      var rightConfident = confident;
      confident = leftConfident && rightConfident;

      switch (node.operator) {
        case "||":
          if (left && leftConfident) {
            confident = true;
            return left;
          }

          if (!confident) return;

          return left || right;
        case "&&":
          if (!left && leftConfident || !right && rightConfident) {
            confident = true;
          }

          if (!confident) return;

          return left && right;
      }
    }

    if (path.isBinaryExpression()) {
      var _left = evaluate(path.get("left"));
      if (!confident) return;
      var _right = evaluate(path.get("right"));
      if (!confident) return;

      switch (node.operator) {
        case "-":
          return _left - _right;
        case "+":
          return _left + _right;
        case "/":
          return _left / _right;
        case "*":
          return _left * _right;
        case "%":
          return _left % _right;
        case "**":
          return Math.pow(_left, _right);
        case "<":
          return _left < _right;
        case ">":
          return _left > _right;
        case "<=":
          return _left <= _right;
        case ">=":
          return _left >= _right;
        case "==":
          return _left == _right;
        case "!=":
          return _left != _right;
        case "===":
          return _left === _right;
        case "!==":
          return _left !== _right;
        case "|":
          return _left | _right;
        case "&":
          return _left & _right;
        case "^":
          return _left ^ _right;
        case "<<":
          return _left << _right;
        case ">>":
          return _left >> _right;
        case ">>>":
          return _left >>> _right;
      }
    }

    if (path.isCallExpression()) {
      var callee = path.get("callee");
      var context = void 0;
      var func = void 0;

      if (callee.isIdentifier() && !path.scope.getBinding(callee.node.name, true) && VALID_CALLEES.indexOf(callee.node.name) >= 0) {
        func = global[node.callee.name];
      }

      if (callee.isMemberExpression()) {
        var _object = callee.get("object");
        var _property = callee.get("property");

        if (_object.isIdentifier() && _property.isIdentifier() && VALID_CALLEES.indexOf(_object.node.name) >= 0 && INVALID_METHODS.indexOf(_property.node.name) < 0) {
          context = global[_object.node.name];
          func = context[_property.node.name];
        }

        if (_object.isLiteral() && _property.isIdentifier()) {
          var _type = (0, _typeof3.default)(_object.node.value);
          if (_type === "string" || _type === "number") {
            context = _object.node.value;
            func = context[_property.node.name];
          }
        }
      }

      if (func) {
        var args = path.get("arguments").map(evaluate);
        if (!confident) return;

        return func.apply(context, args);
      }
    }

    deopt(path);
  }
}