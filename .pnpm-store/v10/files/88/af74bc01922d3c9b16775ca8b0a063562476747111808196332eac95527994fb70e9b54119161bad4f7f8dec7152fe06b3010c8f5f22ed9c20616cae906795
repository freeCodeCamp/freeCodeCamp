// Event state
const BUBBLES = 0x1
const CANCELABLE = 0x2
const COMPOSED = 0x4
const CANCELED = 0x8
const DISPATCH = 0x10
const STOP = 0x20

// EventTarget state
const CAPTURE = 0x1
const PASSIVE = 0x2
const ONCE = 0x4

// https://dom.spec.whatwg.org/#event
class Event {
  // https://dom.spec.whatwg.org/#dom-event-event
  constructor(type, options = {}) {
    const { bubbles = false, cancelable = false, composed = false } = options

    this._type = type
    this._target = null
    this._state = 0

    if (bubbles) this._state |= BUBBLES
    if (cancelable) this._state |= CANCELABLE
    if (composed) this._state |= COMPOSED
  }

  // https://dom.spec.whatwg.org/#dom-event-type
  get type() {
    return this._type
  }

  // https://dom.spec.whatwg.org/#dom-event-target
  get target() {
    return this._target
  }

  // https://dom.spec.whatwg.org/#dom-event-currenttarget
  get currentTarget() {
    return null
  }

  // https://dom.spec.whatwg.org/#dom-event-bubbles
  get bubbles() {
    return (this._state & BUBBLES) !== 0
  }

  // https://dom.spec.whatwg.org/#dom-event-cancelable
  get cancelable() {
    return (this._state & CANCELABLE) !== 0
  }

  // https://dom.spec.whatwg.org/#dom-event-composed
  get composed() {
    return (this._state & COMPOSED) !== 0
  }

  // https://dom.spec.whatwg.org/#dom-event-defaultprevented
  get defaultPrevented() {
    return (this._state & CANCELED) !== 0
  }

  // https://dom.spec.whatwg.org/#dom-event-istrusted
  get isTrusted() {
    return false
  }

  // https://dom.spec.whatwg.org/#dom-event-preventdefault
  preventDefault() {
    if (this._state & CANCELABLE) this._state |= CANCELED
  }

  // https://dom.spec.whatwg.org/#dom-event-stoppropagation
  stopPropagation() {}

  // https://dom.spec.whatwg.org/#dom-event-stopimmediatepropagation
  stopImmediatePropagation() {
    this._state |= STOP
  }

  toJSON() {
    return {
      type: this.type,
      target: this.target,
      bubbles: this.bubbles,
      cancelable: this.cancelable,
      composed: this.composed,
      defaultPrevented: this.defaultPrevented,
      isTrusted: this.isTrusted
    }
  }

  [Symbol.for('bare.inspect')]() {
    return {
      __proto__: { constructor: Event },

      type: this.type,
      target: this.target,
      bubbles: this.bubbles,
      cancelable: this.cancelable,
      composed: this.composed,
      defaultPrevented: this.defaultPrevented,
      isTrusted: this.isTrusted
    }
  }
}

exports.Event = Event

// https://dom.spec.whatwg.org/#customevent
exports.CustomEvent = class CustomEvent extends Event {
  constructor(type, options = {}) {
    super(type, options)

    const { detail = null } = options

    this._detail = detail
  }

  // https://dom.spec.whatwg.org/#dom-customevent-detail
  get detail() {
    return this._detail
  }
}

// https://dom.spec.whatwg.org/#eventtarget
exports.EventTarget = class EventTarget {
  // https://dom.spec.whatwg.org/#dom-eventtarget-eventtarget
  constructor() {
    this._listeners = new Map()
  }

  // https://dom.spec.whatwg.org/#dom-eventtarget-addeventlistener
  addEventListener(type, callback = null, options = {}) {
    if (typeof options === 'boolean') options = { capture: options }

    const { capture = false, passive = false, once = false, signal = null } = options

    if (signal !== null && signal.aborted) return
    if (callback === null) return

    const listener = new EventListener(type, callback, capture, passive, once, signal)

    const listeners = this._listeners.get(type)

    if (listeners === undefined) this._listeners.set(type, listener)
    else {
      for (const existing of listeners) {
        if (callback === existing.callback && capture === existing.capture) {
          return // Duplicate listener
        }
      }

      listener.link(listeners)

      if (signal !== null) {
        signal.addEventListener('abort', onabort)

        function onabort() {
          listener.unlink()
        }
      }
    }
  }

  // https://dom.spec.whatwg.org/#dom-eventtarget-removeeventlistener
  removeEventListener(type, callback = null, options = {}) {
    if (typeof options === 'boolean') options = { capture: options }

    const { capture = false } = options

    const listeners = this._listeners.get(type)

    if (listeners === undefined) return

    for (const existing of listeners) {
      if (callback === existing.callback && capture === existing.capture) {
        const next = existing.unlink()

        if (listeners === existing) this._listeners.set(type, next)

        return
      }
    }
  }

  // https://dom.spec.whatwg.org/#dom-eventtarget-dispatchevent
  dispatchEvent(event) {
    event._target = this
    event._state |= DISPATCH

    const listeners = this._listeners.get(event.type)

    try {
      if (listeners === undefined) return true

      for (const listener of listeners) {
        // https://dom.spec.whatwg.org/#concept-event-listener-inner-invoke

        if (listener.once) listener.unlink()

        let callback = listener.callback
        let context = this

        if (typeof callback === 'object') {
          context = callback
          callback = callback.handleEvent
        }

        Reflect.apply(callback, context, [event])

        if (event._state & STOP) break
      }

      return (event._state & CANCELED) === 0
    } finally {
      event._state &= ~DISPATCH
      event._state &= ~STOP
    }
  }

  toJSON() {
    return {}
  }

  [Symbol.for('bare.inspect')]() {
    return {
      __proto__: { constructor: EventTarget }
    }
  }
}

// https://dom.spec.whatwg.org/#concept-event-listener
class EventListener {
  constructor(type, callback, capture, passive, once, signal) {
    this._type = type
    this._callback = callback
    this._signal = signal
    this._state = 0

    if (capture) this._state |= CAPTURE
    if (passive) this._state |= PASSIVE
    if (once) this._state |= ONCE

    this._previous = this
    this._next = this
  }

  get type() {
    return this._type
  }

  get callback() {
    return this._callback
  }

  get capture() {
    return (this._state & CAPTURE) !== 0
  }

  get passive() {
    return (this._state & PASSIVE) !== 0
  }

  get once() {
    return (this._state & ONCE) !== 0
  }

  get removed() {
    return this._previous === this && this._next === this
  }

  link(listener) {
    const next = this._next
    const previous = listener._previous

    this._next = listener
    listener._previous = this

    previous._next = next
    next._previous = previous

    return listener
  }

  unlink() {
    if (this.removed) return this

    const next = this._next
    const previous = this._previous

    this._next = this
    this._previous = this

    previous._next = next
    next._previous = previous

    return next
  }

  *[Symbol.iterator]() {
    let current = this

    while (true) {
      const next = current._next
      yield current
      if (next === this) break
      current = next
    }
  }

  toJSON() {
    return {
      type: this.type,
      capture: this.capture,
      passive: this.passive,
      once: this.once,
      removed: this.removed
    }
  }

  [Symbol.for('bare.inspect')]() {
    return {
      __proto__: { constructor: EventListener },

      type: this.type,
      callback: this.callback,
      capture: this.capture,
      passive: this.passive,
      once: this.once,
      removed: this.removed
    }
  }
}
