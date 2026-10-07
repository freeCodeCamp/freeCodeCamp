"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Child = void 0;

function _assert() {
  const data = _interopRequireDefault(require("assert"));

  _assert = function () {
    return data;
  };

  return data;
}

function _nullthrows() {
  const data = _interopRequireDefault(require("nullthrows"));

  _nullthrows = function () {
    return data;
  };

  return data;
}

function _logger() {
  const data = _interopRequireWildcard(require("@parcel/logger"));

  _logger = function () {
    return data;
  };

  return data;
}

function _diagnostic() {
  const data = _interopRequireWildcard(require("@parcel/diagnostic"));

  _diagnostic = function () {
    return data;
  };

  return data;
}

function _core() {
  const data = require("@parcel/core");

  _core = function () {
    return data;
  };

  return data;
}

var _bus = _interopRequireDefault(require("./bus"));

var _Profiler = _interopRequireDefault(require("./Profiler"));

var _Handle2 = _interopRequireDefault(require("./Handle"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// The import of './Handle' should really be imported eagerly (with @babel/plugin-transform-modules-commonjs's lazy mode).
const Handle = _Handle2.default;

class Child {
  callQueue = [];
  maxConcurrentCalls = 10;
  responseId = 0;
  responseQueue = new Map();
  handles = new Map();
  sharedReferences = new Map();
  sharedReferencesByValue = new Map();

  constructor(ChildBackend) {
    this.child = new ChildBackend(m => {
      this.messageListener(m);
    }, () => this.handleEnd()); // Monitior all logging events inside this child process and forward to
    // the main process via the bus.

    this.loggerDisposable = _logger().default.onLog(event => {
      _bus.default.emit('logEvent', event);
    });
  }

  workerApi = {
    callMaster: (request, awaitResponse = true) => this.addCall(request, awaitResponse),
    createReverseHandle: fn => this.createReverseHandle(fn),
    runHandle: (handle, args) => this.workerApi.callMaster({
      handle: handle.id,
      args
    }, true),
    getSharedReference: ref => this.sharedReferences.get(ref),
    resolveSharedReference: value => this.sharedReferencesByValue.get(value)
  };

  messageListener(message) {
    if (message.type === 'response') {
      return this.handleResponse(message);
    } else if (message.type === 'request') {
      return this.handleRequest(message);
    }
  }

  send(data) {
    this.child.send(data);
  }

  async childInit(module, childId) {
    // $FlowFixMe this must be dynamic
    this.module = require(module);
    this.childId = childId;

    if (this.module.childInit != null) {
      await this.module.childInit();
    }
  }

  async handleRequest(data) {
    let {
      idx,
      method,
      args,
      handle: handleId
    } = data;
    let child = (0, _nullthrows().default)(data.child);

    const responseFromContent = content => ({
      idx,
      child,
      type: 'response',
      contentType: 'data',
      content
    });

    const errorResponseFromError = e => ({
      idx,
      child,
      type: 'response',
      contentType: 'error',
      content: (0, _diagnostic().anyToDiagnostic)(e)
    });

    let result;

    if (handleId != null) {
      try {
        var _this$handles$get;

        let fn = (0, _nullthrows().default)((_this$handles$get = this.handles.get(handleId)) === null || _this$handles$get === void 0 ? void 0 : _this$handles$get.fn);
        result = responseFromContent(fn(...args));
      } catch (e) {
        result = errorResponseFromError(e);
      }
    } else if (method === 'childInit') {
      try {
        let [moduleName, childOptions] = args;

        if (childOptions.shouldPatchConsole) {
          (0, _logger().patchConsole)();
        } else {
          (0, _logger().unpatchConsole)();
        }

        result = responseFromContent(await this.childInit(moduleName, child));
      } catch (e) {
        result = errorResponseFromError(e);
      }
    } else if (method === 'startProfile') {
      this.profiler = new _Profiler.default();

      try {
        result = responseFromContent(await this.profiler.startProfiling());
      } catch (e) {
        result = errorResponseFromError(e);
      }
    } else if (method === 'endProfile') {
      try {
        let res = this.profiler ? await this.profiler.stopProfiling() : null;
        result = responseFromContent(res);
      } catch (e) {
        result = errorResponseFromError(e);
      }
    } else if (method === 'takeHeapSnapshot') {
      try {
        let v8 = require('v8');

        result = responseFromContent(v8.writeHeapSnapshot('heap-' + args[0] + '-' + (this.childId ? 'worker' + this.childId : 'main') + '.heapsnapshot'));
      } catch (e) {
        result = errorResponseFromError(e);
      }
    } else if (method === 'createSharedReference') {
      let [ref, _value] = args;
      let value = _value instanceof ArrayBuffer ? // In the case the value is pre-serialized as a buffer,
      // deserialize it.
      (0, _core().deserialize)(Buffer.from(_value)) : _value;
      this.sharedReferences.set(ref, value);
      this.sharedReferencesByValue.set(value, ref);
      result = responseFromContent(null);
    } else if (method === 'deleteSharedReference') {
      let ref = args[0];
      let value = this.sharedReferences.get(ref);
      this.sharedReferencesByValue.delete(value);
      this.sharedReferences.delete(ref);
      result = responseFromContent(null);
    } else {
      try {
        result = responseFromContent( // $FlowFixMe
        await this.module[method](this.workerApi, ...args));
      } catch (e) {
        result = errorResponseFromError(e);
      }
    }

    try {
      this.send(result);
    } catch (e) {
      result = this.send(errorResponseFromError(e));
    }
  }

  handleResponse(data) {
    let idx = (0, _nullthrows().default)(data.idx);
    let contentType = data.contentType;
    let content = data.content;
    let call = (0, _nullthrows().default)(this.responseQueue.get(idx));

    if (contentType === 'error') {
      (0, _assert().default)(typeof content !== 'string');
      call.reject(new (_diagnostic().default)({
        diagnostic: content
      }));
    } else {
      call.resolve(content);
    }

    this.responseQueue.delete(idx); // Process the next call

    this.processQueue();
  } // Keep in mind to make sure responses to these calls are JSON.Stringify safe


  addCall(request, awaitResponse = true) {
    var _promise;

    // $FlowFixMe
    let call = { ...request,
      type: 'request',
      child: this.childId,
      // $FlowFixMe Added in Flow 0.121.0 upgrade in #4381
      awaitResponse,
      resolve: () => {},
      reject: () => {}
    };
    let promise;

    if (awaitResponse) {
      promise = new Promise((resolve, reject) => {
        call.resolve = resolve;
        call.reject = reject;
      });
    }

    this.callQueue.push(call);
    this.processQueue();
    return (_promise = promise) !== null && _promise !== void 0 ? _promise : Promise.resolve();
  }

  sendRequest(call) {
    let idx;

    if (call.awaitResponse) {
      idx = this.responseId++;
      this.responseQueue.set(idx, call);
    }

    this.send({
      idx,
      child: call.child,
      type: call.type,
      location: call.location,
      handle: call.handle,
      method: call.method,
      args: call.args,
      awaitResponse: call.awaitResponse
    });
  }

  processQueue() {
    if (!this.callQueue.length) {
      return;
    }

    if (this.responseQueue.size < this.maxConcurrentCalls) {
      this.sendRequest(this.callQueue.shift());
    }
  }

  handleEnd() {
    this.loggerDisposable.dispose();
  }

  createReverseHandle(fn) {
    let handle = new Handle({
      fn,
      childId: this.childId
    });
    this.handles.set(handle.id, handle);
    return handle;
  }

}

exports.Child = Child;