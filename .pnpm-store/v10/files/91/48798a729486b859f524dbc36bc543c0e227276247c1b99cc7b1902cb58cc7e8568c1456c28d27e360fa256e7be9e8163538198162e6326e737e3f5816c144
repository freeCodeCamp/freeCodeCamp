"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toSequenceExpression;
var _gatherSequenceExpressions = require("./gatherSequenceExpressions.js");
function toSequenceExpression(nodes, scope) {
  if (!(nodes != null && nodes.length)) return;
  const declars = [];
  const result = (0, _gatherSequenceExpressions.default)(nodes, declars);
  if (!result) return;
  for (const declar of declars) {
    scope.push(declar);
  }
  return result;
}

//# sourceMappingURL=toSequenceExpression.js.map
