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
var getStatusCodeColor_exports = {};
__export(getStatusCodeColor_exports, {
  StatusCodeColor: () => StatusCodeColor,
  getStatusCodeColor: () => getStatusCodeColor
});
module.exports = __toCommonJS(getStatusCodeColor_exports);
var StatusCodeColor = /* @__PURE__ */ ((StatusCodeColor2) => {
  StatusCodeColor2["Success"] = "#69AB32";
  StatusCodeColor2["Warning"] = "#F0BB4B";
  StatusCodeColor2["Danger"] = "#E95F5D";
  return StatusCodeColor2;
})(StatusCodeColor || {});
function getStatusCodeColor(status) {
  if (status < 300) {
    return "#69AB32" /* Success */;
  }
  if (status < 400) {
    return "#F0BB4B" /* Warning */;
  }
  return "#E95F5D" /* Danger */;
}
//# sourceMappingURL=getStatusCodeColor.js.map