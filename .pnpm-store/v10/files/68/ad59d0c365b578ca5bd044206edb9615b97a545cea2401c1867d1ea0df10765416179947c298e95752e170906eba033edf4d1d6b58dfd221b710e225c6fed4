var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  invalidFunction: () => invalidFunction,
  invalidProvider: () => invalidProvider
});
module.exports = __toCommonJS(src_exports);

// src/invalidFunction.ts
var invalidFunction = /* @__PURE__ */ __name((message) => () => {
  throw new Error(message);
}, "invalidFunction");

// src/invalidProvider.ts
var invalidProvider = /* @__PURE__ */ __name((message) => () => Promise.reject(message), "invalidProvider");
// Annotate the CommonJS export names for ESM import in node:

0 && (module.exports = {
  invalidFunction,
  invalidProvider
});

