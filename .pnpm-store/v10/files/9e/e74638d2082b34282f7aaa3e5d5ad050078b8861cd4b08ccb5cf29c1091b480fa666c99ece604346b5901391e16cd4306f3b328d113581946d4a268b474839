import type { WebSocketClientConnectionProtocol } from '@mswjs/interceptors/WebSocket'
import type { WebSocketClientStore } from './WebSocketClientStore'
import { type SerializedWebSocketClient } from './WebSocketClientStore'

export class WebSocketMemoryClientStore implements WebSocketClientStore {
  private store: Map<string, SerializedWebSocketClient>

  constructor() {
    this.store = new Map()
  }

  public async add(client: WebSocketClientConnectionProtocol): Promise<void> {
    this.store.set(client.id, { id: client.id, url: client.url.href })
  }

  public getAll(): Promise<Array<SerializedWebSocketClient>> {
    return Promise.resolve(Array.from(this.store.values()))
  }

  public async deleteMany(clientIds: Array<string>): Promise<void> {
    for (const clientId of clientIds) {
      this.store.delete(clientId)
    }
  }
}
