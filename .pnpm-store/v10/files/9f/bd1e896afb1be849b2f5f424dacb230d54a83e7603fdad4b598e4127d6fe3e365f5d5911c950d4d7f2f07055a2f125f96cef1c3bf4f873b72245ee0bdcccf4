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
  SelectorType: () => SelectorType,
  booleanSelector: () => booleanSelector,
  numberSelector: () => numberSelector
});
module.exports = __toCommonJS(src_exports);

// src/booleanSelector.ts
var booleanSelector = /* @__PURE__ */ __name((obj, key, type) => {
  if (!(key in obj))
    return void 0;
  if (obj[key] === "true")
    return true;
  if (obj[key] === "false")
    return false;
  throw new Error(`Cannot load ${type} "${key}". Expected "true" or "false", got ${obj[key]}.`);
}, "booleanSelector");

// src/numberSelector.ts
var numberSelector = /* @__PURE__ */ __name((obj, key, type) => {
  if (!(key in obj))
    return void 0;
  const numberValue = parseInt(obj[key], 10);
  if (Number.isNaN(numberValue)) {
    throw new TypeError(`Cannot load ${type} '${key}'. Expected number, got '${obj[key]}'.`);
  }
  return numberValue;
}, "numberSelector");

// src/types.ts
var SelectorType = /* @__PURE__ */ ((SelectorType2) => {
  SelectorType2["ENV"] = "env";
  SelectorType2["CONFIG"] = "shared config entry";
  return SelectorType2;
})(SelectorType || {});
// Annotate the CommonJS export names for ESM import in node:

0 && (module.exports = {
  booleanSelector,
  numberSelector,
  SelectorType
});

