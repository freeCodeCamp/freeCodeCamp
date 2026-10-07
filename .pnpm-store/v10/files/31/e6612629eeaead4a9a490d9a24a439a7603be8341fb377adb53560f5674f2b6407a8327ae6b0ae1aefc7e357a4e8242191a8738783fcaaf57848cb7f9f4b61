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
var interceptor_source_exports = {};
__export(interceptor_source_exports, {
  InterceptorSource: () => InterceptorSource
});
module.exports = __toCommonJS(interceptor_source_exports);
var import_interceptors = require("@mswjs/interceptors");
var import_network_source = require("./network-source");
var import_devUtils = require("../../utils/internal/devUtils");
var import_http_frame = require("../frames/http-frame");
var import_websocket_frame = require("../frames/websocket-frame");
var import_request_utils = require("../request-utils");
class InterceptorSource extends import_network_source.NetworkSource {
  #interceptor;
  #frames;
  constructor(options) {
    super();
    this.#interceptor = new import_interceptors.BatchInterceptor({
      name: "interceptor-source",
      interceptors: options.interceptors
    });
    this.#frames = /* @__PURE__ */ new Map();
  }
  enable() {
    this.#interceptor.apply();
    this.#interceptor.on("request", this.#handleRequest.bind(this)).on("response", this.#handleResponse.bind(this)).on("connection", this.#handleWebSocketConnection.bind(this));
  }
  disable() {
    super.disable();
    this.#interceptor.dispose();
    this.#frames.clear();
  }
  async #handleRequest({
    requestId,
    request,
    controller
  }) {
    const httpFrame = new InterceptorHttpNetworkFrame({
      id: requestId,
      request,
      controller
    });
    this.#frames.set(requestId, httpFrame);
    await this.queue(httpFrame);
  }
  async #handleResponse({
    requestId,
    request,
    response,
    isMockedResponse
  }) {
    const httpFrame = this.#frames.get(requestId);
    this.#frames.delete(requestId);
    if (httpFrame == null) {
      return;
    }
    queueMicrotask(() => {
      httpFrame.events.emit(
        new import_http_frame.ResponseEvent(
          isMockedResponse ? "response:mocked" : "response:bypass",
          {
            requestId,
            request,
            response
          }
        )
      );
    });
  }
  async #handleWebSocketConnection(connection) {
    await this.queue(
      new InterceptorWebSocketNetworkFrame({
        connection
      })
    );
  }
}
class InterceptorHttpNetworkFrame extends import_http_frame.HttpNetworkFrame {
  #controller;
  constructor(options) {
    super({
      id: options.id,
      request: options.request
    });
    this.#controller = options.controller;
  }
  passthrough() {
    (0, import_request_utils.deleteRequestPassthroughHeader)(this.data.request);
  }
  respondWith(response) {
    if (response) {
      this.#controller.respondWith(response);
    }
  }
  errorWith(reason) {
    if (reason instanceof Response) {
      return this.respondWith(reason);
    }
    if (reason instanceof import_devUtils.InternalError) {
      this.#controller.errorWith(reason);
    }
    throw reason;
  }
}
class InterceptorWebSocketNetworkFrame extends import_websocket_frame.WebSocketNetworkFrame {
  constructor(args) {
    super({ connection: args.connection });
  }
  errorWith(reason) {
    if (reason instanceof Error) {
      const { client } = this.data.connection;
      const errorEvent = new Event("error");
      Object.defineProperty(errorEvent, "cause", {
        enumerable: true,
        configurable: false,
        value: reason
      });
      client.socket.dispatchEvent(errorEvent);
    }
  }
  passthrough() {
    this.data.connection.server.connect();
  }
}
//# sourceMappingURL=interceptor-source.js.map