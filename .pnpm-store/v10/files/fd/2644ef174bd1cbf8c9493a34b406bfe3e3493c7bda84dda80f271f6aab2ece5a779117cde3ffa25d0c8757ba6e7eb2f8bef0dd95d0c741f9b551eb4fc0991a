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
var getPublicData_exports = {};
__export(getPublicData_exports, {
  getPublicData: () => getPublicData
});
module.exports = __toCommonJS(getPublicData_exports);
var import_isObject = require("../../utils/internal/isObject");
var import_truncateMessage = require("./truncateMessage");
async function getPublicData(data) {
  if (data instanceof Blob) {
    const text = await data.text();
    return `Blob(${(0, import_truncateMessage.truncateMessage)(text)})`;
  }
  if ((0, import_isObject.isObject)(data)) {
    const text = new TextDecoder().decode(data);
    return `ArrayBuffer(${(0, import_truncateMessage.truncateMessage)(text)})`;
  }
  return (0, import_truncateMessage.truncateMessage)(data);
}
//# sourceMappingURL=getPublicData.js.map