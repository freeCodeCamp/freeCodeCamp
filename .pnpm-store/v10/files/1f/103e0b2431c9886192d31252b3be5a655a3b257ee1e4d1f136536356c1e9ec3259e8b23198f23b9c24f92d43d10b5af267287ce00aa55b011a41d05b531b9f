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
var http_frame_exports = {};
__export(http_frame_exports, {
  HttpNetworkFrame: () => HttpNetworkFrame,
  RequestEvent: () => RequestEvent,
  ResponseEvent: () => ResponseEvent,
  UnhandledExceptionEvent: () => UnhandledExceptionEvent
});
module.exports = __toCommonJS(http_frame_exports);
var import_rettime = require("rettime");
var import_until_async = require("until-async");
var import_interceptors = require("@mswjs/interceptors");
var import_network_frame = require("./network-frame");
var import_toPublicUrl = require("../../utils/request/toPublicUrl");
var import_executeHandlers = require("../../utils/executeHandlers");
var import_storeResponseCookies = require("../../utils/request/storeResponseCookies");
var import_request_utils = require("../request-utils");
var import_devUtils = require("../../utils/internal/devUtils");
var import_on_unhandled_frame = require("../on-unhandled-frame");
var import_handlers_controller = require("../handlers-controller");
var import_RequestHandler = require("../../handlers/RequestHandler");
class RequestEvent extends import_rettime.TypedEvent {
  requestId;
  request;
  constructor(type, data) {
    super(...[type, {}]);
    this.requestId = data.requestId;
    this.request = data.request;
  }
}
class ResponseEvent extends import_rettime.TypedEvent {
  requestId;
  request;
  response;
  constructor(type, data) {
    super(...[type, {}]);
    this.requestId = data.requestId;
    this.request = data.request;
    this.response = data.response;
  }
}
class UnhandledExceptionEvent extends import_rettime.TypedEvent {
  error;
  requestId;
  request;
  constructor(type, data) {
    super(...[type, {}]);
    this.error = data.error;
    this.requestId = data.requestId;
    this.request = data.request;
  }
}
class HttpNetworkFrame extends import_network_frame.NetworkFrame {
  constructor(options) {
    const id = options.id || (0, import_interceptors.createRequestId)();
    super("http", { id, request: options.request });
  }
  getHandlers(controller) {
    return controller.getHandlersByKind("request");
  }
  async getUnhandledMessage() {
    const { request } = this.data;
    const url = new URL(request.url);
    const publicUrl = (0, import_toPublicUrl.toPublicUrl)(url) + url.search;
    const requestBody = request.body == null ? null : await request.clone().text();
    const details = `

  \u2022 ${request.method} ${publicUrl}

${requestBody ? `  \u2022 Request body: ${requestBody}

` : ""}`;
    const message = `intercepted a request without a matching request handler:${details}If you still wish to intercept this unhandled request, please create a request handler for it.
Read more: https://mswjs.io/docs/http/intercepting-requests`;
    return message;
  }
  async resolve(handlers, onUnhandledFrame, resolutionContext) {
    const { id: requestId, request } = this.data;
    const requestCloneForLogs = resolutionContext?.quiet ? null : request.clone();
    this.events.emit(new RequestEvent("request:start", { requestId, request }));
    if ((0, import_request_utils.shouldBypassRequest)(request)) {
      this.events.emit(new RequestEvent("request:end", { requestId, request }));
      this.passthrough();
      return null;
    }
    const [lookupError, lookupResult] = await (0, import_until_async.until)(() => {
      return (0, import_executeHandlers.executeHandlers)({
        requestId,
        request,
        handlers,
        resolutionContext: {
          baseUrl: resolutionContext?.baseUrl?.toString(),
          quiet: resolutionContext?.quiet
        }
      });
    });
    if (lookupError != null) {
      if (!this.events.emit(
        new UnhandledExceptionEvent("unhandledException", {
          error: lookupError,
          requestId,
          request
        })
      )) {
        console.error(lookupError);
        import_devUtils.devUtils.error(
          'Encountered an unhandled exception during the handler lookup for "%s %s". Please see the original error above.',
          request.method,
          request.url
        );
      }
      this.errorWith(lookupError);
      return null;
    }
    if (lookupResult == null) {
      this.events.emit(
        new RequestEvent("request:unhandled", {
          requestId,
          request
        })
      );
      await (0, import_on_unhandled_frame.executeUnhandledFrameHandle)(this, onUnhandledFrame).then(
        () => this.passthrough(),
        (error) => this.errorWith(error)
      );
      this.events.emit(
        new RequestEvent("request:end", {
          requestId,
          request
        })
      );
      return false;
    }
    const { response, handler, parsedResult } = lookupResult;
    this.events.emit(
      new RequestEvent("request:match", {
        requestId,
        request
      })
    );
    if (response == null) {
      this.events.emit(
        new RequestEvent("request:end", {
          requestId,
          request
        })
      );
      this.passthrough();
      return null;
    }
    if ((0, import_request_utils.isPassthroughResponse)(response)) {
      this.events.emit(
        new RequestEvent("request:end", {
          requestId,
          request
        })
      );
      this.passthrough();
      return null;
    }
    const responseCloneForLogs = resolutionContext?.quiet ? null : response.clone();
    await (0, import_storeResponseCookies.storeResponseCookies)(request, response);
    this.respondWith(response);
    this.events.emit(
      new RequestEvent("request:end", {
        requestId,
        request
      })
    );
    if (!resolutionContext?.quiet) {
      handler.log({
        request: requestCloneForLogs,
        response: responseCloneForLogs,
        parsedResult
      });
    }
    return true;
  }
}
//# sourceMappingURL=http-frame.js.map