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
var WebSocketClientManager_exports = {};
__export(WebSocketClientManager_exports, {
  WebSocketClientManager: () => WebSocketClientManager,
  WebSocketRemoteClientConnection: () => WebSocketRemoteClientConnection
});
module.exports = __toCommonJS(WebSocketClientManager_exports);
var import_WebSocketMemoryClientStore = require("./WebSocketMemoryClientStore");
var import_WebSocketIndexedDBClientStore = require("./WebSocketIndexedDBClientStore");
class WebSocketClientManager {
  constructor(channel) {
    this.channel = channel;
    this.store = typeof indexedDB !== "undefined" ? new import_WebSocketIndexedDBClientStore.WebSocketIndexedDBClientStore() : new import_WebSocketMemoryClientStore.WebSocketMemoryClientStore();
    this.runtimeClients = /* @__PURE__ */ new Map();
    this.allClients = /* @__PURE__ */ new Set();
    this.channel.addEventListener("message", (message) => {
      if (message.data?.type === "db:update") {
        this.flushDatabaseToMemory();
      }
    });
    if (typeof window !== "undefined") {
      window.addEventListener("message", async (message) => {
        if (message.data?.type === "msw/worker:stop") {
          await this.removeRuntimeClients();
        }
      });
    }
  }
  store;
  runtimeClients;
  allClients;
  async flushDatabaseToMemory() {
    const storedClients = await this.store.getAll();
    this.allClients = new Set(
      storedClients.map((client) => {
        const runtimeClient = this.runtimeClients.get(client.id);
        if (runtimeClient) {
          return runtimeClient;
        }
        return new WebSocketRemoteClientConnection(
          client.id,
          new URL(client.url),
          this.channel
        );
      })
    );
  }
  async removeRuntimeClients() {
    await this.store.deleteMany(Array.from(this.runtimeClients.keys()));
    this.runtimeClients.clear();
    await this.flushDatabaseToMemory();
    this.notifyOthersAboutDatabaseUpdate();
  }
  /**
   * All active WebSocket client connections.
   */
  get clients() {
    return this.allClients;
  }
  /**
   * Notify other runtimes about the database update
   * using the shared `BroadcastChannel` instance.
   */
  notifyOthersAboutDatabaseUpdate() {
    this.channel.postMessage({ type: "db:update" });
  }
  async addClient(client) {
    await this.store.add(client);
    await this.flushDatabaseToMemory();
    this.notifyOthersAboutDatabaseUpdate();
  }
  /**
   * Adds the given `WebSocket` client connection to the set
   * of all connections. The given connection is always the complete
   * connection object because `addConnection()` is called only
   * for the opened connections in the same runtime.
   */
  async addConnection(client) {
    this.runtimeClients.set(client.id, client);
    await this.addClient(client);
    const handleExtraneousMessage = (message) => {
      const { type, payload } = message.data;
      if (typeof payload === "object" && "clientId" in payload && payload.clientId !== client.id) {
        return;
      }
      switch (type) {
        case "extraneous:send": {
          client.send(payload.data);
          break;
        }
        case "extraneous:close": {
          client.close(payload.code, payload.reason);
          break;
        }
      }
    };
    const abortController = new AbortController();
    this.channel.addEventListener("message", handleExtraneousMessage, {
      signal: abortController.signal
    });
    client.addEventListener("close", () => abortController.abort(), {
      once: true
    });
  }
}
class WebSocketRemoteClientConnection {
  constructor(id, url, channel) {
    this.id = id;
    this.url = url;
    this.channel = channel;
  }
  send(data) {
    this.channel.postMessage({
      type: "extraneous:send",
      payload: {
        clientId: this.id,
        data
      }
    });
  }
  close(code, reason) {
    this.channel.postMessage({
      type: "extraneous:close",
      payload: {
        clientId: this.id,
        code,
        reason
      }
    });
  }
  addEventListener(_type, _listener, _options) {
    throw new Error(
      "WebSocketRemoteClientConnection.addEventListener is not supported"
    );
  }
  removeEventListener(_event, _listener, _options) {
    throw new Error(
      "WebSocketRemoteClientConnection.removeEventListener is not supported"
    );
  }
}
//# sourceMappingURL=WebSocketClientManager.js.map