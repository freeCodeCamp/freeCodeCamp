"use strict";

exports.__esModule = true;
exports.FunctionDeclaration = undefined;
exports._params = _params;
exports._method = _method;
exports.FunctionExpression = FunctionExpression;
exports.ArrowFunctionExpression = ArrowFunctionExpression;

var _babelTypes = require("babel-types");

var t = _interopRequireWildcard(_babelTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _params(node) {
  var _this = this;

  this.print(node.typeParameters, node);
  this.token("(");
  this.printList(node.params, node, {
    iterator: function iterator(node) {
      if (node.optional) _this.token("?");
      _this.print(node.typeAnnotation, node);
    }
  });
  this.token(")");

  if (node.returnType) {
    this.print(node.returnType, node);
  }
}

function _method(node) {
  var kind = node.kind;
  var key = node.key;

  if (kind === "method" || kind === "init") {
    if (node.generator) {
      this.token("*");
    }
  }

  if (kind === "get" || kind === "set") {
    this.word(kind);
    this.space();
  }

  if (node.async) {
    this.word("async");
    this.space();
  }

  if (node.computed) {
    this.token("[");
    this.print(key, node);
    this.token("]");
  } else {
    this.print(key, node);
  }

  this._params(node);
  this.space();
  this.print(node.body, node);
}

function FunctionExpression(node) {
  if (node.async) {
    this.word("async");
    this.space();
  }
  this.word("function");
  if (node.generator) this.token("*");

  if (node.id) {
    this.space();
    this.print(node.id, node);
  } else {
    this.space();
  }

  this._params(node);
  this.space();
  this.print(node.body, node);
}

exports.FunctionDeclaration = FunctionExpression;
function ArrowFunctionExpression(node) {
  if (node.async) {
    this.word("async");
    this.space();
  }

  var firstParam = node.params[0];

  if (node.params.length === 1 && t.isIdentifier(firstParam) && !hasTypes(node, firstParam)) {
    this.print(firstParam, node);
  } else {
    this._params(node);
  }

  this.space();
  this.token("=>");
  this.space();

  this.print(node.body, node);
}

function hasTypes(node, param) {
  return node.typeParameters || node.returnType || param.typeAnnotation || param.optional || param.trailingComments;
}