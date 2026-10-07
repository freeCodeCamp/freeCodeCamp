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
var truncateMessage_exports = {};
__export(truncateMessage_exports, {
  truncateMessage: () => truncateMessage
});
module.exports = __toCommonJS(truncateMessage_exports);
const MAX_LENGTH = 24;
function truncateMessage(message) {
  if (message.length <= MAX_LENGTH) {
    return message;
  }
  return `${message.slice(0, MAX_LENGTH)}\u2026`;
}
//# sourceMappingURL=truncateMessage.js.map