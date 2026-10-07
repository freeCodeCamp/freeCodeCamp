"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeWithTTLBy = exports.makeWithTTL = exports.makeWith = exports.make = exports.invalidate = exports.get = exports.KeyedPoolTypeId = void 0;
var Duration = _interopRequireWildcard(require("../Duration.js"));
var Equal = _interopRequireWildcard(require("../Equal.js"));
var _Function = require("../Function.js");
var Hash = _interopRequireWildcard(require("../Hash.js"));
var HashMap = _interopRequireWildcard(require("../HashMap.js"));
var MutableRef = _interopRequireWildcard(require("../MutableRef.js"));
var Option = _interopRequireWildcard(require("../Option.js"));
var _Pipeable = require("../Pipeable.js");
var Predicate = _interopRequireWildcard(require("../Predicate.js"));
var core = _interopRequireWildcard(require("./core.js"));
var fiberRuntime = _interopRequireWildcard(require("./fiberRuntime.js"));
var pool = _interopRequireWildcard(require("./pool.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const KeyedPoolSymbolKey = "effect/KeyedPool";
/** @internal */
const KeyedPoolTypeId = exports.KeyedPoolTypeId = /*#__PURE__*/Symbol.for(KeyedPoolSymbolKey);
const KeyedPoolMapValueSymbol = /*#__PURE__*/Symbol.for("effect/KeyedPool/MapValue");
const keyedPoolVariance = {
  /* c8 ignore next */
  _K: _ => _,
  /* c8 ignore next */
  _E: _ => _,
  /* c8 ignore next */
  _A: _ => _
};
class KeyedPoolImpl {
  getOrCreatePool;
  activePools;
  [KeyedPoolTypeId] = keyedPoolVariance;
  constructor(getOrCreatePool, activePools) {
    this.getOrCreatePool = getOrCreatePool;
    this.activePools = activePools;
  }
  get(key) {
    return core.flatMap(this.getOrCreatePool(key), pool.get);
  }
  invalidate(item) {
    return core.flatMap(this.activePools, core.forEachSequentialDiscard(pool => pool.invalidate(item)));
  }
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
}
class Complete {
  pool;
  _tag = "Complete";
  [KeyedPoolMapValueSymbol] = KeyedPoolMapValueSymbol;
  constructor(pool) {
    this.pool = pool;
  }
  [Hash.symbol]() {
    return (0, _Function.pipe)(Hash.string("effect/KeyedPool/Complete"), Hash.combine(Hash.hash(this.pool)), Hash.cached(this));
  }
  [Equal.symbol](u) {
    return isComplete(u) && Equal.equals(this.pool, u.pool);
  }
}
const isComplete = u => Predicate.isTagged(u, "Complete") && KeyedPoolMapValueSymbol in u;
class Pending {
  deferred;
  _tag = "Pending";
  [KeyedPoolMapValueSymbol] = KeyedPoolMapValueSymbol;
  constructor(deferred) {
    this.deferred = deferred;
  }
  [Hash.symbol]() {
    return (0, _Function.pipe)(Hash.string("effect/KeyedPool/Pending"), Hash.combine(Hash.hash(this.deferred)), Hash.cached(this));
  }
  [Equal.symbol](u) {
    return isPending(u) && Equal.equals(this.deferred, u.deferred);
  }
}
const isPending = u => Predicate.isTagged(u, "Pending") && KeyedPoolMapValueSymbol in u;
const makeImpl = (get, min, max, timeToLive) => (0, _Function.pipe)(fiberRuntime.all([core.context(), core.fiberId, core.sync(() => MutableRef.make(HashMap.empty())), fiberRuntime.scopeMake()]), core.map(([context, fiberId, map, scope]) => {
  const getOrCreatePool = key => core.suspend(() => {
    let value = Option.getOrUndefined(HashMap.get(MutableRef.get(map), key));
    if (value === undefined) {
      return core.uninterruptibleMask(restore => {
        const deferred = core.deferredUnsafeMake(fiberId);
        value = new Pending(deferred);
        let previous = undefined;
        if (HashMap.has(MutableRef.get(map), key)) {
          previous = Option.getOrUndefined(HashMap.get(MutableRef.get(map), key));
        } else {
          MutableRef.update(map, HashMap.set(key, value));
        }
        if (previous === undefined) {
          return (0, _Function.pipe)(restore(fiberRuntime.scopeExtend(pool.makeWithTTL({
            acquire: core.provideContext(get(key), context),
            min: min(key),
            max: max(key),
            timeToLive: Option.getOrElse(timeToLive(key), () => Duration.infinity)
          }), scope)), core.matchCauseEffect({
            onFailure: cause => {
              const current = Option.getOrUndefined(HashMap.get(MutableRef.get(map), key));
              if (Equal.equals(current, value)) {
                MutableRef.update(map, HashMap.remove(key));
              }
              return core.zipRight(core.deferredFailCause(deferred, cause), core.failCause(cause));
            },
            onSuccess: pool => {
              MutableRef.update(map, HashMap.set(key, new Complete(pool)));
              return core.as(core.deferredSucceed(deferred, pool), pool);
            }
          }));
        }
        switch (previous._tag) {
          case "Complete":
            {
              return core.succeed(previous.pool);
            }
          case "Pending":
            {
              return restore(core.deferredAwait(previous.deferred));
            }
        }
      });
    }
    switch (value._tag) {
      case "Complete":
        {
          return core.succeed(value.pool);
        }
      case "Pending":
        {
          return core.deferredAwait(value.deferred);
        }
    }
  });
  const activePools = core.suspend(() => core.forEachSequential(HashMap.toValues(MutableRef.get(map)), value => {
    switch (value._tag) {
      case "Complete":
        {
          return core.succeed(value.pool);
        }
      case "Pending":
        {
          return core.deferredAwait(value.deferred);
        }
    }
  }));
  return new KeyedPoolImpl(getOrCreatePool, activePools);
}));
/** @internal */
const make = options => makeImpl(options.acquire, () => options.size, () => options.size, () => Option.none());
/** @internal */
exports.make = make;
const makeWith = options => makeImpl(options.acquire, options.size, options.size, () => Option.none());
/** @internal */
exports.makeWith = makeWith;
const makeWithTTL = options => {
  const timeToLive = Duration.decode(options.timeToLive);
  return makeImpl(options.acquire, options.min, options.max, () => Option.some(timeToLive));
};
/** @internal */
exports.makeWithTTL = makeWithTTL;
const makeWithTTLBy = options => makeImpl(options.acquire, options.min, options.max, key => Option.some(Duration.decode(options.timeToLive(key))));
/** @internal */
exports.makeWithTTLBy = makeWithTTLBy;
const get = exports.get = /*#__PURE__*/(0, _Function.dual)(2, (self, key) => self.get(key));
/** @internal */
const invalidate = exports.invalidate = /*#__PURE__*/(0, _Function.dual)(2, (self, item) => self.invalidate(item));
//# sourceMappingURL=keyedPool.js.map