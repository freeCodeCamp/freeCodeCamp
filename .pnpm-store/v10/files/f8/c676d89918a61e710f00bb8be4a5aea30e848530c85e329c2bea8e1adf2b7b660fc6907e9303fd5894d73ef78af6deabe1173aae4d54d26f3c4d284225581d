"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withPermitsScoped = exports.withPermits = exports.withPermitScoped = exports.withPermit = exports.unsafeMakeSemaphore = exports.releaseN = exports.release = exports.make = exports.available = exports.acquireN = exports.acquire = exports.TSemaphoreTypeId = void 0;
var Cause = _interopRequireWildcard(require("../../Cause.js"));
var Effect = _interopRequireWildcard(require("../../Effect.js"));
var _Function = require("../../Function.js");
var STM = _interopRequireWildcard(require("../../STM.js"));
var core = _interopRequireWildcard(require("./core.js"));
var tRef = _interopRequireWildcard(require("./tRef.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const TSemaphoreSymbolKey = "effect/TSemaphore";
/** @internal */
const TSemaphoreTypeId = exports.TSemaphoreTypeId = /*#__PURE__*/Symbol.for(TSemaphoreSymbolKey);
/** @internal */
class TSemaphoreImpl {
  permits;
  [TSemaphoreTypeId] = TSemaphoreTypeId;
  constructor(permits) {
    this.permits = permits;
  }
}
/** @internal */
const make = permits => STM.map(tRef.make(permits), permits => new TSemaphoreImpl(permits));
/** @internal */
exports.make = make;
const acquire = self => acquireN(self, 1);
/** @internal */
exports.acquire = acquire;
const acquireN = exports.acquireN = /*#__PURE__*/(0, _Function.dual)(2, (self, n) => core.withSTMRuntime(driver => {
  if (n < 0) {
    throw new Cause.IllegalArgumentException(`Unexpected negative value ${n} passed to Semaphore.acquireN`);
  }
  const value = tRef.unsafeGet(self.permits, driver.journal);
  if (value < n) {
    return STM.retry;
  } else {
    return STM.succeed(tRef.unsafeSet(self.permits, value - n, driver.journal));
  }
}));
/** @internal */
const available = self => tRef.get(self.permits);
/** @internal */
exports.available = available;
const release = self => releaseN(self, 1);
/** @internal */
exports.release = release;
const releaseN = exports.releaseN = /*#__PURE__*/(0, _Function.dual)(2, (self, n) => core.withSTMRuntime(driver => {
  if (n < 0) {
    throw new Cause.IllegalArgumentException(`Unexpected negative value ${n} passed to Semaphore.releaseN`);
  }
  const current = tRef.unsafeGet(self.permits, driver.journal);
  return STM.succeed(tRef.unsafeSet(self.permits, current + n, driver.journal));
}));
/** @internal */
const withPermit = exports.withPermit = /*#__PURE__*/(0, _Function.dual)(2, (self, semaphore) => withPermits(self, semaphore, 1));
/** @internal */
const withPermits = exports.withPermits = /*#__PURE__*/(0, _Function.dual)(3, (self, semaphore, permits) => Effect.uninterruptibleMask(restore => Effect.zipRight(restore(core.commit(acquireN(permits)(semaphore))), Effect.ensuring(self, core.commit(releaseN(permits)(semaphore))))));
/** @internal */
const withPermitScoped = self => withPermitsScoped(self, 1);
/** @internal */
exports.withPermitScoped = withPermitScoped;
const withPermitsScoped = exports.withPermitsScoped = /*#__PURE__*/(0, _Function.dual)(2, (self, permits) => Effect.acquireReleaseInterruptible(core.commit(acquireN(self, permits)), () => core.commit(releaseN(self, permits))));
/** @internal */
const unsafeMakeSemaphore = permits => {
  return new TSemaphoreImpl(new tRef.TRefImpl(permits));
};
exports.unsafeMakeSemaphore = unsafeMakeSemaphore;
//# sourceMappingURL=tSemaphore.js.map