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
    name: "transform-new-target",
    visitor: {
      MetaProperty(path) {
        const meta = path.get("meta");
        const property = path.get("property");
        const {
          scope
        } = path;
        if (meta.isIdentifier({
          name: "new"
        }) && property.isIdentifier({
          name: "target"
        })) {
          const func = path.findParent(path => {
            if (path.isClass()) return true;
            if (path.isFunction() && !path.isArrowFunctionExpression()) {
              if (path.isClassMethod({
                kind: "constructor"
              })) {
                return false;
              }
              return true;
            }
            return false;
          });
          if (!func) {
            throw path.buildCodeFrameError("new.target must be under a (non-arrow) function or a class.");
          }
          const {
            node
          } = func;
          if (_core.types.isMethod(node)) {
            path.replaceWith(scope.buildUndefinedNode());
            return;
          }
          const constructor = _core.types.memberExpression(_core.types.thisExpression(), _core.types.identifier("constructor"));
          if (func.isClass()) {
            path.replaceWith(constructor);
            return;
          }
          if (!node.id) {
            node.id = scope.generateUidIdentifier("target");
          } else {
            let scope = path.scope;
            const name = node.id.name;
            while (scope !== func.parentPath.scope) {
              if (scope.hasOwnBinding(name) && !scope.bindingIdentifierEquals(name, node.id)) {
                scope.rename(name);
              }
              scope = scope.parent;
            }
          }
          path.replaceWith(_core.types.conditionalExpression(_core.types.binaryExpression("instanceof", _core.types.thisExpression(), _core.types.cloneNode(node.id)), constructor, scope.buildUndefinedNode()));
        }
      }
    }
  };
});

//# sourceMappingURL=index.js.map
