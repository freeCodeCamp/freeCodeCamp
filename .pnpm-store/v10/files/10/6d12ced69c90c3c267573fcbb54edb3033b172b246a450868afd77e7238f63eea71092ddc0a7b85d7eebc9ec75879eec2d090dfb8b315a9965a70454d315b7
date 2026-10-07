import { invariant } from "outvariant";
import {} from '../utils/request/onUnhandledRequest.mjs';
import {
  executeUnhandledFrameHandle
} from './on-unhandled-frame.mjs';
import { HttpNetworkFrame } from './frames/http-frame.mjs';
import { WebSocketNetworkFrame } from './frames/websocket-frame.mjs';
function fromLegacyOnUnhandledRequest(getLegacyValue) {
  return ({ frame, defaults }) => {
    const legacyOnUnhandledRequestStrategy = getLegacyValue();
    if (legacyOnUnhandledRequestStrategy == null) {
      return;
    }
    if (typeof legacyOnUnhandledRequestStrategy === "function") {
      const request = frame instanceof HttpNetworkFrame ? frame.data.request : frame instanceof WebSocketNetworkFrame ? new Request(frame.data.connection.client.url, {
        headers: {
          connection: "upgrade",
          upgrade: "websocket"
        }
      }) : null;
      invariant(
        request != null,
        'Failed to coerce a network frame to a legacy `onUnhandledRequest` strategy: unknown frame protocol "%s"',
        frame.protocol
      );
      return legacyOnUnhandledRequestStrategy(request, {
        warning: defaults.warn,
        error: defaults.error
      });
    }
    return executeUnhandledFrameHandle(frame, legacyOnUnhandledRequestStrategy);
  };
}
export {
  fromLegacyOnUnhandledRequest
};
//# sourceMappingURL=compat.mjs.map