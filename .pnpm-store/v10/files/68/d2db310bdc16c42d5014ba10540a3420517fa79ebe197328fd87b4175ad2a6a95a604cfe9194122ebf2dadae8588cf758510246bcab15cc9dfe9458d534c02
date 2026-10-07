import type { WebSocketClientConnectionProtocol } from '@mswjs/interceptors/WebSocket'

export interface SerializedWebSocketClient {
  id: string
  url: string
}

export abstract class WebSocketClientStore {
  public abstract add(client: WebSocketClientConnectionProtocol): Promise<void>

  public abstract getAll(): Promise<Array<SerializedWebSocketClient>>

  public abstract deleteMany(clientIds: Array<string>): Promise<void>
}
