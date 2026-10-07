"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkerClient = exports.Client = exports.ACTIONS = void 0;
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
const path = require("path");
const ACTIONS = exports.ACTIONS = {
  GET_VERSION: "GET_VERSION",
  GET_TYPES_INFO: "GET_TYPES_INFO",
  GET_VISITOR_KEYS: "GET_VISITOR_KEYS",
  GET_TOKEN_LABELS: "GET_TOKEN_LABELS",
  MAYBE_PARSE: "MAYBE_PARSE",
  MAYBE_PARSE_SYNC: "MAYBE_PARSE_SYNC"
};
var _send = new WeakMap();
var _vCache = new WeakMap();
var _tiCache = new WeakMap();
var _vkCache = new WeakMap();
var _tlCache = new WeakMap();
class Client {
  constructor(send) {
    _classPrivateFieldInitSpec(this, _send, void 0);
    _classPrivateFieldInitSpec(this, _vCache, void 0);
    _classPrivateFieldInitSpec(this, _tiCache, void 0);
    _classPrivateFieldInitSpec(this, _vkCache, void 0);
    _classPrivateFieldInitSpec(this, _tlCache, void 0);
    _classPrivateFieldSet(_send, this, send);
  }
  getVersion() {
    var _classPrivateFieldGet2;
    return (_classPrivateFieldGet2 = _classPrivateFieldGet(_vCache, this)) != null ? _classPrivateFieldGet2 : _classPrivateFieldSet(_vCache, this, _classPrivateFieldGet(_send, this).call(this, ACTIONS.GET_VERSION, undefined));
  }
  getTypesInfo() {
    var _classPrivateFieldGet3;
    return (_classPrivateFieldGet3 = _classPrivateFieldGet(_tiCache, this)) != null ? _classPrivateFieldGet3 : _classPrivateFieldSet(_tiCache, this, _classPrivateFieldGet(_send, this).call(this, ACTIONS.GET_TYPES_INFO, undefined));
  }
  getVisitorKeys() {
    var _classPrivateFieldGet4;
    return (_classPrivateFieldGet4 = _classPrivateFieldGet(_vkCache, this)) != null ? _classPrivateFieldGet4 : _classPrivateFieldSet(_vkCache, this, _classPrivateFieldGet(_send, this).call(this, ACTIONS.GET_VISITOR_KEYS, undefined));
  }
  getTokLabels() {
    var _classPrivateFieldGet5;
    return (_classPrivateFieldGet5 = _classPrivateFieldGet(_tlCache, this)) != null ? _classPrivateFieldGet5 : _classPrivateFieldSet(_tlCache, this, _classPrivateFieldGet(_send, this).call(this, ACTIONS.GET_TOKEN_LABELS, undefined));
  }
  maybeParse(code, options) {
    return _classPrivateFieldGet(_send, this).call(this, ACTIONS.MAYBE_PARSE, {
      code,
      options
    });
  }
}
exports.Client = Client;
var _worker = new WeakMap();
class WorkerClient extends Client {
  constructor() {
    super((action, payload) => {
      const signal = new Int32Array(new SharedArrayBuffer(8));
      const subChannel = new (_get_worker_threads(WorkerClient).MessageChannel)();
      _classPrivateFieldGet(_worker, this).postMessage({
        signal,
        port: subChannel.port1,
        action,
        payload
      }, [subChannel.port1]);
      Atomics.wait(signal, 0, 0);
      const {
        message
      } = _get_worker_threads(WorkerClient).receiveMessageOnPort(subChannel.port2);
      if (message.error) throw Object.assign(message.error, message.errorData);else return message.result;
    });
    _classPrivateFieldInitSpec(this, _worker, new (_get_worker_threads(WorkerClient).Worker)(path.resolve(__dirname, "../lib/worker/index.cjs"), {
      env: _get_worker_threads(WorkerClient).SHARE_ENV
    }));
    _classPrivateFieldGet(_worker, this).unref();
  }
}
exports.WorkerClient = WorkerClient;
function _get_worker_threads(_this) {
  var _worker_threads_cache2;
  return (_worker_threads_cache2 = _worker_threads_cache._) != null ? _worker_threads_cache2 : _worker_threads_cache._ = require("worker_threads");
}
var _worker_threads_cache = {
  _: void 0
};
{
  var _LocalClient, _handleMessage;
  exports.LocalClient = (_LocalClient = class LocalClient extends Client {
    constructor() {
      var _assertClassBrand$_;
      (_assertClassBrand$_ = _assertClassBrand(_LocalClient, LocalClient, _handleMessage)._) != null ? _assertClassBrand$_ : _handleMessage._ = _assertClassBrand(_LocalClient, LocalClient, require("./worker/handle-message.cjs"));
      super((action, payload) => {
        return _assertClassBrand(_LocalClient, LocalClient, _handleMessage)._.call(LocalClient, action === ACTIONS.MAYBE_PARSE ? ACTIONS.MAYBE_PARSE_SYNC : action, payload);
      });
    }
  }, _handleMessage = {
    _: void 0
  }, _LocalClient);
}

//# sourceMappingURL=client.cjs.map
