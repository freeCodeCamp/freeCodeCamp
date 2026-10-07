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
    name: "transform-sticky-regex",
    visitor: {
      RegExpLiteral(path) {
        const {
          node
        } = path;
        if (!node.flags.includes("y")) return;
        path.replaceWith(_core.types.newExpression(_core.types.identifier("RegExp"), [_core.types.stringLiteral(node.pattern), _core.types.stringLiteral(node.flags)]));
      }
    }
  };
});

//# sourceMappingURL=index.js.map
