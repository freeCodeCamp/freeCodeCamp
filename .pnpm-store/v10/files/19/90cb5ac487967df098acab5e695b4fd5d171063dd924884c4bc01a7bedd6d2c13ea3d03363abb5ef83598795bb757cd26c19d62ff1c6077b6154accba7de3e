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
var serializeRequest_exports = {};
__export(serializeRequest_exports, {
  serializeRequest: () => serializeRequest
});
module.exports = __toCommonJS(serializeRequest_exports);
async function serializeRequest(request) {
  const requestClone = request.clone();
  const requestText = await requestClone.text();
  return {
    url: new URL(request.url),
    method: request.method,
    headers: Object.fromEntries(request.headers.entries()),
    body: requestText
  };
}
//# sourceMappingURL=serializeRequest.js.map