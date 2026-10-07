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
var toPublicUrl_exports = {};
__export(toPublicUrl_exports, {
  toPublicUrl: () => toPublicUrl
});
module.exports = __toCommonJS(toPublicUrl_exports);
function toPublicUrl(url) {
  const urlInstance = url instanceof URL ? url : new URL(url);
  if (typeof location !== "undefined" && urlInstance.origin === location.origin) {
    return urlInstance.pathname;
  }
  return urlInstance.origin + urlInstance.pathname;
}
//# sourceMappingURL=toPublicUrl.js.map