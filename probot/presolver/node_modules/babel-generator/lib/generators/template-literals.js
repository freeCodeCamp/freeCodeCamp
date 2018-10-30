"use strict";

exports.__esModule = true;
exports.TaggedTemplateExpression = TaggedTemplateExpression;
exports.TemplateElement = TemplateElement;
exports.TemplateLiteral = TemplateLiteral;
function TaggedTemplateExpression(node) {
  this.print(node.tag, node);
  this.print(node.quasi, node);
}

function TemplateElement(node, parent) {
  var isFirst = parent.quasis[0] === node;
  var isLast = parent.quasis[parent.quasis.length - 1] === node;

  var value = (isFirst ? "`" : "}") + node.value.raw + (isLast ? "`" : "${");

  this.token(value);
}

function TemplateLiteral(node) {
  var quasis = node.quasis;

  for (var i = 0; i < quasis.length; i++) {
    this.print(quasis[i], node);

    if (i + 1 < quasis.length) {
      this.print(node.expressions[i], node);
    }
  }
}