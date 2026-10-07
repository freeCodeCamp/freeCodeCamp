"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lazyImportsHook = void 0;
var _core = require("@babel/core");
var _helperModuleTransforms = require("@babel/helper-module-transforms");
const lazyImportsHook = lazy => ({
  name: `${"@babel/plugin-transform-modules-commonjs"}/lazy`,
  version: "7.23.3",
  getWrapperPayload(source, metadata) {
    if ((0, _helperModuleTransforms.isSideEffectImport)(metadata) || metadata.reexportAll) {
      return null;
    }
    if (lazy === true) {
      return /\./.test(source) ? null : "lazy/function";
    }
    if (Array.isArray(lazy)) {
      return lazy.indexOf(source) === -1 ? null : "lazy/function";
    }
    if (typeof lazy === "function") {
      return lazy(source) ? "lazy/function" : null;
    }
  },
  buildRequireWrapper(name, init, payload, referenced) {
    if (payload === "lazy/function") {
      if (!referenced) return false;
      return _core.template.statement.ast`
        function ${name}() {
          const data = ${init};
          ${name} = function(){ return data; };
          return data;
        }
      `;
    }
  },
  wrapReference(ref, payload) {
    if (payload === "lazy/function") return _core.types.callExpression(ref, []);
  }
});
exports.lazyImportsHook = lazyImportsHook;

//# sourceMappingURL=lazy.js.map
