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
    name: "transform-typeof-symbol",
    visitor: {
      Scope({
        scope
      }) {
        if (!scope.getBinding("Symbol")) {
          return;
        }
        scope.rename("Symbol");
      },
      UnaryExpression(path) {
        const {
          node,
          parent
        } = path;
        if (node.operator !== "typeof") return;
        if (path.parentPath.isBinaryExpression() && _core.types.EQUALITY_BINARY_OPERATORS.indexOf(parent.operator) >= 0) {
          const opposite = path.getOpposite();
          if (opposite.isStringLiteral() && opposite.node.value !== "symbol" && opposite.node.value !== "object") {
            return;
          }
        }
        let isUnderHelper = path.findParent(path => {
          if (path.isFunction()) {
            var _path$get;
            return ((_path$get = path.get("body.directives.0")) == null ? void 0 : _path$get.node.value.value) === "@babel/helpers - typeof";
          }
        });
        if (isUnderHelper) return;
        const helper = this.addHelper("typeof");
        isUnderHelper = path.findParent(path => {
          return path.isVariableDeclarator() && path.node.id === helper || path.isFunctionDeclaration() && path.node.id && path.node.id.name === helper.name;
        });
        if (isUnderHelper) {
          return;
        }
        const call = _core.types.callExpression(helper, [node.argument]);
        const arg = path.get("argument");
        if (arg.isIdentifier() && !path.scope.hasBinding(arg.node.name, true)) {
          const unary = _core.types.unaryExpression("typeof", _core.types.cloneNode(node.argument));
          path.replaceWith(_core.types.conditionalExpression(_core.types.binaryExpression("===", unary, _core.types.stringLiteral("undefined")), _core.types.stringLiteral("undefined"), call));
        } else {
          path.replaceWith(call);
        }
      }
    }
  };
});

//# sourceMappingURL=index.js.map
