/// <reference types="node" />

// See https://github.com/nodejs/undici/issues/1740

export interface EventInit {
  bubbles?: boolean
  cancelable?: boolean
  composed?: boolean
}

export interface EventListenerOptions {
  capture?: boolean
}

export interface AddEventListenerOptions extends EventListenerOptions {
  once?: boolean
  passive?: boolean
  signal?: AbortSignal
}

export type EventListenerOrEventListenerObject = EventListener | EventListenerObject

export interface EventListenerObject {
  handleEvent (object: Event): void
}

export interface EventListener {
  (evt: Event): void
}
