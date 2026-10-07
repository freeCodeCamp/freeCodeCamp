import EventEmitter, { EventMap } from 'bare-events'
import Buffer, { BufferEncoding } from 'bare-buffer'
import { AbortSignal } from 'bare-abort-controller'

import { ReadableStream, WritableStream, CustomQueuingStrategy } from './web'

type StreamEncoding = BufferEncoding | 'buffer'

interface StreamCallback {
  (err: Error | null): void
}

interface StreamEvents extends EventMap {
  close: []
  error: [err: Error]
}

interface StreamOptions<S extends Stream = Stream> {
  eagerOpen?: boolean
  signal?: AbortSignal
  open?(this: S, cb: StreamCallback): void
  predestroy?(this: S): void
  destroy?(this: S, err: Error | null, cb: StreamCallback): void
}

interface Stream<M extends StreamEvents = StreamEvents> extends EventEmitter<M> {
  _open(cb: StreamCallback): void
  _predestroy(): void
  _destroy(err: Error | null, cb: StreamCallback): void

  readonly readable: boolean
  readonly writable: boolean
  readonly destroyed: boolean
  readonly destroying: boolean

  destroy(err?: Error | null): void
}

declare class Stream {}

interface ReadableEvents extends StreamEvents {
  data: [data: unknown]
  end: []
  readable: []
  piping: [dest: Writable]
}

interface ReadableOptions<S extends Readable = Readable> extends StreamOptions<S> {
  encoding?: BufferEncoding
  highWaterMark?: number
  read?(this: S, size: number): void
}

interface ReadableFromWebOptions {
  encoding?: BufferEncoding
  signal?: AbortSignal
}

interface ReadableToWebOptions {
  strategy?: CustomQueuingStrategy
}

interface Readable<M extends ReadableEvents = ReadableEvents>
  extends Stream<M>, AsyncIterable<unknown> {
  _read(size: number): void

  readonly closed: boolean
  readonly errored: Error | null

  push(data: unknown | null, encoding?: BufferEncoding): boolean
  unshift(data: unknown | null, encoding?: BufferEncoding): boolean
  read(): unknown | null

  resume(): this
  pause(): this

  pipe<S extends Writable>(dest: S, cb?: StreamCallback): S

  setEncoding(encoding: BufferEncoding): void
}

declare class Readable<M extends ReadableEvents = ReadableEvents> extends Stream<M> {
  constructor(opts?: ReadableOptions)

  static from(data: unknown | unknown[] | AsyncIterable<unknown>, opts?: ReadableOptions): Readable

  static isBackpressured(rs: Readable): boolean

  static isPaused(rs: Readable): boolean

  static fromWeb(readableStream: ReadableStream, opts?: ReadableFromWebOptions): Readable

  static toWeb(readable: Readable, opts?: ReadableToWebOptions): ReadableStream
}

interface WritableEvents extends StreamEvents {
  drain: []
  finish: []
  pipe: [src: Readable]
}

interface WritableOptions<S extends Writable = Writable> extends StreamOptions<S> {
  write?(this: S, data: unknown, encoding: StreamEncoding, cb: StreamCallback): void
  writev?(this: S, batch: { chunk: unknown; encoding: StreamEncoding }[], cb: StreamCallback): void
  final?(this: S, cb: StreamCallback): void
}

interface WritableFromWebOptions {
  signal?: AbortSignal
}

interface Writable<M extends WritableEvents = WritableEvents> extends Stream<M> {
  _write(data: unknown, encoding: StreamEncoding, cb: StreamCallback): void
  _writev(batch: { chunk: unknown; encoding: StreamEncoding }[], cb: StreamCallback): void
  _final(cb: StreamCallback): void

  readonly closed: boolean
  readonly errored: Error | null

  write(data: unknown, encoding?: BufferEncoding, cb?: StreamCallback): boolean
  write(data: unknown, cb?: StreamCallback): boolean

  end(cb?: StreamCallback): this
  end(data: unknown, encoding?: BufferEncoding, cb?: StreamCallback): this
  end(data: unknown, cb?: StreamCallback): this

  cork(): void
  uncork(): void
}

declare class Writable<M extends WritableEvents = WritableEvents> extends Stream<M> {
  constructor(opts?: WritableOptions)

  static isBackpressured(ws: Writable): boolean

  static drained(ws: Writable): Promise<boolean>

  static fromWeb(writableStream: WritableStream, opts?: WritableFromWebOptions): Writable

  static toWeb(writable: Writable): WritableStream
}

interface DuplexEvents extends ReadableEvents, WritableEvents {}

interface DuplexOptions<S extends Duplex = Duplex> extends ReadableOptions<S>, WritableOptions<S> {}

interface DuplexFromWebOptions extends ReadableFromWebOptions, WritableFromWebOptions {}

interface Duplex<M extends DuplexEvents = DuplexEvents> extends Readable<M>, Writable<M> {}

declare class Duplex<M extends DuplexEvents = DuplexEvents> extends Stream<M> {
  constructor(opts?: DuplexOptions)

  static fromWeb(
    { readable: ReadableStream, writable: Writable },
    opts?: DuplexFromWebOptions
  ): Readable

  static toWeb(readable: Readable, opts?: ReadableToWebOptions): ReadableStream
}

interface TransformEvents extends DuplexEvents {}

interface TransformOptions<S extends Transform = Transform> extends DuplexOptions<S> {
  transform?(this: S, data: unknown, encoding: StreamEncoding, cb: StreamCallback): void
  flush?(this: S, cb: StreamCallback): void
}

interface Transform<M extends TransformEvents = TransformEvents> extends Duplex<M> {
  _transform(data: unknown, encoding: StreamEncoding, cb: StreamCallback): void
  _flush(cb: StreamCallback): void
}

declare class Transform<M extends TransformEvents = TransformEvents> extends Duplex<M> {
  constructor(opts?: TransformOptions)
}

type Pipeline<S extends Writable> = [src: Readable, ...transforms: Duplex[], dest: S]

declare namespace Stream {
  export {
    Stream,
    StreamEvents,
    StreamOptions,
    Readable,
    ReadableEvents,
    ReadableOptions,
    Writable,
    WritableEvents,
    WritableOptions,
    Duplex,
    DuplexEvents,
    DuplexOptions,
    Transform,
    TransformEvents,
    TransformOptions,
    Transform as PassThrough
  }

  export function pipeline<S extends Writable>(streams: Pipeline<S>, cb?: StreamCallback): S

  export function pipeline<S extends Writable>(...args: Pipeline<S>): S

  export function pipeline<S extends Writable>(...args: [...Pipeline<S>, cb: StreamCallback]): S

  export function duplexPair(opts?: DuplexOptions): [Duplex, Duplex]

  export function finished(
    stream: Stream,
    opts: { cleanup?: boolean },
    cb: StreamCallback
  ): () => void

  export function finished(stream: Stream, cb: StreamCallback): () => void

  export function isStream(stream: unknown): stream is Stream

  export function isEnded(stream: Stream): boolean

  export function isFinished(stream: Stream): boolean

  export function isDisturbed(stream: Stream): boolean

  export function isErrored(stream: Stream): boolean

  export function isReadable(stream: Stream): boolean

  export function isWritable(stream: Stream): boolean

  export function getStreamError(stream: Stream, opts?: { all?: boolean }): Error | null

  export function addAbortSignal<S extends Stream>(signal: AbortSignal, stream: S): S
}

export = Stream
