"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _helperPluginUtils = require("@babel/helper-plugin-utils");
var _default = exports.default = (0, _helperPluginUtils.declare)(api => {
  api.assertVersion(7);
  return {
    name: "transform-literals",
    visitor: {
      NumericLiteral({
        node
      }) {
        if (node.extra && /^0[ob]/i.test(node.extra.raw)) {
          node.extra = undefined;
        }
      },
      StringLiteral({
        node
      }) {
        if (node.extra && /\\[u]/gi.test(node.extra.raw)) {
          node.extra = undefined;
        }
      }
    }
  };
});

//# sourceMappingURL=index.js.map
