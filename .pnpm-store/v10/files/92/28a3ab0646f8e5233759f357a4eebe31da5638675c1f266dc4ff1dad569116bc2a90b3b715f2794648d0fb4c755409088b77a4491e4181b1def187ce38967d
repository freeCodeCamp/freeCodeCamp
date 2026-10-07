import { MessageEvent, ErrorEvent } from './websocket'
import Dispatcher from './dispatcher'

import {
  EventListenerOptions,
  AddEventListenerOptions,
  EventListenerOrEventListenerObject
} from './patch'

interface EventSourceEventMap {
  error: ErrorEvent
  message: MessageEvent
  open: Event
}

interface EventSource extends EventTarget {
  close(): void
  readonly CLOSED: 2
  readonly CONNECTING: 0
  readonly OPEN: 1
  onerror: ((this: EventSource, ev: ErrorEvent) => any) | null
  onmessage: ((this: EventSource, ev: MessageEvent) => any) | null
  onopen: ((this: EventSource, ev: Event) => any) | null
  readonly readyState: 0 | 1 | 2
  readonly url: string
  readonly withCredentials: boolean

  addEventListener<K extends keyof EventSourceEventMap>(
    type: K,
    listener: (this: EventSource, ev: EventSourceEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions
  ): void
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void
  removeEventListener<K extends keyof EventSourceEventMap>(
    type: K,
    listener: (this: EventSource, ev: EventSourceEventMap[K]) => any,
    options?: boolean | EventListenerOptions
  ): void
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions
  ): void
}

export declare const EventSource: {
  prototype: EventSource
  new (url: string | URL, init?: EventSourceInit): EventSource
  readonly CLOSED: 2
  readonly CONNECTING: 0
  readonly OPEN: 1
}

interface EventSourceInit {
  withCredentials?: boolean
  // @deprecated use `node.dispatcher` instead
  dispatcher?: Dispatcher
  node?: {
    dispatcher?: Dispatcher
    reconnectionTime?: number
  }
}
