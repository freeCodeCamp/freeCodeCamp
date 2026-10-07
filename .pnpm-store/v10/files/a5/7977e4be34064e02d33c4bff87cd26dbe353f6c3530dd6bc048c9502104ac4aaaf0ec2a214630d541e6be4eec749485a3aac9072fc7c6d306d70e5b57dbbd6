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
var chunk_FWMN4WME_exports = {};
__export(chunk_FWMN4WME_exports, {
  log: () => log,
  should: () => should,
  tags: () => tags,
  warn: () => warn
});
module.exports = __toCommonJS(chunk_FWMN4WME_exports);
var import_chunk_YVXCXD3A = require("./chunk-YVXCXD3A.js");
var tags = {
  warn: (0, import_chunk_YVXCXD3A.yellow)("prisma:warn")
};
var should = {
  warn: () => !process.env.PRISMA_DISABLE_WARNINGS
};
function log(...data) {
  console.log(...data);
}
function warn(message, ...optionalParams) {
  if (should.warn()) {
    console.warn(`${tags.warn} ${message}`, ...optionalParams);
  }
}
