"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _helperPluginUtils = require("@babel/helper-plugin-utils");
var _helperAnnotateAsPure = require("@babel/helper-annotate-as-pure");
var _core = require("@babel/core");
const PURE_CALLS = [["react", new Set(["cloneElement", "createContext", "createElement", "createFactory", "createRef", "forwardRef", "isValidElement", "memo", "lazy"])], ["react-dom", new Set(["createPortal"])]];
var _default = exports.default = (0, _helperPluginUtils.declare)(api => {
  api.assertVersion(7);
  return {
    name: "transform-react-pure-annotations",
    visitor: {
      CallExpression(path) {
        if (isReactCall(path)) {
          (0, _helperAnnotateAsPure.default)(path);
        }
      }
    }
  };
});
function isReactCall(path) {
  const calleePath = path.get("callee");
  if (!calleePath.isMemberExpression()) {
    for (const [module, methods] of PURE_CALLS) {
      for (const method of methods) {
        if (calleePath.referencesImport(module, method)) {
          return true;
        }
      }
    }
    return false;
  }
  const object = calleePath.get("object");
  const callee = calleePath.node;
  if (!callee.computed && _core.types.isIdentifier(callee.property)) {
    const propertyName = callee.property.name;
    for (const [module, methods] of PURE_CALLS) {
      if (object.referencesImport(module, "default") || object.referencesImport(module, "*")) {
        return methods.has(propertyName);
      }
    }
  }
  return false;
}

//# sourceMappingURL=index.js.map
