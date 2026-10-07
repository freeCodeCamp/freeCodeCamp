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
    name: "transform-member-expression-literals",
    visitor: {
      MemberExpression: {
        exit({
          node
        }) {
          const prop = node.property;
          if (!node.computed && _core.types.isIdentifier(prop) && !_core.types.isValidES3Identifier(prop.name)) {
            node.property = _core.types.stringLiteral(prop.name);
            node.computed = true;
          }
        }
      }
    }
  };
});

//# sourceMappingURL=index.js.map
