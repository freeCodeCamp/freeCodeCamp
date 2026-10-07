"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildScopeIIFE = buildScopeIIFE;
exports.collectShadowedParamsNames = collectShadowedParamsNames;
exports.iifeVisitor = void 0;
var _core = require("@babel/core");
const iifeVisitor = exports.iifeVisitor = {
  "ReferencedIdentifier|BindingIdentifier"(path, state) {
    const {
      scope,
      node
    } = path;
    const {
      name
    } = node;
    if (name === "eval" || scope.getBinding(name) === state.scope.parent.getBinding(name) && state.scope.hasOwnBinding(name)) {
      state.needsOuterBinding = true;
      path.stop();
    }
  },
  "TypeAnnotation|TSTypeAnnotation|TypeParameterDeclaration|TSTypeParameterDeclaration": path => path.skip()
};
function collectShadowedParamsNames(param, functionScope, shadowedParams) {
  for (const name of Object.keys(param.getBindingIdentifiers())) {
    var _functionScope$bindin;
    const constantViolations = (_functionScope$bindin = functionScope.bindings[name]) == null ? void 0 : _functionScope$bindin.constantViolations;
    if (constantViolations) {
      for (const redeclarator of constantViolations) {
        const node = redeclarator.node;
        switch (node.type) {
          case "VariableDeclarator":
            {
              if (node.init === null) {
                const declaration = redeclarator.parentPath;
                if (!declaration.parentPath.isFor() || declaration.parentPath.get("body") === declaration) {
                  redeclarator.remove();
                  break;
                }
              }
              shadowedParams.add(name);
              break;
            }
          case "FunctionDeclaration":
            shadowedParams.add(name);
            break;
        }
      }
    }
  }
}
function buildScopeIIFE(shadowedParams, body) {
  const args = [];
  const params = [];
  for (const name of shadowedParams) {
    args.push(_core.types.identifier(name));
    params.push(_core.types.identifier(name));
  }
  return _core.types.returnStatement(_core.types.callExpression(_core.types.arrowFunctionExpression(params, body), args));
}

//# sourceMappingURL=shadow-utils.js.map
