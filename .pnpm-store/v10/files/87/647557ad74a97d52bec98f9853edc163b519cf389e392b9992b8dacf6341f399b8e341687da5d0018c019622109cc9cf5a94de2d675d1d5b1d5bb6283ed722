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
var getResponse_exports = {};
__export(getResponse_exports, {
  getResponse: () => getResponse
});
module.exports = __toCommonJS(getResponse_exports);
var import_interceptors = require("@mswjs/interceptors");
var import_executeHandlers = require("./utils/executeHandlers");
const getResponse = async (handlers, request, resolutionContext) => {
  const result = await (0, import_executeHandlers.executeHandlers)({
    request,
    requestId: (0, import_interceptors.createRequestId)(),
    handlers,
    resolutionContext
  });
  return result?.response;
};
//# sourceMappingURL=getResponse.js.map