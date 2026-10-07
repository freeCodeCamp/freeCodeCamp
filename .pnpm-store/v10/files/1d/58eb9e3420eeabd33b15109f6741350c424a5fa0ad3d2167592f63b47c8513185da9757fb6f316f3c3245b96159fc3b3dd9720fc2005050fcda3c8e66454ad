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
var attachSiblingHandlers_exports = {};
__export(attachSiblingHandlers_exports, {
  attachSiblingHandlers: () => attachSiblingHandlers,
  getSiblingHandlers: () => getSiblingHandlers
});
module.exports = __toCommonJS(attachSiblingHandlers_exports);
var import_outvariant = require("outvariant");
const kSiblingHandlers = Symbol("kSiblingHandlers");
function attachSiblingHandlers(owner, siblings) {
  (0, import_outvariant.invariant)(
    getSiblingHandlers(owner).length === 0,
    'Failed to merge handlers: the owner "%s" handler is already merged',
    owner.kind
  );
  Object.defineProperty(owner, kSiblingHandlers, {
    value: siblings,
    enumerable: false,
    writable: false,
    configurable: false
  });
  return owner;
}
function getSiblingHandlers(owner) {
  return Reflect.get(owner, kSiblingHandlers) || [];
}
//# sourceMappingURL=attachSiblingHandlers.js.map