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
var bypass_exports = {};
__export(bypass_exports, {
  bypass: () => bypass
});
module.exports = __toCommonJS(bypass_exports);
var import_outvariant = require("outvariant");
function bypass(input, init) {
  const request = new Request(
    // If given a Request instance, clone it not to exhaust
    // the original request's body.
    input instanceof Request ? input.clone() : input,
    init
  );
  (0, import_outvariant.invariant)(
    !request.bodyUsed,
    'Failed to create a bypassed request to "%s %s": given request instance already has its body read. Make sure to clone the intercepted request if you wish to read its body before bypassing it.',
    request.method,
    request.url
  );
  const requestClone = request.clone();
  requestClone.headers.append("accept", "msw/passthrough");
  return requestClone;
}
//# sourceMappingURL=bypass.js.map