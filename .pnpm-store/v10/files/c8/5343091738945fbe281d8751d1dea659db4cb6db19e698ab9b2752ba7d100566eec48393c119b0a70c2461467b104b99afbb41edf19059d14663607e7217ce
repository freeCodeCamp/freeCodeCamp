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
var handleWebSocketEvent_exports = {};
__export(handleWebSocketEvent_exports, {
  handleWebSocketEvent: () => handleWebSocketEvent
});
module.exports = __toCommonJS(handleWebSocketEvent_exports);
var import_webSocketInterceptor = require("./webSocketInterceptor");
var import_onUnhandledRequest = require("../utils/request/onUnhandledRequest");
var import_isHandlerKind = require("../utils/internal/isHandlerKind");
function handleWebSocketEvent(options) {
  import_webSocketInterceptor.webSocketInterceptor.on("connection", async (connection) => {
    const handlers = options.getHandlers().filter((0, import_isHandlerKind.isHandlerKind)("websocket"));
    if (handlers.length > 0) {
      options?.onMockedConnection(connection);
      await Promise.all(
        handlers.map((handler) => {
          return handler.run(connection);
        })
      );
      return;
    }
    const request = new Request(connection.client.url, {
      headers: {
        upgrade: "websocket",
        connection: "upgrade"
      }
    });
    await (0, import_onUnhandledRequest.onUnhandledRequest)(
      request,
      options.getUnhandledRequestStrategy()
    ).catch((error) => {
      const errorEvent = new Event("error");
      Object.defineProperty(errorEvent, "cause", {
        enumerable: true,
        configurable: false,
        value: error
      });
      connection.client.socket.dispatchEvent(errorEvent);
    });
    options?.onPassthroughConnection(connection);
    connection.server.connect();
  });
}
//# sourceMappingURL=handleWebSocketEvent.js.map