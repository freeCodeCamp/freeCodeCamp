import { AbortSignal } from 'bare-abort-controller'

interface EventMap {
  [event: string | symbol]: unknown[]
}

interface EventHandler<in A extends unknown[] = unknown[], out R = unknown> {
  (...args: A): R
}

declare class EventEmitterError extends Error {
  static OPERATION_ABORTED(cause: Error, msg?: string): EventEmitterError
  static UNHANDLED_ERROR(cause: Error, msg?: string): EventEmitterError
}

interface EventEmitter<in out M extends EventMap = EventMap> {
  addListener<E extends keyof M, R>(name: E, fn: EventHandler<M[E], R>): this

  addOnceListener<E extends keyof M, R>(name: E, fn: EventHandler<M[E], R>): this

  prependListener<E extends keyof M, R>(name: E, fn: EventHandler<M[E], R>): this

  prependOnceListener<E extends keyof M, R>(name: E, fn: EventHandler<M[E], R>): this

  removeListener<E extends keyof M, R>(name: E, fn: EventHandler<M[E], R>): this

  removeAllListeners<E extends keyof M>(name?: E): this

  on<E extends keyof M, R>(name: E, fn: EventHandler<M[E], R>): this

  once<E extends keyof M, R>(name: E, fn: EventHandler<M[E], R>): this

  off<E extends keyof M, R>(name: E, fn: EventHandler<M[E], R>): this

  emit<E extends keyof M>(name: E, ...args: M[E]): boolean

  listeners<E extends keyof M, R>(name: E): EventHandler<M[E], R>

  listenerCount<E extends keyof M>(name: E): number

  getMaxListeners(): number
  setMaxListeners(n: number): void
}

declare class EventEmitter<in out M extends EventMap = EventMap> {}

declare namespace EventEmitter {
  export function on<M extends EventMap, E extends keyof M>(
    emitter: EventEmitter<M>,
    name: E,
    opts?: { signal?: AbortSignal }
  ): AsyncIterableIterator<M[E]>

  export function once<M extends EventMap, E extends keyof M>(
    emitter: EventEmitter<M>,
    name: E,
    opts?: { signal?: AbortSignal }
  ): Promise<M[E]>

  export function forward<F extends EventMap, E extends keyof F, T extends Pick<F, E>>(
    from: EventEmitter<F>,
    to: EventEmitter<T>,
    names: E | E[],
    opts?: { emit?: (name: E, ...args: T[E]) => void }
  ): void

  export function listenerCount<M extends EventMap, E extends keyof M>(
    emitter: EventEmitter<M>,
    name: E
  ): number

  export function getMaxListeners(emitter: EventEmitter): number

  export function setMaxListeners(n: number, ...emitters: EventEmitter[]): void

  export let defaultMaxListeners: number

  export { EventEmitter, EventEmitterError as errors, EventMap, EventHandler }
}

export = EventEmitter
