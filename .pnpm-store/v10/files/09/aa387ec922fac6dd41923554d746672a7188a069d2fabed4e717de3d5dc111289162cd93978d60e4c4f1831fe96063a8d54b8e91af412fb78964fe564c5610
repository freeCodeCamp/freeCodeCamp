import type {
  ErrorPayload,
  FullReloadPayload,
  PrunePayload,
  UpdatePayload,
} from './hmrPayload'

export interface CustomEventMap {
  // client events
  'vite:beforeUpdate': UpdatePayload
  'vite:afterUpdate': UpdatePayload
  'vite:beforePrune': PrunePayload
  'vite:beforeFullReload': FullReloadPayload
  'vite:error': ErrorPayload
  'vite:invalidate': InvalidatePayload
  'vite:ws:connect': WebSocketConnectionPayload
  'vite:ws:disconnect': WebSocketConnectionPayload

  // server events
  'vite:client:connect': undefined
  'vite:client:disconnect': undefined
}

export interface WebSocketConnectionPayload {
  /**
   * @experimental
   * We expose this instance experimentally to see potential usage.
   * This might be removed in the future if we didn't find reasonable use cases.
   * If you find this useful, please open an issue with details so we can discuss and make it stable API.
   */
  // eslint-disable-next-line n/no-unsupported-features/node-builtins
  webSocket: WebSocket
}

export interface InvalidatePayload {
  path: string
  message: string | undefined
  firstInvalidatedBy: string
}

/**
 * provides types for payloads of built-in Vite events
 */
export type InferCustomEventPayload<T extends string> =
  T extends keyof CustomEventMap ? CustomEventMap[T] : any

/**
 * provides types for names of built-in Vite events
 */
export type CustomEventName = keyof CustomEventMap | (string & {})
