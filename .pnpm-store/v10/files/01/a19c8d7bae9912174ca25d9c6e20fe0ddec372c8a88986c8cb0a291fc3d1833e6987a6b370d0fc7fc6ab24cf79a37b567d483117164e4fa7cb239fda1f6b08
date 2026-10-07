"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _helperCompilationTargets = require("@babel/helper-compilation-targets");
var _helperPluginUtils = require("@babel/helper-plugin-utils");
var _helperFunctionName = require("@babel/helper-function-name");
var _default = exports.default = (0, _helperPluginUtils.declare)(api => {
  api.assertVersion(7);
  const supportUnicodeId = !(0, _helperCompilationTargets.isRequired)("transform-unicode-escapes", api.targets());
  return {
    name: "transform-function-name",
    visitor: {
      FunctionExpression: {
        exit(path) {
          if (path.key !== "value" && !path.parentPath.isObjectProperty()) {
            const replacement = (0, _helperFunctionName.default)(path);
            if (replacement) path.replaceWith(replacement);
          }
        }
      },
      ObjectProperty(path) {
        const value = path.get("value");
        if (value.isFunction()) {
          const newNode = (0, _helperFunctionName.default)(value, false, supportUnicodeId);
          if (newNode) value.replaceWith(newNode);
        }
      }
    }
  };
});

//# sourceMappingURL=index.js.map
