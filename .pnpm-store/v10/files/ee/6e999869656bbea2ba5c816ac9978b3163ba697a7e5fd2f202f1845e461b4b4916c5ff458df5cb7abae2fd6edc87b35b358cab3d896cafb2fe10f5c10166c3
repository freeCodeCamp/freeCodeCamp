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
var getMessageLength_exports = {};
__export(getMessageLength_exports, {
  getMessageLength: () => getMessageLength
});
module.exports = __toCommonJS(getMessageLength_exports);
var import_isObject = require("../../utils/internal/isObject");
function getMessageLength(data) {
  if (data instanceof Blob) {
    return data.size;
  }
  if ((0, import_isObject.isObject)(data) && "byteLength" in data) {
    return data.byteLength;
  }
  return new Blob([data]).size;
}
//# sourceMappingURL=getMessageLength.js.map