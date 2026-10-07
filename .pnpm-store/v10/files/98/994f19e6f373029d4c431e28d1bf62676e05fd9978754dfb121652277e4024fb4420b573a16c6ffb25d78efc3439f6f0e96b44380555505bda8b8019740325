"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _helperPluginUtils = require("@babel/helper-plugin-utils");
var _default = exports.default = (0, _helperPluginUtils.declare)(api => {
  api.assertVersion(7);
  return {
    name: "transform-optional-catch-binding",
    inherits: require("@babel/plugin-syntax-optional-catch-binding").default,
    visitor: {
      CatchClause(path) {
        if (!path.node.param) {
          const uid = path.scope.generateUidIdentifier("unused");
          const paramPath = path.get("param");
          paramPath.replaceWith(uid);
        }
      }
    }
  };
});

//# sourceMappingURL=index.js.map
