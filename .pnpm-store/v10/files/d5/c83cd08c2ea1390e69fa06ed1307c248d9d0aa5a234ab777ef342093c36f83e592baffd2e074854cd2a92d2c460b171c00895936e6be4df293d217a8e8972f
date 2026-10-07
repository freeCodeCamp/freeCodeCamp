"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var serializeResponse_exports = {};
__export(serializeResponse_exports, {
  serializeResponse: () => serializeResponse
});
module.exports = __toCommonJS(serializeResponse_exports);
var import_statuses = __toESM(require("../../../shims/statuses"), 1);
const { message } = import_statuses.default;
async function serializeResponse(response) {
  const responseClone = response.clone();
  const responseText = await responseClone.text();
  const responseStatus = responseClone.status || 200;
  const responseStatusText = responseClone.statusText || message[responseStatus] || "OK";
  return {
    status: responseStatus,
    statusText: responseStatusText,
    headers: Object.fromEntries(responseClone.headers.entries()),
    body: responseText
  };
}
//# sourceMappingURL=serializeResponse.js.map