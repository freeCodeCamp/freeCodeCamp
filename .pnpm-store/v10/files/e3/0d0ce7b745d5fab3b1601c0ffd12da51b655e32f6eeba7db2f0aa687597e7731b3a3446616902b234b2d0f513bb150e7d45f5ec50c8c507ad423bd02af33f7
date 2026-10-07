"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transformDynamicImport = transformDynamicImport;
var _core = require("@babel/core");
var _helperModuleTransforms = require("@babel/helper-module-transforms");
const requireNoInterop = source => _core.template.expression.ast`require(${source})`;
const requireInterop = (source, file) => _core.types.callExpression(file.addHelper("interopRequireWildcard"), [requireNoInterop(source)]);
function transformDynamicImport(path, noInterop, file) {
  const buildRequire = noInterop ? requireNoInterop : requireInterop;
  path.replaceWith((0, _helperModuleTransforms.buildDynamicImport)(path.node, true, false, specifier => buildRequire(specifier, file)));
}

//# sourceMappingURL=dynamic-import.js.map
