"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tagged = exports.succeed = exports.of = exports.isRequest = exports.filterOutCompleted = exports.failCause = exports.fail = exports.completeEffect = exports.complete = exports.TaggedClass = exports.RequestTypeId = exports.Listeners = exports.Class = void 0;
var _Function = require("../Function.js");
var _Predicate = require("../Predicate.js");
var completedRequestMap = _interopRequireWildcard(require("./completedRequestMap.js"));
var core = _interopRequireWildcard(require("./core.js"));
var _effectable = require("./effectable.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const RequestSymbolKey = "effect/Request";
/** @internal */
const RequestTypeId = exports.RequestTypeId = /*#__PURE__*/Symbol.for(RequestSymbolKey);
const requestVariance = {
  /* c8 ignore next */
  _E: _ => _,
  /* c8 ignore next */
  _A: _ => _
};
const RequestPrototype = {
  ..._effectable.StructuralPrototype,
  [RequestTypeId]: requestVariance
};
/** @internal */
const isRequest = u => (0, _Predicate.hasProperty)(u, RequestTypeId);
/** @internal */
exports.isRequest = isRequest;
const of = () => args => Object.assign(Object.create(RequestPrototype), args);
/** @internal */
exports.of = of;
const tagged = tag => args => {
  const request = Object.assign(Object.create(RequestPrototype), args);
  request._tag = tag;
  return request;
};
/** @internal */
exports.tagged = tagged;
const Class = exports.Class = /*#__PURE__*/function () {
  function Class(args) {
    if (args) {
      Object.assign(this, args);
    }
  }
  Class.prototype = RequestPrototype;
  return Class;
}();
/** @internal */
const TaggedClass = tag => {
  return class TaggedClass extends Class {
    _tag = tag;
  };
};
/** @internal */
exports.TaggedClass = TaggedClass;
const complete = exports.complete = /*#__PURE__*/(0, _Function.dual)(2, (self, result) => core.fiberRefGetWith(completedRequestMap.currentRequestMap, map => core.sync(() => {
  if (map.has(self)) {
    const entry = map.get(self);
    if (!entry.state.completed) {
      entry.state.completed = true;
      core.deferredUnsafeDone(entry.result, result);
    }
  }
})));
/** @internal */
const completeEffect = exports.completeEffect = /*#__PURE__*/(0, _Function.dual)(2, (self, effect) => core.matchEffect(effect, {
  onFailure: error => complete(self, core.exitFail(error)),
  onSuccess: value => complete(self, core.exitSucceed(value))
}));
/** @internal */
const fail = exports.fail = /*#__PURE__*/(0, _Function.dual)(2, (self, error) => complete(self, core.exitFail(error)));
/** @internal */
const failCause = exports.failCause = /*#__PURE__*/(0, _Function.dual)(2, (self, cause) => complete(self, core.exitFailCause(cause)));
/** @internal */
const succeed = exports.succeed = /*#__PURE__*/(0, _Function.dual)(2, (self, value) => complete(self, core.exitSucceed(value)));
/** @internal */
class Listeners {
  count = 0;
  observers = /*#__PURE__*/new Set();
  interrupted = false;
  addObserver(f) {
    this.observers.add(f);
  }
  removeObserver(f) {
    this.observers.delete(f);
  }
  increment() {
    this.count++;
    this.observers.forEach(f => f(this.count));
  }
  decrement() {
    this.count--;
    this.observers.forEach(f => f(this.count));
  }
}
/**
 * @internal
 */
exports.Listeners = Listeners;
const filterOutCompleted = requests => core.fiberRefGetWith(completedRequestMap.currentRequestMap, map => core.succeed(requests.filter(request => !(map.get(request)?.state.completed === true))));
exports.filterOutCompleted = filterOutCompleted;
//# sourceMappingURL=request.js.map