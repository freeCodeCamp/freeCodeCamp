const kCancelable = Symbol('kCancelable')
const kDefaultPrevented = Symbol('kDefaultPrevented')

/**
 * A `MessageEvent` superset that supports event cancellation
 * in Node.js. It's rather non-intrusive so it can be safely
 * used in the browser as well.
 *
 * @see https://github.com/nodejs/node/issues/51767
 */
export class CancelableMessageEvent<T = any> extends MessageEvent<T> {
  [kCancelable]: boolean;
  [kDefaultPrevented]: boolean

  constructor(type: string, init: MessageEventInit<T>) {
    super(type, init)
    this[kCancelable] = !!init.cancelable
    this[kDefaultPrevented] = false
  }

  get cancelable() {
    return this[kCancelable]
  }

  set cancelable(nextCancelable) {
    this[kCancelable] = nextCancelable
  }

  get defaultPrevented() {
    return this[kDefaultPrevented]
  }

  set defaultPrevented(nextDefaultPrevented) {
    this[kDefaultPrevented] = nextDefaultPrevented
  }

  public preventDefault(): void {
    if (this.cancelable && !this[kDefaultPrevented]) {
      this[kDefaultPrevented] = true
    }
  }
}

interface CloseEventInit extends EventInit {
  code?: number
  reason?: string
  wasClean?: boolean
}

export class CloseEvent extends Event {
  public code: number
  public reason: string
  public wasClean: boolean

  constructor(type: string, init: CloseEventInit = {}) {
    super(type, init)
    this.code = init.code === undefined ? 0 : init.code
    this.reason = init.reason === undefined ? '' : init.reason
    this.wasClean = init.wasClean === undefined ? false : init.wasClean
  }
}

export class CancelableCloseEvent extends CloseEvent {
  [kCancelable]: boolean;
  [kDefaultPrevented]: boolean

  constructor(type: string, init: CloseEventInit = {}) {
    super(type, init)
    this[kCancelable] = !!init.cancelable
    this[kDefaultPrevented] = false
  }

  get cancelable() {
    return this[kCancelable]
  }

  set cancelable(nextCancelable) {
    this[kCancelable] = nextCancelable
  }

  get defaultPrevented() {
    return this[kDefaultPrevented]
  }

  set defaultPrevented(nextDefaultPrevented) {
    this[kDefaultPrevented] = nextDefaultPrevented
  }

  public preventDefault(): void {
    if (this.cancelable && !this[kDefaultPrevented]) {
      this[kDefaultPrevented] = true
    }
  }
}
