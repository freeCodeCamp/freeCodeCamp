const { NativeAbortSignal, NativeAbortController } = (function (self) {
  return {
    NativeAbortSignal: self.AbortSignal,
    NativeAbortController: self.AbortController,
  };
})(typeof self !== 'undefined' ? self : global);

export class AbortSignal extends NativeAbortSignal {
  constructor() {
    super();
  }

  /**
   * polyfill flag
   */
  static get __polyfill__() {
    return true;
  }

  /**
   * @see {@link https://developer.mozilla.org/zh-CN/docs/Web/API/AbortSignal/abort_static}
   *
   * @param {any} reason The reason why the operation was aborted, which can be any JavaScript value. If not specified, the reason is set to "AbortError" {@link DOMException}.
   *
   * @returns {AbortSignal} An {@link AbortSignal} instance with the {@link AbortSignal.aborted} property set to `true`, and {@link AbortSignal.reason} set to the specified or default reason value.
   */
  static abort(reason) {
    const ac = new AbortController();
    ac.abort(reason);
    return ac.signal;
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
   *
   * @param {Iterable<AbortSignal>} iterable An {@link Iterable} (such as an {@link Array}) of abort signals.
   *
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

export class AbortController extends NativeAbortController {
  constructor() {
    super();
    patchAbortSignal(this.signal);
  }

  /**
   * polyfill flag
   */
  static get __polyfill__() {
    return true;
  }

  abort(reason) {
    if (!this.signal.aborted) {
      super.abort(reason);

      if (this.signal.__polyfill__) {
        const signalReason = normalizeAbortReason(reason);
        const event = createAbortEvent(signalReason);

        this.signal._reason = signalReason;
        this.signal.dispatchEvent(event);
      }
    }
  }
}

/**
 * Make the native {@link AbortSignal} instances support the reason property and the throwIfAborted method.
 * @param {AbortSignal} signal native {@link AbortSignal} instance
 * @returns {AbortSignal} {@link AbortSignal} instance
 */
function patchAbortSignal(signal) {
  if (!('reason' in signal)) {
    signal._reason = undefined;
    signal._onabort = null;

    Object.defineProperties(signal, {
      __polyfill__: {
        value: true,
      },

      reason: {
        get() {
          return this._reason;
        }
      },

      onabort: {
        get() {
          return this._onabort;
        },
        set(callback) {
          const existing = this._onabort;
          if (existing) {
            this.removeEventListener('abort', existing);
          }
          this._onabort = callback;
          this.addEventListener('abort', callback);
        }
      }
    });

    const { dispatchEvent, addEventListener, removeEventListener } = signal;

    signal.addEventListener = function (type, callback, options) {
      if (type === 'abort' && callback && this.__polyfill__) {
        if (!callback.__polyfill__) {
          const rawCallback = callback;
          Object.defineProperty(callback, '__polyfill__', {
            value(e) {
              if (e.__polyfill__) {
                return rawCallback.call(this, e);
              }
            }
          });
        }
        callback = callback.__polyfill__;
      }
      return addEventListener.call(this, type, callback, options);
    };

    signal.removeEventListener = function (type, callback, options) {
      if (type === 'abort' && callback && this.__polyfill__ && callback.__polyfill__) {
        callback = callback.__polyfill__;
      }
      return removeEventListener.call(this, type, callback, options);
    };

    signal.dispatchEvent = function (event) {
      if (event.type === 'abort') {
        Object.defineProperty(event, '__polyfill__', {
          value: true,
        });
      }
      return dispatchEvent.call(this, event);
    };
  }

  if (!('throwIfAborted' in signal)) {
    signal.throwIfAborted = function throwIfAborted() {
      if (this.aborted) {
        throw this.reason;
      }
    };
  }

  return signal;
}

/**
 * @param {any} reason abort reason
 */
export function createAbortEvent(reason) {
  let event;
  try {
    event = new Event('abort');
  } catch (e) {
    if (typeof document !== 'undefined') {
      if (!document.createEvent) {
        // For Internet Explorer 8:
        event = document.createEventObject();
        event.type = 'abort';
      } else {
        // For Internet Explorer 11:
        event = document.createEvent('Event');
        event.initEvent('abort', false, false);
      }
    } else {
      // Fallback where document isn't available:
      event = {
        type: 'abort',
        bubbles: false,
        cancelable: false,
      };
    }
  }
  event.reason = reason;
  return event;
}

/**
 * @param {any} reason abort reason
 */
export function normalizeAbortReason(reason) {
  if (reason === undefined) {
    if (typeof document === 'undefined') {
      reason = new Error('This operation was aborted');
      reason.name = 'AbortError';
    } else {
      try {
        reason = new DOMException('signal is aborted without reason');
        // The DOMException does not support setting the name property directly.
        Object.defineProperty(reason, 'name', {
          value: 'AbortError'
        });
      } catch (err) {
        // IE 11 does not support calling the DOMException constructor, use a
        // regular error object on it instead.
        reason = new Error('This operation was aborted');
        reason.name = 'AbortError';
      }
    }
  }
  return reason;
}
