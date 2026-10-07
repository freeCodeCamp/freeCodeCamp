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
var normalizePath_exports = {};
__export(normalizePath_exports, {
  normalizePath: () => normalizePath
});
module.exports = __toCommonJS(normalizePath_exports);
var import_cleanUrl = require("../url/cleanUrl");
var import_getAbsoluteUrl = require("../url/getAbsoluteUrl");
function normalizePath(path, baseUrl) {
  if (path instanceof RegExp) {
    return path;
  }
  const maybeAbsoluteUrl = (0, import_getAbsoluteUrl.getAbsoluteUrl)(path, baseUrl);
  return (0, import_cleanUrl.cleanUrl)(maybeAbsoluteUrl);
}
//# sourceMappingURL=normalizePath.js.map