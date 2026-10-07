var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
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

// src/index.ts
var src_exports = {};
__export(src_exports, {
  buildQueryString: () => buildQueryString
});
module.exports = __toCommonJS(src_exports);
var import_util_uri_escape = require("@smithy/util-uri-escape");
function buildQueryString(query) {
  const parts = [];
  for (let key of Object.keys(query).sort()) {
    const value = query[key];
    key = (0, import_util_uri_escape.escapeUri)(key);
    if (Array.isArray(value)) {
      for (let i = 0, iLen = value.length; i < iLen; i++) {
        parts.push(`${key}=${(0, import_util_uri_escape.escapeUri)(value[i])}`);
      }
    } else {
      let qsEntry = key;
      if (value || typeof value === "string") {
        qsEntry += `=${(0, import_util_uri_escape.escapeUri)(value)}`;
      }
      parts.push(qsEntry);
    }
  }
  return parts.join("&");
}
__name(buildQueryString, "buildQueryString");
// Annotate the CommonJS export names for ESM import in node:

0 && (module.exports = {
  buildQueryString
});

