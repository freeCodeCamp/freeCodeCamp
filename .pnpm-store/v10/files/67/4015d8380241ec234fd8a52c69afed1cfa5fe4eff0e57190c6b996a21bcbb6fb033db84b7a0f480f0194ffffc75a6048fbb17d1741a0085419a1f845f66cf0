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
var http_exports = {};
__export(http_exports, {
  http: () => http
});
module.exports = __toCommonJS(http_exports);
var import_RequestHandler = require("./handlers/RequestHandler");
var import_HttpHandler = require("./handlers/HttpHandler");
function createHttpHandler(method) {
  return (predicate, resolver, options = {}) => {
    return new import_HttpHandler.HttpHandler(method, predicate, resolver, options);
  };
}
const http = {
  all: createHttpHandler(/.+/),
  head: createHttpHandler(import_HttpHandler.HttpMethods.HEAD),
  get: createHttpHandler(import_HttpHandler.HttpMethods.GET),
  post: createHttpHandler(import_HttpHandler.HttpMethods.POST),
  put: createHttpHandler(import_HttpHandler.HttpMethods.PUT),
  delete: createHttpHandler(import_HttpHandler.HttpMethods.DELETE),
  patch: createHttpHandler(import_HttpHandler.HttpMethods.PATCH),
  options: createHttpHandler(import_HttpHandler.HttpMethods.OPTIONS)
};
//# sourceMappingURL=http.js.map