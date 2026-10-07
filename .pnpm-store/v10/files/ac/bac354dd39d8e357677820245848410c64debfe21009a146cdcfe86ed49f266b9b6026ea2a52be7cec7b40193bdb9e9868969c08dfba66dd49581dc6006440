import * as Context from "../Context.js";
import * as Data from "../Data.js";
import * as Duration from "../Duration.js";
import * as Equal from "../Equal.js";
import * as Exit from "../Exit.js";
import { pipe } from "../Function.js";
import * as HashSet from "../HashSet.js";
import * as MutableHashMap from "../MutableHashMap.js";
import * as MutableQueue from "../MutableQueue.js";
import * as MutableRef from "../MutableRef.js";
import * as Option from "../Option.js";
import { pipeArguments } from "../Pipeable.js";
import * as Scope from "../Scope.js";
import * as cache_ from "./cache.js";
import * as effect from "./core-effect.js";
import * as core from "./core.js";
import * as fiberRuntime from "./fiberRuntime.js";
/** @internal */
export const makeCacheState = (map, keys, accesses, updating, hits, misses) => ({
  map,
  keys,
  accesses,
  updating,
  hits,
  misses
});
/**
 * Constructs an initial cache state.
 *
 * @internal
 */
export const initialCacheState = () => makeCacheState(MutableHashMap.empty(), cache_.makeKeySet(), MutableQueue.unbounded(), MutableRef.make(false), 0, 0);
/** @internal */
export const complete = (key, exit, ownerCount, entryStats, timeToLive) => Data.struct({
  _tag: "Complete",
  key,
  exit,
  ownerCount,
  entryStats,
  timeToLive
});
/** @internal */
export const pending = (key, scoped) => Data.struct({
  _tag: "Pending",
  key,
  scoped
});
/** @internal */
export const refreshing = (scoped, complete) => Data.struct({
  _tag: "Refreshing",
  scoped,
  complete
});
/** @internal */
export const toScoped = self => Exit.matchEffect(self.exit, {
  onFailure: cause => core.failCause(cause),
  onSuccess: ([value]) => fiberRuntime.acquireRelease(core.as(core.sync(() => MutableRef.incrementAndGet(self.ownerCount)), value), () => releaseOwner(self))
});
/** @internal */
export const releaseOwner = self => Exit.matchEffect(self.exit, {
  onFailure: () => core.void,
  onSuccess: ([, finalizer]) => core.flatMap(core.sync(() => MutableRef.decrementAndGet(self.ownerCount)), numOwner => effect.when(finalizer(Exit.void), () => numOwner === 0))
});
/** @internal */
const ScopedCacheSymbolKey = "effect/ScopedCache";
/** @internal */
export const ScopedCacheTypeId = /*#__PURE__*/Symbol.for(ScopedCacheSymbolKey);
const scopedCacheVariance = {
  /* c8 ignore next */
  _Key: _ => _,
  /* c8 ignore next */
  _Error: _ => _,
  /* c8 ignore next */
  _Value: _ => _
};
class ScopedCacheImpl {
  capacity;
  scopedLookup;
  clock;
  timeToLive;
  context;
  [ScopedCacheTypeId] = scopedCacheVariance;
  cacheState;
  constructor(capacity, scopedLookup, clock, timeToLive, context) {
    this.capacity = capacity;
    this.scopedLookup = scopedLookup;
    this.clock = clock;
    this.timeToLive = timeToLive;
    this.context = context;
    this.cacheState = initialCacheState();
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
  get cacheStats() {
    return core.sync(() => cache_.makeCacheStats({
      hits: this.cacheState.hits,
      misses: this.cacheState.misses,
      size: MutableHashMap.size(this.cacheState.map)
    }));
  }
  getOption(key) {
    return core.suspend(() => Option.match(MutableHashMap.get(this.cacheState.map, key), {
      onNone: () => effect.succeedNone,
      onSome: value => core.flatten(this.resolveMapValue(value))
    }));
  }
  getOptionComplete(key) {
    return core.suspend(() => Option.match(MutableHashMap.get(this.cacheState.map, key), {
      onNone: () => effect.succeedNone,
      onSome: value => core.flatten(this.resolveMapValue(value, true))
    }));
  }
  contains(key) {
    return core.sync(() => MutableHashMap.has(this.cacheState.map, key));
  }
  entryStats(key) {
    return core.sync(() => {
      const value = Option.getOrUndefined(MutableHashMap.get(this.cacheState.map, key));
      if (value === undefined) {
        return Option.none();
      }
      switch (value._tag) {
        case "Complete":
          {
            return Option.some(cache_.makeEntryStats(value.entryStats.loadedMillis));
          }
        case "Pending":
          {
            return Option.none();
          }
        case "Refreshing":
          {
            return Option.some(cache_.makeEntryStats(value.complete.entryStats.loadedMillis));
          }
      }
    });
  }
  get(key) {
    return pipe(this.lookupValueOf(key), effect.memoize, core.flatMap(lookupValue => core.suspend(() => {
      let k = undefined;
      let value = Option.getOrUndefined(MutableHashMap.get(this.cacheState.map, key));
      if (value === undefined) {
        k = cache_.makeMapKey(key);
        if (MutableHashMap.has(this.cacheState.map, key)) {
          value = Option.getOrUndefined(MutableHashMap.get(this.cacheState.map, key));
        } else {
          MutableHashMap.set(this.cacheState.map, key, pending(k, lookupValue));
        }
      }
      if (value === undefined) {
        this.trackMiss();
        return core.zipRight(this.ensureMapSizeNotExceeded(k), lookupValue);
      }
      return core.map(this.resolveMapValue(value), core.flatMap(Option.match({
        onNone: () => {
          const val = value;
          const current = Option.getOrUndefined(MutableHashMap.get(this.cacheState.map, key));
          if (Equal.equals(current, value)) {
            MutableHashMap.remove(this.cacheState.map, key);
          }
          return pipe(this.ensureMapSizeNotExceeded(val.key), core.zipRight(releaseOwner(val)), core.zipRight(this.get(key)));
        },
        onSome: core.succeed
      })));
    })), core.flatten);
  }
  invalidate(key) {
    return core.suspend(() => {
      if (MutableHashMap.has(this.cacheState.map, key)) {
        const mapValue = Option.getOrUndefined(MutableHashMap.get(this.cacheState.map, key));
        MutableHashMap.remove(this.cacheState.map, key);
        switch (mapValue._tag) {
          case "Complete":
            {
              return releaseOwner(mapValue);
            }
          case "Pending":
            {
              return core.void;
            }
          case "Refreshing":
            {
              return releaseOwner(mapValue.complete);
            }
        }
      }
      return core.void;
    });
  }
  get invalidateAll() {
    return fiberRuntime.forEachConcurrentDiscard(HashSet.fromIterable(Array.from(this.cacheState.map).map(([key]) => key)), key => this.invalidate(key), false, false);
  }
  refresh(key) {
    return pipe(this.lookupValueOf(key), effect.memoize, core.flatMap(scoped => {
      let value = Option.getOrUndefined(MutableHashMap.get(this.cacheState.map, key));
      let newKey = undefined;
      if (value === undefined) {
        newKey = cache_.makeMapKey(key);
        if (MutableHashMap.has(this.cacheState.map, key)) {
          value = Option.getOrUndefined(MutableHashMap.get(this.cacheState.map, key));
        } else {
          MutableHashMap.set(this.cacheState.map, key, pending(newKey, scoped));
        }
      }
      let finalScoped;
      if (value === undefined) {
        finalScoped = core.zipRight(this.ensureMapSizeNotExceeded(newKey), scoped);
      } else {
        switch (value._tag) {
          case "Complete":
            {
              if (this.hasExpired(value.timeToLive)) {
                finalScoped = core.succeed(this.get(key));
              } else {
                const current = Option.getOrUndefined(MutableHashMap.get(this.cacheState.map, key));
                if (Equal.equals(current, value)) {
                  const mapValue = refreshing(scoped, value);
                  MutableHashMap.set(this.cacheState.map, key, mapValue);
                  finalScoped = scoped;
                } else {
                  finalScoped = core.succeed(this.get(key));
                }
              }
              break;
            }
          case "Pending":
            {
              finalScoped = value.scoped;
              break;
            }
          case "Refreshing":
            {
              finalScoped = value.scoped;
              break;
            }
        }
      }
      return core.flatMap(finalScoped, s => fiberRuntime.scopedEffect(core.asVoid(s)));
    }));
  }
  get size() {
    return core.sync(() => MutableHashMap.size(this.cacheState.map));
  }
  resolveMapValue(value, ignorePending = false) {
    switch (value._tag) {
      case "Complete":
        {
          this.trackHit();
          if (this.hasExpired(value.timeToLive)) {
            return core.succeed(effect.succeedNone);
          }
          return core.as(this.ensureMapSizeNotExceeded(value.key), effect.asSome(toScoped(value)));
        }
      case "Pending":
        {
          this.trackHit();
          if (ignorePending) {
            return core.succeed(effect.succeedNone);
          }
          return core.zipRight(this.ensureMapSizeNotExceeded(value.key), core.map(value.scoped, effect.asSome));
        }
      case "Refreshing":
        {
          this.trackHit();
          if (this.hasExpired(value.complete.timeToLive)) {
            if (ignorePending) {
              return core.succeed(effect.succeedNone);
            }
            return core.zipRight(this.ensureMapSizeNotExceeded(value.complete.key), core.map(value.scoped, effect.asSome));
          }
          return core.as(this.ensureMapSizeNotExceeded(value.complete.key), effect.asSome(toScoped(value.complete)));
        }
    }
  }
  lookupValueOf(key) {
    return pipe(core.onInterrupt(core.flatMap(Scope.make(), scope => pipe(this.scopedLookup(key), core.provideContext(pipe(this.context, Context.add(Scope.Scope, scope))), core.exit, core.map(exit => [exit, exit => Scope.close(scope, exit)]))), () => core.sync(() => MutableHashMap.remove(this.cacheState.map, key))), core.flatMap(([exit, release]) => {
      const now = this.clock.unsafeCurrentTimeMillis();
      const expiredAt = now + Duration.toMillis(this.timeToLive(exit));
      switch (exit._tag) {
        case "Success":
          {
            const exitWithFinalizer = Exit.succeed([exit.value, release]);
            const completedResult = complete(cache_.makeMapKey(key), exitWithFinalizer, MutableRef.make(1), cache_.makeEntryStats(now), expiredAt);
            let previousValue = undefined;
            if (MutableHashMap.has(this.cacheState.map, key)) {
              previousValue = Option.getOrUndefined(MutableHashMap.get(this.cacheState.map, key));
            }
            MutableHashMap.set(this.cacheState.map, key, completedResult);
            return core.sync(() => core.flatten(core.as(this.cleanMapValue(previousValue), toScoped(completedResult))));
          }
        case "Failure":
          {
            const completedResult = complete(cache_.makeMapKey(key), exit, MutableRef.make(0), cache_.makeEntryStats(now), expiredAt);
            let previousValue = undefined;
            if (MutableHashMap.has(this.cacheState.map, key)) {
              previousValue = Option.getOrUndefined(MutableHashMap.get(this.cacheState.map, key));
            }
            MutableHashMap.set(this.cacheState.map, key, completedResult);
            return core.zipRight(release(exit), core.sync(() => core.flatten(core.as(this.cleanMapValue(previousValue), toScoped(completedResult)))));
          }
      }
    }), effect.memoize, core.flatten);
  }
  hasExpired(timeToLive) {
    return this.clock.unsafeCurrentTimeMillis() > timeToLive;
  }
  trackHit() {
    this.cacheState.hits = this.cacheState.hits + 1;
  }
  trackMiss() {
    this.cacheState.misses = this.cacheState.misses + 1;
  }
  trackAccess(key) {
    const cleanedKeys = [];
    MutableQueue.offer(this.cacheState.accesses, key);
    if (MutableRef.compareAndSet(this.cacheState.updating, false, true)) {
      let loop = true;
      while (loop) {
        const key = MutableQueue.poll(this.cacheState.accesses, MutableQueue.EmptyMutableQueue);
        if (key === MutableQueue.EmptyMutableQueue) {
          loop = false;
        } else {
          this.cacheState.keys.add(key);
        }
      }
      let size = MutableHashMap.size(this.cacheState.map);
      loop = size > this.capacity;
      while (loop) {
        const key = this.cacheState.keys.remove();
        if (key === undefined) {
          loop = false;
        } else {
          if (MutableHashMap.has(this.cacheState.map, key.current)) {
            const removed = Option.getOrUndefined(MutableHashMap.get(this.cacheState.map, key.current));
            MutableHashMap.remove(this.cacheState.map, key.current);
            size = size - 1;
            cleanedKeys.push(removed);
            loop = size > this.capacity;
          }
        }
      }
      MutableRef.set(this.cacheState.updating, false);
    }
    return cleanedKeys;
  }
  cleanMapValue(mapValue) {
    if (mapValue === undefined) {
      return core.void;
    }
    switch (mapValue._tag) {
      case "Complete":
        {
          return releaseOwner(mapValue);
        }
      case "Pending":
        {
          return core.void;
        }
      case "Refreshing":
        {
          return releaseOwner(mapValue.complete);
        }
    }
  }
  ensureMapSizeNotExceeded(key) {
    return fiberRuntime.forEachConcurrentDiscard(this.trackAccess(key), cleanedMapValue => this.cleanMapValue(cleanedMapValue), false, false);
  }
}
/** @internal */
export const make = options => {
  const timeToLive = Duration.decode(options.timeToLive);
  return makeWith({
    capacity: options.capacity,
    lookup: options.lookup,
    timeToLive: () => timeToLive
  });
};
/** @internal */
export const makeWith = options => core.flatMap(effect.clock, clock => buildWith(options.capacity, options.lookup, clock, exit => Duration.decode(options.timeToLive(exit))));
const buildWith = (capacity, scopedLookup, clock, timeToLive) => fiberRuntime.acquireRelease(core.flatMap(core.context(), context => core.sync(() => new ScopedCacheImpl(capacity, scopedLookup, clock, timeToLive, context))), cache => cache.invalidateAll);
//# sourceMappingURL=scopedCache.js.map