'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var n = 0,
        F = function () {};
      return {
        s: F,
        n: function () {
          return n >= r.length ? {
            done: !0
          } : {
            done: !1,
            value: r[n++]
          };
        },
        e: function (r) {
          throw r;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o,
    a = !0,
    u = !1;
  return {
    s: function () {
      t = t.call(r);
    },
    n: function () {
      var r = t.next();
      return a = r.done, r;
    },
    e: function (r) {
      u = !0, o = r;
    },
    f: function () {
      try {
        a || null == t.return || t.return();
      } finally {
        if (u) throw o;
      }
    }
  };
}
function _get() {
  return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) {
    var p = _superPropBase(e, t);
    if (p) {
      var n = Object.getOwnPropertyDescriptor(p, t);
      return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
    }
  }, _get.apply(null, arguments);
}
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && _setPrototypeOf(t, e);
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function () {
    return !!t;
  })();
}
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == typeof e || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}
function _superPropBase(t, o) {
  for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t)););
  return t;
}
function _superPropGet(t, o, e, r) {
  var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e);
  return 2 & r && "function" == typeof p ? function (t) {
    return p.apply(e, t);
  } : p;
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

(function (self) {
    return {
      NativeAbortSignal: self.AbortSignal,
      NativeAbortController: self.AbortController
    };
  })(typeof self !== 'undefined' ? self : global);

/**
 * @param {any} reason abort reason
 */
function createAbortEvent(reason) {
  var event;
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
        cancelable: false
      };
    }
  }
  event.reason = reason;
  return event;
}

/**
 * @param {any} reason abort reason
 */
function normalizeAbortReason(reason) {
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

var Emitter = /*#__PURE__*/function () {
  function Emitter() {
    _classCallCheck(this, Emitter);
    Object.defineProperty(this, 'listeners', {
      value: {},
      writable: true,
      configurable: true
    });
  }
  return _createClass(Emitter, [{
    key: "addEventListener",
    value: function addEventListener(type, callback, options) {
      if (!(type in this.listeners)) {
        this.listeners[type] = [];
      }
      this.listeners[type].push({
        callback: callback,
        options: options
      });
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(type, callback) {
      if (!(type in this.listeners)) {
        return;
      }
      var stack = this.listeners[type];
      for (var i = 0, l = stack.length; i < l; i++) {
        if (stack[i].callback === callback) {
          stack.splice(i, 1);
          return;
        }
      }
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(event) {
      var _this = this;
      if (!(event.type in this.listeners)) {
        return;
      }
      var stack = this.listeners[event.type];
      var stackToCall = stack.slice();
      var _loop = function _loop() {
        var listener = stackToCall[i];
        try {
          listener.callback.call(_this, event);
        } catch (e) {
          Promise.resolve().then(function () {
            throw e;
          });
        }
        if (listener.options && listener.options.once) {
          _this.removeEventListener(event.type, listener.callback);
        }
      };
      for (var i = 0, l = stackToCall.length; i < l; i++) {
        _loop();
      }
      return !event.defaultPrevented;
    }
  }]);
}();
var AbortSignal = /*#__PURE__*/function (_Emitter) {
  function AbortSignal() {
    var _this2;
    _classCallCheck(this, AbortSignal);
    _this2 = _callSuper(this, AbortSignal);
    // Some versions of babel does not transpile super() correctly for IE <= 10, if the parent
    // constructor has failed to run, then "this.listeners" will still be undefined and then we call
    // the parent constructor directly instead as a workaround. For general details, see babel bug:
    // https://github.com/babel/babel/issues/3041
    // This hack was added as a fix for the issue described here:
    // https://github.com/Financial-Times/polyfill-library/pull/59#issuecomment-477558042
    if (!_this2.listeners) {
      Emitter.call(_this2);
    }

    // Compared to assignment, Object.defineProperty makes properties non-enumerable by default and
    // we want Object.keys(new AbortController().signal) to be [] for compat with the native impl
    Object.defineProperty(_this2, 'aborted', {
      value: false,
      writable: true,
      configurable: true
    });
    Object.defineProperty(_this2, 'onabort', {
      value: null,
      writable: true,
      configurable: true
    });
    Object.defineProperty(_this2, 'reason', {
      value: undefined,
      writable: true,
      configurable: true
    });
    return _this2;
  }
  _inherits(AbortSignal, _Emitter);
  return _createClass(AbortSignal, [{
    key: "toString",
    value: function toString() {
      return '[object AbortSignal]';
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(event) {
      if (event.type === 'abort') {
        this.aborted = true;
        if (typeof this.onabort === 'function') {
          this.onabort.call(this, event);
        }
      }
      _superPropGet(AbortSignal, "dispatchEvent", this, 3)([event]);
    }

    /**
     * @see {@link https://developer.mozilla.org/zh-CN/docs/Web/API/AbortSignal/throwIfAborted}
     */
  }, {
    key: "throwIfAborted",
    value: function throwIfAborted() {
      var aborted = this.aborted,
        _this$reason = this.reason,
        reason = _this$reason === void 0 ? 'Aborted' : _this$reason;
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
  }], [{
    key: "timeout",
    value: function timeout(time) {
      var controller = new AbortController();
      setTimeout(function () {
        return controller.abort(new DOMException("This signal is timeout in ".concat(time, "ms"), 'TimeoutError'));
      }, time);
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
  }, {
    key: "any",
    value: function any(iterable) {
      var controller = new AbortController();
      /**
       * @this AbortSignal
       */
      function abort() {
        controller.abort(this.reason);
        clean();
      }
      function clean() {
        var _iterator = _createForOfIteratorHelper(iterable),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var signal = _step.value;
            signal.removeEventListener('abort', abort);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      var _iterator2 = _createForOfIteratorHelper(iterable),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var signal = _step2.value;
          if (signal.aborted) {
            controller.abort(signal.reason);
            break;
          } else signal.addEventListener('abort', abort);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return controller.signal;
    }
  }]);
}(Emitter);
var AbortController = /*#__PURE__*/function () {
  function AbortController() {
    _classCallCheck(this, AbortController);
    // Compared to assignment, Object.defineProperty makes properties non-enumerable by default and
    // we want Object.keys(new AbortController()) to be [] for compat with the native impl
    Object.defineProperty(this, 'signal', {
      value: new AbortSignal(),
      writable: true,
      configurable: true
    });
  }
  return _createClass(AbortController, [{
    key: "abort",
    value: function abort(reason) {
      var signalReason = normalizeAbortReason(reason);
      var event = createAbortEvent(signalReason);
      this.signal.reason = signalReason;
      this.signal.dispatchEvent(event);
    }
  }, {
    key: "toString",
    value: function toString() {
      return '[object AbortController]';
    }
  }]);
}();
if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
  // These are necessary to make sure that we get correct output for:
  // Object.prototype.toString.call(new AbortController())
  AbortController.prototype[Symbol.toStringTag] = 'AbortController';
  AbortSignal.prototype[Symbol.toStringTag] = 'AbortSignal';
}

function polyfillNeeded(self) {
  if (self.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL) {
    console.log('__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill');
    return true;
  }

  // Note that the "unfetch" minimal fetch polyfill defines fetch() without
  // defining window.Request, and this polyfill need to work on top of unfetch
  // so the below feature detection needs the !self.AbortController part.
  // The Request.prototype check is also needed because Safari versions 11.1.2
  // up to and including 12.1.x has a window.AbortController present but still
  // does NOT correctly implement abortable fetch:
  // https://bugs.webkit.org/show_bug.cgi?id=174980#c2
  return typeof self.Request === 'function' && !self.Request.prototype.hasOwnProperty('signal') || !self.AbortController;
}

/**
 * Note: the "fetch.Request" default value is available for fetch imported from
 * the "node-fetch" package and not in browsers. This is OK since browsers
 * will be importing umd-polyfill.js from that path "self" is passed the
 * decorator so the default value will not be used (because browsers that define
 * fetch also has Request). One quirky setup where self.fetch exists but
 * self.Request does not is when the "unfetch" minimal fetch polyfill is used
 * on top of IE11; for this case the browser will try to use the fetch.Request
 * default value which in turn will be undefined but then then "if (Request)"
 * will ensure that you get a patched fetch but still no Request (as expected).
 * @param {fetch, Request = fetch.Request}
 * @returns {fetch: abortableFetch, Request: AbortableRequest}
 */
function abortableFetchDecorator(patchTargets) {
  if ('function' === typeof patchTargets) {
    patchTargets = {
      fetch: patchTargets
    };
  }
  var _patchTargets = patchTargets,
    fetch = _patchTargets.fetch,
    _patchTargets$Request = _patchTargets.Request,
    NativeRequest = _patchTargets$Request === void 0 ? fetch.Request : _patchTargets$Request,
    NativeAbortController = _patchTargets.AbortController,
    _patchTargets$__FORCE = _patchTargets.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL,
    __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL = _patchTargets$__FORCE === void 0 ? false : _patchTargets$__FORCE;
  if (!polyfillNeeded({
    fetch: fetch,
    Request: NativeRequest,
    AbortController: NativeAbortController,
    __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL: __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL
  })) {
    return {
      fetch: fetch,
      Request: Request
    };
  }
  var Request = NativeRequest;
  // Note that the "unfetch" minimal fetch polyfill defines fetch() without
  // defining window.Request, and this polyfill need to work on top of unfetch
  // hence we only patch it if it's available. Also we don't patch it if signal
  // is already available on the Request prototype because in this case support
  // is present and the patching below can cause a crash since it assigns to
  // request.signal which is technically a read-only property. This latter error
  // happens when you run the main5.js node-fetch example in the repo
  // "abortcontroller-polyfill-examples". The exact error is:
  //   request.signal = init.signal;
  //   ^
  // TypeError: Cannot set property signal of #<Request> which has only a getter
  if (Request && !Request.prototype.hasOwnProperty('signal') || __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL) {
    Request = function Request(input, init) {
      var signal;
      if (init && init.signal) {
        signal = init.signal;
        // Never pass init.signal to the native Request implementation when the polyfill has
        // been installed because if we're running on top of a browser with a
        // working native AbortController (i.e. the polyfill was installed due to
        // __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL being set), then passing our
        // fake AbortSignal to the native fetch will trigger:
        // TypeError: Failed to construct 'Request': member signal is not of type AbortSignal.
        delete init.signal;
      }
      var request = new NativeRequest(input, init);
      if (signal) {
        Object.defineProperty(request, 'signal', {
          writable: false,
          enumerable: false,
          configurable: true,
          value: signal
        });
      }
      return request;
    };
    Request.prototype = NativeRequest.prototype;
  }
  var realFetch = fetch;
  var abortableFetch = function abortableFetch(input, init) {
    var signal = Request && Request.prototype.isPrototypeOf(input) ? input.signal : init ? init.signal : undefined;
    if (signal) {
      var abortError;
      try {
        abortError = new DOMException('Aborted', 'AbortError');
      } catch (err) {
        // IE 11 does not support calling the DOMException constructor, use a
        // regular error object on it instead.
        abortError = new Error('Aborted');
        abortError.name = 'AbortError';
      }

      // Return early if already aborted, thus avoiding making an HTTP request
      if (signal.aborted) {
        return Promise.reject(abortError);
      }

      // Turn an event into a promise, reject it once `abort` is dispatched
      var cancellation = new Promise(function (_, reject) {
        signal.addEventListener('abort', function () {
          return reject(abortError);
        }, {
          once: true
        });
      });
      if (init && init.signal) {
        // Never pass .signal to the native implementation when the polyfill has
        // been installed because if we're running on top of a browser with a
        // working native AbortController (i.e. the polyfill was installed due to
        // __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL being set), then passing our
        // fake AbortSignal to the native fetch will trigger:
        // TypeError: Failed to execute 'fetch' on 'Window': member signal is not of type AbortSignal.
        delete init.signal;
      }
      // Return the fastest promise (don't need to wait for request to finish)
      return Promise.race([cancellation, realFetch(input, init)]);
    }
    return realFetch(input, init);
  };
  return {
    fetch: abortableFetch,
    Request: Request
  };
}

exports.AbortController = AbortController;
exports.AbortSignal = AbortSignal;
exports.abortableFetch = abortableFetchDecorator;
