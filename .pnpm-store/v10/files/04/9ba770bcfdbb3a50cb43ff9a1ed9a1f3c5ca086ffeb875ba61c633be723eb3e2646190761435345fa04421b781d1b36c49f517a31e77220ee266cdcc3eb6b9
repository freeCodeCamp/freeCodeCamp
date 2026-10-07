interface AbortSignal extends EventTarget {}

export interface EventOptions {
  bubbles?: boolean
  cancelable?: boolean
  composed?: boolean
}

export interface Event {
  readonly type: string
  readonly target: EventTarget | null
  readonly currentTarget: EventTarget | null
  readonly bubbles: boolean
  readonly cancelable: boolean
  readonly composed: boolean
  readonly defaultPrevented: boolean
  readonly isTrusted: boolean

  preventDefault(): void
  stopPropagation(): void
  stopImmediatePropagation(): void
}

export class Event {
  constructor(type: string, options?: EventOptions)
}

export interface CustomEventOptions<T = any> extends EventOptions {
  detail?: T
}

export interface CustomEvent<T = any> extends Event {
  readonly detail: T
}

export class CustomEvent<T = any> {
  constructor(type: string, options?: CustomEventOptions<T>)
}

export interface AddEventListenerOptions {
  capture?: boolean
  passive?: boolean
  once?: boolean
  signal?: AbortSignal | null
}

export interface RemoveEventListenerOptions {
  capture?: boolean
}

export interface EventTarget {
  addEventListener(
    type: string,
    callback: EventListener,
    options?: AddEventListenerOptions | boolean
  ): void

  removeEventListener(
    type: string,
    callback: EventListener,
    options?: RemoveEventListenerOptions | boolean
  ): void

  dispatchEvent(event: Event): boolean
}

export class EventTarget {
  constructor()
}

export type EventListener = EventCallback | EventHandler

export interface EventCallback {
  (event: Event): void
}

export interface EventHandler {
  handleEvent(event: Event): void
}
