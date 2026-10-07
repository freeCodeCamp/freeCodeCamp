function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
const babel = require("./babel-core.js");
const handleMessage = require("./handle-message.js");
const {
  parentPort
} = require("worker_threads");
parentPort.addListener("message", _asyncToGenerator(function* ({
  signal,
  port,
  action,
  payload
}) {
  let response;
  try {
    if (babel.init) yield babel.init;
    response = {
      result: yield handleMessage(action, payload)
    };
  } catch (error) {
    response = {
      error,
      errorData: Object.assign({}, error)
    };
  }
  try {
    port.postMessage(response);
  } catch (_unused) {
    port.postMessage({
      error: new Error("Cannot serialize worker response")
    });
  } finally {
    port.close();
    Atomics.store(signal, 0, 1);
    Atomics.notify(signal, 0);
  }
}));

//# sourceMappingURL=index.js.map
