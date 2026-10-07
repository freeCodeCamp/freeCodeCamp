import {} from './WebSocketClientStore.mjs';
class WebSocketMemoryClientStore {
  store;
  constructor() {
    this.store = /* @__PURE__ */ new Map();
  }
  async add(client) {
    this.store.set(client.id, { id: client.id, url: client.url.href });
  }
  getAll() {
    return Promise.resolve(Array.from(this.store.values()));
  }
  async deleteMany(clientIds) {
    for (const clientId of clientIds) {
      this.store.delete(clientId);
    }
  }
}
export {
  WebSocketMemoryClientStore
};
//# sourceMappingURL=WebSocketMemoryClientStore.mjs.map