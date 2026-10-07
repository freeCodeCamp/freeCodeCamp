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
var devUtils_exports = {};
__export(devUtils_exports, {
  InternalError: () => InternalError,
  devUtils: () => devUtils
});
module.exports = __toCommonJS(devUtils_exports);
var import_outvariant = require("outvariant");
const LIBRARY_PREFIX = "[MSW]";
function formatMessage(message, ...positionals) {
  const interpolatedMessage = (0, import_outvariant.format)(message, ...positionals);
  return `${LIBRARY_PREFIX} ${interpolatedMessage}`;
}
function warn(message, ...positionals) {
  console.warn(formatMessage(message, ...positionals));
}
function error(message, ...positionals) {
  console.error(formatMessage(message, ...positionals));
}
const devUtils = {
  formatMessage,
  warn,
  error
};
class InternalError extends Error {
  constructor(message) {
    super(message);
    this.name = "InternalError";
  }
}
//# sourceMappingURL=devUtils.js.map