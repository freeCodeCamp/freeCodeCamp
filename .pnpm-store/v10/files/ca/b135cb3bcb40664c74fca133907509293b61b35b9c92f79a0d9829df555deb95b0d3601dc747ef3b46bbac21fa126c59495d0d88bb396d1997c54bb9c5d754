import { createAbortEvent, normalizeAbortReason } from './abortsignal-ponyfill';

class Emitter {
  constructor() {
    Object.defineProperty(this, 'listeners', { value: {}, writable: true, configurable: true });
  }
  addEventListener(type, callback, options) {
    if (!(type in this.listeners)) {
      this.listeners[type] = [];
    }
    this.listeners[type].push({ callback, options });
  }
  removeEventListener(type, callback) {
    if (!(type in this.listeners)) {
      return;
    }
    const stack = this.listeners[type];
    for (let i = 0, l = stack.length; i < l; i++) {
      if (stack[i].callback === callback) {
        stack.splice(i, 1);
        return;
      }
    }
  }
  dispatchEvent(event) {
    if (!(event.type in this.listeners)) {
      return;
    }
    const stack = this.listeners[event.type];
    const stackToCall = stack.slice();
    for (let i = 0, l = stackToCall.length; i < l; i++) {
      const listener = stackToCall[i];
      try {
        listener.callback.call(this, event);
      } catch (e) {
        Promise.resolve().then(() => {
          throw e;
        });
      }
      if (listener.options && listener.options.once) {
        this.removeEventListener(event.type, listener.callback);
      }
    }
    return !event.defaultPrevented;
  }
}

export class AbortSignal extends Emitter {
  constructor() {
    super();
    // Some versions of babel does not transpile super() correctly for IE <= 10, if the parent
    // constructor has failed to run, then "this.listeners" will still be undefined and then we call
    // the parent constructor directly instead as a workaround. For general details, see babel bug:
    // https://github.com/babel/babel/issues/3041
    // This hack was added as a fix for the issue described here:
    // https://github.com/Financial-Times/polyfill-library/pull/59#issuecomment-477558042
    if (!this.listeners) {
      Emitter.call(this);
    }

    // Compared to assignment, Object.defineProperty makes properties non-enumerable by default and
    // we want Object.keys(new AbortController().signal) to be [] for compat with the native impl
    Object.defineProperty(this, 'aborted', { value: false, writable: true, configurable: true });
    Object.defineProperty(this, 'onabort', { value: null, writable: true, configurable: true });
    Object.defineProperty(this, 'reason', { value: undefined, writable: true, configurable: true });
  }
  toString() {
    return '[object AbortSignal]';
  }
  dispatchEvent(event) {
    if (event.type === 'abort') {
      this.aborted = true;
      if (typeof this.onabort === 'function') {
        this.onabort.call(this, event);
      }
    }

    super.dispatchEvent(event);
  }

  /**
   * @see {@link https://developer.mozilla.org/zh-CN/docs/Web/API/AbortSignal/throwIfAborted}
   */
  throwIfAborted() {
    const { aborted, reason = 'Aborted' } = this;

    if (!aborted) return;

    throw reason;
  }

  /**
   * @see {@link https://developer.mozilla.org/zh-CN/docs/Web/API/AbortSignal/timeout_static}
   * @param {number} time The "active" time in milliseconds before the returned {@link AbortSignal} will abort.
   *                      The value must be within range of 0 and {@link Number.MAX_SAFE_INTEGER}.
   * @returns {AbortSignal} The signal will abort with its {@link AbortSignal.reason} property set to a `TimeoutError` {@link DOMException} on timeout,
   *                        or an `AbortError` {@link DOMException} if the operation was user-triggered.
   */
  static timeout(time) {
    const controller = new AbortController();

    setTimeout(() => controller.abort(new DOMException(`This signal is timeout in ${time}ms`, 'TimeoutError')), time);

    return controller.signal;
  }

  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/any_static}
   * @param {Iterable<AbortSignal>} iterable An {@link Iterable} (such as an {@link Array}) of abort signals.
   * @returns {AbortSignal} - **Already aborted**, if any of the abort signals given is already aborted.
   *                          The returned {@link AbortSignal}'s reason will be already set to the `reason` of the first abort signal that was already aborted.
   *                        - **Asynchronously aborted**, when any abort signal in `iterable` aborts.
   *                          The `reason` will be set to the reason of the first abort signal that is aborted.
   */
  static any(iterable) {
    const controller = new AbortController();
    /**
     * @this AbortSignal
     */
    function abort() {
      controller.abort(this.reason);
      clean();
    }
    function clean() {
      for (const signal of iterable) signal.removeEventListener('abort', abort);
    }
    for (const signal of iterable)
      if (signal.aborted) {
        controller.abort(signal.reason);
        break;
      } else signal.addEventListener('abort', abort);

    return controller.signal;
  }
}

export class AbortController {
  constructor() {
    // Compared to assignment, Object.defineProperty makes properties non-enumerable by default and
    // we want Object.keys(new AbortController()) to be [] for compat with the native impl
    Object.defineProperty(this, 'signal', { value: new AbortSignal(), writable: true, configurable: true });
  }
  abort(reason) {
    const signalReason = normalizeAbortReason(reason);
    const event = createAbortEvent(signalReason);

    this.signal.reason = signalReason;
    this.signal.dispatchEvent(event);
  }
  toString() {
    return '[object AbortController]';
  }
}

export default AbortController;

if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
  // These are necessary to make sure that we get correct output for:
  // Object.prototype.toString.call(new AbortController())
  AbortController.prototype[Symbol.toStringTag] = 'AbortController';
  AbortSignal.prototype[Symbol.toStringTag] = 'AbortSignal';
}
