/*!
 * Engine.IO v6.6.4
 * (c) 2014-2025 Guillermo Rauch
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.eio = factory());
})(this, (function () { 'use strict';

  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }
  function _arrayWithoutHoles(r) {
    if (Array.isArray(r)) return _arrayLikeToArray(r);
  }
  function _construct(t, e, r) {
    if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
    var o = [null];
    o.push.apply(o, e);
    var p = new (t.bind.apply(t, o))();
    return r && _setPrototypeOf(p, r.prototype), p;
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
  function _extends() {
    return _extends = Object.assign ? Object.assign.bind() : function (n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
      }
      return n;
    }, _extends.apply(null, arguments);
  }
  function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    }, _getPrototypeOf(t);
  }
  function _inheritsLoose(t, o) {
    t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
  }
  function _isNativeFunction(t) {
    try {
      return -1 !== Function.toString.call(t).indexOf("[native code]");
    } catch (n) {
      return "function" == typeof t;
    }
  }
  function _isNativeReflectConstruct() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function () {
      return !!t;
    })();
  }
  function _iterableToArray(r) {
    if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
      return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
  }
  function _toConsumableArray(r) {
    return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
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
  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
  }
  function _wrapNativeSuper(t) {
    var r = "function" == typeof Map ? new Map() : void 0;
    return _wrapNativeSuper = function (t) {
      if (null === t || !_isNativeFunction(t)) return t;
      if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
      if (void 0 !== r) {
        if (r.has(t)) return r.get(t);
        r.set(t, Wrapper);
      }
      function Wrapper() {
        return _construct(t, arguments, _getPrototypeOf(this).constructor);
      }
      return Wrapper.prototype = Object.create(t.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), _setPrototypeOf(Wrapper, t);
    }, _wrapNativeSuper(t);
  }

  var PACKET_TYPES = Object.create(null); // no Map = no polyfill
  PACKET_TYPES["open"] = "0";
  PACKET_TYPES["close"] = "1";
  PACKET_TYPES["ping"] = "2";
  PACKET_TYPES["pong"] = "3";
  PACKET_TYPES["message"] = "4";
  PACKET_TYPES["upgrade"] = "5";
  PACKET_TYPES["noop"] = "6";
  var PACKET_TYPES_REVERSE = Object.create(null);
  Object.keys(PACKET_TYPES).forEach(function (key) {
    PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
  });
  var ERROR_PACKET = {
    type: "error",
    data: "parser error"
  };

  var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
  var withNativeArrayBuffer$1 = typeof ArrayBuffer === "function";
  // ArrayBuffer.isView method is not defined in IE10
  var isView = function isView(obj) {
    return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
  };
  var encodePacket = function encodePacket(_ref, supportsBinary, callback) {
    var type = _ref.type,
      data = _ref.data;
    if (withNativeBlob && data instanceof Blob) {
      if (supportsBinary) {
        return callback(data);
      } else {
        return encodeBlobAsBase64(data, callback);
      }
    } else if (withNativeArrayBuffer$1 && (data instanceof ArrayBuffer || isView(data))) {
      if (supportsBinary) {
        return callback(data);
      } else {
        return encodeBlobAsBase64(new Blob([data]), callback);
      }
    }
    // plain string
    return callback(PACKET_TYPES[type] + (data || ""));
  };
  var encodeBlobAsBase64 = function encodeBlobAsBase64(data, callback) {
    var fileReader = new FileReader();
    fileReader.onload = function () {
      var content = fileReader.result.split(",")[1];
      callback("b" + (content || ""));
    };
    return fileReader.readAsDataURL(data);
  };
  function toArray(data) {
    if (data instanceof Uint8Array) {
      return data;
    } else if (data instanceof ArrayBuffer) {
      return new Uint8Array(data);
    } else {
      return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
    }
  }
  var TEXT_ENCODER;
  function encodePacketToBinary(packet, callback) {
    if (withNativeBlob && packet.data instanceof Blob) {
      return packet.data.arrayBuffer().then(toArray).then(callback);
    } else if (withNativeArrayBuffer$1 && (packet.data instanceof ArrayBuffer || isView(packet.data))) {
      return callback(toArray(packet.data));
    }
    encodePacket(packet, false, function (encoded) {
      if (!TEXT_ENCODER) {
        TEXT_ENCODER = new TextEncoder();
      }
      callback(TEXT_ENCODER.encode(encoded));
    });
  }

  // imported from https://github.com/socketio/base64-arraybuffer
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  // Use a lookup table to find the index.
  var lookup = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
  for (var i = 0; i < chars.length; i++) {
    lookup[chars.charCodeAt(i)] = i;
  }
  var decode$1 = function decode(base64) {
    var bufferLength = base64.length * 0.75,
      len = base64.length,
      i,
      p = 0,
      encoded1,
      encoded2,
      encoded3,
      encoded4;
    if (base64[base64.length - 1] === '=') {
      bufferLength--;
      if (base64[base64.length - 2] === '=') {
        bufferLength--;
      }
    }
    var arraybuffer = new ArrayBuffer(bufferLength),
      bytes = new Uint8Array(arraybuffer);
    for (i = 0; i < len; i += 4) {
      encoded1 = lookup[base64.charCodeAt(i)];
      encoded2 = lookup[base64.charCodeAt(i + 1)];
      encoded3 = lookup[base64.charCodeAt(i + 2)];
      encoded4 = lookup[base64.charCodeAt(i + 3)];
      bytes[p++] = encoded1 << 2 | encoded2 >> 4;
      bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
      bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }
    return arraybuffer;
  };

  var withNativeArrayBuffer = typeof ArrayBuffer === "function";
  var decodePacket = function decodePacket(encodedPacket, binaryType) {
    if (typeof encodedPacket !== "string") {
      return {
        type: "message",
        data: mapBinary(encodedPacket, binaryType)
      };
    }
    var type = encodedPacket.charAt(0);
    if (type === "b") {
      return {
        type: "message",
        data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
      };
    }
    var packetType = PACKET_TYPES_REVERSE[type];
    if (!packetType) {
      return ERROR_PACKET;
    }
    return encodedPacket.length > 1 ? {
      type: PACKET_TYPES_REVERSE[type],
      data: encodedPacket.substring(1)
    } : {
      type: PACKET_TYPES_REVERSE[type]
    };
  };
  var decodeBase64Packet = function decodeBase64Packet(data, binaryType) {
    if (withNativeArrayBuffer) {
      var decoded = decode$1(data);
      return mapBinary(decoded, binaryType);
    } else {
      return {
        base64: true,
        data: data
      }; // fallback for old browsers
    }
  };
  var mapBinary = function mapBinary(data, binaryType) {
    switch (binaryType) {
      case "blob":
        if (data instanceof Blob) {
          // from WebSocket + binaryType "blob"
          return data;
        } else {
          // from HTTP long-polling or WebTransport
          return new Blob([data]);
        }
      case "arraybuffer":
      default:
        if (data instanceof ArrayBuffer) {
          // from HTTP long-polling (base64) or WebSocket + binaryType "arraybuffer"
          return data;
        } else {
          // from WebTransport (Uint8Array)
          return data.buffer;
        }
    }
  };

  var SEPARATOR = String.fromCharCode(30); // see https://en.wikipedia.org/wiki/Delimiter#ASCII_delimited_text
  var encodePayload = function encodePayload(packets, callback) {
    // some packets may be added to the array while encoding, so the initial length must be saved
    var length = packets.length;
    var encodedPackets = new Array(length);
    var count = 0;
    packets.forEach(function (packet, i) {
      // force base64 encoding for binary packets
      encodePacket(packet, false, function (encodedPacket) {
        encodedPackets[i] = encodedPacket;
        if (++count === length) {
          callback(encodedPackets.join(SEPARATOR));
        }
      });
    });
  };
  var decodePayload = function decodePayload(encodedPayload, binaryType) {
    var encodedPackets = encodedPayload.split(SEPARATOR);
    var packets = [];
    for (var i = 0; i < encodedPackets.length; i++) {
      var decodedPacket = decodePacket(encodedPackets[i], binaryType);
      packets.push(decodedPacket);
      if (decodedPacket.type === "error") {
        break;
      }
    }
    return packets;
  };
  function createPacketEncoderStream() {
    return new TransformStream({
      transform: function transform(packet, controller) {
        encodePacketToBinary(packet, function (encodedPacket) {
          var payloadLength = encodedPacket.length;
          var header;
          // inspired by the WebSocket format: https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#decoding_payload_length
          if (payloadLength < 126) {
            header = new Uint8Array(1);
            new DataView(header.buffer).setUint8(0, payloadLength);
          } else if (payloadLength < 65536) {
            header = new Uint8Array(3);
            var view = new DataView(header.buffer);
            view.setUint8(0, 126);
            view.setUint16(1, payloadLength);
          } else {
            header = new Uint8Array(9);
            var _view = new DataView(header.buffer);
            _view.setUint8(0, 127);
            _view.setBigUint64(1, BigInt(payloadLength));
          }
          // first bit indicates whether the payload is plain text (0) or binary (1)
          if (packet.data && typeof packet.data !== "string") {
            header[0] |= 0x80;
          }
          controller.enqueue(header);
          controller.enqueue(encodedPacket);
        });
      }
    });
  }
  var TEXT_DECODER;
  function totalLength(chunks) {
    return chunks.reduce(function (acc, chunk) {
      return acc + chunk.length;
    }, 0);
  }
  function concatChunks(chunks, size) {
    if (chunks[0].length === size) {
      return chunks.shift();
    }
    var buffer = new Uint8Array(size);
    var j = 0;
    for (var i = 0; i < size; i++) {
      buffer[i] = chunks[0][j++];
      if (j === chunks[0].length) {
        chunks.shift();
        j = 0;
      }
    }
    if (chunks.length && j < chunks[0].length) {
      chunks[0] = chunks[0].slice(j);
    }
    return buffer;
  }
  function createPacketDecoderStream(maxPayload, binaryType) {
    if (!TEXT_DECODER) {
      TEXT_DECODER = new TextDecoder();
    }
    var chunks = [];
    var state = 0 /* State.READ_HEADER */;
    var expectedLength = -1;
    var isBinary = false;
    return new TransformStream({
      transform: function transform(chunk, controller) {
        chunks.push(chunk);
        while (true) {
          if (state === 0 /* State.READ_HEADER */) {
            if (totalLength(chunks) < 1) {
              break;
            }
            var header = concatChunks(chunks, 1);
            isBinary = (header[0] & 0x80) === 0x80;
            expectedLength = header[0] & 0x7f;
            if (expectedLength < 126) {
              state = 3 /* State.READ_PAYLOAD */;
            } else if (expectedLength === 126) {
              state = 1 /* State.READ_EXTENDED_LENGTH_16 */;
            } else {
              state = 2 /* State.READ_EXTENDED_LENGTH_64 */;
            }
          } else if (state === 1 /* State.READ_EXTENDED_LENGTH_16 */) {
            if (totalLength(chunks) < 2) {
              break;
            }
            var headerArray = concatChunks(chunks, 2);
            expectedLength = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length).getUint16(0);
            state = 3 /* State.READ_PAYLOAD */;
          } else if (state === 2 /* State.READ_EXTENDED_LENGTH_64 */) {
            if (totalLength(chunks) < 8) {
              break;
            }
            var _headerArray = concatChunks(chunks, 8);
            var view = new DataView(_headerArray.buffer, _headerArray.byteOffset, _headerArray.length);
            var n = view.getUint32(0);
            if (n > Math.pow(2, 53 - 32) - 1) {
              // the maximum safe integer in JavaScript is 2^53 - 1
              controller.enqueue(ERROR_PACKET);
              break;
            }
            expectedLength = n * Math.pow(2, 32) + view.getUint32(4);
            state = 3 /* State.READ_PAYLOAD */;
          } else {
            if (totalLength(chunks) < expectedLength) {
              break;
            }
            var data = concatChunks(chunks, expectedLength);
            controller.enqueue(decodePacket(isBinary ? data : TEXT_DECODER.decode(data), binaryType));
            state = 0 /* State.READ_HEADER */;
          }
          if (expectedLength === 0 || expectedLength > maxPayload) {
            controller.enqueue(ERROR_PACKET);
            break;
          }
        }
      }
    });
  }
  var protocol = 4;

  /**
   * Initialize a new `Emitter`.
   *
   * @api public
   */

  function Emitter(obj) {
    if (obj) return mixin(obj);
  }

  /**
   * Mixin the emitter properties.
   *
   * @param {Object} obj
   * @return {Object}
   * @api private
   */

  function mixin(obj) {
    for (var key in Emitter.prototype) {
      obj[key] = Emitter.prototype[key];
    }
    return obj;
  }

  /**
   * Listen on the given `event` with `fn`.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @api public
   */

  Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
    this._callbacks = this._callbacks || {};
    (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
    return this;
  };

  /**
   * Adds an `event` listener that will be invoked a single
   * time then automatically removed.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @api public
   */

  Emitter.prototype.once = function (event, fn) {
    function on() {
      this.off(event, on);
      fn.apply(this, arguments);
    }
    on.fn = fn;
    this.on(event, on);
    return this;
  };

  /**
   * Remove the given callback for `event` or all
   * registered callbacks.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @api public
   */

  Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
    this._callbacks = this._callbacks || {};

    // all
    if (0 == arguments.length) {
      this._callbacks = {};
      return this;
    }

    // specific event
    var callbacks = this._callbacks['$' + event];
    if (!callbacks) return this;

    // remove all handlers
    if (1 == arguments.length) {
      delete this._callbacks['$' + event];
      return this;
    }

    // remove specific handler
    var cb;
    for (var i = 0; i < callbacks.length; i++) {
      cb = callbacks[i];
      if (cb === fn || cb.fn === fn) {
        callbacks.splice(i, 1);
        break;
      }
    }

    // Remove event specific arrays for event types that no
    // one is subscribed for to avoid memory leak.
    if (callbacks.length === 0) {
      delete this._callbacks['$' + event];
    }
    return this;
  };

  /**
   * Emit `event` with the given args.
   *
   * @param {String} event
   * @param {Mixed} ...
   * @return {Emitter}
   */

  Emitter.prototype.emit = function (event) {
    this._callbacks = this._callbacks || {};
    var args = new Array(arguments.length - 1),
      callbacks = this._callbacks['$' + event];
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
    if (callbacks) {
      callbacks = callbacks.slice(0);
      for (var i = 0, len = callbacks.length; i < len; ++i) {
        callbacks[i].apply(this, args);
      }
    }
    return this;
  };

  // alias used for reserved events (protected method)
  Emitter.prototype.emitReserved = Emitter.prototype.emit;

  /**
   * Return array of callbacks for `event`.
   *
   * @param {String} event
   * @return {Array}
   * @api public
   */

  Emitter.prototype.listeners = function (event) {
    this._callbacks = this._callbacks || {};
    return this._callbacks['$' + event] || [];
  };

  /**
   * Check if this emitter has `event` handlers.
   *
   * @param {String} event
   * @return {Boolean}
   * @api public
   */

  Emitter.prototype.hasListeners = function (event) {
    return !!this.listeners(event).length;
  };

  var nextTick = function () {
    var isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
    if (isPromiseAvailable) {
      return function (cb) {
        return Promise.resolve().then(cb);
      };
    } else {
      return function (cb, setTimeoutFn) {
        return setTimeoutFn(cb, 0);
      };
    }
  }();
  var globalThisShim = function () {
    if (typeof self !== "undefined") {
      return self;
    } else if (typeof window !== "undefined") {
      return window;
    } else {
      return Function("return this")();
    }
  }();
  var defaultBinaryType = "arraybuffer";
  function createCookieJar() {}

  function pick(obj) {
    for (var _len = arguments.length, attr = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      attr[_key - 1] = arguments[_key];
    }
    return attr.reduce(function (acc, k) {
      if (obj.hasOwnProperty(k)) {
        acc[k] = obj[k];
      }
      return acc;
    }, {});
  }
  // Keep a reference to the real timeout functions so they can be used when overridden
  var NATIVE_SET_TIMEOUT = globalThisShim.setTimeout;
  var NATIVE_CLEAR_TIMEOUT = globalThisShim.clearTimeout;
  function installTimerFunctions(obj, opts) {
    if (opts.useNativeTimers) {
      obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globalThisShim);
      obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globalThisShim);
    } else {
      obj.setTimeoutFn = globalThisShim.setTimeout.bind(globalThisShim);
      obj.clearTimeoutFn = globalThisShim.clearTimeout.bind(globalThisShim);
    }
  }
  // base64 encoded buffers are about 33% bigger (https://en.wikipedia.org/wiki/Base64)
  var BASE64_OVERHEAD = 1.33;
  // we could also have used `new Blob([obj]).size`, but it isn't supported in IE9
  function byteLength(obj) {
    if (typeof obj === "string") {
      return utf8Length(obj);
    }
    // arraybuffer or blob
    return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
  }
  function utf8Length(str) {
    var c = 0,
      length = 0;
    for (var i = 0, l = str.length; i < l; i++) {
      c = str.charCodeAt(i);
      if (c < 0x80) {
        length += 1;
      } else if (c < 0x800) {
        length += 2;
      } else if (c < 0xd800 || c >= 0xe000) {
        length += 3;
      } else {
        i++;
        length += 4;
      }
    }
    return length;
  }
  /**
   * Generates a random 8-characters string.
   */
  function randomString() {
    return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
  }

  // imported from https://github.com/galkn/querystring
  /**
   * Compiles a querystring
   * Returns string representation of the object
   *
   * @param {Object}
   * @api private
   */
  function encode(obj) {
    var str = '';
    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
        if (str.length) str += '&';
        str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
      }
    }
    return str;
  }
  /**
   * Parses a simple querystring into an object
   *
   * @param {String} qs
   * @api private
   */
  function decode(qs) {
    var qry = {};
    var pairs = qs.split('&');
    for (var i = 0, l = pairs.length; i < l; i++) {
      var pair = pairs[i].split('=');
      qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }
    return qry;
  }

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  var browser = {exports: {}};

  var ms;
  var hasRequiredMs;
  function requireMs() {
    if (hasRequiredMs) return ms;
    hasRequiredMs = 1;
    var s = 1000;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var w = d * 7;
    var y = d * 365.25;

    /**
     * Parse or format the given `val`.
     *
     * Options:
     *
     *  - `long` verbose formatting [false]
     *
     * @param {String|Number} val
     * @param {Object} [options]
     * @throws {Error} throw an error if val is not a non-empty string or a number
     * @return {String|Number}
     * @api public
     */

    ms = function ms(val, options) {
      options = options || {};
      var type = _typeof(val);
      if (type === 'string' && val.length > 0) {
        return parse(val);
      } else if (type === 'number' && isFinite(val)) {
        return options["long"] ? fmtLong(val) : fmtShort(val);
      }
      throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
    };

    /**
     * Parse the given `str` and return milliseconds.
     *
     * @param {String} str
     * @return {Number}
     * @api private
     */

    function parse(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || 'ms').toLowerCase();
      switch (type) {
        case 'years':
        case 'year':
        case 'yrs':
        case 'yr':
        case 'y':
          return n * y;
        case 'weeks':
        case 'week':
        case 'w':
          return n * w;
        case 'days':
        case 'day':
        case 'd':
          return n * d;
        case 'hours':
        case 'hour':
        case 'hrs':
        case 'hr':
        case 'h':
          return n * h;
        case 'minutes':
        case 'minute':
        case 'mins':
        case 'min':
        case 'm':
          return n * m;
        case 'seconds':
        case 'second':
        case 'secs':
        case 'sec':
        case 's':
          return n * s;
        case 'milliseconds':
        case 'millisecond':
        case 'msecs':
        case 'msec':
        case 'ms':
          return n;
        default:
          return undefined;
      }
    }

    /**
     * Short format for `ms`.
     *
     * @param {Number} ms
     * @return {String}
     * @api private
     */

    function fmtShort(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return Math.round(ms / d) + 'd';
      }
      if (msAbs >= h) {
        return Math.round(ms / h) + 'h';
      }
      if (msAbs >= m) {
        return Math.round(ms / m) + 'm';
      }
      if (msAbs >= s) {
        return Math.round(ms / s) + 's';
      }
      return ms + 'ms';
    }

    /**
     * Long format for `ms`.
     *
     * @param {Number} ms
     * @return {String}
     * @api private
     */

    function fmtLong(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return plural(ms, msAbs, d, 'day');
      }
      if (msAbs >= h) {
        return plural(ms, msAbs, h, 'hour');
      }
      if (msAbs >= m) {
        return plural(ms, msAbs, m, 'minute');
      }
      if (msAbs >= s) {
        return plural(ms, msAbs, s, 'second');
      }
      return ms + ' ms';
    }

    /**
     * Pluralization helper.
     */

    function plural(ms, msAbs, n, name) {
      var isPlural = msAbs >= n * 1.5;
      return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
    }
    return ms;
  }

  /**
   * This is the common logic for both the Node.js and web browser
   * implementations of `debug()`.
   */

  function setup(env) {
    createDebug.debug = createDebug;
    createDebug["default"] = createDebug;
    createDebug.coerce = coerce;
    createDebug.disable = disable;
    createDebug.enable = enable;
    createDebug.enabled = enabled;
    createDebug.humanize = requireMs();
    createDebug.destroy = destroy;
    Object.keys(env).forEach(function (key) {
      createDebug[key] = env[key];
    });

    /**
    * The currently active debug mode names, and names to skip.
    */

    createDebug.names = [];
    createDebug.skips = [];

    /**
    * Map of special "%n" handling functions, for the debug "format" argument.
    *
    * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
    */
    createDebug.formatters = {};

    /**
    * Selects a color for a debug namespace
    * @param {String} namespace The namespace string for the debug instance to be colored
    * @return {Number|String} An ANSI color code for the given namespace
    * @api private
    */
    function selectColor(namespace) {
      var hash = 0;
      for (var i = 0; i < namespace.length; i++) {
        hash = (hash << 5) - hash + namespace.charCodeAt(i);
        hash |= 0; // Convert to 32bit integer
      }
      return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
    }
    createDebug.selectColor = selectColor;

    /**
    * Create a debugger with the given `namespace`.
    *
    * @param {String} namespace
    * @return {Function}
    * @api public
    */
    function createDebug(namespace) {
      var prevTime;
      var enableOverride = null;
      var namespacesCache;
      var enabledCache;
      function debug() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        // Disabled?
        if (!debug.enabled) {
          return;
        }
        var self = debug;

        // Set `diff` timestamp
        var curr = Number(new Date());
        var ms = curr - (prevTime || curr);
        self.diff = ms;
        self.prev = prevTime;
        self.curr = curr;
        prevTime = curr;
        args[0] = createDebug.coerce(args[0]);
        if (typeof args[0] !== 'string') {
          // Anything else let's inspect with %O
          args.unshift('%O');
        }

        // Apply any `formatters` transformations
        var index = 0;
        args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
          // If we encounter an escaped % then don't increase the array index
          if (match === '%%') {
            return '%';
          }
          index++;
          var formatter = createDebug.formatters[format];
          if (typeof formatter === 'function') {
            var val = args[index];
            match = formatter.call(self, val);

            // Now we need to remove `args[index]` since it's inlined in the `format`
            args.splice(index, 1);
            index--;
          }
          return match;
        });

        // Apply env-specific formatting (colors, etc.)
        createDebug.formatArgs.call(self, args);
        var logFn = self.log || createDebug.log;
        logFn.apply(self, args);
      }
      debug.namespace = namespace;
      debug.useColors = createDebug.useColors();
      debug.color = createDebug.selectColor(namespace);
      debug.extend = extend;
      debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

      Object.defineProperty(debug, 'enabled', {
        enumerable: true,
        configurable: false,
        get: function get() {
          if (enableOverride !== null) {
            return enableOverride;
          }
          if (namespacesCache !== createDebug.namespaces) {
            namespacesCache = createDebug.namespaces;
            enabledCache = createDebug.enabled(namespace);
          }
          return enabledCache;
        },
        set: function set(v) {
          enableOverride = v;
        }
      });

      // Env-specific initialization logic for debug instances
      if (typeof createDebug.init === 'function') {
        createDebug.init(debug);
      }
      return debug;
    }
    function extend(namespace, delimiter) {
      var newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
      newDebug.log = this.log;
      return newDebug;
    }

    /**
    * Enables a debug mode by namespaces. This can include modes
    * separated by a colon and wildcards.
    *
    * @param {String} namespaces
    * @api public
    */
    function enable(namespaces) {
      createDebug.save(namespaces);
      createDebug.namespaces = namespaces;
      createDebug.names = [];
      createDebug.skips = [];
      var split = (typeof namespaces === 'string' ? namespaces : '').trim().replace(/\s+/g, ',').split(',').filter(Boolean);
      var _iterator = _createForOfIteratorHelper(split),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var ns = _step.value;
          if (ns[0] === '-') {
            createDebug.skips.push(ns.slice(1));
          } else {
            createDebug.names.push(ns);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    /**
     * Checks if the given string matches a namespace template, honoring
     * asterisks as wildcards.
     *
     * @param {String} search
     * @param {String} template
     * @return {Boolean}
     */
    function matchesTemplate(search, template) {
      var searchIndex = 0;
      var templateIndex = 0;
      var starIndex = -1;
      var matchIndex = 0;
      while (searchIndex < search.length) {
        if (templateIndex < template.length && (template[templateIndex] === search[searchIndex] || template[templateIndex] === '*')) {
          // Match character or proceed with wildcard
          if (template[templateIndex] === '*') {
            starIndex = templateIndex;
            matchIndex = searchIndex;
            templateIndex++; // Skip the '*'
          } else {
            searchIndex++;
            templateIndex++;
          }
        } else if (starIndex !== -1) {
          // eslint-disable-line no-negated-condition
          // Backtrack to the last '*' and try to match more characters
          templateIndex = starIndex + 1;
          matchIndex++;
          searchIndex = matchIndex;
        } else {
          return false; // No match
        }
      }

      // Handle trailing '*' in template
      while (templateIndex < template.length && template[templateIndex] === '*') {
        templateIndex++;
      }
      return templateIndex === template.length;
    }

    /**
    * Disable debug output.
    *
    * @return {String} namespaces
    * @api public
    */
    function disable() {
      var namespaces = [].concat(_toConsumableArray(createDebug.names), _toConsumableArray(createDebug.skips.map(function (namespace) {
        return '-' + namespace;
      }))).join(',');
      createDebug.enable('');
      return namespaces;
    }

    /**
    * Returns true if the given mode name is enabled, false otherwise.
    *
    * @param {String} name
    * @return {Boolean}
    * @api public
    */
    function enabled(name) {
      var _iterator2 = _createForOfIteratorHelper(createDebug.skips),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var skip = _step2.value;
          if (matchesTemplate(name, skip)) {
            return false;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      var _iterator3 = _createForOfIteratorHelper(createDebug.names),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var ns = _step3.value;
          if (matchesTemplate(name, ns)) {
            return true;
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      return false;
    }

    /**
    * Coerce `val`.
    *
    * @param {Mixed} val
    * @return {Mixed}
    * @api private
    */
    function coerce(val) {
      if (val instanceof Error) {
        return val.stack || val.message;
      }
      return val;
    }

    /**
    * XXX DO NOT USE. This is a temporary stub function.
    * XXX It WILL be removed in the next major release.
    */
    function destroy() {
      console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
    }
    createDebug.enable(createDebug.load());
    return createDebug;
  }
  var common = setup;

  /* eslint-env browser */
  browser.exports;
  (function (module, exports) {
    /**
     * This is the web browser implementation of `debug()`.
     */

    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.storage = localstorage();
    exports.destroy = function () {
      var warned = false;
      return function () {
        if (!warned) {
          warned = true;
          console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
        }
      };
    }();

    /**
     * Colors.
     */

    exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];

    /**
     * Currently only WebKit-based Web Inspectors, Firefox >= v31,
     * and the Firebug extension (any Firefox version) are known
     * to support "%c" CSS customizations.
     *
     * TODO: add a `localStorage` variable to explicitly enable/disable colors
     */

    // eslint-disable-next-line complexity
    function useColors() {
      // NB: In an Electron preload script, document will be defined but not fully
      // initialized. Since we know we're in Chrome, we'll just detect this case
      // explicitly
      if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
        return true;
      }

      // Internet Explorer and Edge do not support colors.
      if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
      }
      var m;

      // Is webkit? http://stackoverflow.com/a/16459606/376773
      // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
      // eslint-disable-next-line no-return-assign
      return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance ||
      // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) ||
      // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== 'undefined' && navigator.userAgent && (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m[1], 10) >= 31 ||
      // Double check webkit in userAgent just in case we are in a worker
      typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }

    /**
     * Colorize log arguments if enabled.
     *
     * @api public
     */

    function formatArgs(args) {
      args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);
      if (!this.useColors) {
        return;
      }
      var c = 'color: ' + this.color;
      args.splice(1, 0, c, 'color: inherit');

      // The final "%c" is somewhat tricky, because there could be other
      // arguments passed either before or after the %c, so we need to
      // figure out the correct index to insert the CSS into
      var index = 0;
      var lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, function (match) {
        if (match === '%%') {
          return;
        }
        index++;
        if (match === '%c') {
          // We only are interested in the *last* %c
          // (the user may have provided their own)
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }

    /**
     * Invokes `console.debug()` when available.
     * No-op when `console.debug` is not a "function".
     * If `console.debug` is not available, falls back
     * to `console.log`.
     *
     * @api public
     */
    exports.log = console.debug || console.log || function () {};

    /**
     * Save `namespaces`.
     *
     * @param {String} namespaces
     * @api private
     */
    function save(namespaces) {
      try {
        if (namespaces) {
          exports.storage.setItem('debug', namespaces);
        } else {
          exports.storage.removeItem('debug');
        }
      } catch (error) {
        // Swallow
        // XXX (@Qix-) should we be logging these?
      }
    }

    /**
     * Load `namespaces`.
     *
     * @return {String} returns the previously persisted debug modes
     * @api private
     */
    function load() {
      var r;
      try {
        r = exports.storage.getItem('debug') || exports.storage.getItem('DEBUG');
      } catch (error) {
        // Swallow
        // XXX (@Qix-) should we be logging these?
      }

      // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
      if (!r && typeof process !== 'undefined' && 'env' in process) {
        r = process.env.DEBUG;
      }
      return r;
    }

    /**
     * Localstorage attempts to return the localstorage.
     *
     * This is necessary because safari throws
     * when a user disables cookies/localstorage
     * and you attempt to access it.
     *
     * @return {LocalStorage}
     * @api private
     */

    function localstorage() {
      try {
        // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
        // The Browser also has localStorage in the global context.
        return localStorage;
      } catch (error) {
        // Swallow
        // XXX (@Qix-) should we be logging these?
      }
    }
    module.exports = common(exports);
    var formatters = module.exports.formatters;

    /**
     * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
     */

    formatters.j = function (v) {
      try {
        return JSON.stringify(v);
      } catch (error) {
        return '[UnexpectedJSONParseError]: ' + error.message;
      }
    };
  })(browser, browser.exports);
  var browserExports = browser.exports;
  var debugModule = /*@__PURE__*/getDefaultExportFromCjs(browserExports);

  var debug$5 = debugModule("engine.io-client:transport"); // debug()
  var TransportError = /*#__PURE__*/function (_Error) {
    function TransportError(reason, description, context) {
      var _this;
      _this = _Error.call(this, reason) || this;
      _this.description = description;
      _this.context = context;
      _this.type = "TransportError";
      return _this;
    }
    _inheritsLoose(TransportError, _Error);
    return TransportError;
  }( /*#__PURE__*/_wrapNativeSuper(Error));
  var Transport = /*#__PURE__*/function (_Emitter) {
    /**
     * Transport abstract constructor.
     *
     * @param {Object} opts - options
     * @protected
     */
    function Transport(opts) {
      var _this2;
      _this2 = _Emitter.call(this) || this;
      _this2.writable = false;
      installTimerFunctions(_this2, opts);
      _this2.opts = opts;
      _this2.query = opts.query;
      _this2.socket = opts.socket;
      _this2.supportsBinary = !opts.forceBase64;
      return _this2;
    }
    /**
     * Emits an error.
     *
     * @param {String} reason
     * @param description
     * @param context - the error context
     * @return {Transport} for chaining
     * @protected
     */
    _inheritsLoose(Transport, _Emitter);
    var _proto = Transport.prototype;
    _proto.onError = function onError(reason, description, context) {
      _Emitter.prototype.emitReserved.call(this, "error", new TransportError(reason, description, context));
      return this;
    }
    /**
     * Opens the transport.
     */;
    _proto.open = function open() {
      this.readyState = "opening";
      this.doOpen();
      return this;
    }
    /**
     * Closes the transport.
     */;
    _proto.close = function close() {
      if (this.readyState === "opening" || this.readyState === "open") {
        this.doClose();
        this.onClose();
      }
      return this;
    }
    /**
     * Sends multiple packets.
     *
     * @param {Array} packets
     */;
    _proto.send = function send(packets) {
      if (this.readyState === "open") {
        this.write(packets);
      } else {
        // this might happen if the transport was silently closed in the beforeunload event handler
        debug$5("transport is not open, discarding packets");
      }
    }
    /**
     * Called upon open
     *
     * @protected
     */;
    _proto.onOpen = function onOpen() {
      this.readyState = "open";
      this.writable = true;
      _Emitter.prototype.emitReserved.call(this, "open");
    }
    /**
     * Called with data.
     *
     * @param {String} data
     * @protected
     */;
    _proto.onData = function onData(data) {
      var packet = decodePacket(data, this.socket.binaryType);
      this.onPacket(packet);
    }
    /**
     * Called with a decoded packet.
     *
     * @protected
     */;
    _proto.onPacket = function onPacket(packet) {
      _Emitter.prototype.emitReserved.call(this, "packet", packet);
    }
    /**
     * Called upon close.
     *
     * @protected
     */;
    _proto.onClose = function onClose(details) {
      this.readyState = "closed";
      _Emitter.prototype.emitReserved.call(this, "close", details);
    }
    /**
     * Pauses the transport, in order not to lose packets during an upgrade.
     *
     * @param onPause
     */;
    _proto.pause = function pause(onPause) {};
    _proto.createUri = function createUri(schema) {
      var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return schema + "://" + this._hostname() + this._port() + this.opts.path + this._query(query);
    };
    _proto._hostname = function _hostname() {
      var hostname = this.opts.hostname;
      return hostname.indexOf(":") === -1 ? hostname : "[" + hostname + "]";
    };
    _proto._port = function _port() {
      if (this.opts.port && (this.opts.secure && Number(this.opts.port) !== 443 || !this.opts.secure && Number(this.opts.port) !== 80)) {
        return ":" + this.opts.port;
      } else {
        return "";
      }
    };
    _proto._query = function _query(query) {
      var encodedQuery = encode(query);
      return encodedQuery.length ? "?" + encodedQuery : "";
    };
    return Transport;
  }(Emitter);

  var debug$4 = debugModule("engine.io-client:polling"); // debug()
  var Polling = /*#__PURE__*/function (_Transport) {
    function Polling() {
      var _this;
      _this = _Transport.apply(this, arguments) || this;
      _this._polling = false;
      return _this;
    }
    _inheritsLoose(Polling, _Transport);
    var _proto = Polling.prototype;
    /**
     * Opens the socket (triggers polling). We write a PING message to determine
     * when the transport is open.
     *
     * @protected
     */
    _proto.doOpen = function doOpen() {
      this._poll();
    }
    /**
     * Pauses polling.
     *
     * @param {Function} onPause - callback upon buffers are flushed and transport is paused
     * @package
     */;
    _proto.pause = function pause(onPause) {
      var _this2 = this;
      this.readyState = "pausing";
      var pause = function pause() {
        debug$4("paused");
        _this2.readyState = "paused";
        onPause();
      };
      if (this._polling || !this.writable) {
        var total = 0;
        if (this._polling) {
          debug$4("we are currently polling - waiting to pause");
          total++;
          this.once("pollComplete", function () {
            debug$4("pre-pause polling complete");
            --total || pause();
          });
        }
        if (!this.writable) {
          debug$4("we are currently writing - waiting to pause");
          total++;
          this.once("drain", function () {
            debug$4("pre-pause writing complete");
            --total || pause();
          });
        }
      } else {
        pause();
      }
    }
    /**
     * Starts polling cycle.
     *
     * @private
     */;
    _proto._poll = function _poll() {
      debug$4("polling");
      this._polling = true;
      this.doPoll();
      this.emitReserved("poll");
    }
    /**
     * Overloads onData to detect payloads.
     *
     * @protected
     */;
    _proto.onData = function onData(data) {
      var _this3 = this;
      debug$4("polling got data %s", data);
      var callback = function callback(packet) {
        // if its the first message we consider the transport open
        if ("opening" === _this3.readyState && packet.type === "open") {
          _this3.onOpen();
        }
        // if its a close packet, we close the ongoing requests
        if ("close" === packet.type) {
          _this3.onClose({
            description: "transport closed by the server"
          });
          return false;
        }
        // otherwise bypass onData and handle the message
        _this3.onPacket(packet);
      };
      // decode payload
      decodePayload(data, this.socket.binaryType).forEach(callback);
      // if an event did not trigger closing
      if ("closed" !== this.readyState) {
        // if we got data we're not polling
        this._polling = false;
        this.emitReserved("pollComplete");
        if ("open" === this.readyState) {
          this._poll();
        } else {
          debug$4('ignoring poll - transport state "%s"', this.readyState);
        }
      }
    }
    /**
     * For polling, send a close packet.
     *
     * @protected
     */;
    _proto.doClose = function doClose() {
      var _this4 = this;
      var close = function close() {
        debug$4("writing close packet");
        _this4.write([{
          type: "close"
        }]);
      };
      if ("open" === this.readyState) {
        debug$4("transport open - closing");
        close();
      } else {
        // in case we're trying to close while
        // handshaking is in progress (GH-164)
        debug$4("transport not open - deferring close");
        this.once("open", close);
      }
    }
    /**
     * Writes a packets payload.
     *
     * @param {Array} packets - data packets
     * @protected
     */;
    _proto.write = function write(packets) {
      var _this5 = this;
      this.writable = false;
      encodePayload(packets, function (data) {
        _this5.doWrite(data, function () {
          _this5.writable = true;
          _this5.emitReserved("drain");
        });
      });
    }
    /**
     * Generates uri for connection.
     *
     * @private
     */;
    _proto.uri = function uri() {
      var schema = this.opts.secure ? "https" : "http";
      var query = this.query || {};
      // cache busting is forced
      if (false !== this.opts.timestampRequests) {
        query[this.opts.timestampParam] = randomString();
      }
      if (!this.supportsBinary && !query.sid) {
        query.b64 = 1;
      }
      return this.createUri(schema, query);
    };
    return _createClass(Polling, [{
      key: "name",
      get: function get() {
        return "polling";
      }
    }]);
  }(Transport);

  // imported from https://github.com/component/has-cors
  var value = false;
  try {
    value = typeof XMLHttpRequest !== 'undefined' && 'withCredentials' in new XMLHttpRequest();
  } catch (err) {
    // if XMLHttp support is disabled in IE then it will throw
    // when trying to create
  }
  var hasCORS = value;

  var debug$3 = debugModule("engine.io-client:polling"); // debug()
  function empty() {}
  var BaseXHR = /*#__PURE__*/function (_Polling) {
    /**
     * XHR Polling constructor.
     *
     * @param {Object} opts
     * @package
     */
    function BaseXHR(opts) {
      var _this;
      _this = _Polling.call(this, opts) || this;
      if (typeof location !== "undefined") {
        var isSSL = "https:" === location.protocol;
        var port = location.port;
        // some user agents have empty `location.port`
        if (!port) {
          port = isSSL ? "443" : "80";
        }
        _this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
      }
      return _this;
    }
    /**
     * Sends data.
     *
     * @param {String} data to send.
     * @param {Function} called upon flush.
     * @private
     */
    _inheritsLoose(BaseXHR, _Polling);
    var _proto = BaseXHR.prototype;
    _proto.doWrite = function doWrite(data, fn) {
      var _this2 = this;
      var req = this.request({
        method: "POST",
        data: data
      });
      req.on("success", fn);
      req.on("error", function (xhrStatus, context) {
        _this2.onError("xhr post error", xhrStatus, context);
      });
    }
    /**
     * Starts a poll cycle.
     *
     * @private
     */;
    _proto.doPoll = function doPoll() {
      var _this3 = this;
      debug$3("xhr poll");
      var req = this.request();
      req.on("data", this.onData.bind(this));
      req.on("error", function (xhrStatus, context) {
        _this3.onError("xhr poll error", xhrStatus, context);
      });
      this.pollXhr = req;
    };
    return BaseXHR;
  }(Polling);
  var Request = /*#__PURE__*/function (_Emitter) {
    /**
     * Request constructor
     *
     * @param {Object} options
     * @package
     */
    function Request(createRequest, uri, opts) {
      var _this4;
      _this4 = _Emitter.call(this) || this;
      _this4.createRequest = createRequest;
      installTimerFunctions(_this4, opts);
      _this4._opts = opts;
      _this4._method = opts.method || "GET";
      _this4._uri = uri;
      _this4._data = undefined !== opts.data ? opts.data : null;
      _this4._create();
      return _this4;
    }
    /**
     * Creates the XHR object and sends the request.
     *
     * @private
     */
    _inheritsLoose(Request, _Emitter);
    var _proto2 = Request.prototype;
    _proto2._create = function _create() {
      var _this5 = this;
      var _a;
      var opts = pick(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
      opts.xdomain = !!this._opts.xd;
      var xhr = this._xhr = this.createRequest(opts);
      try {
        debug$3("xhr open %s: %s", this._method, this._uri);
        xhr.open(this._method, this._uri, true);
        try {
          if (this._opts.extraHeaders) {
            // @ts-ignore
            xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
            for (var i in this._opts.extraHeaders) {
              if (this._opts.extraHeaders.hasOwnProperty(i)) {
                xhr.setRequestHeader(i, this._opts.extraHeaders[i]);
              }
            }
          }
        } catch (e) {}
        if ("POST" === this._method) {
          try {
            xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
          } catch (e) {}
        }
        try {
          xhr.setRequestHeader("Accept", "*/*");
        } catch (e) {}
        (_a = this._opts.cookieJar) === null || _a === void 0 ? void 0 : _a.addCookies(xhr);
        // ie6 check
        if ("withCredentials" in xhr) {
          xhr.withCredentials = this._opts.withCredentials;
        }
        if (this._opts.requestTimeout) {
          xhr.timeout = this._opts.requestTimeout;
        }
        xhr.onreadystatechange = function () {
          var _a;
          if (xhr.readyState === 3) {
            (_a = _this5._opts.cookieJar) === null || _a === void 0 ? void 0 : _a.parseCookies(
            // @ts-ignore
            xhr.getResponseHeader("set-cookie"));
          }
          if (4 !== xhr.readyState) return;
          if (200 === xhr.status || 1223 === xhr.status) {
            _this5._onLoad();
          } else {
            // make sure the `error` event handler that's user-set
            // does not throw in the same tick and gets caught here
            _this5.setTimeoutFn(function () {
              _this5._onError(typeof xhr.status === "number" ? xhr.status : 0);
            }, 0);
          }
        };
        debug$3("xhr data %s", this._data);
        xhr.send(this._data);
      } catch (e) {
        // Need to defer since .create() is called directly from the constructor
        // and thus the 'error' event can only be only bound *after* this exception
        // occurs.  Therefore, also, we cannot throw here at all.
        this.setTimeoutFn(function () {
          _this5._onError(e);
        }, 0);
        return;
      }
      if (typeof document !== "undefined") {
        this._index = Request.requestsCount++;
        Request.requests[this._index] = this;
      }
    }
    /**
     * Called upon error.
     *
     * @private
     */;
    _proto2._onError = function _onError(err) {
      this.emitReserved("error", err, this._xhr);
      this._cleanup(true);
    }
    /**
     * Cleans up house.
     *
     * @private
     */;
    _proto2._cleanup = function _cleanup(fromError) {
      if ("undefined" === typeof this._xhr || null === this._xhr) {
        return;
      }
      this._xhr.onreadystatechange = empty;
      if (fromError) {
        try {
          this._xhr.abort();
        } catch (e) {}
      }
      if (typeof document !== "undefined") {
        delete Request.requests[this._index];
      }
      this._xhr = null;
    }
    /**
     * Called upon load.
     *
     * @private
     */;
    _proto2._onLoad = function _onLoad() {
      var data = this._xhr.responseText;
      if (data !== null) {
        this.emitReserved("data", data);
        this.emitReserved("success");
        this._cleanup();
      }
    }
    /**
     * Aborts the request.
     *
     * @package
     */;
    _proto2.abort = function abort() {
      this._cleanup();
    };
    return Request;
  }(Emitter);
  Request.requestsCount = 0;
  Request.requests = {};
  /**
   * Aborts pending requests when unloading the window. This is needed to prevent
   * memory leaks (e.g. when using IE) and to ensure that no spurious error is
   * emitted.
   */
  if (typeof document !== "undefined") {
    // @ts-ignore
    if (typeof attachEvent === "function") {
      // @ts-ignore
      attachEvent("onunload", unloadHandler);
    } else if (typeof addEventListener === "function") {
      var terminationEvent = "onpagehide" in globalThisShim ? "pagehide" : "unload";
      addEventListener(terminationEvent, unloadHandler, false);
    }
  }
  function unloadHandler() {
    for (var i in Request.requests) {
      if (Request.requests.hasOwnProperty(i)) {
        Request.requests[i].abort();
      }
    }
  }
  var hasXHR2 = function () {
    var xhr = newRequest({
      xdomain: false
    });
    return xhr && xhr.responseType !== null;
  }();
  /**
   * HTTP long-polling based on the built-in `XMLHttpRequest` object.
   *
   * Usage: browser
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
   */
  var XHR = /*#__PURE__*/function (_BaseXHR) {
    function XHR(opts) {
      var _this6;
      _this6 = _BaseXHR.call(this, opts) || this;
      var forceBase64 = opts && opts.forceBase64;
      _this6.supportsBinary = hasXHR2 && !forceBase64;
      return _this6;
    }
    _inheritsLoose(XHR, _BaseXHR);
    var _proto3 = XHR.prototype;
    _proto3.request = function request() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _extends(opts, {
        xd: this.xd
      }, this.opts);
      return new Request(newRequest, this.uri(), opts);
    };
    return XHR;
  }(BaseXHR);
  function newRequest(opts) {
    var xdomain = opts.xdomain;
    // XMLHttpRequest can be disabled on IE
    try {
      if ("undefined" !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
        return new XMLHttpRequest();
      }
    } catch (e) {}
    if (!xdomain) {
      try {
        return new globalThisShim[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
      } catch (e) {}
    }
  }

  var debug$2 = debugModule("engine.io-client:websocket"); // debug()
  // detect ReactNative environment
  var isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
  var BaseWS = /*#__PURE__*/function (_Transport) {
    function BaseWS() {
      return _Transport.apply(this, arguments) || this;
    }
    _inheritsLoose(BaseWS, _Transport);
    var _proto = BaseWS.prototype;
    _proto.doOpen = function doOpen() {
      var uri = this.uri();
      var protocols = this.opts.protocols;
      // React Native only supports the 'headers' option, and will print a warning if anything else is passed
      var opts = isReactNative ? {} : pick(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
      if (this.opts.extraHeaders) {
        opts.headers = this.opts.extraHeaders;
      }
      try {
        this.ws = this.createSocket(uri, protocols, opts);
      } catch (err) {
        return this.emitReserved("error", err);
      }
      this.ws.binaryType = this.socket.binaryType;
      this.addEventListeners();
    }
    /**
     * Adds event listeners to the socket
     *
     * @private
     */;
    _proto.addEventListeners = function addEventListeners() {
      var _this = this;
      this.ws.onopen = function () {
        if (_this.opts.autoUnref) {
          _this.ws._socket.unref();
        }
        _this.onOpen();
      };
      this.ws.onclose = function (closeEvent) {
        return _this.onClose({
          description: "websocket connection closed",
          context: closeEvent
        });
      };
      this.ws.onmessage = function (ev) {
        return _this.onData(ev.data);
      };
      this.ws.onerror = function (e) {
        return _this.onError("websocket error", e);
      };
    };
    _proto.write = function write(packets) {
      var _this2 = this;
      this.writable = false;
      // encodePacket efficient as it uses WS framing
      // no need for encodePayload
      var _loop = function _loop() {
        var packet = packets[i];
        var lastPacket = i === packets.length - 1;
        encodePacket(packet, _this2.supportsBinary, function (data) {
          // Sometimes the websocket has already been closed but the browser didn't
          // have a chance of informing us about it yet, in that case send will
          // throw an error
          try {
            _this2.doWrite(packet, data);
          } catch (e) {
            debug$2("websocket closed before onclose event");
          }
          if (lastPacket) {
            // fake drain
            // defer to next tick to allow Socket to clear writeBuffer
            nextTick(function () {
              _this2.writable = true;
              _this2.emitReserved("drain");
            }, _this2.setTimeoutFn);
          }
        });
      };
      for (var i = 0; i < packets.length; i++) {
        _loop();
      }
    };
    _proto.doClose = function doClose() {
      if (typeof this.ws !== "undefined") {
        this.ws.onerror = function () {};
        this.ws.close();
        this.ws = null;
      }
    }
    /**
     * Generates uri for connection.
     *
     * @private
     */;
    _proto.uri = function uri() {
      var schema = this.opts.secure ? "wss" : "ws";
      var query = this.query || {};
      // append timestamp to URI
      if (this.opts.timestampRequests) {
        query[this.opts.timestampParam] = randomString();
      }
      // communicate binary support capabilities
      if (!this.supportsBinary) {
        query.b64 = 1;
      }
      return this.createUri(schema, query);
    };
    return _createClass(BaseWS, [{
      key: "name",
      get: function get() {
        return "websocket";
      }
    }]);
  }(Transport);
  var WebSocketCtor = globalThisShim.WebSocket || globalThisShim.MozWebSocket;
  /**
   * WebSocket transport based on the built-in `WebSocket` object.
   *
   * Usage: browser, Node.js (since v21), Deno, Bun
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket
   * @see https://caniuse.com/mdn-api_websocket
   * @see https://nodejs.org/api/globals.html#websocket
   */
  var WS = /*#__PURE__*/function (_BaseWS) {
    function WS() {
      return _BaseWS.apply(this, arguments) || this;
    }
    _inheritsLoose(WS, _BaseWS);
    var _proto2 = WS.prototype;
    _proto2.createSocket = function createSocket(uri, protocols, opts) {
      return !isReactNative ? protocols ? new WebSocketCtor(uri, protocols) : new WebSocketCtor(uri) : new WebSocketCtor(uri, protocols, opts);
    };
    _proto2.doWrite = function doWrite(_packet, data) {
      this.ws.send(data);
    };
    return WS;
  }(BaseWS);

  var debug$1 = debugModule("engine.io-client:webtransport"); // debug()
  /**
   * WebTransport transport based on the built-in `WebTransport` object.
   *
   * Usage: browser, Node.js (with the `@fails-components/webtransport` package)
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/WebTransport
   * @see https://caniuse.com/webtransport
   */
  var WT = /*#__PURE__*/function (_Transport) {
    function WT() {
      return _Transport.apply(this, arguments) || this;
    }
    _inheritsLoose(WT, _Transport);
    var _proto = WT.prototype;
    _proto.doOpen = function doOpen() {
      var _this = this;
      try {
        // @ts-ignore
        this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
      } catch (err) {
        return this.emitReserved("error", err);
      }
      this._transport.closed.then(function () {
        debug$1("transport closed gracefully");
        _this.onClose();
      })["catch"](function (err) {
        debug$1("transport closed due to %s", err);
        _this.onError("webtransport error", err);
      });
      // note: we could have used async/await, but that would require some additional polyfills
      this._transport.ready.then(function () {
        _this._transport.createBidirectionalStream().then(function (stream) {
          var decoderStream = createPacketDecoderStream(Number.MAX_SAFE_INTEGER, _this.socket.binaryType);
          var reader = stream.readable.pipeThrough(decoderStream).getReader();
          var encoderStream = createPacketEncoderStream();
          encoderStream.readable.pipeTo(stream.writable);
          _this._writer = encoderStream.writable.getWriter();
          var read = function read() {
            reader.read().then(function (_ref) {
              var done = _ref.done,
                value = _ref.value;
              if (done) {
                debug$1("session is closed");
                return;
              }
              debug$1("received chunk: %o", value);
              _this.onPacket(value);
              read();
            })["catch"](function (err) {
              debug$1("an error occurred while reading: %s", err);
            });
          };
          read();
          var packet = {
            type: "open"
          };
          if (_this.query.sid) {
            packet.data = "{\"sid\":\"".concat(_this.query.sid, "\"}");
          }
          _this._writer.write(packet).then(function () {
            return _this.onOpen();
          });
        });
      });
    };
    _proto.write = function write(packets) {
      var _this2 = this;
      this.writable = false;
      var _loop = function _loop() {
        var packet = packets[i];
        var lastPacket = i === packets.length - 1;
        _this2._writer.write(packet).then(function () {
          if (lastPacket) {
            nextTick(function () {
              _this2.writable = true;
              _this2.emitReserved("drain");
            }, _this2.setTimeoutFn);
          }
        });
      };
      for (var i = 0; i < packets.length; i++) {
        _loop();
      }
    };
    _proto.doClose = function doClose() {
      var _a;
      (_a = this._transport) === null || _a === void 0 ? void 0 : _a.close();
    };
    return _createClass(WT, [{
      key: "name",
      get: function get() {
        return "webtransport";
      }
    }]);
  }(Transport);

  var transports = {
    websocket: WS,
    webtransport: WT,
    polling: XHR
  };

  // imported from https://github.com/galkn/parseuri
  /**
   * Parses a URI
   *
   * Note: we could also have used the built-in URL object, but it isn't supported on all platforms.
   *
   * See:
   * - https://developer.mozilla.org/en-US/docs/Web/API/URL
   * - https://caniuse.com/url
   * - https://www.rfc-editor.org/rfc/rfc3986#appendix-B
   *
   * History of the parse() method:
   * - first commit: https://github.com/socketio/socket.io-client/commit/4ee1d5d94b3906a9c052b459f1a818b15f38f91c
   * - export into its own module: https://github.com/socketio/engine.io-client/commit/de2c561e4564efeb78f1bdb1ba39ef81b2822cb3
   * - reimport: https://github.com/socketio/engine.io-client/commit/df32277c3f6d622eec5ed09f493cae3f3391d242
   *
   * @author Steven Levithan <stevenlevithan.com> (MIT license)
   * @api private
   */
  var re = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
  var parts = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'];
  function parse(str) {
    if (str.length > 8000) {
      throw "URI too long";
    }
    var src = str,
      b = str.indexOf('['),
      e = str.indexOf(']');
    if (b != -1 && e != -1) {
      str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
    }
    var m = re.exec(str || ''),
      uri = {},
      i = 14;
    while (i--) {
      uri[parts[i]] = m[i] || '';
    }
    if (b != -1 && e != -1) {
      uri.source = src;
      uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
      uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
      uri.ipv6uri = true;
    }
    uri.pathNames = pathNames(uri, uri['path']);
    uri.queryKey = queryKey(uri, uri['query']);
    return uri;
  }
  function pathNames(obj, path) {
    var regx = /\/{2,9}/g,
      names = path.replace(regx, "/").split("/");
    if (path.slice(0, 1) == '/' || path.length === 0) {
      names.splice(0, 1);
    }
    if (path.slice(-1) == '/') {
      names.splice(names.length - 1, 1);
    }
    return names;
  }
  function queryKey(uri, query) {
    var data = {};
    query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function ($0, $1, $2) {
      if ($1) {
        data[$1] = $2;
      }
    });
    return data;
  }

  var debug = debugModule("engine.io-client:socket"); // debug()
  var withEventListeners = typeof addEventListener === "function" && typeof removeEventListener === "function";
  var OFFLINE_EVENT_LISTENERS = [];
  if (withEventListeners) {
    // within a ServiceWorker, any event handler for the 'offline' event must be added on the initial evaluation of the
    // script, so we create one single event listener here which will forward the event to the socket instances
    addEventListener("offline", function () {
      debug("closing %d connection(s) because the network was lost", OFFLINE_EVENT_LISTENERS.length);
      OFFLINE_EVENT_LISTENERS.forEach(function (listener) {
        return listener();
      });
    }, false);
  }
  /**
   * This class provides a WebSocket-like interface to connect to an Engine.IO server. The connection will be established
   * with one of the available low-level transports, like HTTP long-polling, WebSocket or WebTransport.
   *
   * This class comes without upgrade mechanism, which means that it will keep the first low-level transport that
   * successfully establishes the connection.
   *
   * In order to allow tree-shaking, there are no transports included, that's why the `transports` option is mandatory.
   *
   * @example
   * import { SocketWithoutUpgrade, WebSocket } from "engine.io-client";
   *
   * const socket = new SocketWithoutUpgrade({
   *   transports: [WebSocket]
   * });
   *
   * socket.on("open", () => {
   *   socket.send("hello");
   * });
   *
   * @see SocketWithUpgrade
   * @see Socket
   */
  var SocketWithoutUpgrade = /*#__PURE__*/function (_Emitter) {
    /**
     * Socket constructor.
     *
     * @param {String|Object} uri - uri or options
     * @param {Object} opts - options
     */
    function SocketWithoutUpgrade(uri, opts) {
      var _this;
      _this = _Emitter.call(this) || this;
      _this.binaryType = defaultBinaryType;
      _this.writeBuffer = [];
      _this._prevBufferLen = 0;
      _this._pingInterval = -1;
      _this._pingTimeout = -1;
      _this._maxPayload = -1;
      /**
       * The expiration timestamp of the {@link _pingTimeoutTimer} object is tracked, in case the timer is throttled and the
       * callback is not fired on time. This can happen for example when a laptop is suspended or when a phone is locked.
       */
      _this._pingTimeoutTime = Infinity;
      if (uri && "object" === _typeof(uri)) {
        opts = uri;
        uri = null;
      }
      if (uri) {
        var parsedUri = parse(uri);
        opts.hostname = parsedUri.host;
        opts.secure = parsedUri.protocol === "https" || parsedUri.protocol === "wss";
        opts.port = parsedUri.port;
        if (parsedUri.query) opts.query = parsedUri.query;
      } else if (opts.host) {
        opts.hostname = parse(opts.host).host;
      }
      installTimerFunctions(_this, opts);
      _this.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;
      if (opts.hostname && !opts.port) {
        // if no port is specified manually, use the protocol default
        opts.port = _this.secure ? "443" : "80";
      }
      _this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
      _this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : _this.secure ? "443" : "80");
      _this.transports = [];
      _this._transportsByName = {};
      opts.transports.forEach(function (t) {
        var transportName = t.prototype.name;
        _this.transports.push(transportName);
        _this._transportsByName[transportName] = t;
      });
      _this.opts = _extends({
        path: "/engine.io",
        agent: false,
        withCredentials: false,
        upgrade: true,
        timestampParam: "t",
        rememberUpgrade: false,
        addTrailingSlash: true,
        rejectUnauthorized: true,
        perMessageDeflate: {
          threshold: 1024
        },
        transportOptions: {},
        closeOnBeforeunload: false
      }, opts);
      _this.opts.path = _this.opts.path.replace(/\/$/, "") + (_this.opts.addTrailingSlash ? "/" : "");
      if (typeof _this.opts.query === "string") {
        _this.opts.query = decode(_this.opts.query);
      }
      if (withEventListeners) {
        if (_this.opts.closeOnBeforeunload) {
          // Firefox closes the connection when the "beforeunload" event is emitted but not Chrome. This event listener
          // ensures every browser behaves the same (no "disconnect" event at the Socket.IO level when the page is
          // closed/reloaded)
          _this._beforeunloadEventListener = function () {
            if (_this.transport) {
              // silently close the transport
              _this.transport.removeAllListeners();
              _this.transport.close();
            }
          };
          addEventListener("beforeunload", _this._beforeunloadEventListener, false);
        }
        if (_this.hostname !== "localhost") {
          debug("adding listener for the 'offline' event");
          _this._offlineEventListener = function () {
            _this._onClose("transport close", {
              description: "network connection lost"
            });
          };
          OFFLINE_EVENT_LISTENERS.push(_this._offlineEventListener);
        }
      }
      if (_this.opts.withCredentials) {
        _this._cookieJar = createCookieJar();
      }
      _this._open();
      return _this;
    }
    /**
     * Creates transport of the given type.
     *
     * @param {String} name - transport name
     * @return {Transport}
     * @private
     */
    _inheritsLoose(SocketWithoutUpgrade, _Emitter);
    var _proto = SocketWithoutUpgrade.prototype;
    _proto.createTransport = function createTransport(name) {
      debug('creating transport "%s"', name);
      var query = _extends({}, this.opts.query);
      // append engine.io protocol identifier
      query.EIO = protocol;
      // transport name
      query.transport = name;
      // session id if we already have one
      if (this.id) query.sid = this.id;
      var opts = _extends({}, this.opts, {
        query: query,
        socket: this,
        hostname: this.hostname,
        secure: this.secure,
        port: this.port
      }, this.opts.transportOptions[name]);
      debug("options: %j", opts);
      return new this._transportsByName[name](opts);
    }
    /**
     * Initializes transport to use and starts probe.
     *
     * @private
     */;
    _proto._open = function _open() {
      var _this2 = this;
      if (this.transports.length === 0) {
        // Emit error on next tick so it can be listened to
        this.setTimeoutFn(function () {
          _this2.emitReserved("error", "No transports available");
        }, 0);
        return;
      }
      var transportName = this.opts.rememberUpgrade && SocketWithoutUpgrade.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
      this.readyState = "opening";
      var transport = this.createTransport(transportName);
      transport.open();
      this.setTransport(transport);
    }
    /**
     * Sets the current transport. Disables the existing one (if any).
     *
     * @private
     */;
    _proto.setTransport = function setTransport(transport) {
      var _this3 = this;
      debug("setting transport %s", transport.name);
      if (this.transport) {
        debug("clearing existing transport %s", this.transport.name);
        this.transport.removeAllListeners();
      }
      // set up transport
      this.transport = transport;
      // set up transport listeners
      transport.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", function (reason) {
        return _this3._onClose("transport close", reason);
      });
    }
    /**
     * Called when connection is deemed open.
     *
     * @private
     */;
    _proto.onOpen = function onOpen() {
      debug("socket open");
      this.readyState = "open";
      SocketWithoutUpgrade.priorWebsocketSuccess = "websocket" === this.transport.name;
      this.emitReserved("open");
      this.flush();
    }
    /**
     * Handles a packet.
     *
     * @private
     */;
    _proto._onPacket = function _onPacket(packet) {
      if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
        debug('socket receive: type "%s", data "%s"', packet.type, packet.data);
        this.emitReserved("packet", packet);
        // Socket is live - any packet counts
        this.emitReserved("heartbeat");
        switch (packet.type) {
          case "open":
            this.onHandshake(JSON.parse(packet.data));
            break;
          case "ping":
            this._sendPacket("pong");
            this.emitReserved("ping");
            this.emitReserved("pong");
            this._resetPingTimeout();
            break;
          case "error":
            var err = new Error("server error");
            // @ts-ignore
            err.code = packet.data;
            this._onError(err);
            break;
          case "message":
            this.emitReserved("data", packet.data);
            this.emitReserved("message", packet.data);
            break;
        }
      } else {
        debug('packet received with socket readyState "%s"', this.readyState);
      }
    }
    /**
     * Called upon handshake completion.
     *
     * @param {Object} data - handshake obj
     * @private
     */;
    _proto.onHandshake = function onHandshake(data) {
      this.emitReserved("handshake", data);
      this.id = data.sid;
      this.transport.query.sid = data.sid;
      this._pingInterval = data.pingInterval;
      this._pingTimeout = data.pingTimeout;
      this._maxPayload = data.maxPayload;
      this.onOpen();
      // In case open handler closes socket
      if ("closed" === this.readyState) return;
      this._resetPingTimeout();
    }
    /**
     * Sets and resets ping timeout timer based on server pings.
     *
     * @private
     */;
    _proto._resetPingTimeout = function _resetPingTimeout() {
      var _this4 = this;
      this.clearTimeoutFn(this._pingTimeoutTimer);
      var delay = this._pingInterval + this._pingTimeout;
      this._pingTimeoutTime = Date.now() + delay;
      this._pingTimeoutTimer = this.setTimeoutFn(function () {
        _this4._onClose("ping timeout");
      }, delay);
      if (this.opts.autoUnref) {
        this._pingTimeoutTimer.unref();
      }
    }
    /**
     * Called on `drain` event
     *
     * @private
     */;
    _proto._onDrain = function _onDrain() {
      this.writeBuffer.splice(0, this._prevBufferLen);
      // setting prevBufferLen = 0 is very important
      // for example, when upgrading, upgrade packet is sent over,
      // and a nonzero prevBufferLen could cause problems on `drain`
      this._prevBufferLen = 0;
      if (0 === this.writeBuffer.length) {
        this.emitReserved("drain");
      } else {
        this.flush();
      }
    }
    /**
     * Flush write buffers.
     *
     * @private
     */;
    _proto.flush = function flush() {
      if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
        var packets = this._getWritablePackets();
        debug("flushing %d packets in socket", packets.length);
        this.transport.send(packets);
        // keep track of current length of writeBuffer
        // splice writeBuffer and callbackBuffer on `drain`
        this._prevBufferLen = packets.length;
        this.emitReserved("flush");
      }
    }
    /**
     * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
     * long-polling)
     *
     * @private
     */;
    _proto._getWritablePackets = function _getWritablePackets() {
      var shouldCheckPayloadSize = this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1;
      if (!shouldCheckPayloadSize) {
        return this.writeBuffer;
      }
      var payloadSize = 1; // first packet type
      for (var i = 0; i < this.writeBuffer.length; i++) {
        var data = this.writeBuffer[i].data;
        if (data) {
          payloadSize += byteLength(data);
        }
        if (i > 0 && payloadSize > this._maxPayload) {
          debug("only send %d out of %d packets", i, this.writeBuffer.length);
          return this.writeBuffer.slice(0, i);
        }
        payloadSize += 2; // separator + packet type
      }
      debug("payload size is %d (max: %d)", payloadSize, this._maxPayload);
      return this.writeBuffer;
    }
    /**
     * Checks whether the heartbeat timer has expired but the socket has not yet been notified.
     *
     * Note: this method is private for now because it does not really fit the WebSocket API, but if we put it in the
     * `write()` method then the message would not be buffered by the Socket.IO client.
     *
     * @return {boolean}
     * @private
     */
    /* private */;
    _proto._hasPingExpired = function _hasPingExpired() {
      var _this5 = this;
      if (!this._pingTimeoutTime) return true;
      var hasExpired = Date.now() > this._pingTimeoutTime;
      if (hasExpired) {
        debug("throttled timer detected, scheduling connection close");
        this._pingTimeoutTime = 0;
        nextTick(function () {
          _this5._onClose("ping timeout");
        }, this.setTimeoutFn);
      }
      return hasExpired;
    }
    /**
     * Sends a message.
     *
     * @param {String} msg - message.
     * @param {Object} options.
     * @param {Function} fn - callback function.
     * @return {Socket} for chaining.
     */;
    _proto.write = function write(msg, options, fn) {
      this._sendPacket("message", msg, options, fn);
      return this;
    }
    /**
     * Sends a message. Alias of {@link Socket#write}.
     *
     * @param {String} msg - message.
     * @param {Object} options.
     * @param {Function} fn - callback function.
     * @return {Socket} for chaining.
     */;
    _proto.send = function send(msg, options, fn) {
      this._sendPacket("message", msg, options, fn);
      return this;
    }
    /**
     * Sends a packet.
     *
     * @param {String} type: packet type.
     * @param {String} data.
     * @param {Object} options.
     * @param {Function} fn - callback function.
     * @private
     */;
    _proto._sendPacket = function _sendPacket(type, data, options, fn) {
      if ("function" === typeof data) {
        fn = data;
        data = undefined;
      }
      if ("function" === typeof options) {
        fn = options;
        options = null;
      }
      if ("closing" === this.readyState || "closed" === this.readyState) {
        return;
      }
      options = options || {};
      options.compress = false !== options.compress;
      var packet = {
        type: type,
        data: data,
        options: options
      };
      this.emitReserved("packetCreate", packet);
      this.writeBuffer.push(packet);
      if (fn) this.once("flush", fn);
      this.flush();
    }
    /**
     * Closes the connection.
     */;
    _proto.close = function close() {
      var _this6 = this;
      var close = function close() {
        _this6._onClose("forced close");
        debug("socket closing - telling transport to close");
        _this6.transport.close();
      };
      var cleanupAndClose = function cleanupAndClose() {
        _this6.off("upgrade", cleanupAndClose);
        _this6.off("upgradeError", cleanupAndClose);
        close();
      };
      var waitForUpgrade = function waitForUpgrade() {
        // wait for upgrade to finish since we can't send packets while pausing a transport
        _this6.once("upgrade", cleanupAndClose);
        _this6.once("upgradeError", cleanupAndClose);
      };
      if ("opening" === this.readyState || "open" === this.readyState) {
        this.readyState = "closing";
        if (this.writeBuffer.length) {
          this.once("drain", function () {
            if (_this6.upgrading) {
              waitForUpgrade();
            } else {
              close();
            }
          });
        } else if (this.upgrading) {
          waitForUpgrade();
        } else {
          close();
        }
      }
      return this;
    }
    /**
     * Called upon transport error
     *
     * @private
     */;
    _proto._onError = function _onError(err) {
      debug("socket error %j", err);
      SocketWithoutUpgrade.priorWebsocketSuccess = false;
      if (this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening") {
        debug("trying next transport");
        this.transports.shift();
        return this._open();
      }
      this.emitReserved("error", err);
      this._onClose("transport error", err);
    }
    /**
     * Called upon transport close.
     *
     * @private
     */;
    _proto._onClose = function _onClose(reason, description) {
      if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
        debug('socket close with reason: "%s"', reason);
        // clear timers
        this.clearTimeoutFn(this._pingTimeoutTimer);
        // stop event from firing again for transport
        this.transport.removeAllListeners("close");
        // ensure transport won't stay open
        this.transport.close();
        // ignore further transport communication
        this.transport.removeAllListeners();
        if (withEventListeners) {
          if (this._beforeunloadEventListener) {
            removeEventListener("beforeunload", this._beforeunloadEventListener, false);
          }
          if (this._offlineEventListener) {
            var i = OFFLINE_EVENT_LISTENERS.indexOf(this._offlineEventListener);
            if (i !== -1) {
              debug("removing listener for the 'offline' event");
              OFFLINE_EVENT_LISTENERS.splice(i, 1);
            }
          }
        }
        // set ready state
        this.readyState = "closed";
        // clear session id
        this.id = null;
        // emit close event
        this.emitReserved("close", reason, description);
        // clean buffers after, so users can still
        // grab the buffers on `close` event
        this.writeBuffer = [];
        this._prevBufferLen = 0;
      }
    };
    return SocketWithoutUpgrade;
  }(Emitter);
  SocketWithoutUpgrade.protocol = protocol;
  /**
   * This class provides a WebSocket-like interface to connect to an Engine.IO server. The connection will be established
   * with one of the available low-level transports, like HTTP long-polling, WebSocket or WebTransport.
   *
   * This class comes with an upgrade mechanism, which means that once the connection is established with the first
   * low-level transport, it will try to upgrade to a better transport.
   *
   * In order to allow tree-shaking, there are no transports included, that's why the `transports` option is mandatory.
   *
   * @example
   * import { SocketWithUpgrade, WebSocket } from "engine.io-client";
   *
   * const socket = new SocketWithUpgrade({
   *   transports: [WebSocket]
   * });
   *
   * socket.on("open", () => {
   *   socket.send("hello");
   * });
   *
   * @see SocketWithoutUpgrade
   * @see Socket
   */
  var SocketWithUpgrade = /*#__PURE__*/function (_SocketWithoutUpgrade) {
    function SocketWithUpgrade() {
      var _this7;
      _this7 = _SocketWithoutUpgrade.apply(this, arguments) || this;
      _this7._upgrades = [];
      return _this7;
    }
    _inheritsLoose(SocketWithUpgrade, _SocketWithoutUpgrade);
    var _proto2 = SocketWithUpgrade.prototype;
    _proto2.onOpen = function onOpen() {
      _SocketWithoutUpgrade.prototype.onOpen.call(this);
      if ("open" === this.readyState && this.opts.upgrade) {
        debug("starting upgrade probes");
        for (var i = 0; i < this._upgrades.length; i++) {
          this._probe(this._upgrades[i]);
        }
      }
    }
    /**
     * Probes a transport.
     *
     * @param {String} name - transport name
     * @private
     */;
    _proto2._probe = function _probe(name) {
      var _this8 = this;
      debug('probing transport "%s"', name);
      var transport = this.createTransport(name);
      var failed = false;
      SocketWithoutUpgrade.priorWebsocketSuccess = false;
      var onTransportOpen = function onTransportOpen() {
        if (failed) return;
        debug('probe transport "%s" opened', name);
        transport.send([{
          type: "ping",
          data: "probe"
        }]);
        transport.once("packet", function (msg) {
          if (failed) return;
          if ("pong" === msg.type && "probe" === msg.data) {
            debug('probe transport "%s" pong', name);
            _this8.upgrading = true;
            _this8.emitReserved("upgrading", transport);
            if (!transport) return;
            SocketWithoutUpgrade.priorWebsocketSuccess = "websocket" === transport.name;
            debug('pausing current transport "%s"', _this8.transport.name);
            _this8.transport.pause(function () {
              if (failed) return;
              if ("closed" === _this8.readyState) return;
              debug("changing transport and sending upgrade packet");
              cleanup();
              _this8.setTransport(transport);
              transport.send([{
                type: "upgrade"
              }]);
              _this8.emitReserved("upgrade", transport);
              transport = null;
              _this8.upgrading = false;
              _this8.flush();
            });
          } else {
            debug('probe transport "%s" failed', name);
            var err = new Error("probe error");
            // @ts-ignore
            err.transport = transport.name;
            _this8.emitReserved("upgradeError", err);
          }
        });
      };
      function freezeTransport() {
        if (failed) return;
        // Any callback called by transport should be ignored since now
        failed = true;
        cleanup();
        transport.close();
        transport = null;
      }
      // Handle any error that happens while probing
      var onerror = function onerror(err) {
        var error = new Error("probe error: " + err);
        // @ts-ignore
        error.transport = transport.name;
        freezeTransport();
        debug('probe transport "%s" failed because of error: %s', name, err);
        _this8.emitReserved("upgradeError", error);
      };
      function onTransportClose() {
        onerror("transport closed");
      }
      // When the socket is closed while we're probing
      function onclose() {
        onerror("socket closed");
      }
      // When the socket is upgraded while we're probing
      function onupgrade(to) {
        if (transport && to.name !== transport.name) {
          debug('"%s" works - aborting "%s"', to.name, transport.name);
          freezeTransport();
        }
      }
      // Remove all listeners on the transport and on self
      var cleanup = function cleanup() {
        transport.removeListener("open", onTransportOpen);
        transport.removeListener("error", onerror);
        transport.removeListener("close", onTransportClose);
        _this8.off("close", onclose);
        _this8.off("upgrading", onupgrade);
      };
      transport.once("open", onTransportOpen);
      transport.once("error", onerror);
      transport.once("close", onTransportClose);
      this.once("close", onclose);
      this.once("upgrading", onupgrade);
      if (this._upgrades.indexOf("webtransport") !== -1 && name !== "webtransport") {
        // favor WebTransport
        this.setTimeoutFn(function () {
          if (!failed) {
            transport.open();
          }
        }, 200);
      } else {
        transport.open();
      }
    };
    _proto2.onHandshake = function onHandshake(data) {
      this._upgrades = this._filterUpgrades(data.upgrades);
      _SocketWithoutUpgrade.prototype.onHandshake.call(this, data);
    }
    /**
     * Filters upgrades, returning only those matching client transports.
     *
     * @param {Array} upgrades - server upgrades
     * @private
     */;
    _proto2._filterUpgrades = function _filterUpgrades(upgrades) {
      var filteredUpgrades = [];
      for (var i = 0; i < upgrades.length; i++) {
        if (~this.transports.indexOf(upgrades[i])) filteredUpgrades.push(upgrades[i]);
      }
      return filteredUpgrades;
    };
    return SocketWithUpgrade;
  }(SocketWithoutUpgrade);
  /**
   * This class provides a WebSocket-like interface to connect to an Engine.IO server. The connection will be established
   * with one of the available low-level transports, like HTTP long-polling, WebSocket or WebTransport.
   *
   * This class comes with an upgrade mechanism, which means that once the connection is established with the first
   * low-level transport, it will try to upgrade to a better transport.
   *
   * @example
   * import { Socket } from "engine.io-client";
   *
   * const socket = new Socket();
   *
   * socket.on("open", () => {
   *   socket.send("hello");
   * });
   *
   * @see SocketWithoutUpgrade
   * @see SocketWithUpgrade
   */
  var Socket = /*#__PURE__*/function (_SocketWithUpgrade) {
    function Socket(uri) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var o = _typeof(uri) === "object" ? uri : opts;
      if (!o.transports || o.transports && typeof o.transports[0] === "string") {
        o.transports = (o.transports || ["polling", "websocket", "webtransport"]).map(function (transportName) {
          return transports[transportName];
        }).filter(function (t) {
          return !!t;
        });
      }
      return _SocketWithUpgrade.call(this, uri, o) || this;
    }
    _inheritsLoose(Socket, _SocketWithUpgrade);
    return Socket;
  }(SocketWithUpgrade);

  var browserEntrypoint = (function (uri, opts) {
    return new Socket(uri, opts);
  });

  return browserEntrypoint;

}));
//# sourceMappingURL=engine.io.js.map
