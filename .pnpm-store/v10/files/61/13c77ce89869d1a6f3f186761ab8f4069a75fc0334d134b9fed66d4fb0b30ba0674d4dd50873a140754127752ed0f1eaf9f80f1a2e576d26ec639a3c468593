import { CloseEvent } from './utils/events'

export type WebSocketData = string | ArrayBufferLike | Blob | ArrayBufferView

export type WebSocketTransportEventMap = {
  incoming: MessageEvent<WebSocketData>
  outgoing: MessageEvent<WebSocketData>
  close: CloseEvent
}

export type StrictEventListenerOrEventListenerObject<EventType extends Event> =
  | ((this: WebSocket, event: EventType) => void)
  | {
      handleEvent(this: WebSocket, event: EventType): void
    }

export interface WebSocketTransport {
  addEventListener<EventType extends keyof WebSocketTransportEventMap>(
    event: EventType,
    listener: StrictEventListenerOrEventListenerObject<
      WebSocketTransportEventMap[EventType]
    > | null,
    options?: boolean | AddEventListenerOptions
  ): void

  dispatchEvent<EventType extends keyof WebSocketTransportEventMap>(
    event: WebSocketTransportEventMap[EventType]
  ): boolean

  /**
   * Send the data from the server to this client.
   */
  send(data: WebSocketData): void

  /**
   * Close the client connection.
   */
  close(code?: number, reason?: string): void
}
