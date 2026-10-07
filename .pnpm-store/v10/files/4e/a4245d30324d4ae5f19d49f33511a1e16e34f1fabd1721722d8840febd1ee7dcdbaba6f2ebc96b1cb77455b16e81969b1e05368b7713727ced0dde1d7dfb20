import { invariant } from "outvariant";
import { FetchResponse, resolveWebSocketUrl } from "@mswjs/interceptors";
import {
  WebSocketHandler,
  kEmitter
} from './handlers/WebSocketHandler.mjs';
import { hasRefCounted } from './utils/internal/hasRefCounted.mjs';
import {
  isPath,
  matchRequestUrl
} from './utils/matching/matchRequestUrl.mjs';
import { WebSocketClientManager } from './ws/WebSocketClientManager.mjs';
import { http } from './http.mjs';
import { attachSiblingHandlers } from './utils/internal/attachSiblingHandlers.mjs';
const webSocketChannel = new BroadcastChannel("msw:websocket-client-manager");
if (hasRefCounted(webSocketChannel)) {
  webSocketChannel.unref();
}
function createWebSocketLinkHandler(url) {
  invariant(url, "Expected a WebSocket server URL but got undefined");
  invariant(
    isPath(url),
    "Expected a WebSocket server URL to be a valid path but got %s",
    typeof url
  );
  const clientManager = new WebSocketClientManager(webSocketChannel);
  const upgradeHandler = http.get(({ request }) => {
    return request.headers.get("upgrade")?.toLowerCase() === "websocket" && matchRequestUrl(new URL(resolveWebSocketUrl(request.url)), url).matches;
  }, ws.onUpgrade);
  return {
    get clients() {
      return clientManager.clients;
    },
    addEventListener(event, listener) {
      const webSocketHandler = new WebSocketHandler(url);
      webSocketHandler[kEmitter].on("connection", async ({ client }) => {
        await clientManager.addConnection(client);
      });
      webSocketHandler[kEmitter].on(event, listener);
      return attachSiblingHandlers(webSocketHandler, [upgradeHandler]);
    },
    broadcast(data) {
      this.broadcastExcept([], data);
    },
    broadcastExcept(clients, data) {
      const ignoreClients = Array.prototype.concat(clients).map((client) => client.id);
      clientManager.clients.forEach((otherClient) => {
        if (!ignoreClients.includes(otherClient.id)) {
          otherClient.send(data);
        }
      });
    }
  };
}
const WEBSOCKET_GUID = "258EAFA5-E914-47DA-95CA-C5AB0DC85B11";
const ws = {
  link: createWebSocketLinkHandler,
  async onUpgrade({ request }) {
    const key = request.headers.get("sec-websocket-key");
    if (!key) {
      return;
    }
    const keyBytes = new TextEncoder().encode(key + WEBSOCKET_GUID);
    const digest = await crypto.subtle.digest("SHA-1", keyBytes);
    const acceptValue = btoa(String.fromCharCode(...new Uint8Array(digest)));
    new WebSocket(resolveWebSocketUrl(request.url));
    return new FetchResponse(null, {
      status: 101,
      headers: {
        upgrade: "websocket",
        connection: "upgrade",
        "sec-websocket-accept": acceptValue
      }
    });
  }
};
export {
  ws
};
//# sourceMappingURL=ws.mjs.map