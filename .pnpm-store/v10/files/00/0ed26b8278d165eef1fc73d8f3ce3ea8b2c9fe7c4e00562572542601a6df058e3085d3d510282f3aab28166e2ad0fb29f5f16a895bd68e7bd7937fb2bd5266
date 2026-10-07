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
var chunk_IPLRRT6O_exports = {};
__export(chunk_IPLRRT6O_exports, {
  binaryTargetRegex: () => binaryTargetRegex,
  binaryTargetRegex_exports: () => binaryTargetRegex_exports,
  init_binaryTargetRegex: () => init_binaryTargetRegex
});
module.exports = __toCommonJS(chunk_IPLRRT6O_exports);
var import_chunk_7MLUNQIZ = require("./chunk-7MLUNQIZ.js");
var import_chunk_2ESYSVXG = require("./chunk-2ESYSVXG.js");
function escapeStringRegexp(string) {
  if (typeof string !== "string") {
    throw new TypeError("Expected a string");
  }
  return string.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
var init_escape_string_regexp = (0, import_chunk_2ESYSVXG.__esm)({
  "../../node_modules/.pnpm/escape-string-regexp@5.0.0/node_modules/escape-string-regexp/index.js"() {
    "use strict";
  }
});
var binaryTargetRegex_exports = {};
(0, import_chunk_2ESYSVXG.__export)(binaryTargetRegex_exports, {
  binaryTargetRegex: () => binaryTargetRegex
});
var binaryTargetRegex;
var init_binaryTargetRegex = (0, import_chunk_2ESYSVXG.__esm)({
  "src/test-utils/binaryTargetRegex.ts"() {
    init_escape_string_regexp();
    (0, import_chunk_7MLUNQIZ.init_binaryTargets)();
    binaryTargetRegex = new RegExp(
      "(" + [...import_chunk_7MLUNQIZ.binaryTargets].sort((a, b) => b.length - a.length).map((p) => escapeStringRegexp(p)).join("|") + ")",
      "g"
    );
  }
});
