var _class2, _worker, _signal, _markInRegisterWorker, _worker_threads;
function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classCheckPrivateStaticFieldDescriptor(descriptor, action) { if (descriptor === undefined) { throw new TypeError("attempted to " + action + " private static field before its declaration"); } }
function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
const path = require("path");
const ACTIONS = {
  GET_DEFAULT_EXTENSIONS: "GET_DEFAULT_EXTENSIONS",
  SET_OPTIONS: "SET_OPTIONS",
  TRANSFORM: "TRANSFORM",
  TRANSFORM_SYNC: "TRANSFORM_SYNC"
};
var _send = new WeakMap();
var _eCache = new WeakMap();
class Client {
  constructor(send) {
    _classPrivateFieldInitSpec(this, _send, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _eCache, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldSet(this, _send, send);
  }
  getDefaultExtensions() {
    var _classPrivateFieldGet2;
    return (_classPrivateFieldGet2 = _classPrivateFieldGet(this, _eCache)) != null ? _classPrivateFieldGet2 : _classPrivateFieldSet(this, _eCache, _classPrivateFieldGet(this, _send).call(this, ACTIONS.GET_DEFAULT_EXTENSIONS, undefined));
  }
  setOptions(options) {
    return _classPrivateFieldGet(this, _send).call(this, ACTIONS.SET_OPTIONS, options);
  }
  transform(code, filename) {
    return _classPrivateFieldGet(this, _send).call(this, ACTIONS.TRANSFORM, {
      code,
      filename
    });
  }
}
exports.WorkerClient = (_worker = new WeakMap(), _signal = new WeakMap(), (_class2 = class WorkerClient extends Client {
  constructor() {
    super((action, payload) => {
      _classPrivateFieldGet(this, _signal)[0] = 0;
      const subChannel = new (_classStaticPrivateFieldSpecGet(WorkerClient, _class2, _worker_threads).MessageChannel)();
      _classPrivateFieldGet(this, _worker).postMessage({
        signal: _classPrivateFieldGet(this, _signal),
        port: subChannel.port1,
        action,
        payload
      }, [subChannel.port1]);
      Atomics.wait(_classPrivateFieldGet(this, _signal), 0, 0);
      const {
        message
      } = _classStaticPrivateFieldSpecGet(WorkerClient, _class2, _worker_threads).receiveMessageOnPort(subChannel.port2);
      if (message.error) throw Object.assign(message.error, message.errorData);else return message.result;
    });
    _classPrivateFieldInitSpec(this, _worker, {
      writable: true,
      value: new (_classStaticPrivateFieldSpecGet(WorkerClient, _class2, _worker_threads).Worker)(path.resolve(__dirname, "./worker/index.js"), {
        env: _classStaticPrivateFieldSpecGet(WorkerClient, _class2, _markInRegisterWorker).call(WorkerClient, process.env)
      })
    });
    _classPrivateFieldInitSpec(this, _signal, {
      writable: true,
      value: new Int32Array(new SharedArrayBuffer(4))
    });
    _classPrivateFieldGet(this, _worker).unref();
  }
}, _markInRegisterWorker = {
  get: _get_markInRegisterWorker,
  set: void 0
}, _worker_threads = {
  get: _get_worker_threads,
  set: void 0
}, _class2));
function _get_worker_threads() {
  return require("worker_threads");
}
function _get_markInRegisterWorker() {
  return require("./is-in-register-worker.js").markInRegisterWorker;
}
{
  var _class3, _handleMessage;
  exports.LocalClient = (_class3 = class LocalClient extends Client {
    constructor() {
      var _classStaticPrivateFi;
      (_classStaticPrivateFi = _classStaticPrivateFieldSpecGet(LocalClient, _class3, _handleMessage)) != null ? _classStaticPrivateFi : _classStaticPrivateFieldSpecSet(LocalClient, _class3, _handleMessage, require("./worker/handle-message.js"));
      super((action, payload) => {
        return _classStaticPrivateFieldSpecGet(LocalClient, _class3, _handleMessage).call(LocalClient, action === ACTIONS.TRANSFORM ? ACTIONS.TRANSFORM_SYNC : action, payload);
      });
      this.isLocalClient = true;
    }
  }, _handleMessage = {
    writable: true,
    value: void 0
  }, _class3);
}

//# sourceMappingURL=worker-client.js.map
