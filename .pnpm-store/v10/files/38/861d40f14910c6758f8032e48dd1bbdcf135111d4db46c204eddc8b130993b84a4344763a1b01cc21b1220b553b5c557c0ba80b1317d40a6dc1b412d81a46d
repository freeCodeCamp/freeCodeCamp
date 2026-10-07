import { TypedEvent } from "rettime";
import {} from "@mswjs/interceptors/WebSocket";
import {
  kConnect,
  kAutoConnect
} from '../../handlers/WebSocketHandler.mjs';
import {
  NetworkFrame
} from './network-frame.mjs';
import {
  executeUnhandledFrameHandle
} from '../on-unhandled-frame.mjs';
import { devUtils } from '../../utils/internal/devUtils.mjs';
import {} from '../handlers-controller.mjs';
class WebSocketConnectionEvent extends TypedEvent {
  url;
  protocols;
  constructor(type, data) {
    super(...[type, {}]);
    this.url = data.url;
    this.protocols = data.protocols;
  }
}
class UnhandledWebSocketExceptionEvent extends TypedEvent {
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
class WebSocketNetworkFrame extends NetworkFrame {
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
      await executeUnhandledFrameHandle(this, onUnhandledFrame).then(
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
        [kAutoConnect]: false
      });
      if (!handlerConnection) {
        continue;
      }
      hasMatchingHandlers = true;
      const removeLogger = !resolutionContext?.quiet ? handler.log(connection) : void 0;
      try {
        if (!handler[kConnect](handlerConnection)) {
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
          devUtils.error(
            'Encountered an unhandled exception during the handler lookup for "%s". Please see the original error above.',
            connection.client.url
          );
        }
        throw error;
      }
    }
    if (!hasMatchingHandlers) {
      await executeUnhandledFrameHandle(this, onUnhandledFrame).then(
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
export {
  WebSocketNetworkFrame
};
//# sourceMappingURL=websocket-frame.mjs.map