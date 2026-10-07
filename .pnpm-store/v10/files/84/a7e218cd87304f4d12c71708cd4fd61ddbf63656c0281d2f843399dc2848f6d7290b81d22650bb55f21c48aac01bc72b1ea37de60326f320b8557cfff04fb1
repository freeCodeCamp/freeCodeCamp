"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withCost = exports.make = void 0;
var Duration = _interopRequireWildcard(require("../Duration.js"));
var Effect = _interopRequireWildcard(require("../Effect.js"));
var FiberRef = _interopRequireWildcard(require("../FiberRef.js"));
var _Function = require("../Function.js");
var _GlobalValue = require("../GlobalValue.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const make = ({
  algorithm = "token-bucket",
  interval,
  limit
}) => {
  switch (algorithm) {
    case "fixed-window":
      {
        return fixedWindow(limit, interval);
      }
    case "token-bucket":
      {
        return tokenBucket(limit, interval);
      }
  }
};
exports.make = make;
const tokenBucket = (limit, window) => Effect.gen(function* () {
  const millisPerToken = Math.ceil(Duration.toMillis(window) / limit);
  const semaphore = yield* Effect.makeSemaphore(limit);
  const latch = yield* Effect.makeSemaphore(0);
  const refill = Effect.sleep(millisPerToken).pipe(Effect.zipRight(latch.releaseAll), Effect.zipRight(semaphore.release(1)), Effect.flatMap(free => free === limit ? Effect.void : refill));
  yield* (0, _Function.pipe)(latch.take(1), Effect.zipRight(refill), Effect.forever, Effect.forkScoped, Effect.interruptible);
  const take = Effect.uninterruptibleMask(restore => Effect.flatMap(FiberRef.get(currentCost), cost => Effect.zipRight(restore(semaphore.take(cost)), latch.release(1))));
  return effect => Effect.zipRight(take, effect);
});
const fixedWindow = (limit, window) => Effect.gen(function* () {
  const semaphore = yield* Effect.makeSemaphore(limit);
  const latch = yield* Effect.makeSemaphore(0);
  yield* (0, _Function.pipe)(latch.take(1), Effect.zipRight(Effect.sleep(window)), Effect.zipRight(latch.releaseAll), Effect.zipRight(semaphore.releaseAll), Effect.forever, Effect.forkScoped, Effect.interruptible);
  const take = Effect.uninterruptibleMask(restore => Effect.flatMap(FiberRef.get(currentCost), cost => Effect.zipRight(restore(semaphore.take(cost)), latch.release(1))));
  return effect => Effect.zipRight(take, effect);
});
/** @internal */
const currentCost = /*#__PURE__*/(0, _GlobalValue.globalValue)(/*#__PURE__*/Symbol.for("effect/RateLimiter/currentCost"), () => FiberRef.unsafeMake(1));
/** @internal */
const withCost = cost => Effect.locally(currentCost, cost);
exports.withCost = withCost;
//# sourceMappingURL=rateLimiter.js.map