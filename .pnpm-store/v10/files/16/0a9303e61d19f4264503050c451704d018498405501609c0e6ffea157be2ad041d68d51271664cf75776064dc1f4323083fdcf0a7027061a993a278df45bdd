import { bindEvent } from './utils/bindEvent'
import {
  StrictEventListenerOrEventListenerObject,
  WebSocketData,
  WebSocketTransport,
  WebSocketTransportEventMap,
} from './WebSocketTransport'
import { kOnSend, kClose, WebSocketOverride } from './WebSocketOverride'
import { CancelableMessageEvent, CloseEvent } from './utils/events'

/**
 * Abstraction over the given mock `WebSocket` instance that allows
 * for controlling that instance (e.g. sending and receiving messages).
 */
export class WebSocketClassTransport
  extends EventTarget
  implements WebSocketTransport
{
  constructor(protected readonly socket: WebSocketOverride) {
    super()

    // Emit the "close" event on the transport if the close
    // originates from the WebSocket client. E.g. the application
    // calls "ws.close()", not the interceptor.
    this.socket.addEventListener('close', (event) => {
      this.dispatchEvent(bindEvent(this.socket, new CloseEvent('close', event)))
    })

    /**
     * Emit the "outgoing" event on the transport
     * whenever the WebSocket client sends data ("ws.send()").
     */
    this.socket[kOnSend] = (data) => {
      this.dispatchEvent(
        bindEvent(
          this.socket,
          // Dispatch this as cancelable because "client" connection
          // re-creates this message event (cannot dispatch the same event).
          new CancelableMessageEvent('outgoing', {
            data,
            origin: this.socket.url,
            cancelable: true,
          })
        )
      )
    }
  }

  public addEventListener<EventType extends keyof WebSocketTransportEventMap>(
    type: EventType,
    callback: StrictEventListenerOrEventListenerObject<
      WebSocketTransportEventMap[EventType]
    > | null,
    options?: boolean | AddEventListenerOptions
  ): void {
    return super.addEventListener(type, callback as EventListener, options)
  }

  public dispatchEvent<EventType extends keyof WebSocketTransportEventMap>(
    event: WebSocketTransportEventMap[EventType]
  ): boolean {
    return super.dispatchEvent(event)
  }

  public send(data: WebSocketData): void {
    queueMicrotask(() => {
      if (
        this.socket.readyState === this.socket.CLOSING ||
        this.socket.readyState === this.socket.CLOSED
      ) {
        return
      }

      const dispatchEvent = () => {
        this.socket.dispatchEvent(
          bindEvent(
            /**
             * @note Setting this event's "target" to the
             * WebSocket override instance is important.
             * This way it can tell apart original incoming events
             * (must be forwarded to the transport) from the
             * mocked message events like the one below
             * (must be dispatched on the client instance).
             */
            this.socket,
            new MessageEvent('message', {
              data,
              origin: this.socket.url,
            })
          )
        )
      }

      if (this.socket.readyState === this.socket.CONNECTING) {
        this.socket.addEventListener(
          'open',
          () => {
            dispatchEvent()
          },
          { once: true }
        )
      } else {
        dispatchEvent()
      }
    })
  }

  public close(code: number, reason?: string): void {
    /**
     * @note Call the internal close method directly
     * to allow closing the connection with the status codes
     * that are non-configurable by the user (> 1000 <= 1015).
     */
    this.socket[kClose](code, reason)
  }
}
