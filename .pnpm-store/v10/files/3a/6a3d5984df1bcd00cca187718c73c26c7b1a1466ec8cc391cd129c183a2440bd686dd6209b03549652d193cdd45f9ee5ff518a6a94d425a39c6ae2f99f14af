import { WebSocketMemoryClientStore } from './WebSocketMemoryClientStore.mjs';
import { WebSocketIndexedDBClientStore } from './WebSocketIndexedDBClientStore.mjs';
class WebSocketClientManager {
  constructor(channel) {
    this.channel = channel;
    this.store = typeof indexedDB !== "undefined" ? new WebSocketIndexedDBClientStore() : new WebSocketMemoryClientStore();
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
export {
  WebSocketClientManager,
  WebSocketRemoteClientConnection
};
//# sourceMappingURL=WebSocketClientManager.mjs.map