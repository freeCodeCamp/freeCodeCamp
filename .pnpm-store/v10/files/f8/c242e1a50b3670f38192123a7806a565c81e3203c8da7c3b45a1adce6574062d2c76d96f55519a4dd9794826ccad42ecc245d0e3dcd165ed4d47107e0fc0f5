"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/react/index.ts
var react_exports = {};
__export(react_exports, {
  createDynamicMiddleware: () => createDynamicMiddleware
});
module.exports = __toCommonJS(react_exports);
__reExport(react_exports, require("@reduxjs/toolkit"), module.exports);

// src/dynamicMiddleware/react/index.ts
var import_toolkit = require("@reduxjs/toolkit");
var import_react_redux = require("react-redux");
var createDynamicMiddleware = () => {
  const instance = (0, import_toolkit.createDynamicMiddleware)();
  const createDispatchWithMiddlewareHookFactory = (context = import_react_redux.ReactReduxContext) => {
    const useDispatch = context === import_react_redux.ReactReduxContext ? import_react_redux.useDispatch : (0, import_react_redux.createDispatchHook)(context);
    function createDispatchWithMiddlewareHook2(...middlewares) {
      instance.addMiddleware(...middlewares);
      return useDispatch;
    }
    createDispatchWithMiddlewareHook2.withTypes = () => createDispatchWithMiddlewareHook2;
    return createDispatchWithMiddlewareHook2;
  };
  const createDispatchWithMiddlewareHook = createDispatchWithMiddlewareHookFactory();
  return {
    ...instance,
    createDispatchWithMiddlewareHookFactory,
    createDispatchWithMiddlewareHook
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createDynamicMiddleware,
  ...require("@reduxjs/toolkit")
});
//# sourceMappingURL=redux-toolkit-react.development.cjs.map