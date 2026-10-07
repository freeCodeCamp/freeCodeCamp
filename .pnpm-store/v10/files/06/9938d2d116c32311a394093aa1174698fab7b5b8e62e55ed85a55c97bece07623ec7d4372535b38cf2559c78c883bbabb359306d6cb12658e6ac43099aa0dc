"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildChildren;
var _index = require("../../validators/generated/index.js");
var _cleanJSXElementLiteralChild = require("../../utils/react/cleanJSXElementLiteralChild.js");
function buildChildren(node) {
  const elements = [];
  for (let i = 0; i < node.children.length; i++) {
    let child = node.children[i];
    if ((0, _index.isJSXText)(child)) {
      (0, _cleanJSXElementLiteralChild.default)(child, elements);
      continue;
    }
    if ((0, _index.isJSXExpressionContainer)(child)) child = child.expression;
    if ((0, _index.isJSXEmptyExpression)(child)) continue;
    elements.push(child);
  }
  return elements;
}

//# sourceMappingURL=buildChildren.js.map
