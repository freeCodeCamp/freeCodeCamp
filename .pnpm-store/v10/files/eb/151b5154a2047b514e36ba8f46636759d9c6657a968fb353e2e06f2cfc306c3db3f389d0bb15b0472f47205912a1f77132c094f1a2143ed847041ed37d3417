"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _helperPluginUtils = require("@babel/helper-plugin-utils");
var _core = require("@babel/core");
var _default = exports.default = (0, _helperPluginUtils.declare)(api => {
  api.assertVersion(7);
  function transformStatementList(paths) {
    for (const path of paths) {
      if (!path.isFunctionDeclaration()) continue;
      const func = path.node;
      const declar = _core.types.variableDeclaration("let", [_core.types.variableDeclarator(func.id, _core.types.toExpression(func))]);
      declar._blockHoist = 2;
      func.id = null;
      path.replaceWith(declar);
    }
  }
  return {
    name: "transform-block-scoped-functions",
    visitor: {
      BlockStatement(path) {
        const {
          node,
          parent
        } = path;
        if (_core.types.isFunction(parent, {
          body: node
        }) || _core.types.isExportDeclaration(parent)) {
          return;
        }
        transformStatementList(path.get("body"));
      },
      SwitchCase(path) {
        transformStatementList(path.get("consequent"));
      }
    }
  };
});

//# sourceMappingURL=index.js.map
