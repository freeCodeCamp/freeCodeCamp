"use strict";

exports.__esModule = true;

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

exports.getTypeAnnotation = getTypeAnnotation;
exports._getTypeAnnotation = _getTypeAnnotation;
exports.isBaseType = isBaseType;
exports.couldBeBaseType = couldBeBaseType;
exports.baseTypeStrictlyMatches = baseTypeStrictlyMatches;
exports.isGenericType = isGenericType;

var _inferers = require("./inferers");

var inferers = _interopRequireWildcard(_inferers);

var _babelTypes = require("babel-types");

var t = _interopRequireWildcard(_babelTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getTypeAnnotation() {
  if (this.typeAnnotation) return this.typeAnnotation;

  var type = this._getTypeAnnotation() || t.anyTypeAnnotation();
  if (t.isTypeAnnotation(type)) type = type.typeAnnotation;
  return this.typeAnnotation = type;
}

function _getTypeAnnotation() {
  var node = this.node;

  if (!node) {
    if (this.key === "init" && this.parentPath.isVariableDeclarator()) {
      var declar = this.parentPath.parentPath;
      var declarParent = declar.parentPath;

      if (declar.key === "left" && declarParent.isForInStatement()) {
        return t.stringTypeAnnotation();
      }

      if (declar.key === "left" && declarParent.isForOfStatement()) {
        return t.anyTypeAnnotation();
      }

      return t.voidTypeAnnotation();
    } else {
      return;
    }
  }

  if (node.typeAnnotation) {
    return node.typeAnnotation;
  }

  var inferer = inferers[node.type];
  if (inferer) {
    return inferer.call(this, node);
  }

  inferer = inferers[this.parentPath.type];
  if (inferer && inferer.validParent) {
    return this.parentPath.getTypeAnnotation();
  }
}

function isBaseType(baseName, soft) {
  return _isBaseType(baseName, this.getTypeAnnotation(), soft);
}

function _isBaseType(baseName, type, soft) {
  if (baseName === "string") {
    return t.isStringTypeAnnotation(type);
  } else if (baseName === "number") {
    return t.isNumberTypeAnnotation(type);
  } else if (baseName === "boolean") {
    return t.isBooleanTypeAnnotation(type);
  } else if (baseName === "any") {
    return t.isAnyTypeAnnotation(type);
  } else if (baseName === "mixed") {
    return t.isMixedTypeAnnotation(type);
  } else if (baseName === "empty") {
    return t.isEmptyTypeAnnotation(type);
  } else if (baseName === "void") {
    return t.isVoidTypeAnnotation(type);
  } else {
    if (soft) {
      return false;
    } else {
      throw new Error("Unknown base type " + baseName);
    }
  }
}

function couldBeBaseType(name) {
  var type = this.getTypeAnnotation();
  if (t.isAnyTypeAnnotation(type)) return true;

  if (t.isUnionTypeAnnotation(type)) {
    for (var _iterator = type.types, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var type2 = _ref;

      if (t.isAnyTypeAnnotation(type2) || _isBaseType(name, type2, true)) {
        return true;
      }
    }
    return false;
  } else {
    return _isBaseType(name, type, true);
  }
}

function baseTypeStrictlyMatches(right) {
  var left = this.getTypeAnnotation();
  right = right.getTypeAnnotation();

  if (!t.isAnyTypeAnnotation(left) && t.isFlowBaseAnnotation(left)) {
    return right.type === left.type;
  }
}

function isGenericType(genericName) {
  var type = this.getTypeAnnotation();
  return t.isGenericTypeAnnotation(type) && t.isIdentifier(type.id, { name: genericName });
}