import { dual } from "../Function.js";
import { hasProperty } from "../Predicate.js";
import * as completedRequestMap from "./completedRequestMap.js";
import * as core from "./core.js";
import { StructuralPrototype } from "./effectable.js";
/** @internal */
const RequestSymbolKey = "effect/Request";
/** @internal */
export const RequestTypeId = /*#__PURE__*/Symbol.for(RequestSymbolKey);
const requestVariance = {
  /* c8 ignore next */
  _E: _ => _,
  /* c8 ignore next */
  _A: _ => _
};
const RequestPrototype = {
  ...StructuralPrototype,
  [RequestTypeId]: requestVariance
};
/** @internal */
export const isRequest = u => hasProperty(u, RequestTypeId);
/** @internal */
export const of = () => args => Object.assign(Object.create(RequestPrototype), args);
/** @internal */
export const tagged = tag => args => {
  const request = Object.assign(Object.create(RequestPrototype), args);
  request._tag = tag;
  return request;
};
/** @internal */
export const Class = /*#__PURE__*/function () {
  function Class(args) {
    if (args) {
      Object.assign(this, args);
    }
  }
  Class.prototype = RequestPrototype;
  return Class;
}();
/** @internal */
export const TaggedClass = tag => {
  return class TaggedClass extends Class {
    _tag = tag;
  };
};
/** @internal */
export const complete = /*#__PURE__*/dual(2, (self, result) => core.fiberRefGetWith(completedRequestMap.currentRequestMap, map => core.sync(() => {
  if (map.has(self)) {
    const entry = map.get(self);
    if (!entry.state.completed) {
      entry.state.completed = true;
      core.deferredUnsafeDone(entry.result, result);
    }
  }
})));
/** @internal */
export const completeEffect = /*#__PURE__*/dual(2, (self, effect) => core.matchEffect(effect, {
  onFailure: error => complete(self, core.exitFail(error)),
  onSuccess: value => complete(self, core.exitSucceed(value))
}));
/** @internal */
export const fail = /*#__PURE__*/dual(2, (self, error) => complete(self, core.exitFail(error)));
/** @internal */
export const failCause = /*#__PURE__*/dual(2, (self, cause) => complete(self, core.exitFailCause(cause)));
/** @internal */
export const succeed = /*#__PURE__*/dual(2, (self, value) => complete(self, core.exitSucceed(value)));
/** @internal */
export class Listeners {
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
export const filterOutCompleted = requests => core.fiberRefGetWith(completedRequestMap.currentRequestMap, map => core.succeed(requests.filter(request => !(map.get(request)?.state.completed === true))));
//# sourceMappingURL=request.js.map