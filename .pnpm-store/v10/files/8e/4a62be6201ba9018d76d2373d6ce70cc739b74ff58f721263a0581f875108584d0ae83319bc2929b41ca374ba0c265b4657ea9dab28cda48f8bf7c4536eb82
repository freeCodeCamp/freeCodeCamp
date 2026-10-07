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
var src_exports = {};
__export(src_exports, {
  SchemaError: () => SchemaError,
  getDotPath: () => getDotPath
});
module.exports = __toCommonJS(src_exports);

// src/getDotPath/getDotPath.ts
function getDotPath(issue) {
  if (issue.path?.length) {
    let dotPath = "";
    for (const item of issue.path) {
      const key = typeof item === "object" ? item.key : item;
      if (typeof key === "string" || typeof key === "number") {
        if (dotPath) {
          dotPath += `.${key}`;
        } else {
          dotPath += key;
        }
      } else {
        return null;
      }
    }
    return dotPath;
  }
  return null;
}

// src/SchemaError/SchemaError.ts
var SchemaError = class extends Error {
  /**
   * The schema issues.
   */
  issues;
  /**
   * Creates a schema error with useful information.
   *
   * @param issues The schema issues.
   */
  constructor(issues) {
    super(issues[0].message);
    this.name = "SchemaError";
    this.issues = issues;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SchemaError,
  getDotPath
});
