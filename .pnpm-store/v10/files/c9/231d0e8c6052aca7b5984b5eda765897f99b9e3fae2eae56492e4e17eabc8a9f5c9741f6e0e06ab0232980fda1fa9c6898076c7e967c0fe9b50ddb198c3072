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

// src/index.ts
var index_exports = {};
__export(index_exports, {
  defaultDeserialize: () => defaultDeserialize,
  defaultSerialize: () => defaultSerialize
});
module.exports = __toCommonJS(index_exports);
var import_node_buffer = require("buffer");
var _serialize = (data, escapeColonStrings = true) => {
  if (data === void 0 || data === null) {
    return "null";
  }
  if (typeof data === "string") {
    return JSON.stringify(
      escapeColonStrings && data.startsWith(":") ? `:${data}` : data
    );
  }
  if (import_node_buffer.Buffer.isBuffer(data)) {
    return JSON.stringify(`:base64:${data.toString("base64")}`);
  }
  if (data?.toJSON) {
    data = data.toJSON();
  }
  if (typeof data === "object") {
    let s = "";
    const array = Array.isArray(data);
    s = array ? "[" : "{";
    let first = true;
    for (const k in data) {
      const ignore = typeof data[k] === "function" || !array && data[k] === void 0;
      if (!Object.hasOwn(data, k) || ignore) {
        continue;
      }
      if (!first) {
        s += ",";
      }
      first = false;
      if (array) {
        s += _serialize(data[k], escapeColonStrings);
      } else if (data[k] !== void 0) {
        s += `${_serialize(k, false)}:${_serialize(data[k], escapeColonStrings)}`;
      }
    }
    s += array ? "]" : "}";
    return s;
  }
  return JSON.stringify(data);
};
var defaultSerialize = (data) => {
  return _serialize(data, true);
};
var defaultDeserialize = (data) => JSON.parse(data, (_, value) => {
  if (typeof value === "string") {
    if (value.startsWith(":base64:")) {
      return import_node_buffer.Buffer.from(value.slice(8), "base64");
    }
    return value.startsWith(":") ? value.slice(1) : value;
  }
  return value;
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  defaultDeserialize,
  defaultSerialize
});
