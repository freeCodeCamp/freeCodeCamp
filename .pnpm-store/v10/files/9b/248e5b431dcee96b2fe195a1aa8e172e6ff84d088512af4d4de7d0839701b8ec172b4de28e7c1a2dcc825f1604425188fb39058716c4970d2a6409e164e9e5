"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forwardAsync = forwardAsync;
exports.isAsync = void 0;
exports.isThenable = isThenable;
exports.maybeAsync = maybeAsync;
exports.waitFor = exports.onFirstPause = void 0;
function _gensync() {
  const data = require("gensync");
  _gensync = function () {
    return data;
  };
  return data;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
const runGenerator = _gensync()(function* (item) {
  return yield* item;
});
const isAsync = exports.isAsync = _gensync()({
  sync: () => false,
  errback: cb => cb(null, true)
});
function maybeAsync(fn, message) {
  return _gensync()({
    sync(...args) {
      const result = fn.apply(this, args);
      if (isThenable(result)) throw new Error(message);
      return result;
    },
    async(...args) {
      return Promise.resolve(fn.apply(this, args));
    }
  });
}
const withKind = _gensync()({
  sync: cb => cb("sync"),
  async: function () {
    var _ref = _asyncToGenerator(function* (cb) {
      return cb("async");
    });
    return function async(_x) {
      return _ref.apply(this, arguments);
    };
  }()
});
function forwardAsync(action, cb) {
  const g = _gensync()(action);
  return withKind(kind => {
    const adapted = g[kind];
    return cb(adapted);
  });
}
const onFirstPause = exports.onFirstPause = _gensync()({
  name: "onFirstPause",
  arity: 2,
  sync: function (item) {
    return runGenerator.sync(item);
  },
  errback: function (item, firstPause, cb) {
    let completed = false;
    runGenerator.errback(item, (err, value) => {
      completed = true;
      cb(err, value);
    });
    if (!completed) {
      firstPause();
    }
  }
});
const waitFor = exports.waitFor = _gensync()({
  sync: x => x,
  async: function () {
    var _ref2 = _asyncToGenerator(function* (x) {
      return x;
    });
    return function async(_x2) {
      return _ref2.apply(this, arguments);
    };
  }()
});
function isThenable(val) {
  return !!val && (typeof val === "object" || typeof val === "function") && !!val.then && typeof val.then === "function";
}
0 && 0;

//# sourceMappingURL=async.js.map
