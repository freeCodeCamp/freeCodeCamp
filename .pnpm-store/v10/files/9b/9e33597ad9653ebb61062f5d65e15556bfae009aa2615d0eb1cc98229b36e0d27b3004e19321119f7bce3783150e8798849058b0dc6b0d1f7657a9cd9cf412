"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rewriteThis;
var _core = require("@babel/core");
var _traverse = require("@babel/traverse");
let rewriteThisVisitor;
function rewriteThis(programPath) {
  if (!rewriteThisVisitor) {
    rewriteThisVisitor = _traverse.visitors.environmentVisitor({
      ThisExpression(path) {
        path.replaceWith(_core.types.unaryExpression("void", _core.types.numericLiteral(0), true));
      }
    });
    rewriteThisVisitor.noScope = true;
  }
  (0, _traverse.default)(programPath.node, rewriteThisVisitor);
}

//# sourceMappingURL=rewrite-this.js.map
