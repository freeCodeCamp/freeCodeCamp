"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hooks = void 0;
const hooks = exports.hooks = [function (self, parent) {
  const removeParent = self.key === "test" && (parent.isWhile() || parent.isSwitchCase()) || self.key === "declaration" && parent.isExportDeclaration() || self.key === "body" && parent.isLabeledStatement() || self.listKey === "declarations" && parent.isVariableDeclaration() && parent.node.declarations.length === 1 || self.key === "expression" && parent.isExpressionStatement();
  if (removeParent) {
    parent.remove();
    return true;
  }
}, function (self, parent) {
  if (parent.isSequenceExpression() && parent.node.expressions.length === 1) {
    parent.replaceWith(parent.node.expressions[0]);
    return true;
  }
}, function (self, parent) {
  if (parent.isBinary()) {
    if (self.key === "left") {
      parent.replaceWith(parent.node.right);
    } else {
      parent.replaceWith(parent.node.left);
    }
    return true;
  }
}, function (self, parent) {
  if (parent.isIfStatement() && self.key === "consequent" || self.key === "body" && (parent.isLoop() || parent.isArrowFunctionExpression())) {
    self.replaceWith({
      type: "BlockStatement",
      directives: [],
      body: []
    });
    return true;
  }
}];

//# sourceMappingURL=removal-hooks.js.map
