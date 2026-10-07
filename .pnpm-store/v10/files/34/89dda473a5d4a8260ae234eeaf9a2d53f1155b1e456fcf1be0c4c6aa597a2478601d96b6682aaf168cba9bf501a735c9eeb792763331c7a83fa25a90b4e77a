import { URL } from 'node:url'
import { Duplex, Readable, Writable } from 'node:stream'
import { EventEmitter } from 'node:events'
import { Blob } from 'node:buffer'
import { IncomingHttpHeaders } from './header'
import BodyReadable from './readable'
import { FormData } from './formdata'
import Errors from './errors'
import { Autocomplete } from './utility'

type AbortSignal = unknown

export default Dispatcher

export type UndiciHeaders = Record<string, string | string[]> | IncomingHttpHeaders | string[] | Iterable<[string, string | string[] | undefined]> | null

/** Dispatcher is the core API used to dispatch requests. */
declare class Dispatcher extends EventEmitter {
  /** Dispatches a request. This API is expected to evolve through semver-major versions and is less stable than the preceding higher level APIs. It is primarily intended for library developers who implement higher level APIs on top of this. */
  dispatch (options: Dispatcher.DispatchOptions, handler: Dispatcher.DispatchHandler): boolean
  /** Starts two-way communications with the requested resource. */
  connect<TOpaque = null>(options: Dispatcher.ConnectOptions<TOpaque>, callback: (err: Error | null, data: Dispatcher.ConnectData<TOpaque>) => void): void
  connect<TOpaque = null>(options: Dispatcher.ConnectOptions<TOpaque>): Promise<Dispatcher.ConnectData<TOpaque>>
  /** Compose a chain of dispatchers */
  compose (dispatchers: Dispatcher.DispatcherComposeInterceptor[]): Dispatcher.ComposedDispatcher
  compose (...dispatchers: Dispatcher.DispatcherComposeInterceptor[]): Dispatcher.ComposedDispatcher
  /** Performs an HTTP request. */
  request<TOpaque = null>(options: Dispatcher.RequestOptions<TOpaque>, callback: (err: Error | null, data: Dispatcher.ResponseData<TOpaque>) => void): void
  request<TOpaque = null>(options: Dispatcher.RequestOptions<TOpaque>): Promise<Dispatcher.ResponseData<TOpaque>>
  /** For easy use with `stream.pipeline`. */
  pipeline<TOpaque = null>(options: Dispatcher.PipelineOptions<TOpaque>, handler: Dispatcher.PipelineHandler<TOpaque>): Duplex
  /** A faster version of `Dispatcher.request`. */
  stream<TOpaque = null>(options: Dispatcher.RequestOptions<TOpaque>, factory: Dispatcher.StreamFactory<TOpaque>, callback: (err: Error | null, data: Dispatcher.StreamData<TOpaque>) => void): void
  stream<TOpaque = null>(options: Dispatcher.RequestOptions<TOpaque>, factory: Dispatcher.StreamFactory<TOpaque>): Promise<Dispatcher.StreamData<TOpaque>>
  /** Upgrade to a different protocol. */
  upgrade (options: Dispatcher.UpgradeOptions, callback: (err: Error | null, data: Dispatcher.UpgradeData) => void): void
  upgrade (options: Dispatcher.UpgradeOptions): Promise<Dispatcher.UpgradeData>
  /** Closes the client and gracefully waits for enqueued requests to complete before invoking the callback (or returning a promise if no callback is provided). */
  close (callback: () => void): void
  close (): Promise<void>
  /** Destroy the client abruptly with the given err. All the pending and running requests will be asynchronously aborted and error. Waits until socket is closed before invoking the callback (or returning a promise if no callback is provided). Since this operation is asynchronously dispatched there might still be some progress on dispatched requests. */
  destroy (err: Error | null, callback: () => void): void
  destroy (callback: () => void): void
  destroy (err: Error | null): Promise<void>
  destroy (): Promise<void>

  on (eventName: 'connect', callback: (origin: URL, targets: readonly Dispatcher[]) => void): this
  on (eventName: 'disconnect', callback: (origin: URL, targets: readonly Dispatcher[], error: Errors.UndiciError) => void): this
  on (eventName: 'connectionError', callback: (origin: URL, targets: readonly Dispatcher[], error: Errors.UndiciError) => void): this
  on (eventName: 'drain', callback: (origin: URL) => void): this

  once (eventName: 'connect', callback: (origin: URL, targets: readonly Dispatcher[]) => void): this
  once (eventName: 'disconnect', callback: (origin: URL, targets: readonly Dispatcher[], error: Errors.UndiciError) => void): this
  once (eventName: 'connectionError', callback: (origin: URL, targets: readonly Dispatcher[], error: Errors.UndiciError) => void): this
  once (eventName: 'drain', callback: (origin: URL) => void): this

  off (eventName: 'connect', callback: (origin: URL, targets: readonly Dispatcher[]) => void): this
  off (eventName: 'disconnect', callback: (origin: URL, targets: readonly Dispatcher[], error: Errors.UndiciError) => void): this
  off (eventName: 'connectionError', callback: (origin: URL, targets: readonly Dispatcher[], error: Errors.UndiciError) => void): this
  off (eventName: 'drain', callback: (origin: URL) => void): this

  addListener (eventName: 'connect', callback: (origin: URL, targets: readonly Dispatcher[]) => void): this
  addListener (eventName: 'disconnect', callback: (origin: URL, targets: readonly Dispatcher[], error: Errors.UndiciError) => void): this
  addListener (eventName: 'connectionError', callback: (origin: URL, targets: readonly Dispatcher[], error: Errors.UndiciError) => void): this
  addListener (eventName: 'drain', callback: (origin: URL) => void): this

  removeListener (eventName: 'connect', callback: (origin: URL, targets: readonly Dispatcher[]) => void): this
  removeListener (eventName: 'disconnect', callback: (origin: URL, targets: readonly Dispatcher[], error: Errors.UndiciError) => void): this
  removeListener (eventName: 'connectionError', callback: (origin: URL, targets: readonly Dispatcher[], error: Errors.UndiciError) => void): this
  removeListener (eventName: 'drain', callback: (origin: URL) => void): this

  prependListener (eventName: 'connect', callback: (origin: URL, targets: readonly Dispatcher[]) => void): this
  prependListener (eventName: 'disconnect', callback: (origin: URL, targets: readonly Dispatcher[], error: Errors.UndiciError) => void): this
  prependListener (eventName: 'connectionError', callback: (origin: URL, targets: readonly Dispatcher[], error: Errors.UndiciError) => void): this
  prependListener (eventName: 'drain', callback: (origin: URL) => void): this

  prependOnceListener (eventName: 'connect', callback: (origin: URL, targets: readonly Dispatcher[]) => void): this
  prependOnceListener (eventName: 'disconnect', callback: (origin: URL, targets: readonly Dispatcher[], error: Errors.UndiciError) => void): this
  prependOnceListener (eventName: 'connectionError', callback: (origin: URL, targets: readonly Dispatcher[], error: Errors.UndiciError) => void): this
  prependOnceListener (eventName: 'drain', callback: (origin: URL) => void): this

  listeners (eventName: 'connect'): ((origin: URL, targets: readonly Dispatcher[]) => void)[]
  listeners (eventName: 'disconnect'): ((origin: URL, targets: readonly Dispatcher[], error: Errors.UndiciError) => void)[]
  listeners (eventName: 'connectionError'): ((origin: URL, targets: readonly Dispatcher[], error: Errors.UndiciError) => void)[]
  listeners (eventName: 'drain'): ((origin: URL) => void)[]

  rawListeners (eventName: 'connect'): ((origin: URL, targets: readonly Dispatcher[]) => void)[]
  rawListeners (eventName: 'disconnect'): ((origin: URL, targets: readonly Dispatcher[], error: Errors.UndiciError) => void)[]
  rawListeners (eventName: 'connectionError'): ((origin: URL, targets: readonly Dispatcher[], error: Errors.UndiciError) => void)[]
  rawListeners (eventName: 'drain'): ((origin: URL) => void)[]

  emit (eventName: 'connect', origin: URL, targets: readonly Dispatcher[]): boolean
  emit (eventName: 'disconnect', origin: URL, targets: readonly Dispatcher[], error: Errors.UndiciError): boolean
  emit (eventName: 'connectionError', origin: URL, targets: readonly Dispatcher[], error: Errors.UndiciError): boolean
  emit (eventName: 'drain', origin: URL): boolean
}

declare namespace Dispatcher {
  export interface ComposedDispatcher extends Dispatcher {}
  export type Dispatch = Dispatcher['dispatch']
  export type DispatcherComposeInterceptor = (dispatch: Dispatch) => Dispatch
  export interface DispatchOptions {
    origin?: string | URL;
    path: string;
    method: HttpMethod;
    /** Default: `null` */
    body?: string | Buffer | Uint8Array | Readable | null | FormData;
    /** Default: `null` */
    headers?: UndiciHeaders;
    /** Query string params to be embedded in the request URL. Default: `null` */
    query?: Record<string, any>;
    /** Whether the requests can be safely retried or not. If `false` the request won't be sent until all preceding requests in the pipeline have completed. Default: `true` if `method` is `HEAD` or `GET`. */
    idempotent?: boolean;
    /** Whether the response is expected to take a long time and would end up blocking the pipeline. When this is set to `true` further pipelining will be avoided on the same connection until headers have been received. Defaults to `method !== 'HEAD'`. */
    blocking?: boolean;
    /** Upgrade the request. Should be used to specify the kind of upgrade i.e. `'Websocket'`. Default: `method === 'CONNECT' || null`. */
    upgrade?: boolean | string | null;
    /** The amount of time, in milliseconds, the parser will wait to receive the complete HTTP headers. Defaults to 300 seconds. */
    headersTimeout?: number | null;
    /** The timeout after which a request will time out, in milliseconds. Monitors time between receiving body data. Use 0 to disable it entirely. Defaults to 300 seconds. */
    bodyTimeout?: number | null;
    /** Whether the request should stablish a keep-alive or not. Default `false` */
    reset?: boolean;
    /** Whether Undici should throw an error upon receiving a 4xx or 5xx response from the server. Defaults to false */
    throwOnError?: boolean;
    /** For H2, it appends the expect: 100-continue header, and halts the request body until a 100-continue is received from the remote server */
    expectContinue?: boolean;
  }
  export interface ConnectOptions<TOpaque = null> {
    origin: string | URL;
    path: string;
    /** Default: `null` */
    headers?: UndiciHeaders;
    /** Default: `null` */
    signal?: AbortSignal | EventEmitter | null;
    /** This argument parameter is passed through to `ConnectData` */
    opaque?: TOpaque;
    /** Default: false */
    redirectionLimitReached?: boolean;
    /** Default: `null` */
    responseHeaders?: 'raw' | null;
  }
  export interface RequestOptions<TOpaque = null> extends DispatchOptions {
    /** Default: `null` */
    opaque?: TOpaque;
    /** Default: `null` */
    signal?: AbortSignal | EventEmitter | null;
    /** Default: false */
    redirectionLimitReached?: boolean;
    /** Default: `null` */
    onInfo?: (info: { statusCode: number, headers: Record<string, string | string[]> }) => void;
    /** Default: `null` */
    responseHeaders?: 'raw' | null;
    /** Default: `64 KiB` */
    highWaterMark?: number;
  }
  export interface PipelineOptions<TOpaque = null> extends RequestOptions<TOpaque> {
    /** `true` if the `handler` will return an object stream. Default: `false` */
    objectMode?: boolean;
  }
  export interface UpgradeOptions {
    path: string;
    /** Default: `'GET'` */
    method?: string;
    /** Default: `null` */
    headers?: UndiciHeaders;
    /** A string of comma separated protocols, in descending preference order. Default: `'Websocket'` */
    protocol?: string;
    /** Default: `null` */
    signal?: AbortSignal | EventEmitter | null;
    /** Default: false */
    redirectionLimitReached?: boolean;
    /** Default: `null` */
    responseHeaders?: 'raw' | null;
  }
  export interface ConnectData<TOpaque = null> {
    statusCode: number;
    headers: IncomingHttpHeaders;
    socket: Duplex;
    opaque: TOpaque;
  }
  export interface ResponseData<TOpaque = null> {
    statusCode: number;
    headers: IncomingHttpHeaders;
    body: BodyReadable & BodyMixin;
    trailers: Record<string, string>;
    opaque: TOpaque;
    context: object;
  }
  export interface PipelineHandlerData<TOpaque = null> {
    statusCode: number;
    headers: IncomingHttpHeaders;
    opaque: TOpaque;
    body: BodyReadable;
    context: object;
  }
  export interface StreamData<TOpaque = null> {
    opaque: TOpaque;
    trailers: Record<string, string>;
  }
  export interface UpgradeData<TOpaque = null> {
    headers: IncomingHttpHeaders;
    socket: Duplex;
    opaque: TOpaque;
  }
  export interface StreamFactoryData<TOpaque = null> {
    statusCode: number;
    headers: IncomingHttpHeaders;
    opaque: TOpaque;
    context: object;
  }
  export type StreamFactory<TOpaque = null> = (data: StreamFactoryData<TOpaque>) => Writable

  export interface DispatchController {
    get aborted () : boolean
    get paused () : boolean
    get reason () : Error | null
    abort (reason: Error): void
    pause(): void
    resume(): void
  }

  export interface DispatchHandler {
    onRequestStart?(controller: DispatchController, context: any): void;
    onRequestUpgrade?(controller: DispatchController, statusCode: number, headers: IncomingHttpHeaders, socket: Duplex): void;
    onResponseStart?(controller: DispatchController, statusCode: number, headers: IncomingHttpHeaders, statusMessage?: string): void;
    onResponseData?(controller: DispatchController, chunk: Buffer): void;
    onResponseEnd?(controller: DispatchController, trailers: IncomingHttpHeaders): void;
    onResponseError?(controller: DispatchController, error: Error): void;

    /** Invoked before request is dispatched on socket. May be invoked multiple times when a request is retried when the request at the head of the pipeline fails. */
    /** @deprecated */
    onConnect?(abort: (err?: Error) => void): void;
    /** Invoked when an error has occurred. */
    /** @deprecated */
    onError?(err: Error): void;
    /** Invoked when request is upgraded either due to a `Upgrade` header or `CONNECT` method. */
    /** @deprecated */
    onUpgrade?(statusCode: number, headers: Buffer[] | string[] | null, socket: Duplex): void;
    /** Invoked when response is received, before headers have been read. **/
    /** @deprecated */
    onResponseStarted?(): void;
    /** Invoked when statusCode and headers have been received. May be invoked multiple times due to 1xx informational headers. */
    /** @deprecated */
    onHeaders?(statusCode: number, headers: Buffer[], resume: () => void, statusText: string): boolean;
    /** Invoked when response payload data is received. */
    /** @deprecated */
    onData?(chunk: Buffer): boolean;
    /** Invoked when response payload and trailers have been received and the request has completed. */
    /** @deprecated */
    onComplete?(trailers: string[] | null): void;
    /** Invoked when a body chunk is sent to the server. May be invoked multiple times for chunked requests */
    /** @deprecated */
    onBodySent?(chunkSize: number, totalBytesSent: number): void;
  }
  export type PipelineHandler<TOpaque = null> = (data: PipelineHandlerData<TOpaque>) => Readable
  export type HttpMethod = Autocomplete<'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH'>

  /**
   * @link https://fetch.spec.whatwg.org/#body-mixin
   */
  interface BodyMixin {
    readonly body?: never;
    readonly bodyUsed: boolean;
    arrayBuffer(): Promise<ArrayBuffer>;
    blob(): Promise<Blob>;
    bytes(): Promise<Uint8Array>;
    formData(): Promise<never>;
    json(): Promise<unknown>;
    text(): Promise<string>;
  }

  export interface DispatchInterceptor {
    (dispatch: Dispatch): Dispatch
  }
}
