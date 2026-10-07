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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var hasRefCounted_exports = {};
__export(hasRefCounted_exports, {
  hasRefCounted: () => hasRefCounted
});
module.exports = __toCommonJS(hasRefCounted_exports);
var import_isObject = require("./isObject");
function hasRefCounted(value) {
  return (
    /**
     * @note Guard against non-object values.
     * E.g. `setTimeout` returns an object in Node.js but a number in the browser.
     */
    (0, import_isObject.isObject)(value) && typeof Reflect.get(value, "ref") === "function" && typeof Reflect.get(value, "unref") === "function"
  );
}
//# sourceMappingURL=hasRefCounted.js.map