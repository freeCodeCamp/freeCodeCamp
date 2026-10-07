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
    name: "transform-shorthand-properties",
    visitor: {
      ObjectMethod(path) {
        const {
          node
        } = path;
        if (node.kind === "method") {
          const func = _core.types.functionExpression(null, node.params, node.body, node.generator, node.async);
          func.returnType = node.returnType;
          const computedKey = _core.types.toComputedKey(node);
          if (_core.types.isStringLiteral(computedKey, {
            value: "__proto__"
          })) {
            path.replaceWith(_core.types.objectProperty(computedKey, func, true));
          } else {
            path.replaceWith(_core.types.objectProperty(node.key, func, node.computed));
          }
        }
      },
      ObjectProperty(path) {
        const {
          node
        } = path;
        if (node.shorthand) {
          const computedKey = _core.types.toComputedKey(node);
          if (_core.types.isStringLiteral(computedKey, {
            value: "__proto__"
          })) {
            path.replaceWith(_core.types.objectProperty(computedKey, node.value, true));
          } else {
            node.shorthand = false;
          }
        }
      }
    }
  };
});

//# sourceMappingURL=index.js.map
