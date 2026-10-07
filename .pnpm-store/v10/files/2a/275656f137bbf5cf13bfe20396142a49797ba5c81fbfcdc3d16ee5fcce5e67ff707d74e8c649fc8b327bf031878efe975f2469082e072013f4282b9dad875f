"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
var _t = require("@babel/types");
var _explodeAssignableExpression = require("./explode-assignable-expression.js");
const {
  assignmentExpression,
  sequenceExpression
} = _t;
function _default(opts) {
  const {
    build,
    operator
  } = opts;
  const visitor = {
    AssignmentExpression(path) {
      const {
        node,
        scope
      } = path;
      if (node.operator !== operator + "=") return;
      const nodes = [];
      const exploded = (0, _explodeAssignableExpression.default)(node.left, nodes, scope);
      nodes.push(assignmentExpression("=", exploded.ref, build(exploded.uid, node.right)));
      path.replaceWith(sequenceExpression(nodes));
    },
    BinaryExpression(path) {
      const {
        node
      } = path;
      if (node.operator === operator) {
        path.replaceWith(build(node.left, node.right));
      }
    }
  };
  return visitor;
}

//# sourceMappingURL=index.js.map
