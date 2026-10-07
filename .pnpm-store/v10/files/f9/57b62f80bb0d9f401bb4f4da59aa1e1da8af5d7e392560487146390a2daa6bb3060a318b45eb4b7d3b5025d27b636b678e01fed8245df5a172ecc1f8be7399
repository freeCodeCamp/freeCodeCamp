import { DeferredPromise } from '@open-draft/deferred-promise'
import type { WebSocketClientConnectionProtocol } from '@mswjs/interceptors/WebSocket'
import type { WebSocketClientStore } from './WebSocketClientStore'
import { type SerializedWebSocketClient } from './WebSocketClientStore'

const DB_NAME = 'msw-websocket-clients'
const DB_STORE_NAME = 'clients'

export class WebSocketIndexedDBClientStore implements WebSocketClientStore {
  private db: Promise<IDBDatabase>

  constructor() {
    this.db = this.createDatabase()
  }

  public async add(client: WebSocketClientConnectionProtocol): Promise<void> {
    const promise = new DeferredPromise<void>()
    const store = await this.getStore()

    /**
     * @note Use `.put()` instead of `.add()` to allow setting clients
     * that already exist in the database. This can happen if a single page
     * has multiple event handlers. Each handler will receive the "connection"
     * event in parallel, and try to set that WebSocket client in the database.
     */
    const request = store.put({
      id: client.id,
      url: client.url.href,
    } satisfies SerializedWebSocketClient)

    request.onsuccess = () => {
      promise.resolve()
    }
    request.onerror = () => {
      console.error(request.error)
      promise.reject(
        new Error(
          `Failed to add WebSocket client "${client.id}". There is likely an additional output above.`,
        ),
      )
    }

    return promise
  }

  public async getAll(): Promise<Array<SerializedWebSocketClient>> {
    const promise = new DeferredPromise<Array<SerializedWebSocketClient>>()
    const store = await this.getStore()
    const request = store.getAll() as IDBRequest<
      Array<SerializedWebSocketClient>
    >

    request.onsuccess = () => {
      promise.resolve(request.result)
    }
    request.onerror = () => {
      console.error(request.error)
      promise.reject(
        new Error(
          `Failed to get all WebSocket clients. There is likely an additional output above.`,
        ),
      )
    }

    return promise
  }

  public async deleteMany(clientIds: Array<string>): Promise<void> {
    const promise = new DeferredPromise<void>()
    const store = await this.getStore()

    for (const clientId of clientIds) {
      store.delete(clientId)
    }

    store.transaction.oncomplete = () => {
      promise.resolve()
    }
    store.transaction.onerror = () => {
      console.error(store.transaction.error)
      promise.reject(
        new Error(
          `Failed to delete WebSocket clients [${clientIds.join(', ')}]. There is likely an additional output above.`,
        ),
      )
    }

    return promise
  }

  private async createDatabase(): Promise<IDBDatabase> {
    const promise = new DeferredPromise<IDBDatabase>()
    const request = indexedDB.open(DB_NAME, 1)

    request.onsuccess = ({ currentTarget }) => {
      const db = Reflect.get(currentTarget!, 'result') as IDBDatabase

      if (db.objectStoreNames.contains(DB_STORE_NAME)) {
        return promise.resolve(db)
      }
    }

    request.onupgradeneeded = async ({ currentTarget }) => {
      const db = Reflect.get(currentTarget!, 'result') as IDBDatabase
      if (db.objectStoreNames.contains(DB_STORE_NAME)) {
        return
      }

      const store = db.createObjectStore(DB_STORE_NAME, { keyPath: 'id' })
      store.transaction.oncomplete = () => {
        promise.resolve(db)
      }
      store.transaction.onerror = () => {
        console.error(store.transaction.error)
        promise.reject(
          new Error(
            'Failed to create WebSocket client store. There is likely an additional output above.',
          ),
        )
      }
    }
    request.onerror = () => {
      console.error(request.error)
      promise.reject(
        new Error(
          'Failed to open an IndexedDB database. There is likely an additional output above.',
        ),
      )
    }

    return promise
  }

  private async getStore(): Promise<IDBObjectStore> {
    const db = await this.db
    return db.transaction(DB_STORE_NAME, 'readwrite').objectStore(DB_STORE_NAME)
  }
}
