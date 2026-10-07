export interface ReadableStreamDefaultReader {
  readonly closed: Promise<void>

  read(): Promise<{ value: unknown; done: boolean }>
  releaseLock(): void
  cancel(reason?: unknown): Promise<void>
}

export class ReadableStreamDefaultReader {
  constructor(stream: ReadableStream)
}

export interface ReadableStreamDefaultController {
  readonly desiredSize: number

  enqueue(data: unknown): void
  close(): void
  error(error?: unknown): void
}

export class ReadableStreamDefaultController {
  constructor(stream: ReadableStream)
}

export interface UnderlyingSource<S extends ReadableStream = ReadableStream> {
  start?(this: S, controller: ReadableStreamDefaultController): void
  pull?(this: S, controller: ReadableStreamDefaultController): void
  cancel?(this: S, reason?: unknown): void
}

export interface CustomQueuingStrategy {
  highWaterMark?: number
  size?: (chunk: unknown) => number
}

export interface ReadableStream extends AsyncIterable<unknown> {
  readonly locked: boolean

  getReader(): ReadableStreamDefaultReader
  cancel(reason?: unknown): Promise<void>
  tee(): [ReadableStream, ReadableStream]
  pipeTo(destination: WritableStream): Promise<void>
}

export class ReadableStream {
  constructor(underlyingSource?: UnderlyingSource, queuingStrategy?: CustomQueuingStrategy)

  static from(iterable: unknown | unknown[] | AsyncIterable<unknown>): ReadableStream
}

export interface QueuingStrategyOptions {
  highWaterMark?: number
}

interface QueuingStrategy {
  readonly highWaterMark: number

  size(chunk: unknown): number
}

declare class QueuingStrategy {
  constructor(opts?: QueuingStrategyOptions)
}

export { type QueuingStrategy }

export class CountQueuingStrategy extends QueuingStrategy {}

export class ByteLengthQueuingStrategy extends QueuingStrategy {}

export function isReadableStream(value: unknown): value is ReadableStream

export function isReadableStreamErrored(stream: ReadableStream): boolean

export function isReadableStreamDisturbed(stream: ReadableStream): boolean

export interface WritableStreamDefaultWriter {
  readonly desiredSize: number
  readonly closed: Promise<void>
  readonly ready: Promise<void>

  write(chunk: unknown): Promise<void>
  releaseLock(): void
  close(): Promise<void>
  abort(reason?: unknown): Promise<void>
}

export class WritableStreamDefaultWriter {
  constructor(stream: WritableStream)
}

export interface WritableStreamDefaultController {
  error(err?: unknown): void
}

export class WritableStreamDefaultController {
  constructor(stream: WritableStream)
}

export interface UnderlyingSink<S extends WritableStream = WritableStream> {
  start?(this: S, controller: WritableStreamDefaultController): void
  write?(this: S, chunk: unknown, controller: WritableStreamDefaultController): void
  close?(this: S): void
  abort?(this: S, reason?: unknown): void
}

export interface WritableStream extends AsyncIterable<unknown> {
  readonly locked: boolean

  getWriter(): WritableStreamDefaultWriter
  abort(reason?: unknown): Promise<void>
  close(): Promise<void>
}

export class WritableStream {
  constructor(underlyingSink?: UnderlyingSink, queuingStrategy?: CustomQueuingStrategy)
}

export function isWritableStream(value: unknown): value is WritableStream

export interface TransformStreamDefaultController {
  readonly desiredSize: number

  enqueue(data: unknown): void
  error(error?: unknown): void
  terminate(): void
}

export class TransformStreamDefaultController {
  constructor(stream: TransformStream)
}

export interface Transformer<S extends TransformStream = TransformStream> {
  start?(this: S, controller: TransformStreamDefaultController): void
  transform?(this: S, chunk: unknown, controller: TransformStreamDefaultController): void
  flush?(this: S, controller: TransformStreamDefaultController): void
}

export interface TransformStream {
  readonly writable: WritableStream
  readonly readable: ReadableStream
}

export class TransformStream {
  constructor(
    transformer?: Transformer,
    writableStrategy?: CustomQueuingStrategy,
    readableStrategy?: CustomQueuingStrategy
  )
}

export function isTransformStream(value: unknown): value is TransformStream
