import { DeferredPromise } from "@open-draft/deferred-promise";
import {} from './WebSocketClientStore.mjs';
const DB_NAME = "msw-websocket-clients";
const DB_STORE_NAME = "clients";
class WebSocketIndexedDBClientStore {
  db;
  constructor() {
    this.db = this.createDatabase();
  }
  async add(client) {
    const promise = new DeferredPromise();
    const store = await this.getStore();
    const request = store.put({
      id: client.id,
      url: client.url.href
    });
    request.onsuccess = () => {
      promise.resolve();
    };
    request.onerror = () => {
      console.error(request.error);
      promise.reject(
        new Error(
          `Failed to add WebSocket client "${client.id}". There is likely an additional output above.`
        )
      );
    };
    return promise;
  }
  async getAll() {
    const promise = new DeferredPromise();
    const store = await this.getStore();
    const request = store.getAll();
    request.onsuccess = () => {
      promise.resolve(request.result);
    };
    request.onerror = () => {
      console.error(request.error);
      promise.reject(
        new Error(
          `Failed to get all WebSocket clients. There is likely an additional output above.`
        )
      );
    };
    return promise;
  }
  async deleteMany(clientIds) {
    const promise = new DeferredPromise();
    const store = await this.getStore();
    for (const clientId of clientIds) {
      store.delete(clientId);
    }
    store.transaction.oncomplete = () => {
      promise.resolve();
    };
    store.transaction.onerror = () => {
      console.error(store.transaction.error);
      promise.reject(
        new Error(
          `Failed to delete WebSocket clients [${clientIds.join(", ")}]. There is likely an additional output above.`
        )
      );
    };
    return promise;
  }
  async createDatabase() {
    const promise = new DeferredPromise();
    const request = indexedDB.open(DB_NAME, 1);
    request.onsuccess = ({ currentTarget }) => {
      const db = Reflect.get(currentTarget, "result");
      if (db.objectStoreNames.contains(DB_STORE_NAME)) {
        return promise.resolve(db);
      }
    };
    request.onupgradeneeded = async ({ currentTarget }) => {
      const db = Reflect.get(currentTarget, "result");
      if (db.objectStoreNames.contains(DB_STORE_NAME)) {
        return;
      }
      const store = db.createObjectStore(DB_STORE_NAME, { keyPath: "id" });
      store.transaction.oncomplete = () => {
        promise.resolve(db);
      };
      store.transaction.onerror = () => {
        console.error(store.transaction.error);
        promise.reject(
          new Error(
            "Failed to create WebSocket client store. There is likely an additional output above."
          )
        );
      };
    };
    request.onerror = () => {
      console.error(request.error);
      promise.reject(
        new Error(
          "Failed to open an IndexedDB database. There is likely an additional output above."
        )
      );
    };
    return promise;
  }
  async getStore() {
    const db = await this.db;
    return db.transaction(DB_STORE_NAME, "readwrite").objectStore(DB_STORE_NAME);
  }
}
export {
  WebSocketIndexedDBClientStore
};
//# sourceMappingURL=WebSocketIndexedDBClientStore.mjs.map