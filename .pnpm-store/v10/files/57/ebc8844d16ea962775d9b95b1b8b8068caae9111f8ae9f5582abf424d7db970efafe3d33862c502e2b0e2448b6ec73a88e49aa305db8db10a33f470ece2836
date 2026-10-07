var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// src/react/index.ts
export * from "@reduxjs/toolkit";

// src/dynamicMiddleware/react/index.ts
import { createDynamicMiddleware as cDM } from "@reduxjs/toolkit";
import { createDispatchHook, ReactReduxContext, useDispatch as useDefaultDispatch } from "react-redux";
var createDynamicMiddleware = () => {
  const instance = cDM();
  const createDispatchWithMiddlewareHookFactory = (context = ReactReduxContext) => {
    const useDispatch = context === ReactReduxContext ? useDefaultDispatch : createDispatchHook(context);
    function createDispatchWithMiddlewareHook2(...middlewares) {
      instance.addMiddleware(...middlewares);
      return useDispatch;
    }
    createDispatchWithMiddlewareHook2.withTypes = () => createDispatchWithMiddlewareHook2;
    return createDispatchWithMiddlewareHook2;
  };
  const createDispatchWithMiddlewareHook = createDispatchWithMiddlewareHookFactory();
  return __spreadProps(__spreadValues({}, instance), {
    createDispatchWithMiddlewareHookFactory,
    createDispatchWithMiddlewareHook
  });
};
export {
  createDynamicMiddleware
};
//# sourceMappingURL=redux-toolkit-react.legacy-esm.js.map