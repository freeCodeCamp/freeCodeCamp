import * as Duration from "../Duration.js";
import * as Equal from "../Equal.js";
import { dual, pipe } from "../Function.js";
import * as Hash from "../Hash.js";
import * as HashMap from "../HashMap.js";
import * as MutableRef from "../MutableRef.js";
import * as Option from "../Option.js";
import { pipeArguments } from "../Pipeable.js";
import * as Predicate from "../Predicate.js";
import * as core from "./core.js";
import * as fiberRuntime from "./fiberRuntime.js";
import * as pool from "./pool.js";
/** @internal */
const KeyedPoolSymbolKey = "effect/KeyedPool";
/** @internal */
export const KeyedPoolTypeId = /*#__PURE__*/Symbol.for(KeyedPoolSymbolKey);
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
    return pipeArguments(this, arguments);
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
    return pipe(Hash.string("effect/KeyedPool/Complete"), Hash.combine(Hash.hash(this.pool)), Hash.cached(this));
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
    return pipe(Hash.string("effect/KeyedPool/Pending"), Hash.combine(Hash.hash(this.deferred)), Hash.cached(this));
  }
  [Equal.symbol](u) {
    return isPending(u) && Equal.equals(this.deferred, u.deferred);
  }
}
const isPending = u => Predicate.isTagged(u, "Pending") && KeyedPoolMapValueSymbol in u;
const makeImpl = (get, min, max, timeToLive) => pipe(fiberRuntime.all([core.context(), core.fiberId, core.sync(() => MutableRef.make(HashMap.empty())), fiberRuntime.scopeMake()]), core.map(([context, fiberId, map, scope]) => {
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
          return pipe(restore(fiberRuntime.scopeExtend(pool.makeWithTTL({
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
export const make = options => makeImpl(options.acquire, () => options.size, () => options.size, () => Option.none());
/** @internal */
export const makeWith = options => makeImpl(options.acquire, options.size, options.size, () => Option.none());
/** @internal */
export const makeWithTTL = options => {
  const timeToLive = Duration.decode(options.timeToLive);
  return makeImpl(options.acquire, options.min, options.max, () => Option.some(timeToLive));
};
/** @internal */
export const makeWithTTLBy = options => makeImpl(options.acquire, options.min, options.max, key => Option.some(Duration.decode(options.timeToLive(key))));
/** @internal */
export const get = /*#__PURE__*/dual(2, (self, key) => self.get(key));
/** @internal */
export const invalidate = /*#__PURE__*/dual(2, (self, item) => self.invalidate(item));
//# sourceMappingURL=keyedPool.js.map