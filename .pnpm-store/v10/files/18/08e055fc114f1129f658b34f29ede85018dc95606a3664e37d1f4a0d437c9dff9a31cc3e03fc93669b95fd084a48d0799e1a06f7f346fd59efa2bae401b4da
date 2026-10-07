"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JSXAttribute = JSXAttribute;
exports.JSXClosingElement = JSXClosingElement;
exports.JSXClosingFragment = JSXClosingFragment;
exports.JSXElement = JSXElement;
exports.JSXEmptyExpression = JSXEmptyExpression;
exports.JSXExpressionContainer = JSXExpressionContainer;
exports.JSXFragment = JSXFragment;
exports.JSXIdentifier = JSXIdentifier;
exports.JSXMemberExpression = JSXMemberExpression;
exports.JSXNamespacedName = JSXNamespacedName;
exports.JSXOpeningElement = JSXOpeningElement;
exports.JSXOpeningFragment = JSXOpeningFragment;
exports.JSXSpreadAttribute = JSXSpreadAttribute;
exports.JSXSpreadChild = JSXSpreadChild;
exports.JSXText = JSXText;
function JSXAttribute(node) {
  this.print(node.name);
  if (node.value) {
    this.tokenChar(61);
    this.print(node.value);
  }
}
function JSXIdentifier(node) {
  this.word(node.name);
}
function JSXNamespacedName(node) {
  this.print(node.namespace);
  this.tokenChar(58);
  this.print(node.name);
}
function JSXMemberExpression(node) {
  this.print(node.object);
  this.tokenChar(46);
  this.print(node.property);
}
function JSXSpreadAttribute(node) {
  this.tokenChar(123);
  this.token("...");
  this.print(node.argument);
  this.rightBrace(node);
}
function JSXExpressionContainer(node) {
  this.tokenChar(123);
  this.print(node.expression);
  this.rightBrace(node);
}
function JSXSpreadChild(node) {
  this.tokenChar(123);
  this.token("...");
  this.print(node.expression);
  this.rightBrace(node);
}
function JSXText(node) {
  const raw = this.getPossibleRaw(node);
  if (raw !== undefined) {
    this.token(raw, true);
  } else {
    this.token(node.value, true);
  }
}
function JSXElement(node) {
  const open = node.openingElement;
  this.print(open);
  if (open.selfClosing) return;
  this.indent();
  for (const child of node.children) {
    this.print(child);
  }
  this.dedent();
  this.print(node.closingElement);
}
function spaceSeparator() {
  this.space();
}
function JSXOpeningElement(node) {
  this.tokenChar(60);
  this.print(node.name);
  if (node.typeArguments) {
    this.print(node.typeArguments);
  }
  this.print(node.typeParameters);
  if (node.attributes.length > 0) {
    this.space();
    this.printJoin(node.attributes, undefined, undefined, spaceSeparator);
  }
  if (node.selfClosing) {
    this.space();
    this.tokenChar(47);
  }
  this.tokenChar(62);
}
function JSXClosingElement(node) {
  this.tokenChar(60);
  this.tokenChar(47);
  this.print(node.name);
  this.tokenChar(62);
}
function JSXEmptyExpression() {
  this.printInnerComments();
}
function JSXFragment(node) {
  this.print(node.openingFragment);
  this.indent();
  for (const child of node.children) {
    this.print(child);
  }
  this.dedent();
  this.print(node.closingFragment);
}
function JSXOpeningFragment() {
  this.tokenChar(60);
  this.tokenChar(62);
}
function JSXClosingFragment() {
  this.token("</");
  this.tokenChar(62);
}

//# sourceMappingURL=jsx.js.map
