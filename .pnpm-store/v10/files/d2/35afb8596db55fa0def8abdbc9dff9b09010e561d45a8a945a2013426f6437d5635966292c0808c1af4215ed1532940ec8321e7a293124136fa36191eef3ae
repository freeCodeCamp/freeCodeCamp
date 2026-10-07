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
var handleRequest_exports = {};
__export(handleRequest_exports, {
  handleRequest: () => handleRequest
});
module.exports = __toCommonJS(handleRequest_exports);
var import_until_async = require("until-async");
var import_executeHandlers = require("./executeHandlers");
var import_onUnhandledRequest = require("./request/onUnhandledRequest");
var import_storeResponseCookies = require("./request/storeResponseCookies");
async function handleRequest(request, requestId, handlers, options, emitter, handleRequestOptions) {
  emitter.emit("request:start", { request, requestId });
  if (request.headers.get("accept")?.includes("msw/passthrough")) {
    emitter.emit("request:end", { request, requestId });
    handleRequestOptions?.onPassthroughResponse?.(request);
    return;
  }
  const [lookupError, lookupResult] = await (0, import_until_async.until)(() => {
    return (0, import_executeHandlers.executeHandlers)({
      request,
      requestId,
      handlers,
      resolutionContext: handleRequestOptions?.resolutionContext
    });
  });
  if (lookupError) {
    emitter.emit("unhandledException", {
      error: lookupError,
      request,
      requestId
    });
    throw lookupError;
  }
  if (!lookupResult) {
    await (0, import_onUnhandledRequest.onUnhandledRequest)(request, options.onUnhandledRequest);
    emitter.emit("request:unhandled", { request, requestId });
    emitter.emit("request:end", { request, requestId });
    handleRequestOptions?.onPassthroughResponse?.(request);
    return;
  }
  const { response } = lookupResult;
  if (!response) {
    emitter.emit("request:end", { request, requestId });
    handleRequestOptions?.onPassthroughResponse?.(request);
    return;
  }
  if (response.status === 302 && response.headers.get("x-msw-intention") === "passthrough") {
    emitter.emit("request:end", { request, requestId });
    handleRequestOptions?.onPassthroughResponse?.(request);
    return;
  }
  await (0, import_storeResponseCookies.storeResponseCookies)(request, response);
  emitter.emit("request:match", { request, requestId });
  const requiredLookupResult = lookupResult;
  handleRequestOptions?.onMockedResponse?.(response, requiredLookupResult);
  emitter.emit("request:end", { request, requestId });
  return response;
}
//# sourceMappingURL=handleRequest.js.map