var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
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

// src/index.ts
var src_exports = {};
__export(src_exports, {
  addRecursionDetectionMiddlewareOptions: () => addRecursionDetectionMiddlewareOptions,
  getRecursionDetectionPlugin: () => getRecursionDetectionPlugin,
  recursionDetectionMiddleware: () => recursionDetectionMiddleware
});
module.exports = __toCommonJS(src_exports);
var import_protocol_http = require("@smithy/protocol-http");
var TRACE_ID_HEADER_NAME = "X-Amzn-Trace-Id";
var ENV_LAMBDA_FUNCTION_NAME = "AWS_LAMBDA_FUNCTION_NAME";
var ENV_TRACE_ID = "_X_AMZN_TRACE_ID";
var recursionDetectionMiddleware = /* @__PURE__ */ __name((options) => (next) => async (args) => {
  const { request } = args;
  if (!import_protocol_http.HttpRequest.isInstance(request) || options.runtime !== "node" || request.headers.hasOwnProperty(TRACE_ID_HEADER_NAME)) {
    return next(args);
  }
  const functionName = process.env[ENV_LAMBDA_FUNCTION_NAME];
  const traceId = process.env[ENV_TRACE_ID];
  const nonEmptyString = /* @__PURE__ */ __name((str) => typeof str === "string" && str.length > 0, "nonEmptyString");
  if (nonEmptyString(functionName) && nonEmptyString(traceId)) {
    request.headers[TRACE_ID_HEADER_NAME] = traceId;
  }
  return next({
    ...args,
    request
  });
}, "recursionDetectionMiddleware");
var addRecursionDetectionMiddlewareOptions = {
  step: "build",
  tags: ["RECURSION_DETECTION"],
  name: "recursionDetectionMiddleware",
  override: true,
  priority: "low"
};
var getRecursionDetectionPlugin = /* @__PURE__ */ __name((options) => ({
  applyToStack: (clientStack) => {
    clientStack.add(recursionDetectionMiddleware(options), addRecursionDetectionMiddlewareOptions);
  }
}), "getRecursionDetectionPlugin");
// Annotate the CommonJS export names for ESM import in node:

0 && (module.exports = {
  recursionDetectionMiddleware,
  addRecursionDetectionMiddlewareOptions,
  getRecursionDetectionPlugin
});

