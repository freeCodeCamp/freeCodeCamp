"use strict";

exports.__esModule = true;

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

exports.JSXAttribute = JSXAttribute;
exports.JSXIdentifier = JSXIdentifier;
exports.JSXNamespacedName = JSXNamespacedName;
exports.JSXMemberExpression = JSXMemberExpression;
exports.JSXSpreadAttribute = JSXSpreadAttribute;
exports.JSXExpressionContainer = JSXExpressionContainer;
exports.JSXSpreadChild = JSXSpreadChild;
exports.JSXText = JSXText;
exports.JSXElement = JSXElement;
exports.JSXOpeningElement = JSXOpeningElement;
exports.JSXClosingElement = JSXClosingElement;
exports.JSXEmptyExpression = JSXEmptyExpression;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function JSXAttribute(node) {
  this.print(node.name, node);
  if (node.value) {
    this.token("=");
    this.print(node.value, node);
  }
}

function JSXIdentifier(node) {
  this.word(node.name);
}

function JSXNamespacedName(node) {
  this.print(node.namespace, node);
  this.token(":");
  this.print(node.name, node);
}

function JSXMemberExpression(node) {
  this.print(node.object, node);
  this.token(".");
  this.print(node.property, node);
}

function JSXSpreadAttribute(node) {
  this.token("{");
  this.token("...");
  this.print(node.argument, node);
  this.token("}");
}

function JSXExpressionContainer(node) {
  this.token("{");
  this.print(node.expression, node);
  this.token("}");
}

function JSXSpreadChild(node) {
  this.token("{");
  this.token("...");
  this.print(node.expression, node);
  this.token("}");
}

function JSXText(node) {
  this.token(node.value);
}

function JSXElement(node) {
  var open = node.openingElement;
  this.print(open, node);
  if (open.selfClosing) return;

  this.indent();
  for (var _iterator = node.children, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var child = _ref;

    this.print(child, node);
  }
  this.dedent();

  this.print(node.closingElement, node);
}

function spaceSeparator() {
  this.space();
}

function JSXOpeningElement(node) {
  this.token("<");
  this.print(node.name, node);
  if (node.attributes.length > 0) {
    this.space();
    this.printJoin(node.attributes, node, { separator: spaceSeparator });
  }
  if (node.selfClosing) {
    this.space();
    this.token("/>");
  } else {
    this.token(">");
  }
}

function JSXClosingElement(node) {
  this.token("</");
  this.print(node.name, node);
  this.token(">");
}

function JSXEmptyExpression() {}