import { invariant } from 'outvariant'
import {
  kClose,
  WebSocketEventListener,
  WebSocketOverride,
} from './WebSocketOverride'
import type { WebSocketData } from './WebSocketTransport'
import type { WebSocketClassTransport } from './WebSocketClassTransport'
import { bindEvent } from './utils/bindEvent'
import {
  CancelableMessageEvent,
  CancelableCloseEvent,
  CloseEvent,
} from './utils/events'

const kEmitter = Symbol('kEmitter')
const kBoundListener = Symbol('kBoundListener')
const kSend = Symbol('kSend')

export interface WebSocketServerEventMap {
  open: Event
  message: MessageEvent<WebSocketData>
  error: Event
  close: CloseEvent
}

export abstract class WebSocketServerConnectionProtocol {
  public abstract connect(): void
  public abstract send(data: WebSocketData): void
  public abstract close(): void

  public abstract addEventListener<
    EventType extends keyof WebSocketServerEventMap,
  >(
    event: EventType,
    listener: WebSocketEventListener<WebSocketServerEventMap[EventType]>,
    options?: AddEventListenerOptions | boolean
  ): void

  public abstract removeEventListener<
    EventType extends keyof WebSocketServerEventMap,
  >(
    event: EventType,
    listener: WebSocketEventListener<WebSocketServerEventMap[EventType]>,
    options?: EventListenerOptions | boolean
  ): void
}

/**
 * The WebSocket server instance represents the actual production
 * WebSocket server connection. It's idle by default but you can
 * establish it by calling `server.connect()`.
 */
export class WebSocketServerConnection implements WebSocketServerConnectionProtocol {
  /**
   * A WebSocket instance connected to the original server.
   */
  private realWebSocket?: WebSocket
  private mockCloseController: AbortController
  private realCloseController: AbortController
  private [kEmitter]: EventTarget

  constructor(
    private readonly client: WebSocketOverride,
    private readonly transport: WebSocketClassTransport,
    private readonly createConnection: () => WebSocket
  ) {
    this[kEmitter] = new EventTarget()
    this.mockCloseController = new AbortController()
    this.realCloseController = new AbortController()

    // Automatically forward outgoing client events
    // to the actual server unless the outgoing message event
    // has been prevented. The "outgoing" transport event it
    // dispatched by the "client" connection.
    this.transport.addEventListener('outgoing', (event) => {
      // Ignore client messages if the server connection
      // hasn't been established yet. Nowhere to forward.
      if (typeof this.realWebSocket === 'undefined') {
        return
      }

      // Every outgoing client message can prevent this forwarding
      // by preventing the default of the outgoing message event.
      // This listener will be added before user-defined listeners,
      // so execute the logic on the next tick.
      queueMicrotask(() => {
        if (!event.defaultPrevented) {
          /**
           * @note Use the internal send mechanism so consumers can tell
           * apart direct user calls to `server.send()` and internal calls.
           * E.g. MSW has to ignore this internal call to log out messages correctly.
           */
          this[kSend](event.data)
        }
      })
    })

    this.transport.addEventListener(
      'incoming',
      this.handleIncomingMessage.bind(this)
    )
  }

  /**
   * The `WebSocket` instance connected to the original server.
   * Accessing this before calling `server.connect()` will throw.
   */
  public get socket(): WebSocket {
    invariant(
      this.realWebSocket,
      'Cannot access "socket" on the original WebSocket server object: the connection is not open. Did you forget to call `server.connect()`?'
    )

    return this.realWebSocket
  }

  /**
   * Open connection to the original WebSocket server.
   */
  public connect(): void {
    invariant(
      !this.realWebSocket || this.realWebSocket.readyState !== WebSocket.OPEN,
      'Failed to call "connect()" on the original WebSocket instance: the connection already open'
    )

    const realWebSocket = this.createConnection()

    // Inherit the binary type from the mock WebSocket client.
    realWebSocket.binaryType = this.client.binaryType

    // Allow the interceptor to listen to when the server connection
    // has been established. This isn't necessary to operate with the connection
    // but may be beneficial in some cases (like conditionally adding logging).
    realWebSocket.addEventListener(
      'open',
      (event) => {
        this[kEmitter].dispatchEvent(
          bindEvent(this.realWebSocket!, new Event('open', event))
        )
      },
      { once: true }
    )

    realWebSocket.addEventListener('message', (event) => {
      // Dispatch the "incoming" transport event instead of
      // invoking the internal handler directly. This way,
      // anyone can listen to the "incoming" event but this
      // class is the one resulting in it.
      this.transport.dispatchEvent(
        bindEvent(
          this.realWebSocket!,
          new MessageEvent('incoming', {
            data: event.data,
            origin: event.origin,
          })
        )
      )
    })

    // Close the original connection when the mock client closes.
    // E.g. "client.close()" was called. This is never forwarded anywhere.
    this.client.addEventListener(
      'close',
      (event) => {
        this.handleMockClose(event)
      },
      {
        signal: this.mockCloseController.signal,
      }
    )

    // Forward the "close" event to let the interceptor handle
    // closures initiated by the original server.
    realWebSocket.addEventListener(
      'close',
      (event) => {
        this.handleRealClose(event)
      },
      {
        signal: this.realCloseController.signal,
      }
    )

    realWebSocket.addEventListener('error', () => {
      const errorEvent = bindEvent(
        realWebSocket,
        new Event('error', { cancelable: true })
      )

      // Emit the "error" event on the `server` connection
      // to let the interceptor react to original server errors.
      this[kEmitter].dispatchEvent(errorEvent)

      // If the error event from the original server hasn't been prevented,
      // forward it to the underlying client.
      if (!errorEvent.defaultPrevented) {
        this.client.dispatchEvent(bindEvent(this.client, new Event('error')))
      }
    })

    this.realWebSocket = realWebSocket
  }

  /**
   * Listen for the incoming events from the original WebSocket server.
   */
  public addEventListener<EventType extends keyof WebSocketServerEventMap>(
    event: EventType,
    listener: WebSocketEventListener<WebSocketServerEventMap[EventType]>,
    options?: AddEventListenerOptions | boolean
  ): void {
    if (!Reflect.has(listener, kBoundListener)) {
      const boundListener = listener.bind(this.client)

      // Store the bound listener on the original listener
      // so the exact bound function can be accessed in "removeEventListener()".
      Object.defineProperty(listener, kBoundListener, {
        value: boundListener,
        enumerable: false,
      })
    }

    this[kEmitter].addEventListener(
      event,
      Reflect.get(listener, kBoundListener) as EventListener,
      options
    )
  }

  /**
   * Remove the listener for the given event.
   */
  public removeEventListener<EventType extends keyof WebSocketServerEventMap>(
    event: EventType,
    listener: WebSocketEventListener<WebSocketServerEventMap[EventType]>,
    options?: EventListenerOptions | boolean
  ): void {
    this[kEmitter].removeEventListener(
      event,
      Reflect.get(listener, kBoundListener) as EventListener,
      options
    )
  }

  /**
   * Send data to the original WebSocket server.
   * @example
   * server.send('hello')
   * server.send(new Blob(['hello']))
   * server.send(new TextEncoder().encode('hello'))
   */
  public send(data: WebSocketData): void {
    this[kSend](data)
  }

  private [kSend](data: WebSocketData): void {
    const { realWebSocket } = this

    invariant(
      realWebSocket,
      'Failed to call "server.send()" for "%s": the connection is not open. Did you forget to call "server.connect()"?',
      this.client.url
    )

    // Silently ignore writes on the closed original WebSocket.
    if (
      realWebSocket.readyState === WebSocket.CLOSING ||
      realWebSocket.readyState === WebSocket.CLOSED
    ) {
      return
    }

    // Delegate the send to when the original connection is open.
    // Unlike the mock, connecting to the original server may take time
    // so we cannot call this on the next tick.
    if (realWebSocket.readyState === WebSocket.CONNECTING) {
      realWebSocket.addEventListener(
        'open',
        () => {
          realWebSocket.send(data)
        },
        { once: true }
      )
      return
    }

    // Send the data to the original WebSocket server.
    realWebSocket.send(data)
  }

  /**
   * Close the actual server connection.
   */
  public close(): void {
    const { realWebSocket } = this

    invariant(
      realWebSocket,
      'Failed to close server connection for "%s": the connection is not open. Did you forget to call "server.connect()"?',
      this.client.url
    )

    // Remove the "close" event listener from the server
    // so it doesn't close the underlying WebSocket client
    // when you call "server.close()". This also prevents the
    // `close` event on the `server` connection from being dispatched twice.
    this.realCloseController.abort()

    if (
      realWebSocket.readyState === WebSocket.CLOSING ||
      realWebSocket.readyState === WebSocket.CLOSED
    ) {
      return
    }

    // Close the actual client connection.
    realWebSocket.close()

    // Dispatch the "close" event on the `server` connection.
    queueMicrotask(() => {
      this[kEmitter].dispatchEvent(
        bindEvent(
          this.realWebSocket,
          new CancelableCloseEvent('close', {
            /**
             * @note `server.close()` in the interceptor
             * always results in clean closures.
             */
            code: 1000,
            cancelable: true,
          })
        )
      )
    })
  }

  private handleIncomingMessage(event: MessageEvent<WebSocketData>): void {
    // Clone the event to dispatch it on this class
    // once again and prevent the "already being dispatched"
    // exception. Clone it here so we can observe this event
    // being prevented in the "server.on()" listeners.
    const messageEvent = bindEvent(
      event.target,
      new CancelableMessageEvent('message', {
        data: event.data,
        origin: event.origin,
        cancelable: true,
      })
    )

    /**
     * @note Emit "message" event on the server connection
     * instance to let the interceptor know about these
     * incoming events from the original server. In that listener,
     * the interceptor can modify or skip the event forwarding
     * to the mock WebSocket instance.
     */
    this[kEmitter].dispatchEvent(messageEvent)

    /**
     * @note Forward the incoming server events to the client.
     * Preventing the default on the message event stops this.
     */
    if (!messageEvent.defaultPrevented) {
      this.client.dispatchEvent(
        bindEvent(
          /**
           * @note Bind the forwarded original server events
           * to the mock WebSocket instance so it would
           * dispatch them straight away.
           */
          this.client,
          // Clone the message event again to prevent
          // the "already being dispatched" exception.
          new MessageEvent('message', {
            data: event.data,
            origin: event.origin,
          })
        )
      )
    }
  }

  private handleMockClose(_event: Event): void {
    // Close the original connection if the mock client closes.
    if (this.realWebSocket) {
      this.realWebSocket.close()
    }
  }

  private handleRealClose(event: CloseEvent): void {
    // For closures originating from the original server,
    // remove the "close" listener from the mock client.
    // original close -> (?) client[kClose]() --X--> "close" (again).
    this.mockCloseController.abort()

    const closeEvent = bindEvent(
      this.realWebSocket,
      new CancelableCloseEvent('close', {
        code: event.code,
        reason: event.reason,
        wasClean: event.wasClean,
        cancelable: true,
      })
    )

    this[kEmitter].dispatchEvent(closeEvent)

    // If the close event from the server hasn't been prevented,
    // forward the closure to the mock client.
    if (!closeEvent.defaultPrevented) {
      // Close the intercepted client forcefully to
      // allow non-configurable status codes from the server.
      // If the socket has been closed by now, no harm calling
      // this again—it will have no effect.
      this.client[kClose](event.code, event.reason)
    }
  }
}
