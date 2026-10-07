"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _helperPluginUtils = require("@babel/helper-plugin-utils");
var _core = require("@babel/core");
var _default = exports.default = (0, _helperPluginUtils.declare)(api => {
  api.assertVersion(7);
  return {
    name: "transform-logical-assignment-operators",
    inherits: require("@babel/plugin-syntax-logical-assignment-operators").default,
    visitor: {
      AssignmentExpression(path) {
        const {
          node,
          scope
        } = path;
        const {
          operator,
          left,
          right
        } = node;
        const operatorTrunc = operator.slice(0, -1);
        if (!_core.types.LOGICAL_OPERATORS.includes(operatorTrunc)) {
          return;
        }
        const lhs = _core.types.cloneNode(left);
        if (_core.types.isMemberExpression(left)) {
          const {
            object,
            property,
            computed
          } = left;
          const memo = scope.maybeGenerateMemoised(object);
          if (memo) {
            left.object = memo;
            lhs.object = _core.types.assignmentExpression("=", _core.types.cloneNode(memo), object);
          }
          if (computed) {
            const memo = scope.maybeGenerateMemoised(property);
            if (memo) {
              left.property = memo;
              lhs.property = _core.types.assignmentExpression("=", _core.types.cloneNode(memo), property);
            }
          }
        }
        path.replaceWith(_core.types.logicalExpression(operatorTrunc, lhs, _core.types.assignmentExpression("=", left, right)));
      }
    }
  };
});

//# sourceMappingURL=index.js.map
