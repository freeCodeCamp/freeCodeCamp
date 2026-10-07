/// <reference types="node" />

import type { Blob } from 'node:buffer'
import type { ReadableStream, WritableStream } from 'node:stream/web'
import type { MessagePort } from 'node:worker_threads'
import {
  EventInit,
  EventListenerOptions,
  AddEventListenerOptions,
  EventListenerOrEventListenerObject
} from './patch'
import Dispatcher from './dispatcher'
import { HeadersInit } from './fetch'

export type BinaryType = 'blob' | 'arraybuffer'

interface WebSocketEventMap {
  close: CloseEvent
  error: ErrorEvent
  message: MessageEvent
  open: Event
}

interface WebSocket extends EventTarget {
  binaryType: BinaryType

  readonly bufferedAmount: number
  readonly extensions: string

  onclose: ((this: WebSocket, ev: WebSocketEventMap['close']) => any) | null
  onerror: ((this: WebSocket, ev: WebSocketEventMap['error']) => any) | null
  onmessage: ((this: WebSocket, ev: WebSocketEventMap['message']) => any) | null
  onopen: ((this: WebSocket, ev: WebSocketEventMap['open']) => any) | null

  readonly protocol: string
  readonly readyState: number
  readonly url: string

  close(code?: number, reason?: string): void
  send(data: string | ArrayBufferLike | Blob | ArrayBufferView): void

  readonly CLOSED: number
  readonly CLOSING: number
  readonly CONNECTING: number
  readonly OPEN: number

  addEventListener<K extends keyof WebSocketEventMap>(
    type: K,
    listener: (this: WebSocket, ev: WebSocketEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions
  ): void
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void
  removeEventListener<K extends keyof WebSocketEventMap>(
    type: K,
    listener: (this: WebSocket, ev: WebSocketEventMap[K]) => any,
    options?: boolean | EventListenerOptions
  ): void
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions
  ): void
}

export declare const WebSocket: {
  prototype: WebSocket
  new (url: string | URL, protocols?: string | string[] | WebSocketInit): WebSocket
  readonly CLOSED: number
  readonly CLOSING: number
  readonly CONNECTING: number
  readonly OPEN: number
}

interface CloseEventInit extends EventInit {
  code?: number
  reason?: string
  wasClean?: boolean
}

interface CloseEvent extends Event {
  readonly code: number
  readonly reason: string
  readonly wasClean: boolean
}

export declare const CloseEvent: {
  prototype: CloseEvent
  new (type: string, eventInitDict?: CloseEventInit): CloseEvent
}

interface MessageEventInit<T = any> extends EventInit {
  data?: T
  lastEventId?: string
  origin?: string
  ports?: MessagePort[]
  source?: MessagePort | null
}

interface MessageEvent<T = any> extends Event {
  readonly data: T
  readonly lastEventId: string
  readonly origin: string
  readonly ports: readonly MessagePort[]
  readonly source: MessagePort | null
  initMessageEvent(
    type: string,
    bubbles?: boolean,
    cancelable?: boolean,
    data?: any,
    origin?: string,
    lastEventId?: string,
    source?: MessagePort | null,
    ports?: MessagePort[]
  ): void;
}

export declare const MessageEvent: {
  prototype: MessageEvent
  new<T>(type: string, eventInitDict?: MessageEventInit<T>): MessageEvent<T>
}

interface ErrorEventInit extends EventInit {
  message?: string
  filename?: string
  lineno?: number
  colno?: number
  error?: any
}

interface ErrorEvent extends Event {
  readonly message: string
  readonly filename: string
  readonly lineno: number
  readonly colno: number
  readonly error: Error
}

export declare const ErrorEvent: {
  prototype: ErrorEvent
  new (type: string, eventInitDict?: ErrorEventInit): ErrorEvent
}

interface WebSocketInit {
  protocols?: string | string[],
  dispatcher?: Dispatcher,
  headers?: HeadersInit
}

interface WebSocketStreamOptions {
  protocols?: string | string[]
  signal?: AbortSignal
}

interface WebSocketCloseInfo {
  closeCode: number
  reason: string
}

interface WebSocketStream {
  closed: Promise<WebSocketCloseInfo>
  opened: Promise<{
    extensions: string
    protocol: string
    readable: ReadableStream
    writable: WritableStream
  }>
  url: string
}

export declare const WebSocketStream: {
  prototype: WebSocketStream
  new (url: string | URL, options?: WebSocketStreamOptions): WebSocketStream
}

interface WebSocketError extends Event, WebSocketCloseInfo {}

export declare const WebSocketError: {
  prototype: WebSocketError
  new (type: string, init?: WebSocketCloseInfo): WebSocketError
}

export declare const ping: (ws: WebSocket, body?: Buffer) => void
