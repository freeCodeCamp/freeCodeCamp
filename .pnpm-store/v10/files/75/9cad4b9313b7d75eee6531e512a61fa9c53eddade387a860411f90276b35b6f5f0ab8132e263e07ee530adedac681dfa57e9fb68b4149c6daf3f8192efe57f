"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.requeueComputedKeyAndDecorators = requeueComputedKeyAndDecorators;
{
  exports.skipAllButComputedKey = function skipAllButComputedKey(path) {
    path.skip();
    if (path.node.computed) {
      path.context.maybeQueue(path.get("key"));
    }
  };
}
function requeueComputedKeyAndDecorators(path) {
  const {
    context,
    node
  } = path;
  if (node.computed) {
    context.maybeQueue(path.get("key"));
  }
  if (node.decorators) {
    for (const decorator of path.get("decorators")) {
      context.maybeQueue(decorator);
    }
  }
}
const visitor = {
  FunctionParent(path) {
    if (path.isArrowFunctionExpression()) {
      return;
    } else {
      path.skip();
      if (path.isMethod()) {
        requeueComputedKeyAndDecorators(path);
      }
    }
  },
  Property(path) {
    if (path.isObjectProperty()) {
      return;
    }
    path.skip();
    requeueComputedKeyAndDecorators(path);
  }
};
var _default = visitor;
exports.default = _default;

//# sourceMappingURL=index.js.map
