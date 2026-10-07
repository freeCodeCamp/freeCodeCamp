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
var getAllAcceptedMimeTypes_exports = {};
__export(getAllAcceptedMimeTypes_exports, {
  getAllAcceptedMimeTypes: () => getAllAcceptedMimeTypes
});
module.exports = __toCommonJS(getAllAcceptedMimeTypes_exports);
function getAllAcceptedMimeTypes(acceptHeader) {
  if (acceptHeader == null) {
    return [];
  }
  const accepted = [];
  for (const part of acceptHeader.split(",")) {
    const [type, ...params] = part.split(";").map((v) => v.trim());
    let quality = 1;
    let parameterCount = 0;
    for (const param of params) {
      const [key, value] = param.split("=").map((v) => v.trim());
      if (key === "q") {
        quality = Number(value);
      } else {
        parameterCount++;
      }
    }
    if (quality === 0) {
      continue;
    }
    const [mediaType, mediaSubtype] = type.split("/");
    const specificity = mediaType === "*" ? 0 : mediaSubtype === "*" ? 1 : 2;
    accepted.push({ type, quality, specificity, parameterCount });
  }
  if (!accepted.length) {
    return [];
  }
  return accepted.sort((left, right) => {
    if (right.quality !== left.quality) {
      return right.quality - left.quality;
    }
    if (right.specificity !== left.specificity) {
      return right.specificity - left.specificity;
    }
    return right.parameterCount - left.parameterCount;
  }).map((entry) => entry.type);
}
//# sourceMappingURL=getAllAcceptedMimeTypes.js.map