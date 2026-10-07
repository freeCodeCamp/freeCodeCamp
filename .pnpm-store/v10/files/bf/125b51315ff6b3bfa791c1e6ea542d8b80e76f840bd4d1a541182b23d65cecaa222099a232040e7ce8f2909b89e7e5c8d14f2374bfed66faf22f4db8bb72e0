"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _helperPluginUtils = require("@babel/helper-plugin-utils");
var _helperRemapAsyncToGenerator = require("@babel/helper-remap-async-to-generator");
var _helperModuleImports = require("@babel/helper-module-imports");
var _core = require("@babel/core");
var _default = exports.default = (0, _helperPluginUtils.declare)((api, options) => {
  var _api$assumption, _api$assumption2;
  api.assertVersion(7);
  const {
    method,
    module
  } = options;
  const noNewArrows = (_api$assumption = api.assumption("noNewArrows")) != null ? _api$assumption : true;
  const ignoreFunctionLength = (_api$assumption2 = api.assumption("ignoreFunctionLength")) != null ? _api$assumption2 : false;
  if (method && module) {
    return {
      name: "transform-async-to-generator",
      visitor: {
        Function(path, state) {
          if (!path.node.async || path.node.generator) return;
          let wrapAsync = state.methodWrapper;
          if (wrapAsync) {
            wrapAsync = _core.types.cloneNode(wrapAsync);
          } else {
            wrapAsync = state.methodWrapper = (0, _helperModuleImports.addNamed)(path, method, module);
          }
          (0, _helperRemapAsyncToGenerator.default)(path, {
            wrapAsync
          }, noNewArrows, ignoreFunctionLength);
        }
      }
    };
  }
  return {
    name: "transform-async-to-generator",
    visitor: {
      Function(path, state) {
        if (!path.node.async || path.node.generator) return;
        (0, _helperRemapAsyncToGenerator.default)(path, {
          wrapAsync: state.addHelper("asyncToGenerator")
        }, noNewArrows, ignoreFunctionLength);
      }
    }
  };
});

//# sourceMappingURL=index.js.map
