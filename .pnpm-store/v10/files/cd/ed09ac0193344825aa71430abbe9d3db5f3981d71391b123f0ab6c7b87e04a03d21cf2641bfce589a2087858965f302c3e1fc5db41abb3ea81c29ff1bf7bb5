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
var onUnhandledRequest_exports = {};
__export(onUnhandledRequest_exports, {
  onUnhandledRequest: () => onUnhandledRequest
});
module.exports = __toCommonJS(onUnhandledRequest_exports);
var import_toPublicUrl = require("./toPublicUrl");
var import_devUtils = require("../internal/devUtils");
var import_isCommonAssetRequest = require("../../isCommonAssetRequest");
async function onUnhandledRequest(request, strategy = "warn") {
  const url = new URL(request.url);
  const publicUrl = (0, import_toPublicUrl.toPublicUrl)(url) + url.search;
  const requestBody = request.method === "HEAD" || request.method === "GET" ? null : await request.clone().text();
  const messageDetails = `

  \u2022 ${request.method} ${publicUrl}

${requestBody ? `  \u2022 Request body: ${requestBody}

` : ""}`;
  const unhandledRequestMessage = `intercepted a request without a matching request handler:${messageDetails}If you still wish to intercept this unhandled request, please create a request handler for it.
Read more: https://mswjs.io/docs/http/intercepting-requests`;
  function applyStrategy(strategy2) {
    switch (strategy2) {
      case "error": {
        import_devUtils.devUtils.error("Error: %s", unhandledRequestMessage);
        throw new import_devUtils.InternalError(
          import_devUtils.devUtils.formatMessage(
            'Cannot bypass a request when using the "error" strategy for the "onUnhandledRequest" option.'
          )
        );
      }
      case "warn": {
        import_devUtils.devUtils.warn("Warning: %s", unhandledRequestMessage);
        break;
      }
      case "bypass":
        break;
      default:
        throw new import_devUtils.InternalError(
          import_devUtils.devUtils.formatMessage(
            'Failed to react to an unhandled request: unknown strategy "%s". Please provide one of the supported strategies ("bypass", "warn", "error") or a custom callback function as the value of the "onUnhandledRequest" option.',
            strategy2
          )
        );
    }
  }
  if (typeof strategy === "function") {
    strategy(request, {
      warning: applyStrategy.bind(null, "warn"),
      error: applyStrategy.bind(null, "error")
    });
    return;
  }
  if (!(0, import_isCommonAssetRequest.isCommonAssetRequest)(request)) {
    applyStrategy(strategy);
  }
}
//# sourceMappingURL=onUnhandledRequest.js.map