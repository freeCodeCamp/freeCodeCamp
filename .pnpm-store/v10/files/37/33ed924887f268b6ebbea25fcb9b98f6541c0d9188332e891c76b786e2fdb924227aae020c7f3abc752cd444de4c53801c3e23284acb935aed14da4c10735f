"use strict";

function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
const babel = require("./babel-core.cjs");
const handleMessage = require("./handle-message.cjs");
const worker_threads = require("worker_threads");
worker_threads.parentPort.addListener("message", _asyncToGenerator(function* ({
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

//# sourceMappingURL=index.cjs.map
