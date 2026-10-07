import { TypedEvent } from 'rettime'
import { type WebSocketConnectionData } from '@mswjs/interceptors/WebSocket'
import {
  kConnect,
  kAutoConnect,
  type WebSocketHandler,
} from '../../handlers/WebSocketHandler'
import {
  NetworkFrame,
  type NetworkFrameResolutionContext,
} from './network-frame'
import {
  executeUnhandledFrameHandle,
  type UnhandledFrameHandle,
} from '../on-unhandled-frame'
import { devUtils } from '../../utils/internal/devUtils'
import type { HandlersController } from '../handlers-controller'
import { type AnyHandler } from '../handlers-controller'

export interface WebSocketNetworkFrameOptions {
  connection: WebSocketConnectionData
}

export type WebSocketNetworkFrameEventMap = {
  connection: WebSocketConnectionEvent
  unhandledException: UnhandledWebSocketExceptionEvent
}

class WebSocketConnectionEvent<
  DataType extends {
    url: URL
    protocols: string | Array<string> | undefined
  } = { url: URL; protocols: string | Array<string> | undefined },
  ReturnType = void,
  EventType extends string = string,
> extends TypedEvent<DataType, ReturnType, EventType> {
  public readonly url: URL
  public readonly protocols: string | Array<string> | undefined

  constructor(type: EventType, data: DataType) {
    super(...([type, {}] as any))
    this.url = data.url
    this.protocols = data.protocols
  }
}

class UnhandledWebSocketExceptionEvent<
  DataType extends {
    url: URL
    protocols: string | Array<string> | undefined
    error: unknown
  } = {
    url: URL
    protocols: string | Array<string> | undefined
    error: unknown
  },
  ReturnType = void,
  EventType extends string = string,
> extends TypedEvent<DataType, ReturnType, EventType> {
  public readonly url: URL
  public readonly protocols: string | Array<string> | undefined
  public readonly error: unknown

  constructor(type: EventType, data: DataType) {
    super(...([type, {}] as any))
    this.url = data.url
    this.protocols = data.protocols
    this.error = data.error
  }
}

export abstract class WebSocketNetworkFrame extends NetworkFrame<
  'ws',
  {
    connection: WebSocketConnectionData
  },
  WebSocketNetworkFrameEventMap
> {
  constructor(options: WebSocketNetworkFrameOptions) {
    super('ws', {
      connection: options.connection,
    })
  }

  public getHandlers(controller: HandlersController): Array<AnyHandler> {
    return controller.getHandlersByKind('websocket')
  }

  public async resolve(
    handlers: Array<WebSocketHandler>,
    onUnhandledFrame: UnhandledFrameHandle,
    resolutionContext?: NetworkFrameResolutionContext,
  ): Promise<boolean | null> {
    const { connection } = this.data

    this.events.emit(
      new WebSocketConnectionEvent('connection', {
        url: connection.client.url,
        protocols: connection.info.protocols,
      }),
    )

    // No WebSocket handlers defined.
    if (handlers.length === 0) {
      await executeUnhandledFrameHandle(this, onUnhandledFrame).then(
        () => this.passthrough(),
        (error) => this.errorWith(error),
      )

      return false
    }

    let hasMatchingHandlers = false

    for (const handler of handlers) {
      const handlerConnection = await handler.run(connection, {
        baseUrl: resolutionContext?.baseUrl?.toString(),
        /**
         * @note Do not emit the "connection" event when running the handler.
         * Use the run only to get the resolved connection object.
         */
        [kAutoConnect]: false,
      })

      if (!handlerConnection) {
        continue
      }

      hasMatchingHandlers = true

      /**
       * @note Attach the WebSocket logger *before* emitting the "connection" event.
       * Connection event listeners may perform actions that should be reflected in the logs
       * (e.g. closing the connection immediately). If the logger is attached after the connection,
       * those actions cannot be properly logged.
       */
      const removeLogger = !resolutionContext?.quiet
        ? handler.log(connection)
        : undefined

      try {
        if (!handler[kConnect](handlerConnection)) {
          removeLogger?.()
        }
      } catch (error) {
        if (
          !this.events.emit(
            new UnhandledWebSocketExceptionEvent('unhandledException', {
              error,
              url: connection.client.url,
              protocols: connection.info.protocols,
            }),
          )
        ) {
          console.error(error)
          devUtils.error(
            'Encountered an unhandled exception during the handler lookup for "%s". Please see the original error above.',
            connection.client.url,
          )
        }

        /**
         * @note Throw the caught error so it gets picked up by WebSocketInterceptor.
         * It's the interceptor who translates handler errors to WebSocket closures.
         */
        throw error
      }
    }

    // No matching WebSocket handlers found.
    if (!hasMatchingHandlers) {
      await executeUnhandledFrameHandle(this, onUnhandledFrame).then(
        () => this.passthrough(),
        (error) => this.errorWith(error),
      )

      return false
    }

    return true
  }

  public async getUnhandledMessage(): Promise<string> {
    const { connection } = this.data
    const details = `\n\n  \u2022 ${connection.client.url}\n\n`

    return `intercepted a WebSocket connection without a matching event handler:${details}If you still wish to intercept this unhandled connection, please create an event handler for it.\nRead more: https://mswjs.io/docs/websocket`
  }
}
