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
var websocket_frame_exports = {};
__export(websocket_frame_exports, {
  WebSocketNetworkFrame: () => WebSocketNetworkFrame
});
module.exports = __toCommonJS(websocket_frame_exports);
var import_rettime = require("rettime");
var import_WebSocket = require("@mswjs/interceptors/WebSocket");
var import_WebSocketHandler = require("../../handlers/WebSocketHandler");
var import_network_frame = require("./network-frame");
var import_on_unhandled_frame = require("../on-unhandled-frame");
var import_devUtils = require("../../utils/internal/devUtils");
var import_handlers_controller = require("../handlers-controller");
class WebSocketConnectionEvent extends import_rettime.TypedEvent {
  url;
  protocols;
  constructor(type, data) {
    super(...[type, {}]);
    this.url = data.url;
    this.protocols = data.protocols;
  }
}
class UnhandledWebSocketExceptionEvent extends import_rettime.TypedEvent {
  url;
  protocols;
  error;
  constructor(type, data) {
    super(...[type, {}]);
    this.url = data.url;
    this.protocols = data.protocols;
    this.error = data.error;
  }
}
class WebSocketNetworkFrame extends import_network_frame.NetworkFrame {
  constructor(options) {
    super("ws", {
      connection: options.connection
    });
  }
  getHandlers(controller) {
    return controller.getHandlersByKind("websocket");
  }
  async resolve(handlers, onUnhandledFrame, resolutionContext) {
    const { connection } = this.data;
    this.events.emit(
      new WebSocketConnectionEvent("connection", {
        url: connection.client.url,
        protocols: connection.info.protocols
      })
    );
    if (handlers.length === 0) {
      await (0, import_on_unhandled_frame.executeUnhandledFrameHandle)(this, onUnhandledFrame).then(
        () => this.passthrough(),
        (error) => this.errorWith(error)
      );
      return false;
    }
    let hasMatchingHandlers = false;
    for (const handler of handlers) {
      const handlerConnection = await handler.run(connection, {
        baseUrl: resolutionContext?.baseUrl?.toString(),
        /**
         * @note Do not emit the "connection" event when running the handler.
         * Use the run only to get the resolved connection object.
         */
        [import_WebSocketHandler.kAutoConnect]: false
      });
      if (!handlerConnection) {
        continue;
      }
      hasMatchingHandlers = true;
      const removeLogger = !resolutionContext?.quiet ? handler.log(connection) : void 0;
      try {
        if (!handler[import_WebSocketHandler.kConnect](handlerConnection)) {
          removeLogger?.();
        }
      } catch (error) {
        if (!this.events.emit(
          new UnhandledWebSocketExceptionEvent("unhandledException", {
            error,
            url: connection.client.url,
            protocols: connection.info.protocols
          })
        )) {
          console.error(error);
          import_devUtils.devUtils.error(
            'Encountered an unhandled exception during the handler lookup for "%s". Please see the original error above.',
            connection.client.url
          );
        }
        throw error;
      }
    }
    if (!hasMatchingHandlers) {
      await (0, import_on_unhandled_frame.executeUnhandledFrameHandle)(this, onUnhandledFrame).then(
        () => this.passthrough(),
        (error) => this.errorWith(error)
      );
      return false;
    }
    return true;
  }
  async getUnhandledMessage() {
    const { connection } = this.data;
    const details = `

  \u2022 ${connection.client.url}

`;
    return `intercepted a WebSocket connection without a matching event handler:${details}If you still wish to intercept this unhandled connection, please create an event handler for it.
Read more: https://mswjs.io/docs/websocket`;
  }
}
//# sourceMappingURL=websocket-frame.js.map