import { webSocketInterceptor } from './webSocketInterceptor.mjs';
import {
  onUnhandledRequest
} from '../utils/request/onUnhandledRequest.mjs';
import { isHandlerKind } from '../utils/internal/isHandlerKind.mjs';
function handleWebSocketEvent(options) {
  webSocketInterceptor.on("connection", async (connection) => {
    const handlers = options.getHandlers().filter(isHandlerKind("websocket"));
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
    await onUnhandledRequest(
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
export {
  handleWebSocketEvent
};
//# sourceMappingURL=handleWebSocketEvent.mjs.map