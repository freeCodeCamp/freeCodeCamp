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
var isCommonAssetRequest_exports = {};
__export(isCommonAssetRequest_exports, {
  isCommonAssetRequest: () => isCommonAssetRequest
});
module.exports = __toCommonJS(isCommonAssetRequest_exports);
function isCommonAssetRequest(request) {
  const url = new URL(request.url);
  if (url.protocol === "file:") {
    return true;
  }
  if (/(fonts\.googleapis\.com)/.test(url.hostname)) {
    return true;
  }
  if (/node_modules/.test(url.pathname)) {
    return true;
  }
  if (url.pathname.includes("@vite")) {
    return true;
  }
  return /\.(s?css|less|m?jsx?|m?tsx?|html|ttf|otf|woff|woff2|eot|gif|jpe?g|png|avif|webp|svg|mp4|webm|ogg|mov|mp3|wav|ogg|flac|aac|pdf|txt|csv|json|xml|md|zip|tar|gz|rar|7z)$/i.test(
    url.pathname
  );
}
//# sourceMappingURL=isCommonAssetRequest.js.map