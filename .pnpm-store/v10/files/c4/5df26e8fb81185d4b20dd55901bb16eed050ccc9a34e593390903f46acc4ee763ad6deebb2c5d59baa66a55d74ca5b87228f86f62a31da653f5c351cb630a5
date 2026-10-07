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
var ws_exports = {};
__export(ws_exports, {
  ws: () => ws
});
module.exports = __toCommonJS(ws_exports);
var import_outvariant = require("outvariant");
var import_interceptors = require("@mswjs/interceptors");
var import_WebSocketHandler = require("./handlers/WebSocketHandler");
var import_hasRefCounted = require("./utils/internal/hasRefCounted");
var import_matchRequestUrl = require("./utils/matching/matchRequestUrl");
var import_WebSocketClientManager = require("./ws/WebSocketClientManager");
var import_http = require("./http");
var import_attachSiblingHandlers = require("./utils/internal/attachSiblingHandlers");
const webSocketChannel = new BroadcastChannel("msw:websocket-client-manager");
if ((0, import_hasRefCounted.hasRefCounted)(webSocketChannel)) {
  webSocketChannel.unref();
}
function createWebSocketLinkHandler(url) {
  (0, import_outvariant.invariant)(url, "Expected a WebSocket server URL but got undefined");
  (0, import_outvariant.invariant)(
    (0, import_matchRequestUrl.isPath)(url),
    "Expected a WebSocket server URL to be a valid path but got %s",
    typeof url
  );
  const clientManager = new import_WebSocketClientManager.WebSocketClientManager(webSocketChannel);
  const upgradeHandler = import_http.http.get(({ request }) => {
    return request.headers.get("upgrade")?.toLowerCase() === "websocket" && (0, import_matchRequestUrl.matchRequestUrl)(new URL((0, import_interceptors.resolveWebSocketUrl)(request.url)), url).matches;
  }, ws.onUpgrade);
  return {
    get clients() {
      return clientManager.clients;
    },
    addEventListener(event, listener) {
      const webSocketHandler = new import_WebSocketHandler.WebSocketHandler(url);
      webSocketHandler[import_WebSocketHandler.kEmitter].on("connection", async ({ client }) => {
        await clientManager.addConnection(client);
      });
      webSocketHandler[import_WebSocketHandler.kEmitter].on(event, listener);
      return (0, import_attachSiblingHandlers.attachSiblingHandlers)(webSocketHandler, [upgradeHandler]);
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
    new WebSocket((0, import_interceptors.resolveWebSocketUrl)(request.url));
    return new import_interceptors.FetchResponse(null, {
      status: 101,
      headers: {
        upgrade: "websocket",
        connection: "upgrade",
        "sec-websocket-accept": acceptValue
      }
    });
  }
};
//# sourceMappingURL=ws.js.map