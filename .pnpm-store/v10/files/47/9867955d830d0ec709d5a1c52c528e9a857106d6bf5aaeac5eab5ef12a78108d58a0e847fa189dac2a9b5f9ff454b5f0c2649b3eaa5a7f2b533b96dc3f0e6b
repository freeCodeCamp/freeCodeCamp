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
var matchRequestUrl_exports = {};
__export(matchRequestUrl_exports, {
  coercePath: () => coercePath,
  isPath: () => isPath,
  matchRequestUrl: () => matchRequestUrl
});
module.exports = __toCommonJS(matchRequestUrl_exports);
var import_path_to_regexp = require("path-to-regexp");
var import_interceptors = require("@mswjs/interceptors");
var import_normalizePath = require("./normalizePath");
function coercePath(path) {
  return path.replace(
    /([:a-zA-Z_-]*)(\*{1,2})+/g,
    (_, parameterName, wildcard) => {
      const expression = "(.*)";
      if (!parameterName) {
        return expression;
      }
      return parameterName.startsWith(":") ? `${parameterName}${wildcard}` : `${parameterName}${expression}`;
    }
  ).replace(/([^/])(:)(?=(?:\d+|\(\.\*\))(?=\/|$))/, "$1\\$2").replace(/^([^/]+)(:)(?=\/\/)/, "$1\\$2");
}
function matchRequestUrl(url, path, baseUrl) {
  const normalizedPath = (0, import_normalizePath.normalizePath)(path, baseUrl);
  const cleanPath = typeof normalizedPath === "string" ? coercePath(normalizedPath) : normalizedPath;
  const cleanUrl = (0, import_interceptors.getCleanUrl)(url);
  const result = (0, import_path_to_regexp.match)(cleanPath, { decode: decodeURIComponent })(cleanUrl);
  const params = result && result.params || {};
  return {
    matches: result !== false,
    params
  };
}
function isPath(value) {
  return typeof value === "string" || value instanceof RegExp;
}
//# sourceMappingURL=matchRequestUrl.js.map