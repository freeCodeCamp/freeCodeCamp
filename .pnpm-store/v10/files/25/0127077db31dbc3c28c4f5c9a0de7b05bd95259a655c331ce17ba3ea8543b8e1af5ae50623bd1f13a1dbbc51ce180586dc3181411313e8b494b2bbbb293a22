import { invariant } from 'outvariant'
import { Emitter, TypedEvent } from 'rettime'
import { isObject } from '#core/utils/internal/isObject'
import type { StringifiedResponse } from '../glossary'
import { supportsServiceWorker } from '../utils/supports'

export type WorkerChannelEventMap = {
  REQUEST: WorkerEvent<IncomingWorkerRequest>
  RESPONSE: WorkerEvent<IncomingWorkerResponse>
  MOCKING_ENABLED: WorkerEvent<{
    client: {
      id: string
      frameType: string
    }
  }>
  INTEGRITY_CHECK_RESPONSE: WorkerEvent<{
    packageVersion: string
    checksum: string
  }>
  KEEPALIVE_RESPONSE: TypedEvent<never>
}

/**
 * Request representation received from the worker message event.
 */
export interface IncomingWorkerRequest
  extends Omit<
    Request,
    | 'text'
    | 'body'
    | 'json'
    | 'blob'
    | 'arrayBuffer'
    | 'formData'
    | 'clone'
    | 'signal'
    | 'isHistoryNavigation'
    | 'isReloadNavigation'
  > {
  /**
   * Unique ID of the request generated once the request is
   * intercepted by the "fetch" event in the Service Worker.
   */
  id: string
  interceptedAt: number
  body?: ArrayBuffer | null
}

type IncomingWorkerResponse = {
  isMockedResponse: boolean
  request: IncomingWorkerRequest
  response: Pick<
    Response,
    'type' | 'ok' | 'status' | 'statusText' | 'body' | 'headers' | 'redirected'
  >
}

export type WorkerEventResponse = {
  MOCK_RESPONSE: [
    data: StringifiedResponse,
    transfer?: [ReadableStream<Uint8Array>],
  ]
  PASSTHROUGH: []
}

const SUPPORTS_SERVICE_WORKER = supportsServiceWorker()

export class WorkerEvent<
  DataType,
  ReturnType = any,
  EventType extends string = string,
> extends TypedEvent<DataType, ReturnType, EventType> {
  #workerEvent: MessageEvent

  constructor(workerEvent: MessageEvent) {
    const type = workerEvent.data.type as EventType
    const data = workerEvent.data.payload as DataType

    /**
     * @note This is the only place we're mapping { type, payload }
     * message structure of the worker. The client references the
     * payload via `event.data`.
     */
    super(
      // @ts-expect-error Troublesome `TypedEvent` extension.
      type,
      { data },
    )
    this.#workerEvent = workerEvent
  }

  get ports() {
    return this.#workerEvent.ports
  }

  /**
   * Reply directly to this event using its `MessagePort`.
   */
  public postMessage<Type extends keyof WorkerEventResponse>(
    type: Type,
    ...rest: WorkerEventResponse[Type]
  ): void {
    this.#workerEvent.ports[0].postMessage(
      { type, data: rest[0] },
      { transfer: rest[1] },
    )
  }
}

/**
 * Map of the events that can be sent to the Service Worker
 * from any execution context.
 */
type OutgoingWorkerEvents =
  | 'MOCK_ACTIVATE'
  | 'INTEGRITY_CHECK_REQUEST'
  | 'KEEPALIVE_REQUEST'
  | 'CLIENT_CLOSED'

export interface WorkerChannelOptions {
  getWorker: () => Promise<ServiceWorker>
}

export class WorkerChannel extends Emitter<WorkerChannelEventMap> {
  #getWorker: WorkerChannelOptions['getWorker']
  #controller: AbortController

  constructor(options: WorkerChannelOptions) {
    super()

    invariant(
      SUPPORTS_SERVICE_WORKER,
      'Failed to open a WorkerChannel: Service Worker is not supported in this environment.',
    )

    this.#getWorker = options.getWorker
    this.#controller = new AbortController()

    navigator.serviceWorker.addEventListener(
      'message',
      async (event) => {
        const worker = await this.#getWorker()

        if (event.source != null && event.source !== worker) {
          return
        }

        if (event.data && isObject(event.data) && 'type' in event.data) {
          this.emit(new WorkerEvent<any, any, any>(event))
        }
      },
      {
        signal: this.#controller.signal,
      },
    )
  }

  /**
   * Send data to the Service Worker controlling this client.
   * This triggers the `message` event listener on ServiceWorkerGlobalScope.
   */
  public postMessage(type: OutgoingWorkerEvents): void {
    invariant(
      SUPPORTS_SERVICE_WORKER,
      'Failed to post message on a WorkerChannel: the Service Worker API is unavailable in this environment. This is likely an issue with MSW. Please report it on GitHub: https://github.com/mswjs/msw/issues',
    )

    this.#getWorker().then((worker) => {
      worker.postMessage(type)
    })
  }

  /**
   * Terminal teardown. Removes the `navigator.serviceWorker` message listener
   * and all emitter subscriptions. The channel is not usable afterwards.
   */
  public terminate(): void {
    this.#controller.abort()
    this.removeAllListeners()
  }
}
