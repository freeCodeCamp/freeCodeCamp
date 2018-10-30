"use strict";

exports.__esModule = true;
exports.toComputedKey = toComputedKey;
exports.ensureBlock = ensureBlock;
exports.arrowFunctionToShadowed = arrowFunctionToShadowed;

var _babelTypes = require("babel-types");

var t = _interopRequireWildcard(_babelTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function toComputedKey() {
  var node = this.node;

  var key = void 0;
  if (this.isMemberExpression()) {
    key = node.property;
  } else if (this.isProperty() || this.isMethod()) {
    key = node.key;
  } else {
    throw new ReferenceError("todo");
  }

  if (!node.computed) {
    if (t.isIdentifier(key)) key = t.stringLiteral(key.name);
  }

  return key;
}

function ensureBlock() {
  return t.ensureBlock(this.node);
}

function arrowFunctionToShadowed() {
  if (!this.isArrowFunctionExpression()) return;

  this.ensureBlock();

  var node = this.node;

  node.expression = false;
  node.type = "FunctionExpression";
  node.shadow = node.shadow || true;
}