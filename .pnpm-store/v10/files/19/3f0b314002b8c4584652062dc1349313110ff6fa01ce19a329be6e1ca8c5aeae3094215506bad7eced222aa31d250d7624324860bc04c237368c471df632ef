/*! Axios v1.9.0 Copyright (c) 2025 Matt Zabriskie and contributors */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.axios = factory());
})(this, (function () { 'use strict';

  function _AsyncGenerator(e) {
    var r, t;
    function resume(r, t) {
      try {
        var n = e[r](t),
          o = n.value,
          u = o instanceof _OverloadYield;
        Promise.resolve(u ? o.v : o).then(function (t) {
          if (u) {
            var i = "return" === r ? "return" : "next";
            if (!o.k || t.done) return resume(i, t);
            t = e[i](t).value;
          }
          settle(n.done ? "return" : "normal", t);
        }, function (e) {
          resume("throw", e);
        });
      } catch (e) {
        settle("throw", e);
      }
    }
    function settle(e, n) {
      switch (e) {
        case "return":
          r.resolve({
            value: n,
            done: !0
          });
          break;
        case "throw":
          r.reject(n);
          break;
        default:
          r.resolve({
            value: n,
            done: !1
          });
      }
      (r = r.next) ? resume(r.key, r.arg) : t = null;
    }
    this._invoke = function (e, n) {
      return new Promise(function (o, u) {
        var i = {
          key: e,
          arg: n,
          resolve: o,
          reject: u,
          next: null
        };
        t ? t = t.next = i : (r = t = i, resume(e, n));
      });
    }, "function" != typeof e.return && (this.return = void 0);
  }
  _AsyncGenerator.prototype["function" == typeof Symbol && Symbol.asyncIterator || "@@asyncIterator"] = function () {
    return this;
  }, _AsyncGenerator.prototype.next = function (e) {
    return this._invoke("next", e);
  }, _AsyncGenerator.prototype.throw = function (e) {
    return this._invoke("throw", e);
  }, _AsyncGenerator.prototype.return = function (e) {
    return this._invoke("return", e);
  };
  function _OverloadYield(t, e) {
    this.v = t, this.k = e;
  }
  function _asyncGeneratorDelegate(t) {
    var e = {},
      n = !1;
    function pump(e, r) {
      return n = !0, r = new Promise(function (n) {
        n(t[e](r));
      }), {
        done: !1,
        value: new _OverloadYield(r, 1)
      };
    }
    return e["undefined" != typeof Symbol && Symbol.iterator || "@@iterator"] = function () {
      return this;
    }, e.next = function (t) {
      return n ? (n = !1, t) : pump("next", t);
    }, "function" == typeof t.throw && (e.throw = function (t) {
      if (n) throw n = !1, t;
      return pump("throw", t);
    }), "function" == typeof t.return && (e.return = function (t) {
      return n ? (n = !1, t) : pump("return", t);
    }), e;
  }
  function _asyncIterator(r) {
    var n,
      t,
      o,
      e = 2;
    for ("undefined" != typeof Symbol && (t = Symbol.asyncIterator, o = Symbol.iterator); e--;) {
      if (t && null != (n = r[t])) return n.call(r);
      if (o && null != (n = r[o])) return new AsyncFromSyncIterator(n.call(r));
      t = "@@asyncIterator", o = "@@iterator";
    }
    throw new TypeError("Object is not async iterable");
  }
  function AsyncFromSyncIterator(r) {
    function AsyncFromSyncIteratorContinuation(r) {
      if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object."));
      var n = r.done;
      return Promise.resolve(r.value).then(function (r) {
        return {
          value: r,
          done: n
        };
      });
    }
    return AsyncFromSyncIterator = function (r) {
      this.s = r, this.n = r.next;
    }, AsyncFromSyncIterator.prototype = {
      s: null,
      n: null,
      next: function () {
        return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments));
      },
      return: function (r) {
        var n = this.s.return;
        return void 0 === n ? Promise.resolve({
          value: r,
          done: !0
        }) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments));
      },
      throw: function (r) {
        var n = this.s.return;
        return void 0 === n ? Promise.reject(r) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments));
      }
    }, new AsyncFromSyncIterator(r);
  }
  function _awaitAsyncGenerator(e) {
    return new _OverloadYield(e, 0);
  }
  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = !0,
        o = !1;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t) return;
          f = !1;
        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = !0, n = r;
      } finally {
        try {
          if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
        _defineProperty(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _regeneratorRuntime() {
    _regeneratorRuntime = function () {
      return e;
    };
    var t,
      e = {},
      r = Object.prototype,
      n = r.hasOwnProperty,
      o = Object.defineProperty || function (t, e, r) {
        t[e] = r.value;
      },
      i = "function" == typeof Symbol ? Symbol : {},
      a = i.iterator || "@@iterator",
      c = i.asyncIterator || "@@asyncIterator",
      u = i.toStringTag || "@@toStringTag";
    function define(t, e, r) {
      return Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), t[e];
    }
    try {
      define({}, "");
    } catch (t) {
      define = function (t, e, r) {
        return t[e] = r;
      };
    }
    function wrap(t, e, r, n) {
      var i = e && e.prototype instanceof Generator ? e : Generator,
        a = Object.create(i.prototype),
        c = new Context(n || []);
      return o(a, "_invoke", {
        value: makeInvokeMethod(t, r, c)
      }), a;
    }
    function tryCatch(t, e, r) {
      try {
        return {
          type: "normal",
          arg: t.call(e, r)
        };
      } catch (t) {
        return {
          type: "throw",
          arg: t
        };
      }
    }
    e.wrap = wrap;
    var h = "suspendedStart",
      l = "suspendedYield",
      f = "executing",
      s = "completed",
      y = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var p = {};
    define(p, a, function () {
      return this;
    });
    var d = Object.getPrototypeOf,
      v = d && d(d(values([])));
    v && v !== r && n.call(v, a) && (p = v);
    var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
    function defineIteratorMethods(t) {
      ["next", "throw", "return"].forEach(function (e) {
        define(t, e, function (t) {
          return this._invoke(e, t);
        });
      });
    }
    function AsyncIterator(t, e) {
      function invoke(r, o, i, a) {
        var c = tryCatch(t[r], t, o);
        if ("throw" !== c.type) {
          var u = c.arg,
            h = u.value;
          return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
            invoke("next", t, i, a);
          }, function (t) {
            invoke("throw", t, i, a);
          }) : e.resolve(h).then(function (t) {
            u.value = t, i(u);
          }, function (t) {
            return invoke("throw", t, i, a);
          });
        }
        a(c.arg);
      }
      var r;
      o(this, "_invoke", {
        value: function (t, n) {
          function callInvokeWithMethodAndArg() {
            return new e(function (e, r) {
              invoke(t, n, e, r);
            });
          }
          return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(e, r, n) {
      var o = h;
      return function (i, a) {
        if (o === f) throw new Error("Generator is already running");
        if (o === s) {
          if ("throw" === i) throw a;
          return {
            value: t,
            done: !0
          };
        }
        for (n.method = i, n.arg = a;;) {
          var c = n.delegate;
          if (c) {
            var u = maybeInvokeDelegate(c, n);
            if (u) {
              if (u === y) continue;
              return u;
            }
          }
          if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
            if (o === h) throw o = s, n.arg;
            n.dispatchException(n.arg);
          } else "return" === n.method && n.abrupt("return", n.arg);
          o = f;
          var p = tryCatch(e, r, n);
          if ("normal" === p.type) {
            if (o = n.done ? s : l, p.arg === y) continue;
            return {
              value: p.arg,
              done: n.done
            };
          }
          "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
        }
      };
    }
    function maybeInvokeDelegate(e, r) {
      var n = r.method,
        o = e.iterator[n];
      if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
      var i = tryCatch(o, e.iterator, r.arg);
      if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
      var a = i.arg;
      return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
    }
    function pushTryEntry(t) {
      var e = {
        tryLoc: t[0]
      };
      1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
    }
    function resetTryEntry(t) {
      var e = t.completion || {};
      e.type = "normal", delete e.arg, t.completion = e;
    }
    function Context(t) {
      this.tryEntries = [{
        tryLoc: "root"
      }], t.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(e) {
      if (e || "" === e) {
        var r = e[a];
        if (r) return r.call(e);
        if ("function" == typeof e.next) return e;
        if (!isNaN(e.length)) {
          var o = -1,
            i = function next() {
              for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
              return next.value = t, next.done = !0, next;
            };
          return i.next = i;
        }
      }
      throw new TypeError(typeof e + " is not iterable");
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: !0
    }), o(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
      var e = "function" == typeof t && t.constructor;
      return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
    }, e.mark = function (t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
    }, e.awrap = function (t) {
      return {
        __await: t
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
      return this;
    }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
      void 0 === i && (i = Promise);
      var a = new AsyncIterator(wrap(t, r, n, o), i);
      return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
        return t.done ? t.value : a.next();
      });
    }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
      return this;
    }), define(g, "toString", function () {
      return "[object Generator]";
    }), e.keys = function (t) {
      var e = Object(t),
        r = [];
      for (var n in e) r.push(n);
      return r.reverse(), function next() {
        for (; r.length;) {
          var t = r.pop();
          if (t in e) return next.value = t, next.done = !1, next;
        }
        return next.done = !0, next;
      };
    }, e.values = values, Context.prototype = {
      constructor: Context,
      reset: function (e) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
      },
      stop: function () {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ("throw" === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function (e) {
        if (this.done) throw e;
        var r = this;
        function handle(n, o) {
          return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
        }
        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
          var i = this.tryEntries[o],
            a = i.completion;
          if ("root" === i.tryLoc) return handle("end");
          if (i.tryLoc <= this.prev) {
            var c = n.call(i, "catchLoc"),
              u = n.call(i, "finallyLoc");
            if (c && u) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            } else if (c) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            } else {
              if (!u) throw new Error("try statement without catch or finally");
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            }
          }
        }
      },
      abrupt: function (t, e) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var o = this.tryEntries[r];
          if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
            var i = o;
            break;
          }
        }
        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
        var a = i ? i.completion : {};
        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
      },
      complete: function (t, e) {
        if ("throw" === t.type) throw t.arg;
        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
      },
      finish: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
        }
      },
      catch: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.tryLoc === t) {
            var n = r.completion;
            if ("throw" === n.type) {
              var o = n.arg;
              resetTryEntry(r);
            }
            return o;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function (e, r, n) {
        return this.delegate = {
          iterator: values(e),
          resultName: r,
          nextLoc: n
        }, "next" === this.method && (this.arg = t), y;
      }
    }, e;
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
    return "symbol" == typeof i ? i : String(i);
  }
  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  function _wrapAsyncGenerator(fn) {
    return function () {
      return new _AsyncGenerator(fn.apply(this, arguments));
    };
  }
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
        args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _toArray(arr) {
    return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;
        var F = function () {};
        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true,
      didErr = false,
      err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  function bind(fn, thisArg) {
    return function wrap() {
      return fn.apply(thisArg, arguments);
    };
  }

  // utils is a library of generic helper functions non-specific to axios

  var toString = Object.prototype.toString;
  var getPrototypeOf = Object.getPrototypeOf;
  var iterator = Symbol.iterator,
    toStringTag = Symbol.toStringTag;
  var kindOf = function (cache) {
    return function (thing) {
      var str = toString.call(thing);
      return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
    };
  }(Object.create(null));
  var kindOfTest = function kindOfTest(type) {
    type = type.toLowerCase();
    return function (thing) {
      return kindOf(thing) === type;
    };
  };
  var typeOfTest = function typeOfTest(type) {
    return function (thing) {
      return _typeof(thing) === type;
    };
  };

  /**
   * Determine if a value is an Array
   *
   * @param {Object} val The value to test
   *
   * @returns {boolean} True if value is an Array, otherwise false
   */
  var isArray = Array.isArray;

  /**
   * Determine if a value is undefined
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if the value is undefined, otherwise false
   */
  var isUndefined = typeOfTest('undefined');

  /**
   * Determine if a value is a Buffer
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a Buffer, otherwise false
   */
  function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
  }

  /**
   * Determine if a value is an ArrayBuffer
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is an ArrayBuffer, otherwise false
   */
  var isArrayBuffer = kindOfTest('ArrayBuffer');

  /**
   * Determine if a value is a view on an ArrayBuffer
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
   */
  function isArrayBufferView(val) {
    var result;
    if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
      result = ArrayBuffer.isView(val);
    } else {
      result = val && val.buffer && isArrayBuffer(val.buffer);
    }
    return result;
  }

  /**
   * Determine if a value is a String
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a String, otherwise false
   */
  var isString = typeOfTest('string');

  /**
   * Determine if a value is a Function
   *
   * @param {*} val The value to test
   * @returns {boolean} True if value is a Function, otherwise false
   */
  var isFunction = typeOfTest('function');

  /**
   * Determine if a value is a Number
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a Number, otherwise false
   */
  var isNumber = typeOfTest('number');

  /**
   * Determine if a value is an Object
   *
   * @param {*} thing The value to test
   *
   * @returns {boolean} True if value is an Object, otherwise false
   */
  var isObject = function isObject(thing) {
    return thing !== null && _typeof(thing) === 'object';
  };

  /**
   * Determine if a value is a Boolean
   *
   * @param {*} thing The value to test
   * @returns {boolean} True if value is a Boolean, otherwise false
   */
  var isBoolean = function isBoolean(thing) {
    return thing === true || thing === false;
  };

  /**
   * Determine if a value is a plain Object
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a plain Object, otherwise false
   */
  var isPlainObject = function isPlainObject(val) {
    if (kindOf(val) !== 'object') {
      return false;
    }
    var prototype = getPrototypeOf(val);
    return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(toStringTag in val) && !(iterator in val);
  };

  /**
   * Determine if a value is a Date
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a Date, otherwise false
   */
  var isDate = kindOfTest('Date');

  /**
   * Determine if a value is a File
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a File, otherwise false
   */
  var isFile = kindOfTest('File');

  /**
   * Determine if a value is a Blob
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a Blob, otherwise false
   */
  var isBlob = kindOfTest('Blob');

  /**
   * Determine if a value is a FileList
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a File, otherwise false
   */
  var isFileList = kindOfTest('FileList');

  /**
   * Determine if a value is a Stream
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a Stream, otherwise false
   */
  var isStream = function isStream(val) {
    return isObject(val) && isFunction(val.pipe);
  };

  /**
   * Determine if a value is a FormData
   *
   * @param {*} thing The value to test
   *
   * @returns {boolean} True if value is an FormData, otherwise false
   */
  var isFormData = function isFormData(thing) {
    var kind;
    return thing && (typeof FormData === 'function' && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === 'formdata' ||
    // detect form-data instance
    kind === 'object' && isFunction(thing.toString) && thing.toString() === '[object FormData]'));
  };

  /**
   * Determine if a value is a URLSearchParams object
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a URLSearchParams object, otherwise false
   */
  var isURLSearchParams = kindOfTest('URLSearchParams');
  var _map = ['ReadableStream', 'Request', 'Response', 'Headers'].map(kindOfTest),
    _map2 = _slicedToArray(_map, 4),
    isReadableStream = _map2[0],
    isRequest = _map2[1],
    isResponse = _map2[2],
    isHeaders = _map2[3];

  /**
   * Trim excess whitespace off the beginning and end of a string
   *
   * @param {String} str The String to trim
   *
   * @returns {String} The String freed of excess whitespace
   */
  var trim = function trim(str) {
    return str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  };

  /**
   * Iterate over an Array or an Object invoking a function for each item.
   *
   * If `obj` is an Array callback will be called passing
   * the value, index, and complete array for each item.
   *
   * If 'obj' is an Object callback will be called passing
   * the value, key, and complete object for each property.
   *
   * @param {Object|Array} obj The object to iterate
   * @param {Function} fn The callback to invoke for each item
   *
   * @param {Boolean} [allOwnKeys = false]
   * @returns {any}
   */
  function forEach(obj, fn) {
    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$allOwnKeys = _ref.allOwnKeys,
      allOwnKeys = _ref$allOwnKeys === void 0 ? false : _ref$allOwnKeys;
    // Don't bother if no value provided
    if (obj === null || typeof obj === 'undefined') {
      return;
    }
    var i;
    var l;

    // Force an array if not already something iterable
    if (_typeof(obj) !== 'object') {
      /*eslint no-param-reassign:0*/
      obj = [obj];
    }
    if (isArray(obj)) {
      // Iterate over array values
      for (i = 0, l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj);
      }
    } else {
      // Iterate over object keys
      var keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
      var len = keys.length;
      var key;
      for (i = 0; i < len; i++) {
        key = keys[i];
        fn.call(null, obj[key], key, obj);
      }
    }
  }
  function findKey(obj, key) {
    key = key.toLowerCase();
    var keys = Object.keys(obj);
    var i = keys.length;
    var _key;
    while (i-- > 0) {
      _key = keys[i];
      if (key === _key.toLowerCase()) {
        return _key;
      }
    }
    return null;
  }
  var _global = function () {
    /*eslint no-undef:0*/
    if (typeof globalThis !== "undefined") return globalThis;
    return typeof self !== "undefined" ? self : typeof window !== 'undefined' ? window : global;
  }();
  var isContextDefined = function isContextDefined(context) {
    return !isUndefined(context) && context !== _global;
  };

  /**
   * Accepts varargs expecting each argument to be an object, then
   * immutably merges the properties of each object and returns result.
   *
   * When multiple objects contain the same key the later object in
   * the arguments list will take precedence.
   *
   * Example:
   *
   * ```js
   * var result = merge({foo: 123}, {foo: 456});
   * console.log(result.foo); // outputs 456
   * ```
   *
   * @param {Object} obj1 Object to merge
   *
   * @returns {Object} Result of all merge properties
   */
  function merge( /* obj1, obj2, obj3, ... */
  ) {
    var _ref2 = isContextDefined(this) && this || {},
      caseless = _ref2.caseless;
    var result = {};
    var assignValue = function assignValue(val, key) {
      var targetKey = caseless && findKey(result, key) || key;
      if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
        result[targetKey] = merge(result[targetKey], val);
      } else if (isPlainObject(val)) {
        result[targetKey] = merge({}, val);
      } else if (isArray(val)) {
        result[targetKey] = val.slice();
      } else {
        result[targetKey] = val;
      }
    };
    for (var i = 0, l = arguments.length; i < l; i++) {
      arguments[i] && forEach(arguments[i], assignValue);
    }
    return result;
  }

  /**
   * Extends object a by mutably adding to it the properties of object b.
   *
   * @param {Object} a The object to be extended
   * @param {Object} b The object to copy properties from
   * @param {Object} thisArg The object to bind function to
   *
   * @param {Boolean} [allOwnKeys]
   * @returns {Object} The resulting value of object a
   */
  var extend = function extend(a, b, thisArg) {
    var _ref3 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
      allOwnKeys = _ref3.allOwnKeys;
    forEach(b, function (val, key) {
      if (thisArg && isFunction(val)) {
        a[key] = bind(val, thisArg);
      } else {
        a[key] = val;
      }
    }, {
      allOwnKeys: allOwnKeys
    });
    return a;
  };

  /**
   * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
   *
   * @param {string} content with BOM
   *
   * @returns {string} content value without BOM
   */
  var stripBOM = function stripBOM(content) {
    if (content.charCodeAt(0) === 0xFEFF) {
      content = content.slice(1);
    }
    return content;
  };

  /**
   * Inherit the prototype methods from one constructor into another
   * @param {function} constructor
   * @param {function} superConstructor
   * @param {object} [props]
   * @param {object} [descriptors]
   *
   * @returns {void}
   */
  var inherits = function inherits(constructor, superConstructor, props, descriptors) {
    constructor.prototype = Object.create(superConstructor.prototype, descriptors);
    constructor.prototype.constructor = constructor;
    Object.defineProperty(constructor, 'super', {
      value: superConstructor.prototype
    });
    props && Object.assign(constructor.prototype, props);
  };

  /**
   * Resolve object with deep prototype chain to a flat object
   * @param {Object} sourceObj source object
   * @param {Object} [destObj]
   * @param {Function|Boolean} [filter]
   * @param {Function} [propFilter]
   *
   * @returns {Object}
   */
  var toFlatObject = function toFlatObject(sourceObj, destObj, filter, propFilter) {
    var props;
    var i;
    var prop;
    var merged = {};
    destObj = destObj || {};
    // eslint-disable-next-line no-eq-null,eqeqeq
    if (sourceObj == null) return destObj;
    do {
      props = Object.getOwnPropertyNames(sourceObj);
      i = props.length;
      while (i-- > 0) {
        prop = props[i];
        if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
          destObj[prop] = sourceObj[prop];
          merged[prop] = true;
        }
      }
      sourceObj = filter !== false && getPrototypeOf(sourceObj);
    } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
    return destObj;
  };

  /**
   * Determines whether a string ends with the characters of a specified string
   *
   * @param {String} str
   * @param {String} searchString
   * @param {Number} [position= 0]
   *
   * @returns {boolean}
   */
  var endsWith = function endsWith(str, searchString, position) {
    str = String(str);
    if (position === undefined || position > str.length) {
      position = str.length;
    }
    position -= searchString.length;
    var lastIndex = str.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
  };

  /**
   * Returns new array from array like object or null if failed
   *
   * @param {*} [thing]
   *
   * @returns {?Array}
   */
  var toArray = function toArray(thing) {
    if (!thing) return null;
    if (isArray(thing)) return thing;
    var i = thing.length;
    if (!isNumber(i)) return null;
    var arr = new Array(i);
    while (i-- > 0) {
      arr[i] = thing[i];
    }
    return arr;
  };

  /**
   * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
   * thing passed in is an instance of Uint8Array
   *
   * @param {TypedArray}
   *
   * @returns {Array}
   */
  // eslint-disable-next-line func-names
  var isTypedArray = function (TypedArray) {
    // eslint-disable-next-line func-names
    return function (thing) {
      return TypedArray && thing instanceof TypedArray;
    };
  }(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

  /**
   * For each entry in the object, call the function with the key and value.
   *
   * @param {Object<any, any>} obj - The object to iterate over.
   * @param {Function} fn - The function to call for each entry.
   *
   * @returns {void}
   */
  var forEachEntry = function forEachEntry(obj, fn) {
    var generator = obj && obj[iterator];
    var _iterator = generator.call(obj);
    var result;
    while ((result = _iterator.next()) && !result.done) {
      var pair = result.value;
      fn.call(obj, pair[0], pair[1]);
    }
  };

  /**
   * It takes a regular expression and a string, and returns an array of all the matches
   *
   * @param {string} regExp - The regular expression to match against.
   * @param {string} str - The string to search.
   *
   * @returns {Array<boolean>}
   */
  var matchAll = function matchAll(regExp, str) {
    var matches;
    var arr = [];
    while ((matches = regExp.exec(str)) !== null) {
      arr.push(matches);
    }
    return arr;
  };

  /* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
  var isHTMLForm = kindOfTest('HTMLFormElement');
  var toCamelCase = function toCamelCase(str) {
    return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
      return p1.toUpperCase() + p2;
    });
  };

  /* Creating a function that will check if an object has a property. */
  var hasOwnProperty = function (_ref4) {
    var hasOwnProperty = _ref4.hasOwnProperty;
    return function (obj, prop) {
      return hasOwnProperty.call(obj, prop);
    };
  }(Object.prototype);

  /**
   * Determine if a value is a RegExp object
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a RegExp object, otherwise false
   */
  var isRegExp = kindOfTest('RegExp');
  var reduceDescriptors = function reduceDescriptors(obj, reducer) {
    var descriptors = Object.getOwnPropertyDescriptors(obj);
    var reducedDescriptors = {};
    forEach(descriptors, function (descriptor, name) {
      var ret;
      if ((ret = reducer(descriptor, name, obj)) !== false) {
        reducedDescriptors[name] = ret || descriptor;
      }
    });
    Object.defineProperties(obj, reducedDescriptors);
  };

  /**
   * Makes all methods read-only
   * @param {Object} obj
   */

  var freezeMethods = function freezeMethods(obj) {
    reduceDescriptors(obj, function (descriptor, name) {
      // skip restricted props in strict mode
      if (isFunction(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
        return false;
      }
      var value = obj[name];
      if (!isFunction(value)) return;
      descriptor.enumerable = false;
      if ('writable' in descriptor) {
        descriptor.writable = false;
        return;
      }
      if (!descriptor.set) {
        descriptor.set = function () {
          throw Error('Can not rewrite read-only method \'' + name + '\'');
        };
      }
    });
  };
  var toObjectSet = function toObjectSet(arrayOrString, delimiter) {
    var obj = {};
    var define = function define(arr) {
      arr.forEach(function (value) {
        obj[value] = true;
      });
    };
    isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
    return obj;
  };
  var noop = function noop() {};
  var toFiniteNumber = function toFiniteNumber(value, defaultValue) {
    return value != null && Number.isFinite(value = +value) ? value : defaultValue;
  };

  /**
   * If the thing is a FormData object, return true, otherwise return false.
   *
   * @param {unknown} thing - The thing to check.
   *
   * @returns {boolean}
   */
  function isSpecCompliantForm(thing) {
    return !!(thing && isFunction(thing.append) && thing[toStringTag] === 'FormData' && thing[iterator]);
  }
  var toJSONObject = function toJSONObject(obj) {
    var stack = new Array(10);
    var visit = function visit(source, i) {
      if (isObject(source)) {
        if (stack.indexOf(source) >= 0) {
          return;
        }
        if (!('toJSON' in source)) {
          stack[i] = source;
          var target = isArray(source) ? [] : {};
          forEach(source, function (value, key) {
            var reducedValue = visit(value, i + 1);
            !isUndefined(reducedValue) && (target[key] = reducedValue);
          });
          stack[i] = undefined;
          return target;
        }
      }
      return source;
    };
    return visit(obj, 0);
  };
  var isAsyncFn = kindOfTest('AsyncFunction');
  var isThenable = function isThenable(thing) {
    return thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing["catch"]);
  };

  // original code
  // https://github.com/DigitalBrainJS/AxiosPromise/blob/16deab13710ec09779922131f3fa5954320f83ab/lib/utils.js#L11-L34

  var _setImmediate = function (setImmediateSupported, postMessageSupported) {
    if (setImmediateSupported) {
      return setImmediate;
    }
    return postMessageSupported ? function (token, callbacks) {
      _global.addEventListener("message", function (_ref5) {
        var source = _ref5.source,
          data = _ref5.data;
        if (source === _global && data === token) {
          callbacks.length && callbacks.shift()();
        }
      }, false);
      return function (cb) {
        callbacks.push(cb);
        _global.postMessage(token, "*");
      };
    }("axios@".concat(Math.random()), []) : function (cb) {
      return setTimeout(cb);
    };
  }(typeof setImmediate === 'function', isFunction(_global.postMessage));
  var asap = typeof queueMicrotask !== 'undefined' ? queueMicrotask.bind(_global) : typeof process !== 'undefined' && process.nextTick || _setImmediate;

  // *********************

  var isIterable = function isIterable(thing) {
    return thing != null && isFunction(thing[iterator]);
  };
  var utils$1 = {
    isArray: isArray,
    isArrayBuffer: isArrayBuffer,
    isBuffer: isBuffer,
    isFormData: isFormData,
    isArrayBufferView: isArrayBufferView,
    isString: isString,
    isNumber: isNumber,
    isBoolean: isBoolean,
    isObject: isObject,
    isPlainObject: isPlainObject,
    isReadableStream: isReadableStream,
    isRequest: isRequest,
    isResponse: isResponse,
    isHeaders: isHeaders,
    isUndefined: isUndefined,
    isDate: isDate,
    isFile: isFile,
    isBlob: isBlob,
    isRegExp: isRegExp,
    isFunction: isFunction,
    isStream: isStream,
    isURLSearchParams: isURLSearchParams,
    isTypedArray: isTypedArray,
    isFileList: isFileList,
    forEach: forEach,
    merge: merge,
    extend: extend,
    trim: trim,
    stripBOM: stripBOM,
    inherits: inherits,
    toFlatObject: toFlatObject,
    kindOf: kindOf,
    kindOfTest: kindOfTest,
    endsWith: endsWith,
    toArray: toArray,
    forEachEntry: forEachEntry,
    matchAll: matchAll,
    isHTMLForm: isHTMLForm,
    hasOwnProperty: hasOwnProperty,
    hasOwnProp: hasOwnProperty,
    // an alias to avoid ESLint no-prototype-builtins detection
    reduceDescriptors: reduceDescriptors,
    freezeMethods: freezeMethods,
    toObjectSet: toObjectSet,
    toCamelCase: toCamelCase,
    noop: noop,
    toFiniteNumber: toFiniteNumber,
    findKey: findKey,
    global: _global,
    isContextDefined: isContextDefined,
    isSpecCompliantForm: isSpecCompliantForm,
    toJSONObject: toJSONObject,
    isAsyncFn: isAsyncFn,
    isThenable: isThenable,
    setImmediate: _setImmediate,
    asap: asap,
    isIterable: isIterable
  };

  /**
   * Create an Error with the specified message, config, error code, request and response.
   *
   * @param {string} message The error message.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [config] The config.
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   *
   * @returns {Error} The created error.
   */
  function AxiosError(message, code, config, request, response) {
    Error.call(this);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error().stack;
    }
    this.message = message;
    this.name = 'AxiosError';
    code && (this.code = code);
    config && (this.config = config);
    request && (this.request = request);
    if (response) {
      this.response = response;
      this.status = response.status ? response.status : null;
    }
  }
  utils$1.inherits(AxiosError, Error, {
    toJSON: function toJSON() {
      return {
        // Standard
        message: this.message,
        name: this.name,
        // Microsoft
        description: this.description,
        number: this.number,
        // Mozilla
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        // Axios
        config: utils$1.toJSONObject(this.config),
        code: this.code,
        status: this.status
      };
    }
  });
  var prototype$1 = AxiosError.prototype;
  var descriptors = {};
  ['ERR_BAD_OPTION_VALUE', 'ERR_BAD_OPTION', 'ECONNABORTED', 'ETIMEDOUT', 'ERR_NETWORK', 'ERR_FR_TOO_MANY_REDIRECTS', 'ERR_DEPRECATED', 'ERR_BAD_RESPONSE', 'ERR_BAD_REQUEST', 'ERR_CANCELED', 'ERR_NOT_SUPPORT', 'ERR_INVALID_URL'
  // eslint-disable-next-line func-names
  ].forEach(function (code) {
    descriptors[code] = {
      value: code
    };
  });
  Object.defineProperties(AxiosError, descriptors);
  Object.defineProperty(prototype$1, 'isAxiosError', {
    value: true
  });

  // eslint-disable-next-line func-names
  AxiosError.from = function (error, code, config, request, response, customProps) {
    var axiosError = Object.create(prototype$1);
    utils$1.toFlatObject(error, axiosError, function filter(obj) {
      return obj !== Error.prototype;
    }, function (prop) {
      return prop !== 'isAxiosError';
    });
    AxiosError.call(axiosError, error.message, code, config, request, response);
    axiosError.cause = error;
    axiosError.name = error.name;
    customProps && Object.assign(axiosError, customProps);
    return axiosError;
  };

  // eslint-disable-next-line strict
  var httpAdapter = null;

  /**
   * Determines if the given thing is a array or js object.
   *
   * @param {string} thing - The object or array to be visited.
   *
   * @returns {boolean}
   */
  function isVisitable(thing) {
    return utils$1.isPlainObject(thing) || utils$1.isArray(thing);
  }

  /**
   * It removes the brackets from the end of a string
   *
   * @param {string} key - The key of the parameter.
   *
   * @returns {string} the key without the brackets.
   */
  function removeBrackets(key) {
    return utils$1.endsWith(key, '[]') ? key.slice(0, -2) : key;
  }

  /**
   * It takes a path, a key, and a boolean, and returns a string
   *
   * @param {string} path - The path to the current key.
   * @param {string} key - The key of the current object being iterated over.
   * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
   *
   * @returns {string} The path to the current key.
   */
  function renderKey(path, key, dots) {
    if (!path) return key;
    return path.concat(key).map(function each(token, i) {
      // eslint-disable-next-line no-param-reassign
      token = removeBrackets(token);
      return !dots && i ? '[' + token + ']' : token;
    }).join(dots ? '.' : '');
  }

  /**
   * If the array is an array and none of its elements are visitable, then it's a flat array.
   *
   * @param {Array<any>} arr - The array to check
   *
   * @returns {boolean}
   */
  function isFlatArray(arr) {
    return utils$1.isArray(arr) && !arr.some(isVisitable);
  }
  var predicates = utils$1.toFlatObject(utils$1, {}, null, function filter(prop) {
    return /^is[A-Z]/.test(prop);
  });

  /**
   * Convert a data object to FormData
   *
   * @param {Object} obj
   * @param {?Object} [formData]
   * @param {?Object} [options]
   * @param {Function} [options.visitor]
   * @param {Boolean} [options.metaTokens = true]
   * @param {Boolean} [options.dots = false]
   * @param {?Boolean} [options.indexes = false]
   *
   * @returns {Object}
   **/

  /**
   * It converts an object into a FormData object
   *
   * @param {Object<any, any>} obj - The object to convert to form data.
   * @param {string} formData - The FormData object to append to.
   * @param {Object<string, any>} options
   *
   * @returns
   */
  function toFormData(obj, formData, options) {
    if (!utils$1.isObject(obj)) {
      throw new TypeError('target must be an object');
    }

    // eslint-disable-next-line no-param-reassign
    formData = formData || new (FormData)();

    // eslint-disable-next-line no-param-reassign
    options = utils$1.toFlatObject(options, {
      metaTokens: true,
      dots: false,
      indexes: false
    }, false, function defined(option, source) {
      // eslint-disable-next-line no-eq-null,eqeqeq
      return !utils$1.isUndefined(source[option]);
    });
    var metaTokens = options.metaTokens;
    // eslint-disable-next-line no-use-before-define
    var visitor = options.visitor || defaultVisitor;
    var dots = options.dots;
    var indexes = options.indexes;
    var _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
    var useBlob = _Blob && utils$1.isSpecCompliantForm(formData);
    if (!utils$1.isFunction(visitor)) {
      throw new TypeError('visitor must be a function');
    }
    function convertValue(value) {
      if (value === null) return '';
      if (utils$1.isDate(value)) {
        return value.toISOString();
      }
      if (!useBlob && utils$1.isBlob(value)) {
        throw new AxiosError('Blob is not supported. Use a Buffer instead.');
      }
      if (utils$1.isArrayBuffer(value) || utils$1.isTypedArray(value)) {
        return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
      }
      return value;
    }

    /**
     * Default visitor.
     *
     * @param {*} value
     * @param {String|Number} key
     * @param {Array<String|Number>} path
     * @this {FormData}
     *
     * @returns {boolean} return true to visit the each prop of the value recursively
     */
    function defaultVisitor(value, key, path) {
      var arr = value;
      if (value && !path && _typeof(value) === 'object') {
        if (utils$1.endsWith(key, '{}')) {
          // eslint-disable-next-line no-param-reassign
          key = metaTokens ? key : key.slice(0, -2);
          // eslint-disable-next-line no-param-reassign
          value = JSON.stringify(value);
        } else if (utils$1.isArray(value) && isFlatArray(value) || (utils$1.isFileList(value) || utils$1.endsWith(key, '[]')) && (arr = utils$1.toArray(value))) {
          // eslint-disable-next-line no-param-reassign
          key = removeBrackets(key);
          arr.forEach(function each(el, index) {
            !(utils$1.isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + '[]', convertValue(el));
          });
          return false;
        }
      }
      if (isVisitable(value)) {
        return true;
      }
      formData.append(renderKey(path, key, dots), convertValue(value));
      return false;
    }
    var stack = [];
    var exposedHelpers = Object.assign(predicates, {
      defaultVisitor: defaultVisitor,
      convertValue: convertValue,
      isVisitable: isVisitable
    });
    function build(value, path) {
      if (utils$1.isUndefined(value)) return;
      if (stack.indexOf(value) !== -1) {
        throw Error('Circular reference detected in ' + path.join('.'));
      }
      stack.push(value);
      utils$1.forEach(value, function each(el, key) {
        var result = !(utils$1.isUndefined(el) || el === null) && visitor.call(formData, el, utils$1.isString(key) ? key.trim() : key, path, exposedHelpers);
        if (result === true) {
          build(el, path ? path.concat(key) : [key]);
        }
      });
      stack.pop();
    }
    if (!utils$1.isObject(obj)) {
      throw new TypeError('data must be an object');
    }
    build(obj);
    return formData;
  }

  /**
   * It encodes a string by replacing all characters that are not in the unreserved set with
   * their percent-encoded equivalents
   *
   * @param {string} str - The string to encode.
   *
   * @returns {string} The encoded string.
   */
  function encode$1(str) {
    var charMap = {
      '!': '%21',
      "'": '%27',
      '(': '%28',
      ')': '%29',
      '~': '%7E',
      '%20': '+',
      '%00': '\x00'
    };
    return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
      return charMap[match];
    });
  }

  /**
   * It takes a params object and converts it to a FormData object
   *
   * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
   * @param {Object<string, any>} options - The options object passed to the Axios constructor.
   *
   * @returns {void}
   */
  function AxiosURLSearchParams(params, options) {
    this._pairs = [];
    params && toFormData(params, this, options);
  }
  var prototype = AxiosURLSearchParams.prototype;
  prototype.append = function append(name, value) {
    this._pairs.push([name, value]);
  };
  prototype.toString = function toString(encoder) {
    var _encode = encoder ? function (value) {
      return encoder.call(this, value, encode$1);
    } : encode$1;
    return this._pairs.map(function each(pair) {
      return _encode(pair[0]) + '=' + _encode(pair[1]);
    }, '').join('&');
  };

  /**
   * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
   * URI encoded counterparts
   *
   * @param {string} val The value to be encoded.
   *
   * @returns {string} The encoded value.
   */
  function encode(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
  }

  /**
   * Build a URL by appending params to the end
   *
   * @param {string} url The base of the url (e.g., http://www.google.com)
   * @param {object} [params] The params to be appended
   * @param {?(object|Function)} options
   *
   * @returns {string} The formatted url
   */
  function buildURL(url, params, options) {
    /*eslint no-param-reassign:0*/
    if (!params) {
      return url;
    }
    var _encode = options && options.encode || encode;
    if (utils$1.isFunction(options)) {
      options = {
        serialize: options
      };
    }
    var serializeFn = options && options.serialize;
    var serializedParams;
    if (serializeFn) {
      serializedParams = serializeFn(params, options);
    } else {
      serializedParams = utils$1.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams(params, options).toString(_encode);
    }
    if (serializedParams) {
      var hashmarkIndex = url.indexOf("#");
      if (hashmarkIndex !== -1) {
        url = url.slice(0, hashmarkIndex);
      }
      url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
    }
    return url;
  }

  var InterceptorManager = /*#__PURE__*/function () {
    function InterceptorManager() {
      _classCallCheck(this, InterceptorManager);
      this.handlers = [];
    }

    /**
     * Add a new interceptor to the stack
     *
     * @param {Function} fulfilled The function to handle `then` for a `Promise`
     * @param {Function} rejected The function to handle `reject` for a `Promise`
     *
     * @return {Number} An ID used to remove interceptor later
     */
    _createClass(InterceptorManager, [{
      key: "use",
      value: function use(fulfilled, rejected, options) {
        this.handlers.push({
          fulfilled: fulfilled,
          rejected: rejected,
          synchronous: options ? options.synchronous : false,
          runWhen: options ? options.runWhen : null
        });
        return this.handlers.length - 1;
      }

      /**
       * Remove an interceptor from the stack
       *
       * @param {Number} id The ID that was returned by `use`
       *
       * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
       */
    }, {
      key: "eject",
      value: function eject(id) {
        if (this.handlers[id]) {
          this.handlers[id] = null;
        }
      }

      /**
       * Clear all interceptors from the stack
       *
       * @returns {void}
       */
    }, {
      key: "clear",
      value: function clear() {
        if (this.handlers) {
          this.handlers = [];
        }
      }

      /**
       * Iterate over all the registered interceptors
       *
       * This method is particularly useful for skipping over any
       * interceptors that may have become `null` calling `eject`.
       *
       * @param {Function} fn The function to call for each interceptor
       *
       * @returns {void}
       */
    }, {
      key: "forEach",
      value: function forEach(fn) {
        utils$1.forEach(this.handlers, function forEachHandler(h) {
          if (h !== null) {
            fn(h);
          }
        });
      }
    }]);
    return InterceptorManager;
  }();
  var InterceptorManager$1 = InterceptorManager;

  var transitionalDefaults = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  };

  var URLSearchParams$1 = typeof URLSearchParams !== 'undefined' ? URLSearchParams : AxiosURLSearchParams;

  var FormData$1 = typeof FormData !== 'undefined' ? FormData : null;

  var Blob$1 = typeof Blob !== 'undefined' ? Blob : null;

  var platform$1 = {
    isBrowser: true,
    classes: {
      URLSearchParams: URLSearchParams$1,
      FormData: FormData$1,
      Blob: Blob$1
    },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
  };

  var hasBrowserEnv = typeof window !== 'undefined' && typeof document !== 'undefined';
  var _navigator = (typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) === 'object' && navigator || undefined;

  /**
   * Determine if we're running in a standard browser environment
   *
   * This allows axios to run in a web worker, and react-native.
   * Both environments support XMLHttpRequest, but not fully standard globals.
   *
   * web workers:
   *  typeof window -> undefined
   *  typeof document -> undefined
   *
   * react-native:
   *  navigator.product -> 'ReactNative'
   * nativescript
   *  navigator.product -> 'NativeScript' or 'NS'
   *
   * @returns {boolean}
   */
  var hasStandardBrowserEnv = hasBrowserEnv && (!_navigator || ['ReactNative', 'NativeScript', 'NS'].indexOf(_navigator.product) < 0);

  /**
   * Determine if we're running in a standard browser webWorker environment
   *
   * Although the `isStandardBrowserEnv` method indicates that
   * `allows axios to run in a web worker`, the WebWorker will still be
   * filtered out due to its judgment standard
   * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
   * This leads to a problem when axios post `FormData` in webWorker
   */
  var hasStandardBrowserWebWorkerEnv = function () {
    return typeof WorkerGlobalScope !== 'undefined' &&
    // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope && typeof self.importScripts === 'function';
  }();
  var origin = hasBrowserEnv && window.location.href || 'http://localhost';

  var utils = /*#__PURE__*/Object.freeze({
    __proto__: null,
    hasBrowserEnv: hasBrowserEnv,
    hasStandardBrowserWebWorkerEnv: hasStandardBrowserWebWorkerEnv,
    hasStandardBrowserEnv: hasStandardBrowserEnv,
    navigator: _navigator,
    origin: origin
  });

  var platform = _objectSpread2(_objectSpread2({}, utils), platform$1);

  function toURLEncodedForm(data, options) {
    return toFormData(data, new platform.classes.URLSearchParams(), Object.assign({
      visitor: function visitor(value, key, path, helpers) {
        if (platform.isNode && utils$1.isBuffer(value)) {
          this.append(key, value.toString('base64'));
          return false;
        }
        return helpers.defaultVisitor.apply(this, arguments);
      }
    }, options));
  }

  /**
   * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
   *
   * @param {string} name - The name of the property to get.
   *
   * @returns An array of strings.
   */
  function parsePropPath(name) {
    // foo[x][y][z]
    // foo.x.y.z
    // foo-x-y-z
    // foo x y z
    return utils$1.matchAll(/\w+|\[(\w*)]/g, name).map(function (match) {
      return match[0] === '[]' ? '' : match[1] || match[0];
    });
  }

  /**
   * Convert an array to an object.
   *
   * @param {Array<any>} arr - The array to convert to an object.
   *
   * @returns An object with the same keys and values as the array.
   */
  function arrayToObject(arr) {
    var obj = {};
    var keys = Object.keys(arr);
    var i;
    var len = keys.length;
    var key;
    for (i = 0; i < len; i++) {
      key = keys[i];
      obj[key] = arr[key];
    }
    return obj;
  }

  /**
   * It takes a FormData object and returns a JavaScript object
   *
   * @param {string} formData The FormData object to convert to JSON.
   *
   * @returns {Object<string, any> | null} The converted object.
   */
  function formDataToJSON(formData) {
    function buildPath(path, value, target, index) {
      var name = path[index++];
      if (name === '__proto__') return true;
      var isNumericKey = Number.isFinite(+name);
      var isLast = index >= path.length;
      name = !name && utils$1.isArray(target) ? target.length : name;
      if (isLast) {
        if (utils$1.hasOwnProp(target, name)) {
          target[name] = [target[name], value];
        } else {
          target[name] = value;
        }
        return !isNumericKey;
      }
      if (!target[name] || !utils$1.isObject(target[name])) {
        target[name] = [];
      }
      var result = buildPath(path, value, target[name], index);
      if (result && utils$1.isArray(target[name])) {
        target[name] = arrayToObject(target[name]);
      }
      return !isNumericKey;
    }
    if (utils$1.isFormData(formData) && utils$1.isFunction(formData.entries)) {
      var obj = {};
      utils$1.forEachEntry(formData, function (name, value) {
        buildPath(parsePropPath(name), value, obj, 0);
      });
      return obj;
    }
    return null;
  }

  /**
   * It takes a string, tries to parse it, and if it fails, it returns the stringified version
   * of the input
   *
   * @param {any} rawValue - The value to be stringified.
   * @param {Function} parser - A function that parses a string into a JavaScript object.
   * @param {Function} encoder - A function that takes a value and returns a string.
   *
   * @returns {string} A stringified version of the rawValue.
   */
  function stringifySafely(rawValue, parser, encoder) {
    if (utils$1.isString(rawValue)) {
      try {
        (parser || JSON.parse)(rawValue);
        return utils$1.trim(rawValue);
      } catch (e) {
        if (e.name !== 'SyntaxError') {
          throw e;
        }
      }
    }
    return (encoder || JSON.stringify)(rawValue);
  }
  var defaults = {
    transitional: transitionalDefaults,
    adapter: ['xhr', 'http', 'fetch'],
    transformRequest: [function transformRequest(data, headers) {
      var contentType = headers.getContentType() || '';
      var hasJSONContentType = contentType.indexOf('application/json') > -1;
      var isObjectPayload = utils$1.isObject(data);
      if (isObjectPayload && utils$1.isHTMLForm(data)) {
        data = new FormData(data);
      }
      var isFormData = utils$1.isFormData(data);
      if (isFormData) {
        return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
      }
      if (utils$1.isArrayBuffer(data) || utils$1.isBuffer(data) || utils$1.isStream(data) || utils$1.isFile(data) || utils$1.isBlob(data) || utils$1.isReadableStream(data)) {
        return data;
      }
      if (utils$1.isArrayBufferView(data)) {
        return data.buffer;
      }
      if (utils$1.isURLSearchParams(data)) {
        headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
        return data.toString();
      }
      var isFileList;
      if (isObjectPayload) {
        if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
          return toURLEncodedForm(data, this.formSerializer).toString();
        }
        if ((isFileList = utils$1.isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
          var _FormData = this.env && this.env.FormData;
          return toFormData(isFileList ? {
            'files[]': data
          } : data, _FormData && new _FormData(), this.formSerializer);
        }
      }
      if (isObjectPayload || hasJSONContentType) {
        headers.setContentType('application/json', false);
        return stringifySafely(data);
      }
      return data;
    }],
    transformResponse: [function transformResponse(data) {
      var transitional = this.transitional || defaults.transitional;
      var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
      var JSONRequested = this.responseType === 'json';
      if (utils$1.isResponse(data) || utils$1.isReadableStream(data)) {
        return data;
      }
      if (data && utils$1.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
        var silentJSONParsing = transitional && transitional.silentJSONParsing;
        var strictJSONParsing = !silentJSONParsing && JSONRequested;
        try {
          return JSON.parse(data);
        } catch (e) {
          if (strictJSONParsing) {
            if (e.name === 'SyntaxError') {
              throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
            }
            throw e;
          }
        }
      }
      return data;
    }],
    /**
     * A timeout in milliseconds to abort a request. If set to 0 (default) a
     * timeout is not created.
     */
    timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
      FormData: platform.classes.FormData,
      Blob: platform.classes.Blob
    },
    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    },
    headers: {
      common: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': undefined
      }
    }
  };
  utils$1.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], function (method) {
    defaults.headers[method] = {};
  });
  var defaults$1 = defaults;

  // RawAxiosHeaders whose duplicates are ignored by node
  // c.f. https://nodejs.org/api/http.html#http_message_headers
  var ignoreDuplicateOf = utils$1.toObjectSet(['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent']);

  /**
   * Parse headers into an object
   *
   * ```
   * Date: Wed, 27 Aug 2014 08:58:49 GMT
   * Content-Type: application/json
   * Connection: keep-alive
   * Transfer-Encoding: chunked
   * ```
   *
   * @param {String} rawHeaders Headers needing to be parsed
   *
   * @returns {Object} Headers parsed into an object
   */
  var parseHeaders = (function (rawHeaders) {
    var parsed = {};
    var key;
    var val;
    var i;
    rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
      i = line.indexOf(':');
      key = line.substring(0, i).trim().toLowerCase();
      val = line.substring(i + 1).trim();
      if (!key || parsed[key] && ignoreDuplicateOf[key]) {
        return;
      }
      if (key === 'set-cookie') {
        if (parsed[key]) {
          parsed[key].push(val);
        } else {
          parsed[key] = [val];
        }
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    });
    return parsed;
  });

  var $internals = Symbol('internals');
  function normalizeHeader(header) {
    return header && String(header).trim().toLowerCase();
  }
  function normalizeValue(value) {
    if (value === false || value == null) {
      return value;
    }
    return utils$1.isArray(value) ? value.map(normalizeValue) : String(value);
  }
  function parseTokens(str) {
    var tokens = Object.create(null);
    var tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    var match;
    while (match = tokensRE.exec(str)) {
      tokens[match[1]] = match[2];
    }
    return tokens;
  }
  var isValidHeaderName = function isValidHeaderName(str) {
    return /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
  };
  function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
    if (utils$1.isFunction(filter)) {
      return filter.call(this, value, header);
    }
    if (isHeaderNameFilter) {
      value = header;
    }
    if (!utils$1.isString(value)) return;
    if (utils$1.isString(filter)) {
      return value.indexOf(filter) !== -1;
    }
    if (utils$1.isRegExp(filter)) {
      return filter.test(value);
    }
  }
  function formatHeader(header) {
    return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, function (w, _char, str) {
      return _char.toUpperCase() + str;
    });
  }
  function buildAccessors(obj, header) {
    var accessorName = utils$1.toCamelCase(' ' + header);
    ['get', 'set', 'has'].forEach(function (methodName) {
      Object.defineProperty(obj, methodName + accessorName, {
        value: function value(arg1, arg2, arg3) {
          return this[methodName].call(this, header, arg1, arg2, arg3);
        },
        configurable: true
      });
    });
  }
  var AxiosHeaders = /*#__PURE__*/function (_Symbol$iterator, _Symbol$toStringTag) {
    function AxiosHeaders(headers) {
      _classCallCheck(this, AxiosHeaders);
      headers && this.set(headers);
    }
    _createClass(AxiosHeaders, [{
      key: "set",
      value: function set(header, valueOrRewrite, rewrite) {
        var self = this;
        function setHeader(_value, _header, _rewrite) {
          var lHeader = normalizeHeader(_header);
          if (!lHeader) {
            throw new Error('header name must be a non-empty string');
          }
          var key = utils$1.findKey(self, lHeader);
          if (!key || self[key] === undefined || _rewrite === true || _rewrite === undefined && self[key] !== false) {
            self[key || _header] = normalizeValue(_value);
          }
        }
        var setHeaders = function setHeaders(headers, _rewrite) {
          return utils$1.forEach(headers, function (_value, _header) {
            return setHeader(_value, _header, _rewrite);
          });
        };
        if (utils$1.isPlainObject(header) || header instanceof this.constructor) {
          setHeaders(header, valueOrRewrite);
        } else if (utils$1.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
          setHeaders(parseHeaders(header), valueOrRewrite);
        } else if (utils$1.isObject(header) && utils$1.isIterable(header)) {
          var obj = {},
            dest,
            key;
          var _iterator = _createForOfIteratorHelper(header),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var entry = _step.value;
              if (!utils$1.isArray(entry)) {
                throw TypeError('Object iterator must return a key-value pair');
              }
              obj[key = entry[0]] = (dest = obj[key]) ? utils$1.isArray(dest) ? [].concat(_toConsumableArray(dest), [entry[1]]) : [dest, entry[1]] : entry[1];
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          setHeaders(obj, valueOrRewrite);
        } else {
          header != null && setHeader(valueOrRewrite, header, rewrite);
        }
        return this;
      }
    }, {
      key: "get",
      value: function get(header, parser) {
        header = normalizeHeader(header);
        if (header) {
          var key = utils$1.findKey(this, header);
          if (key) {
            var value = this[key];
            if (!parser) {
              return value;
            }
            if (parser === true) {
              return parseTokens(value);
            }
            if (utils$1.isFunction(parser)) {
              return parser.call(this, value, key);
            }
            if (utils$1.isRegExp(parser)) {
              return parser.exec(value);
            }
            throw new TypeError('parser must be boolean|regexp|function');
          }
        }
      }
    }, {
      key: "has",
      value: function has(header, matcher) {
        header = normalizeHeader(header);
        if (header) {
          var key = utils$1.findKey(this, header);
          return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
        }
        return false;
      }
    }, {
      key: "delete",
      value: function _delete(header, matcher) {
        var self = this;
        var deleted = false;
        function deleteHeader(_header) {
          _header = normalizeHeader(_header);
          if (_header) {
            var key = utils$1.findKey(self, _header);
            if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
              delete self[key];
              deleted = true;
            }
          }
        }
        if (utils$1.isArray(header)) {
          header.forEach(deleteHeader);
        } else {
          deleteHeader(header);
        }
        return deleted;
      }
    }, {
      key: "clear",
      value: function clear(matcher) {
        var keys = Object.keys(this);
        var i = keys.length;
        var deleted = false;
        while (i--) {
          var key = keys[i];
          if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
            delete this[key];
            deleted = true;
          }
        }
        return deleted;
      }
    }, {
      key: "normalize",
      value: function normalize(format) {
        var self = this;
        var headers = {};
        utils$1.forEach(this, function (value, header) {
          var key = utils$1.findKey(headers, header);
          if (key) {
            self[key] = normalizeValue(value);
            delete self[header];
            return;
          }
          var normalized = format ? formatHeader(header) : String(header).trim();
          if (normalized !== header) {
            delete self[header];
          }
          self[normalized] = normalizeValue(value);
          headers[normalized] = true;
        });
        return this;
      }
    }, {
      key: "concat",
      value: function concat() {
        var _this$constructor;
        for (var _len = arguments.length, targets = new Array(_len), _key = 0; _key < _len; _key++) {
          targets[_key] = arguments[_key];
        }
        return (_this$constructor = this.constructor).concat.apply(_this$constructor, [this].concat(targets));
      }
    }, {
      key: "toJSON",
      value: function toJSON(asStrings) {
        var obj = Object.create(null);
        utils$1.forEach(this, function (value, header) {
          value != null && value !== false && (obj[header] = asStrings && utils$1.isArray(value) ? value.join(', ') : value);
        });
        return obj;
      }
    }, {
      key: _Symbol$iterator,
      value: function value() {
        return Object.entries(this.toJSON())[Symbol.iterator]();
      }
    }, {
      key: "toString",
      value: function toString() {
        return Object.entries(this.toJSON()).map(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
            header = _ref2[0],
            value = _ref2[1];
          return header + ': ' + value;
        }).join('\n');
      }
    }, {
      key: "getSetCookie",
      value: function getSetCookie() {
        return this.get("set-cookie") || [];
      }
    }, {
      key: _Symbol$toStringTag,
      get: function get() {
        return 'AxiosHeaders';
      }
    }], [{
      key: "from",
      value: function from(thing) {
        return thing instanceof this ? thing : new this(thing);
      }
    }, {
      key: "concat",
      value: function concat(first) {
        var computed = new this(first);
        for (var _len2 = arguments.length, targets = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          targets[_key2 - 1] = arguments[_key2];
        }
        targets.forEach(function (target) {
          return computed.set(target);
        });
        return computed;
      }
    }, {
      key: "accessor",
      value: function accessor(header) {
        var internals = this[$internals] = this[$internals] = {
          accessors: {}
        };
        var accessors = internals.accessors;
        var prototype = this.prototype;
        function defineAccessor(_header) {
          var lHeader = normalizeHeader(_header);
          if (!accessors[lHeader]) {
            buildAccessors(prototype, _header);
            accessors[lHeader] = true;
          }
        }
        utils$1.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
        return this;
      }
    }]);
    return AxiosHeaders;
  }(Symbol.iterator, Symbol.toStringTag);
  AxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);

  // reserved names hotfix
  utils$1.reduceDescriptors(AxiosHeaders.prototype, function (_ref3, key) {
    var value = _ref3.value;
    var mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
    return {
      get: function get() {
        return value;
      },
      set: function set(headerValue) {
        this[mapped] = headerValue;
      }
    };
  });
  utils$1.freezeMethods(AxiosHeaders);
  var AxiosHeaders$1 = AxiosHeaders;

  /**
   * Transform the data for a request or a response
   *
   * @param {Array|Function} fns A single function or Array of functions
   * @param {?Object} response The response object
   *
   * @returns {*} The resulting transformed data
   */
  function transformData(fns, response) {
    var config = this || defaults$1;
    var context = response || config;
    var headers = AxiosHeaders$1.from(context.headers);
    var data = context.data;
    utils$1.forEach(fns, function transform(fn) {
      data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
    });
    headers.normalize();
    return data;
  }

  function isCancel(value) {
    return !!(value && value.__CANCEL__);
  }

  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */
  function CanceledError(message, config, request) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    AxiosError.call(this, message == null ? 'canceled' : message, AxiosError.ERR_CANCELED, config, request);
    this.name = 'CanceledError';
  }
  utils$1.inherits(CanceledError, AxiosError, {
    __CANCEL__: true
  });

  /**
   * Resolve or reject a Promise based on response status.
   *
   * @param {Function} resolve A function that resolves the promise.
   * @param {Function} reject A function that rejects the promise.
   * @param {object} response The response.
   *
   * @returns {object} The response.
   */
  function settle(resolve, reject, response) {
    var validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) {
      resolve(response);
    } else {
      reject(new AxiosError('Request failed with status code ' + response.status, [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4], response.config, response.request, response));
    }
  }

  function parseProtocol(url) {
    var match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
    return match && match[1] || '';
  }

  /**
   * Calculate data maxRate
   * @param {Number} [samplesCount= 10]
   * @param {Number} [min= 1000]
   * @returns {Function}
   */
  function speedometer(samplesCount, min) {
    samplesCount = samplesCount || 10;
    var bytes = new Array(samplesCount);
    var timestamps = new Array(samplesCount);
    var head = 0;
    var tail = 0;
    var firstSampleTS;
    min = min !== undefined ? min : 1000;
    return function push(chunkLength) {
      var now = Date.now();
      var startedAt = timestamps[tail];
      if (!firstSampleTS) {
        firstSampleTS = now;
      }
      bytes[head] = chunkLength;
      timestamps[head] = now;
      var i = tail;
      var bytesCount = 0;
      while (i !== head) {
        bytesCount += bytes[i++];
        i = i % samplesCount;
      }
      head = (head + 1) % samplesCount;
      if (head === tail) {
        tail = (tail + 1) % samplesCount;
      }
      if (now - firstSampleTS < min) {
        return;
      }
      var passed = startedAt && now - startedAt;
      return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
    };
  }

  /**
   * Throttle decorator
   * @param {Function} fn
   * @param {Number} freq
   * @return {Function}
   */
  function throttle(fn, freq) {
    var timestamp = 0;
    var threshold = 1000 / freq;
    var lastArgs;
    var timer;
    var invoke = function invoke(args) {
      var now = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Date.now();
      timestamp = now;
      lastArgs = null;
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      fn.apply(null, args);
    };
    var throttled = function throttled() {
      var now = Date.now();
      var passed = now - timestamp;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      if (passed >= threshold) {
        invoke(args, now);
      } else {
        lastArgs = args;
        if (!timer) {
          timer = setTimeout(function () {
            timer = null;
            invoke(lastArgs);
          }, threshold - passed);
        }
      }
    };
    var flush = function flush() {
      return lastArgs && invoke(lastArgs);
    };
    return [throttled, flush];
  }

  var progressEventReducer = function progressEventReducer(listener, isDownloadStream) {
    var freq = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
    var bytesNotified = 0;
    var _speedometer = speedometer(50, 250);
    return throttle(function (e) {
      var loaded = e.loaded;
      var total = e.lengthComputable ? e.total : undefined;
      var progressBytes = loaded - bytesNotified;
      var rate = _speedometer(progressBytes);
      var inRange = loaded <= total;
      bytesNotified = loaded;
      var data = _defineProperty({
        loaded: loaded,
        total: total,
        progress: total ? loaded / total : undefined,
        bytes: progressBytes,
        rate: rate ? rate : undefined,
        estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
        event: e,
        lengthComputable: total != null
      }, isDownloadStream ? 'download' : 'upload', true);
      listener(data);
    }, freq);
  };
  var progressEventDecorator = function progressEventDecorator(total, throttled) {
    var lengthComputable = total != null;
    return [function (loaded) {
      return throttled[0]({
        lengthComputable: lengthComputable,
        total: total,
        loaded: loaded
      });
    }, throttled[1]];
  };
  var asyncDecorator = function asyncDecorator(fn) {
    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return utils$1.asap(function () {
        return fn.apply(void 0, args);
      });
    };
  };

  var isURLSameOrigin = platform.hasStandardBrowserEnv ? function (origin, isMSIE) {
    return function (url) {
      url = new URL(url, platform.origin);
      return origin.protocol === url.protocol && origin.host === url.host && (isMSIE || origin.port === url.port);
    };
  }(new URL(platform.origin), platform.navigator && /(msie|trident)/i.test(platform.navigator.userAgent)) : function () {
    return true;
  };

  var cookies = platform.hasStandardBrowserEnv ?
  // Standard browser envs support document.cookie
  {
    write: function write(name, value, expires, path, domain, secure) {
      var cookie = [name + '=' + encodeURIComponent(value)];
      utils$1.isNumber(expires) && cookie.push('expires=' + new Date(expires).toGMTString());
      utils$1.isString(path) && cookie.push('path=' + path);
      utils$1.isString(domain) && cookie.push('domain=' + domain);
      secure === true && cookie.push('secure');
      document.cookie = cookie.join('; ');
    },
    read: function read(name) {
      var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return match ? decodeURIComponent(match[3]) : null;
    },
    remove: function remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  } :
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write: function write() {},
    read: function read() {
      return null;
    },
    remove: function remove() {}
  };

  /**
   * Determines whether the specified URL is absolute
   *
   * @param {string} url The URL to test
   *
   * @returns {boolean} True if the specified URL is absolute, otherwise false
   */
  function isAbsoluteURL(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
  }

  /**
   * Creates a new URL by combining the specified URLs
   *
   * @param {string} baseURL The base URL
   * @param {string} relativeURL The relative URL
   *
   * @returns {string} The combined URL
   */
  function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/?\/$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
  }

  /**
   * Creates a new URL by combining the baseURL with the requestedURL,
   * only when the requestedURL is not already an absolute URL.
   * If the requestURL is absolute, this function returns the requestedURL untouched.
   *
   * @param {string} baseURL The base URL
   * @param {string} requestedURL Absolute or relative URL to combine
   *
   * @returns {string} The combined full path
   */
  function buildFullPath(baseURL, requestedURL, allowAbsoluteUrls) {
    var isRelativeUrl = !isAbsoluteURL(requestedURL);
    if (baseURL && (isRelativeUrl || allowAbsoluteUrls == false)) {
      return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
  }

  var headersToObject = function headersToObject(thing) {
    return thing instanceof AxiosHeaders$1 ? _objectSpread2({}, thing) : thing;
  };

  /**
   * Config-specific merge-function which creates a new config-object
   * by merging two configuration objects together.
   *
   * @param {Object} config1
   * @param {Object} config2
   *
   * @returns {Object} New object resulting from merging config2 to config1
   */
  function mergeConfig(config1, config2) {
    // eslint-disable-next-line no-param-reassign
    config2 = config2 || {};
    var config = {};
    function getMergedValue(target, source, prop, caseless) {
      if (utils$1.isPlainObject(target) && utils$1.isPlainObject(source)) {
        return utils$1.merge.call({
          caseless: caseless
        }, target, source);
      } else if (utils$1.isPlainObject(source)) {
        return utils$1.merge({}, source);
      } else if (utils$1.isArray(source)) {
        return source.slice();
      }
      return source;
    }

    // eslint-disable-next-line consistent-return
    function mergeDeepProperties(a, b, prop, caseless) {
      if (!utils$1.isUndefined(b)) {
        return getMergedValue(a, b, prop, caseless);
      } else if (!utils$1.isUndefined(a)) {
        return getMergedValue(undefined, a, prop, caseless);
      }
    }

    // eslint-disable-next-line consistent-return
    function valueFromConfig2(a, b) {
      if (!utils$1.isUndefined(b)) {
        return getMergedValue(undefined, b);
      }
    }

    // eslint-disable-next-line consistent-return
    function defaultToConfig2(a, b) {
      if (!utils$1.isUndefined(b)) {
        return getMergedValue(undefined, b);
      } else if (!utils$1.isUndefined(a)) {
        return getMergedValue(undefined, a);
      }
    }

    // eslint-disable-next-line consistent-return
    function mergeDirectKeys(a, b, prop) {
      if (prop in config2) {
        return getMergedValue(a, b);
      } else if (prop in config1) {
        return getMergedValue(undefined, a);
      }
    }
    var mergeMap = {
      url: valueFromConfig2,
      method: valueFromConfig2,
      data: valueFromConfig2,
      baseURL: defaultToConfig2,
      transformRequest: defaultToConfig2,
      transformResponse: defaultToConfig2,
      paramsSerializer: defaultToConfig2,
      timeout: defaultToConfig2,
      timeoutMessage: defaultToConfig2,
      withCredentials: defaultToConfig2,
      withXSRFToken: defaultToConfig2,
      adapter: defaultToConfig2,
      responseType: defaultToConfig2,
      xsrfCookieName: defaultToConfig2,
      xsrfHeaderName: defaultToConfig2,
      onUploadProgress: defaultToConfig2,
      onDownloadProgress: defaultToConfig2,
      decompress: defaultToConfig2,
      maxContentLength: defaultToConfig2,
      maxBodyLength: defaultToConfig2,
      beforeRedirect: defaultToConfig2,
      transport: defaultToConfig2,
      httpAgent: defaultToConfig2,
      httpsAgent: defaultToConfig2,
      cancelToken: defaultToConfig2,
      socketPath: defaultToConfig2,
      responseEncoding: defaultToConfig2,
      validateStatus: mergeDirectKeys,
      headers: function headers(a, b, prop) {
        return mergeDeepProperties(headersToObject(a), headersToObject(b), prop, true);
      }
    };
    utils$1.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
      var merge = mergeMap[prop] || mergeDeepProperties;
      var configValue = merge(config1[prop], config2[prop], prop);
      utils$1.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
  }

  var resolveConfig = (function (config) {
    var newConfig = mergeConfig({}, config);
    var data = newConfig.data,
      withXSRFToken = newConfig.withXSRFToken,
      xsrfHeaderName = newConfig.xsrfHeaderName,
      xsrfCookieName = newConfig.xsrfCookieName,
      headers = newConfig.headers,
      auth = newConfig.auth;
    newConfig.headers = headers = AxiosHeaders$1.from(headers);
    newConfig.url = buildURL(buildFullPath(newConfig.baseURL, newConfig.url, newConfig.allowAbsoluteUrls), config.params, config.paramsSerializer);

    // HTTP basic authentication
    if (auth) {
      headers.set('Authorization', 'Basic ' + btoa((auth.username || '') + ':' + (auth.password ? unescape(encodeURIComponent(auth.password)) : '')));
    }
    var contentType;
    if (utils$1.isFormData(data)) {
      if (platform.hasStandardBrowserEnv || platform.hasStandardBrowserWebWorkerEnv) {
        headers.setContentType(undefined); // Let the browser set it
      } else if ((contentType = headers.getContentType()) !== false) {
        // fix semicolon duplication issue for ReactNative FormData implementation
        var _ref = contentType ? contentType.split(';').map(function (token) {
            return token.trim();
          }).filter(Boolean) : [],
          _ref2 = _toArray(_ref),
          type = _ref2[0],
          tokens = _ref2.slice(1);
        headers.setContentType([type || 'multipart/form-data'].concat(_toConsumableArray(tokens)).join('; '));
      }
    }

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.

    if (platform.hasStandardBrowserEnv) {
      withXSRFToken && utils$1.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));
      if (withXSRFToken || withXSRFToken !== false && isURLSameOrigin(newConfig.url)) {
        // Add xsrf header
        var xsrfValue = xsrfHeaderName && xsrfCookieName && cookies.read(xsrfCookieName);
        if (xsrfValue) {
          headers.set(xsrfHeaderName, xsrfValue);
        }
      }
    }
    return newConfig;
  });

  var isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';
  var xhrAdapter = isXHRAdapterSupported && function (config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
      var _config = resolveConfig(config);
      var requestData = _config.data;
      var requestHeaders = AxiosHeaders$1.from(_config.headers).normalize();
      var responseType = _config.responseType,
        onUploadProgress = _config.onUploadProgress,
        onDownloadProgress = _config.onDownloadProgress;
      var onCanceled;
      var uploadThrottled, downloadThrottled;
      var flushUpload, flushDownload;
      function done() {
        flushUpload && flushUpload(); // flush events
        flushDownload && flushDownload(); // flush events

        _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);
        _config.signal && _config.signal.removeEventListener('abort', onCanceled);
      }
      var request = new XMLHttpRequest();
      request.open(_config.method.toUpperCase(), _config.url, true);

      // Set the request timeout in MS
      request.timeout = _config.timeout;
      function onloadend() {
        if (!request) {
          return;
        }
        // Prepare the response
        var responseHeaders = AxiosHeaders$1.from('getAllResponseHeaders' in request && request.getAllResponseHeaders());
        var responseData = !responseType || responseType === 'text' || responseType === 'json' ? request.responseText : request.response;
        var response = {
          data: responseData,
          status: request.status,
          statusText: request.statusText,
          headers: responseHeaders,
          config: config,
          request: request
        };
        settle(function _resolve(value) {
          resolve(value);
          done();
        }, function _reject(err) {
          reject(err);
          done();
        }, response);

        // Clean up request
        request = null;
      }
      if ('onloadend' in request) {
        // Use onloadend if available
        request.onloadend = onloadend;
      } else {
        // Listen for ready state to emulate onloadend
        request.onreadystatechange = function handleLoad() {
          if (!request || request.readyState !== 4) {
            return;
          }

          // The request errored out and we didn't get a response, this will be
          // handled by onerror instead
          // With one exception: request that using file: protocol, most browsers
          // will return status as 0 even though it's a successful request
          if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
            return;
          }
          // readystate handler is calling before onerror or ontimeout handlers,
          // so we should call onloadend on the next 'tick'
          setTimeout(onloadend);
        };
      }

      // Handle browser request cancellation (as opposed to a manual cancellation)
      request.onabort = function handleAbort() {
        if (!request) {
          return;
        }
        reject(new AxiosError('Request aborted', AxiosError.ECONNABORTED, config, request));

        // Clean up request
        request = null;
      };

      // Handle low level network errors
      request.onerror = function handleError() {
        // Real errors are hidden from us by the browser
        // onerror should only fire if it's a network error
        reject(new AxiosError('Network Error', AxiosError.ERR_NETWORK, config, request));

        // Clean up request
        request = null;
      };

      // Handle timeout
      request.ontimeout = function handleTimeout() {
        var timeoutErrorMessage = _config.timeout ? 'timeout of ' + _config.timeout + 'ms exceeded' : 'timeout exceeded';
        var transitional = _config.transitional || transitionalDefaults;
        if (_config.timeoutErrorMessage) {
          timeoutErrorMessage = _config.timeoutErrorMessage;
        }
        reject(new AxiosError(timeoutErrorMessage, transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED, config, request));

        // Clean up request
        request = null;
      };

      // Remove Content-Type if data is undefined
      requestData === undefined && requestHeaders.setContentType(null);

      // Add headers to the request
      if ('setRequestHeader' in request) {
        utils$1.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
          request.setRequestHeader(key, val);
        });
      }

      // Add withCredentials to request if needed
      if (!utils$1.isUndefined(_config.withCredentials)) {
        request.withCredentials = !!_config.withCredentials;
      }

      // Add responseType to request if needed
      if (responseType && responseType !== 'json') {
        request.responseType = _config.responseType;
      }

      // Handle progress if needed
      if (onDownloadProgress) {
        var _progressEventReducer = progressEventReducer(onDownloadProgress, true);
        var _progressEventReducer2 = _slicedToArray(_progressEventReducer, 2);
        downloadThrottled = _progressEventReducer2[0];
        flushDownload = _progressEventReducer2[1];
        request.addEventListener('progress', downloadThrottled);
      }

      // Not all browsers support upload events
      if (onUploadProgress && request.upload) {
        var _progressEventReducer3 = progressEventReducer(onUploadProgress);
        var _progressEventReducer4 = _slicedToArray(_progressEventReducer3, 2);
        uploadThrottled = _progressEventReducer4[0];
        flushUpload = _progressEventReducer4[1];
        request.upload.addEventListener('progress', uploadThrottled);
        request.upload.addEventListener('loadend', flushUpload);
      }
      if (_config.cancelToken || _config.signal) {
        // Handle cancellation
        // eslint-disable-next-line func-names
        onCanceled = function onCanceled(cancel) {
          if (!request) {
            return;
          }
          reject(!cancel || cancel.type ? new CanceledError(null, config, request) : cancel);
          request.abort();
          request = null;
        };
        _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
        if (_config.signal) {
          _config.signal.aborted ? onCanceled() : _config.signal.addEventListener('abort', onCanceled);
        }
      }
      var protocol = parseProtocol(_config.url);
      if (protocol && platform.protocols.indexOf(protocol) === -1) {
        reject(new AxiosError('Unsupported protocol ' + protocol + ':', AxiosError.ERR_BAD_REQUEST, config));
        return;
      }

      // Send the request
      request.send(requestData || null);
    });
  };

  var composeSignals = function composeSignals(signals, timeout) {
    var _signals = signals = signals ? signals.filter(Boolean) : [],
      length = _signals.length;
    if (timeout || length) {
      var controller = new AbortController();
      var aborted;
      var onabort = function onabort(reason) {
        if (!aborted) {
          aborted = true;
          unsubscribe();
          var err = reason instanceof Error ? reason : this.reason;
          controller.abort(err instanceof AxiosError ? err : new CanceledError(err instanceof Error ? err.message : err));
        }
      };
      var timer = timeout && setTimeout(function () {
        timer = null;
        onabort(new AxiosError("timeout ".concat(timeout, " of ms exceeded"), AxiosError.ETIMEDOUT));
      }, timeout);
      var unsubscribe = function unsubscribe() {
        if (signals) {
          timer && clearTimeout(timer);
          timer = null;
          signals.forEach(function (signal) {
            signal.unsubscribe ? signal.unsubscribe(onabort) : signal.removeEventListener('abort', onabort);
          });
          signals = null;
        }
      };
      signals.forEach(function (signal) {
        return signal.addEventListener('abort', onabort);
      });
      var signal = controller.signal;
      signal.unsubscribe = function () {
        return utils$1.asap(unsubscribe);
      };
      return signal;
    }
  };
  var composeSignals$1 = composeSignals;

  var streamChunk = /*#__PURE__*/_regeneratorRuntime().mark(function streamChunk(chunk, chunkSize) {
    var len, pos, end;
    return _regeneratorRuntime().wrap(function streamChunk$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          len = chunk.byteLength;
          if (!(!chunkSize || len < chunkSize)) {
            _context.next = 5;
            break;
          }
          _context.next = 4;
          return chunk;
        case 4:
          return _context.abrupt("return");
        case 5:
          pos = 0;
        case 6:
          if (!(pos < len)) {
            _context.next = 13;
            break;
          }
          end = pos + chunkSize;
          _context.next = 10;
          return chunk.slice(pos, end);
        case 10:
          pos = end;
          _context.next = 6;
          break;
        case 13:
        case "end":
          return _context.stop();
      }
    }, streamChunk);
  });
  var readBytes = /*#__PURE__*/function () {
    var _ref = _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(iterable, chunkSize) {
      var _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, chunk;
      return _regeneratorRuntime().wrap(function _callee$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _iteratorAbruptCompletion = false;
            _didIteratorError = false;
            _context2.prev = 2;
            _iterator = _asyncIterator(readStream(iterable));
          case 4:
            _context2.next = 6;
            return _awaitAsyncGenerator(_iterator.next());
          case 6:
            if (!(_iteratorAbruptCompletion = !(_step = _context2.sent).done)) {
              _context2.next = 12;
              break;
            }
            chunk = _step.value;
            return _context2.delegateYield(_asyncGeneratorDelegate(_asyncIterator(streamChunk(chunk, chunkSize))), "t0", 9);
          case 9:
            _iteratorAbruptCompletion = false;
            _context2.next = 4;
            break;
          case 12:
            _context2.next = 18;
            break;
          case 14:
            _context2.prev = 14;
            _context2.t1 = _context2["catch"](2);
            _didIteratorError = true;
            _iteratorError = _context2.t1;
          case 18:
            _context2.prev = 18;
            _context2.prev = 19;
            if (!(_iteratorAbruptCompletion && _iterator["return"] != null)) {
              _context2.next = 23;
              break;
            }
            _context2.next = 23;
            return _awaitAsyncGenerator(_iterator["return"]());
          case 23:
            _context2.prev = 23;
            if (!_didIteratorError) {
              _context2.next = 26;
              break;
            }
            throw _iteratorError;
          case 26:
            return _context2.finish(23);
          case 27:
            return _context2.finish(18);
          case 28:
          case "end":
            return _context2.stop();
        }
      }, _callee, null, [[2, 14, 18, 28], [19,, 23, 27]]);
    }));
    return function readBytes(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
  var readStream = /*#__PURE__*/function () {
    var _ref2 = _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(stream) {
      var reader, _yield$_awaitAsyncGen, done, value;
      return _regeneratorRuntime().wrap(function _callee2$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (!stream[Symbol.asyncIterator]) {
              _context3.next = 3;
              break;
            }
            return _context3.delegateYield(_asyncGeneratorDelegate(_asyncIterator(stream)), "t0", 2);
          case 2:
            return _context3.abrupt("return");
          case 3:
            reader = stream.getReader();
            _context3.prev = 4;
          case 5:
            _context3.next = 7;
            return _awaitAsyncGenerator(reader.read());
          case 7:
            _yield$_awaitAsyncGen = _context3.sent;
            done = _yield$_awaitAsyncGen.done;
            value = _yield$_awaitAsyncGen.value;
            if (!done) {
              _context3.next = 12;
              break;
            }
            return _context3.abrupt("break", 16);
          case 12:
            _context3.next = 14;
            return value;
          case 14:
            _context3.next = 5;
            break;
          case 16:
            _context3.prev = 16;
            _context3.next = 19;
            return _awaitAsyncGenerator(reader.cancel());
          case 19:
            return _context3.finish(16);
          case 20:
          case "end":
            return _context3.stop();
        }
      }, _callee2, null, [[4,, 16, 20]]);
    }));
    return function readStream(_x3) {
      return _ref2.apply(this, arguments);
    };
  }();
  var trackStream = function trackStream(stream, chunkSize, onProgress, onFinish) {
    var iterator = readBytes(stream, chunkSize);
    var bytes = 0;
    var done;
    var _onFinish = function _onFinish(e) {
      if (!done) {
        done = true;
        onFinish && onFinish(e);
      }
    };
    return new ReadableStream({
      pull: function pull(controller) {
        return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
          var _yield$iterator$next, _done, value, len, loadedBytes;
          return _regeneratorRuntime().wrap(function _callee3$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return iterator.next();
              case 3:
                _yield$iterator$next = _context4.sent;
                _done = _yield$iterator$next.done;
                value = _yield$iterator$next.value;
                if (!_done) {
                  _context4.next = 10;
                  break;
                }
                _onFinish();
                controller.close();
                return _context4.abrupt("return");
              case 10:
                len = value.byteLength;
                if (onProgress) {
                  loadedBytes = bytes += len;
                  onProgress(loadedBytes);
                }
                controller.enqueue(new Uint8Array(value));
                _context4.next = 19;
                break;
              case 15:
                _context4.prev = 15;
                _context4.t0 = _context4["catch"](0);
                _onFinish(_context4.t0);
                throw _context4.t0;
              case 19:
              case "end":
                return _context4.stop();
            }
          }, _callee3, null, [[0, 15]]);
        }))();
      },
      cancel: function cancel(reason) {
        _onFinish(reason);
        return iterator["return"]();
      }
    }, {
      highWaterMark: 2
    });
  };

  var isFetchSupported = typeof fetch === 'function' && typeof Request === 'function' && typeof Response === 'function';
  var isReadableStreamSupported = isFetchSupported && typeof ReadableStream === 'function';

  // used only inside the fetch adapter
  var encodeText = isFetchSupported && (typeof TextEncoder === 'function' ? function (encoder) {
    return function (str) {
      return encoder.encode(str);
    };
  }(new TextEncoder()) : ( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(str) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = Uint8Array;
            _context.next = 3;
            return new Response(str).arrayBuffer();
          case 3:
            _context.t1 = _context.sent;
            return _context.abrupt("return", new _context.t0(_context.t1));
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }()));
  var test = function test(fn) {
    try {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      return !!fn.apply(void 0, args);
    } catch (e) {
      return false;
    }
  };
  var supportsRequestStream = isReadableStreamSupported && test(function () {
    var duplexAccessed = false;
    var hasContentType = new Request(platform.origin, {
      body: new ReadableStream(),
      method: 'POST',
      get duplex() {
        duplexAccessed = true;
        return 'half';
      }
    }).headers.has('Content-Type');
    return duplexAccessed && !hasContentType;
  });
  var DEFAULT_CHUNK_SIZE = 64 * 1024;
  var supportsResponseStream = isReadableStreamSupported && test(function () {
    return utils$1.isReadableStream(new Response('').body);
  });
  var resolvers = {
    stream: supportsResponseStream && function (res) {
      return res.body;
    }
  };
  isFetchSupported && function (res) {
    ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach(function (type) {
      !resolvers[type] && (resolvers[type] = utils$1.isFunction(res[type]) ? function (res) {
        return res[type]();
      } : function (_, config) {
        throw new AxiosError("Response type '".concat(type, "' is not supported"), AxiosError.ERR_NOT_SUPPORT, config);
      });
    });
  }(new Response());
  var getBodyLength = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(body) {
      var _request;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (!(body == null)) {
              _context2.next = 2;
              break;
            }
            return _context2.abrupt("return", 0);
          case 2:
            if (!utils$1.isBlob(body)) {
              _context2.next = 4;
              break;
            }
            return _context2.abrupt("return", body.size);
          case 4:
            if (!utils$1.isSpecCompliantForm(body)) {
              _context2.next = 9;
              break;
            }
            _request = new Request(platform.origin, {
              method: 'POST',
              body: body
            });
            _context2.next = 8;
            return _request.arrayBuffer();
          case 8:
            return _context2.abrupt("return", _context2.sent.byteLength);
          case 9:
            if (!(utils$1.isArrayBufferView(body) || utils$1.isArrayBuffer(body))) {
              _context2.next = 11;
              break;
            }
            return _context2.abrupt("return", body.byteLength);
          case 11:
            if (utils$1.isURLSearchParams(body)) {
              body = body + '';
            }
            if (!utils$1.isString(body)) {
              _context2.next = 16;
              break;
            }
            _context2.next = 15;
            return encodeText(body);
          case 15:
            return _context2.abrupt("return", _context2.sent.byteLength);
          case 16:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function getBodyLength(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  var resolveBodyLength = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(headers, body) {
      var length;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            length = utils$1.toFiniteNumber(headers.getContentLength());
            return _context3.abrupt("return", length == null ? getBodyLength(body) : length);
          case 2:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function resolveBodyLength(_x3, _x4) {
      return _ref3.apply(this, arguments);
    };
  }();
  var fetchAdapter = isFetchSupported && ( /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(config) {
      var _resolveConfig, url, method, data, signal, cancelToken, timeout, onDownloadProgress, onUploadProgress, responseType, headers, _resolveConfig$withCr, withCredentials, fetchOptions, composedSignal, request, unsubscribe, requestContentLength, _request, contentTypeHeader, _progressEventDecorat, _progressEventDecorat2, onProgress, flush, isCredentialsSupported, response, isStreamResponse, options, responseContentLength, _ref5, _ref6, _onProgress, _flush, responseData;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _resolveConfig = resolveConfig(config), url = _resolveConfig.url, method = _resolveConfig.method, data = _resolveConfig.data, signal = _resolveConfig.signal, cancelToken = _resolveConfig.cancelToken, timeout = _resolveConfig.timeout, onDownloadProgress = _resolveConfig.onDownloadProgress, onUploadProgress = _resolveConfig.onUploadProgress, responseType = _resolveConfig.responseType, headers = _resolveConfig.headers, _resolveConfig$withCr = _resolveConfig.withCredentials, withCredentials = _resolveConfig$withCr === void 0 ? 'same-origin' : _resolveConfig$withCr, fetchOptions = _resolveConfig.fetchOptions;
            responseType = responseType ? (responseType + '').toLowerCase() : 'text';
            composedSignal = composeSignals$1([signal, cancelToken && cancelToken.toAbortSignal()], timeout);
            unsubscribe = composedSignal && composedSignal.unsubscribe && function () {
              composedSignal.unsubscribe();
            };
            _context4.prev = 4;
            _context4.t0 = onUploadProgress && supportsRequestStream && method !== 'get' && method !== 'head';
            if (!_context4.t0) {
              _context4.next = 11;
              break;
            }
            _context4.next = 9;
            return resolveBodyLength(headers, data);
          case 9:
            _context4.t1 = requestContentLength = _context4.sent;
            _context4.t0 = _context4.t1 !== 0;
          case 11:
            if (!_context4.t0) {
              _context4.next = 15;
              break;
            }
            _request = new Request(url, {
              method: 'POST',
              body: data,
              duplex: "half"
            });
            if (utils$1.isFormData(data) && (contentTypeHeader = _request.headers.get('content-type'))) {
              headers.setContentType(contentTypeHeader);
            }
            if (_request.body) {
              _progressEventDecorat = progressEventDecorator(requestContentLength, progressEventReducer(asyncDecorator(onUploadProgress))), _progressEventDecorat2 = _slicedToArray(_progressEventDecorat, 2), onProgress = _progressEventDecorat2[0], flush = _progressEventDecorat2[1];
              data = trackStream(_request.body, DEFAULT_CHUNK_SIZE, onProgress, flush);
            }
          case 15:
            if (!utils$1.isString(withCredentials)) {
              withCredentials = withCredentials ? 'include' : 'omit';
            }

            // Cloudflare Workers throws when credentials are defined
            // see https://github.com/cloudflare/workerd/issues/902
            isCredentialsSupported = "credentials" in Request.prototype;
            request = new Request(url, _objectSpread2(_objectSpread2({}, fetchOptions), {}, {
              signal: composedSignal,
              method: method.toUpperCase(),
              headers: headers.normalize().toJSON(),
              body: data,
              duplex: "half",
              credentials: isCredentialsSupported ? withCredentials : undefined
            }));
            _context4.next = 20;
            return fetch(request);
          case 20:
            response = _context4.sent;
            isStreamResponse = supportsResponseStream && (responseType === 'stream' || responseType === 'response');
            if (supportsResponseStream && (onDownloadProgress || isStreamResponse && unsubscribe)) {
              options = {};
              ['status', 'statusText', 'headers'].forEach(function (prop) {
                options[prop] = response[prop];
              });
              responseContentLength = utils$1.toFiniteNumber(response.headers.get('content-length'));
              _ref5 = onDownloadProgress && progressEventDecorator(responseContentLength, progressEventReducer(asyncDecorator(onDownloadProgress), true)) || [], _ref6 = _slicedToArray(_ref5, 2), _onProgress = _ref6[0], _flush = _ref6[1];
              response = new Response(trackStream(response.body, DEFAULT_CHUNK_SIZE, _onProgress, function () {
                _flush && _flush();
                unsubscribe && unsubscribe();
              }), options);
            }
            responseType = responseType || 'text';
            _context4.next = 26;
            return resolvers[utils$1.findKey(resolvers, responseType) || 'text'](response, config);
          case 26:
            responseData = _context4.sent;
            !isStreamResponse && unsubscribe && unsubscribe();
            _context4.next = 30;
            return new Promise(function (resolve, reject) {
              settle(resolve, reject, {
                data: responseData,
                headers: AxiosHeaders$1.from(response.headers),
                status: response.status,
                statusText: response.statusText,
                config: config,
                request: request
              });
            });
          case 30:
            return _context4.abrupt("return", _context4.sent);
          case 33:
            _context4.prev = 33;
            _context4.t2 = _context4["catch"](4);
            unsubscribe && unsubscribe();
            if (!(_context4.t2 && _context4.t2.name === 'TypeError' && /Load failed|fetch/i.test(_context4.t2.message))) {
              _context4.next = 38;
              break;
            }
            throw Object.assign(new AxiosError('Network Error', AxiosError.ERR_NETWORK, config, request), {
              cause: _context4.t2.cause || _context4.t2
            });
          case 38:
            throw AxiosError.from(_context4.t2, _context4.t2 && _context4.t2.code, config, request);
          case 39:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[4, 33]]);
    }));
    return function (_x5) {
      return _ref4.apply(this, arguments);
    };
  }());

  var knownAdapters = {
    http: httpAdapter,
    xhr: xhrAdapter,
    fetch: fetchAdapter
  };
  utils$1.forEach(knownAdapters, function (fn, value) {
    if (fn) {
      try {
        Object.defineProperty(fn, 'name', {
          value: value
        });
      } catch (e) {
        // eslint-disable-next-line no-empty
      }
      Object.defineProperty(fn, 'adapterName', {
        value: value
      });
    }
  });
  var renderReason = function renderReason(reason) {
    return "- ".concat(reason);
  };
  var isResolvedHandle = function isResolvedHandle(adapter) {
    return utils$1.isFunction(adapter) || adapter === null || adapter === false;
  };
  var adapters = {
    getAdapter: function getAdapter(adapters) {
      adapters = utils$1.isArray(adapters) ? adapters : [adapters];
      var _adapters = adapters,
        length = _adapters.length;
      var nameOrAdapter;
      var adapter;
      var rejectedReasons = {};
      for (var i = 0; i < length; i++) {
        nameOrAdapter = adapters[i];
        var id = void 0;
        adapter = nameOrAdapter;
        if (!isResolvedHandle(nameOrAdapter)) {
          adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
          if (adapter === undefined) {
            throw new AxiosError("Unknown adapter '".concat(id, "'"));
          }
        }
        if (adapter) {
          break;
        }
        rejectedReasons[id || '#' + i] = adapter;
      }
      if (!adapter) {
        var reasons = Object.entries(rejectedReasons).map(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
            id = _ref2[0],
            state = _ref2[1];
          return "adapter ".concat(id, " ") + (state === false ? 'is not supported by the environment' : 'is not available in the build');
        });
        var s = length ? reasons.length > 1 ? 'since :\n' + reasons.map(renderReason).join('\n') : ' ' + renderReason(reasons[0]) : 'as no adapter specified';
        throw new AxiosError("There is no suitable adapter to dispatch the request " + s, 'ERR_NOT_SUPPORT');
      }
      return adapter;
    },
    adapters: knownAdapters
  };

  /**
   * Throws a `CanceledError` if cancellation has been requested.
   *
   * @param {Object} config The config that is to be used for the request
   *
   * @returns {void}
   */
  function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
      config.cancelToken.throwIfRequested();
    }
    if (config.signal && config.signal.aborted) {
      throw new CanceledError(null, config);
    }
  }

  /**
   * Dispatch a request to the server using the configured adapter.
   *
   * @param {object} config The config that is to be used for the request
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    config.headers = AxiosHeaders$1.from(config.headers);

    // Transform request data
    config.data = transformData.call(config, config.transformRequest);
    if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
      config.headers.setContentType('application/x-www-form-urlencoded', false);
    }
    var adapter = adapters.getAdapter(config.adapter || defaults$1.adapter);
    return adapter(config).then(function onAdapterResolution(response) {
      throwIfCancellationRequested(config);

      // Transform response data
      response.data = transformData.call(config, config.transformResponse, response);
      response.headers = AxiosHeaders$1.from(response.headers);
      return response;
    }, function onAdapterRejection(reason) {
      if (!isCancel(reason)) {
        throwIfCancellationRequested(config);

        // Transform response data
        if (reason && reason.response) {
          reason.response.data = transformData.call(config, config.transformResponse, reason.response);
          reason.response.headers = AxiosHeaders$1.from(reason.response.headers);
        }
      }
      return Promise.reject(reason);
    });
  }

  var VERSION = "1.9.0";

  var validators$1 = {};

  // eslint-disable-next-line func-names
  ['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function (type, i) {
    validators$1[type] = function validator(thing) {
      return _typeof(thing) === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
    };
  });
  var deprecatedWarnings = {};

  /**
   * Transitional option validator
   *
   * @param {function|boolean?} validator - set to false if the transitional option has been removed
   * @param {string?} version - deprecated version / removed since version
   * @param {string?} message - some message with additional info
   *
   * @returns {function}
   */
  validators$1.transitional = function transitional(validator, version, message) {
    function formatMessage(opt, desc) {
      return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
    }

    // eslint-disable-next-line func-names
    return function (value, opt, opts) {
      if (validator === false) {
        throw new AxiosError(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')), AxiosError.ERR_DEPRECATED);
      }
      if (version && !deprecatedWarnings[opt]) {
        deprecatedWarnings[opt] = true;
        // eslint-disable-next-line no-console
        console.warn(formatMessage(opt, ' has been deprecated since v' + version + ' and will be removed in the near future'));
      }
      return validator ? validator(value, opt, opts) : true;
    };
  };
  validators$1.spelling = function spelling(correctSpelling) {
    return function (value, opt) {
      // eslint-disable-next-line no-console
      console.warn("".concat(opt, " is likely a misspelling of ").concat(correctSpelling));
      return true;
    };
  };

  /**
   * Assert object's properties type
   *
   * @param {object} options
   * @param {object} schema
   * @param {boolean?} allowUnknown
   *
   * @returns {object}
   */

  function assertOptions(options, schema, allowUnknown) {
    if (_typeof(options) !== 'object') {
      throw new AxiosError('options must be an object', AxiosError.ERR_BAD_OPTION_VALUE);
    }
    var keys = Object.keys(options);
    var i = keys.length;
    while (i-- > 0) {
      var opt = keys[i];
      var validator = schema[opt];
      if (validator) {
        var value = options[opt];
        var result = value === undefined || validator(value, opt, options);
        if (result !== true) {
          throw new AxiosError('option ' + opt + ' must be ' + result, AxiosError.ERR_BAD_OPTION_VALUE);
        }
        continue;
      }
      if (allowUnknown !== true) {
        throw new AxiosError('Unknown option ' + opt, AxiosError.ERR_BAD_OPTION);
      }
    }
  }
  var validator = {
    assertOptions: assertOptions,
    validators: validators$1
  };

  var validators = validator.validators;

  /**
   * Create a new instance of Axios
   *
   * @param {Object} instanceConfig The default config for the instance
   *
   * @return {Axios} A new instance of Axios
   */
  var Axios = /*#__PURE__*/function () {
    function Axios(instanceConfig) {
      _classCallCheck(this, Axios);
      this.defaults = instanceConfig || {};
      this.interceptors = {
        request: new InterceptorManager$1(),
        response: new InterceptorManager$1()
      };
    }

    /**
     * Dispatch a request
     *
     * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
     * @param {?Object} config
     *
     * @returns {Promise} The Promise to be fulfilled
     */
    _createClass(Axios, [{
      key: "request",
      value: (function () {
        var _request2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(configOrUrl, config) {
          var dummy, stack;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return this._request(configOrUrl, config);
              case 3:
                return _context.abrupt("return", _context.sent);
              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                if (_context.t0 instanceof Error) {
                  dummy = {};
                  Error.captureStackTrace ? Error.captureStackTrace(dummy) : dummy = new Error();

                  // slice off the Error: ... line
                  stack = dummy.stack ? dummy.stack.replace(/^.+\n/, '') : '';
                  try {
                    if (!_context.t0.stack) {
                      _context.t0.stack = stack;
                      // match without the 2 top stack lines
                    } else if (stack && !String(_context.t0.stack).endsWith(stack.replace(/^.+\n.+\n/, ''))) {
                      _context.t0.stack += '\n' + stack;
                    }
                  } catch (e) {
                    // ignore the case where "stack" is an un-writable property
                  }
                }
                throw _context.t0;
              case 10:
              case "end":
                return _context.stop();
            }
          }, _callee, this, [[0, 6]]);
        }));
        function request(_x, _x2) {
          return _request2.apply(this, arguments);
        }
        return request;
      }())
    }, {
      key: "_request",
      value: function _request(configOrUrl, config) {
        /*eslint no-param-reassign:0*/
        // Allow for axios('example/url'[, config]) a la fetch API
        if (typeof configOrUrl === 'string') {
          config = config || {};
          config.url = configOrUrl;
        } else {
          config = configOrUrl || {};
        }
        config = mergeConfig(this.defaults, config);
        var _config = config,
          transitional = _config.transitional,
          paramsSerializer = _config.paramsSerializer,
          headers = _config.headers;
        if (transitional !== undefined) {
          validator.assertOptions(transitional, {
            silentJSONParsing: validators.transitional(validators["boolean"]),
            forcedJSONParsing: validators.transitional(validators["boolean"]),
            clarifyTimeoutError: validators.transitional(validators["boolean"])
          }, false);
        }
        if (paramsSerializer != null) {
          if (utils$1.isFunction(paramsSerializer)) {
            config.paramsSerializer = {
              serialize: paramsSerializer
            };
          } else {
            validator.assertOptions(paramsSerializer, {
              encode: validators["function"],
              serialize: validators["function"]
            }, true);
          }
        }

        // Set config.allowAbsoluteUrls
        if (config.allowAbsoluteUrls !== undefined) ; else if (this.defaults.allowAbsoluteUrls !== undefined) {
          config.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls;
        } else {
          config.allowAbsoluteUrls = true;
        }
        validator.assertOptions(config, {
          baseUrl: validators.spelling('baseURL'),
          withXsrfToken: validators.spelling('withXSRFToken')
        }, true);

        // Set config.method
        config.method = (config.method || this.defaults.method || 'get').toLowerCase();

        // Flatten headers
        var contextHeaders = headers && utils$1.merge(headers.common, headers[config.method]);
        headers && utils$1.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function (method) {
          delete headers[method];
        });
        config.headers = AxiosHeaders$1.concat(contextHeaders, headers);

        // filter out skipped interceptors
        var requestInterceptorChain = [];
        var synchronousRequestInterceptors = true;
        this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
          if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
            return;
          }
          synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
          requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
        });
        var responseInterceptorChain = [];
        this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
          responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
        });
        var promise;
        var i = 0;
        var len;
        if (!synchronousRequestInterceptors) {
          var chain = [dispatchRequest.bind(this), undefined];
          chain.unshift.apply(chain, requestInterceptorChain);
          chain.push.apply(chain, responseInterceptorChain);
          len = chain.length;
          promise = Promise.resolve(config);
          while (i < len) {
            promise = promise.then(chain[i++], chain[i++]);
          }
          return promise;
        }
        len = requestInterceptorChain.length;
        var newConfig = config;
        i = 0;
        while (i < len) {
          var onFulfilled = requestInterceptorChain[i++];
          var onRejected = requestInterceptorChain[i++];
          try {
            newConfig = onFulfilled(newConfig);
          } catch (error) {
            onRejected.call(this, error);
            break;
          }
        }
        try {
          promise = dispatchRequest.call(this, newConfig);
        } catch (error) {
          return Promise.reject(error);
        }
        i = 0;
        len = responseInterceptorChain.length;
        while (i < len) {
          promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
        }
        return promise;
      }
    }, {
      key: "getUri",
      value: function getUri(config) {
        config = mergeConfig(this.defaults, config);
        var fullPath = buildFullPath(config.baseURL, config.url, config.allowAbsoluteUrls);
        return buildURL(fullPath, config.params, config.paramsSerializer);
      }
    }]);
    return Axios;
  }(); // Provide aliases for supported request methods
  utils$1.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
    /*eslint func-names:0*/
    Axios.prototype[method] = function (url, config) {
      return this.request(mergeConfig(config || {}, {
        method: method,
        url: url,
        data: (config || {}).data
      }));
    };
  });
  utils$1.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
    /*eslint func-names:0*/

    function generateHTTPMethod(isForm) {
      return function httpMethod(url, data, config) {
        return this.request(mergeConfig(config || {}, {
          method: method,
          headers: isForm ? {
            'Content-Type': 'multipart/form-data'
          } : {},
          url: url,
          data: data
        }));
      };
    }
    Axios.prototype[method] = generateHTTPMethod();
    Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
  });
  var Axios$1 = Axios;

  /**
   * A `CancelToken` is an object that can be used to request cancellation of an operation.
   *
   * @param {Function} executor The executor function.
   *
   * @returns {CancelToken}
   */
  var CancelToken = /*#__PURE__*/function () {
    function CancelToken(executor) {
      _classCallCheck(this, CancelToken);
      if (typeof executor !== 'function') {
        throw new TypeError('executor must be a function.');
      }
      var resolvePromise;
      this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
      });
      var token = this;

      // eslint-disable-next-line func-names
      this.promise.then(function (cancel) {
        if (!token._listeners) return;
        var i = token._listeners.length;
        while (i-- > 0) {
          token._listeners[i](cancel);
        }
        token._listeners = null;
      });

      // eslint-disable-next-line func-names
      this.promise.then = function (onfulfilled) {
        var _resolve;
        // eslint-disable-next-line func-names
        var promise = new Promise(function (resolve) {
          token.subscribe(resolve);
          _resolve = resolve;
        }).then(onfulfilled);
        promise.cancel = function reject() {
          token.unsubscribe(_resolve);
        };
        return promise;
      };
      executor(function cancel(message, config, request) {
        if (token.reason) {
          // Cancellation has already been requested
          return;
        }
        token.reason = new CanceledError(message, config, request);
        resolvePromise(token.reason);
      });
    }

    /**
     * Throws a `CanceledError` if cancellation has been requested.
     */
    _createClass(CancelToken, [{
      key: "throwIfRequested",
      value: function throwIfRequested() {
        if (this.reason) {
          throw this.reason;
        }
      }

      /**
       * Subscribe to the cancel signal
       */
    }, {
      key: "subscribe",
      value: function subscribe(listener) {
        if (this.reason) {
          listener(this.reason);
          return;
        }
        if (this._listeners) {
          this._listeners.push(listener);
        } else {
          this._listeners = [listener];
        }
      }

      /**
       * Unsubscribe from the cancel signal
       */
    }, {
      key: "unsubscribe",
      value: function unsubscribe(listener) {
        if (!this._listeners) {
          return;
        }
        var index = this._listeners.indexOf(listener);
        if (index !== -1) {
          this._listeners.splice(index, 1);
        }
      }
    }, {
      key: "toAbortSignal",
      value: function toAbortSignal() {
        var _this = this;
        var controller = new AbortController();
        var abort = function abort(err) {
          controller.abort(err);
        };
        this.subscribe(abort);
        controller.signal.unsubscribe = function () {
          return _this.unsubscribe(abort);
        };
        return controller.signal;
      }

      /**
       * Returns an object that contains a new `CancelToken` and a function that, when called,
       * cancels the `CancelToken`.
       */
    }], [{
      key: "source",
      value: function source() {
        var cancel;
        var token = new CancelToken(function executor(c) {
          cancel = c;
        });
        return {
          token: token,
          cancel: cancel
        };
      }
    }]);
    return CancelToken;
  }();
  var CancelToken$1 = CancelToken;

  /**
   * Syntactic sugar for invoking a function and expanding an array for arguments.
   *
   * Common use case would be to use `Function.prototype.apply`.
   *
   *  ```js
   *  function f(x, y, z) {}
   *  var args = [1, 2, 3];
   *  f.apply(null, args);
   *  ```
   *
   * With `spread` this example can be re-written.
   *
   *  ```js
   *  spread(function(x, y, z) {})([1, 2, 3]);
   *  ```
   *
   * @param {Function} callback
   *
   * @returns {Function}
   */
  function spread(callback) {
    return function wrap(arr) {
      return callback.apply(null, arr);
    };
  }

  /**
   * Determines whether the payload is an error thrown by Axios
   *
   * @param {*} payload The value to test
   *
   * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
   */
  function isAxiosError(payload) {
    return utils$1.isObject(payload) && payload.isAxiosError === true;
  }

  var HttpStatusCode = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
  };
  Object.entries(HttpStatusCode).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    HttpStatusCode[value] = key;
  });
  var HttpStatusCode$1 = HttpStatusCode;

  /**
   * Create an instance of Axios
   *
   * @param {Object} defaultConfig The default config for the instance
   *
   * @returns {Axios} A new instance of Axios
   */
  function createInstance(defaultConfig) {
    var context = new Axios$1(defaultConfig);
    var instance = bind(Axios$1.prototype.request, context);

    // Copy axios.prototype to instance
    utils$1.extend(instance, Axios$1.prototype, context, {
      allOwnKeys: true
    });

    // Copy context to instance
    utils$1.extend(instance, context, null, {
      allOwnKeys: true
    });

    // Factory for creating new instances
    instance.create = function create(instanceConfig) {
      return createInstance(mergeConfig(defaultConfig, instanceConfig));
    };
    return instance;
  }

  // Create the default instance to be exported
  var axios = createInstance(defaults$1);

  // Expose Axios class to allow class inheritance
  axios.Axios = Axios$1;

  // Expose Cancel & CancelToken
  axios.CanceledError = CanceledError;
  axios.CancelToken = CancelToken$1;
  axios.isCancel = isCancel;
  axios.VERSION = VERSION;
  axios.toFormData = toFormData;

  // Expose AxiosError class
  axios.AxiosError = AxiosError;

  // alias for CanceledError for backward compatibility
  axios.Cancel = axios.CanceledError;

  // Expose all/spread
  axios.all = function all(promises) {
    return Promise.all(promises);
  };
  axios.spread = spread;

  // Expose isAxiosError
  axios.isAxiosError = isAxiosError;

  // Expose mergeConfig
  axios.mergeConfig = mergeConfig;
  axios.AxiosHeaders = AxiosHeaders$1;
  axios.formToJSON = function (thing) {
    return formDataToJSON(utils$1.isHTMLForm(thing) ? new FormData(thing) : thing);
  };
  axios.getAdapter = adapters.getAdapter;
  axios.HttpStatusCode = HttpStatusCode$1;
  axios["default"] = axios;

  return axios;

}));
//# sourceMappingURL=axios.js.map
