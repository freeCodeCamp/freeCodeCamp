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
var request_utils_exports = {};
__export(request_utils_exports, {
  REQUEST_INTENTION_HEADER_NAME: () => REQUEST_INTENTION_HEADER_NAME,
  RequestIntention: () => RequestIntention,
  deleteRequestPassthroughHeader: () => deleteRequestPassthroughHeader,
  isPassthroughResponse: () => isPassthroughResponse,
  shouldBypassRequest: () => shouldBypassRequest
});
module.exports = __toCommonJS(request_utils_exports);
const REQUEST_INTENTION_HEADER_NAME = "x-msw-intention";
var RequestIntention = /* @__PURE__ */ ((RequestIntention2) => {
  RequestIntention2["passthrough"] = "passthrough";
  return RequestIntention2;
})(RequestIntention || {});
function shouldBypassRequest(request) {
  return !!request.headers.get("accept")?.includes("msw/passthrough");
}
function isPassthroughResponse(response) {
  return response.status === 302 && response.headers.get(REQUEST_INTENTION_HEADER_NAME) === "passthrough" /* passthrough */;
}
function deleteRequestPassthroughHeader(request) {
  const acceptHeader = request.headers.get("accept");
  if (acceptHeader) {
    const nextAcceptHeader = acceptHeader.replace(/(,\s+)?msw\/passthrough/, "");
    if (nextAcceptHeader) {
      request.headers.set("accept", nextAcceptHeader);
    } else {
      request.headers.delete("accept");
    }
  }
}
//# sourceMappingURL=request-utils.js.map