import * as Context from "../Context.js";
import * as Deferred from "../Deferred.js";
import * as Duration from "../Duration.js";
import * as Either from "../Either.js";
import * as Equal from "../Equal.js";
import * as Exit from "../Exit.js";
import { pipe } from "../Function.js";
import * as Hash from "../Hash.js";
import * as MutableHashMap from "../MutableHashMap.js";
import * as MutableQueue from "../MutableQueue.js";
import * as MutableRef from "../MutableRef.js";
import * as Option from "../Option.js";
import { hasProperty } from "../Predicate.js";
import * as effect from "./core-effect.js";
import * as core from "./core.js";
import * as Data from "./data.js";
import { none } from "./fiberId.js";
import * as fiberRuntime from "./fiberRuntime.js";
/** @internal */
export const complete = (key, exit, entryStats, timeToLiveMillis) => Data.struct({
  _tag: "Complete",
  key,
  exit,
  entryStats,
  timeToLiveMillis
});
/** @internal */
export const pending = (key, deferred) => Data.struct({
  _tag: "Pending",
  key,
  deferred
});
/** @internal */
export const refreshing = (deferred, complete) => Data.struct({
  _tag: "Refreshing",
  deferred,
  complete
});
/** @internal */
export const MapKeyTypeId = /*#__PURE__*/Symbol.for("effect/Cache/MapKey");
class MapKeyImpl {
  current;
  [MapKeyTypeId] = MapKeyTypeId;
  previous = undefined;
  next = undefined;
  constructor(current) {
    this.current = current;
  }
  [Hash.symbol]() {
    return pipe(Hash.hash(this.current), Hash.combine(Hash.hash(this.previous)), Hash.combine(Hash.hash(this.next)), Hash.cached(this));
  }
  [Equal.symbol](that) {
    if (this === that) {
      return true;
    }
    return isMapKey(that) && Equal.equals(this.current, that.current) && Equal.equals(this.previous, that.previous) && Equal.equals(this.next, that.next);
  }
}
/** @internal */
export const makeMapKey = current => new MapKeyImpl(current);
/** @internal */
export const isMapKey = u => hasProperty(u, MapKeyTypeId);
class KeySetImpl {
  head = undefined;
  tail = undefined;
  add(key) {
    if (key !== this.tail) {
      if (this.tail === undefined) {
        this.head = key;
        this.tail = key;
      } else {
        const previous = key.previous;
        const next = key.next;
        if (next !== undefined) {
          key.next = undefined;
          if (previous !== undefined) {
            previous.next = next;
            next.previous = previous;
          } else {
            this.head = next;
            this.head.previous = undefined;
          }
        }
        this.tail.next = key;
        key.previous = this.tail;
        this.tail = key;
      }
    }
  }
  remove() {
    const key = this.head;
    if (key !== undefined) {
      const next = key.next;
      if (next !== undefined) {
        key.next = undefined;
        this.head = next;
        this.head.previous = undefined;
      } else {
        this.head = undefined;
        this.tail = undefined;
      }
    }
    return key;
  }
}
/** @internal */
export const makeKeySet = () => new KeySetImpl();
/**
 * Constructs a new `CacheState` from the specified values.
 *
 * @internal
 */
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
export const initialCacheState = () => makeCacheState(MutableHashMap.empty(), makeKeySet(), MutableQueue.unbounded(), MutableRef.make(false), 0, 0);
/** @internal */
const CacheSymbolKey = "effect/Cache";
/** @internal */
export const CacheTypeId = /*#__PURE__*/Symbol.for(CacheSymbolKey);
const cacheVariance = {
  /* c8 ignore next */
  _Key: _ => _,
  /* c8 ignore next */
  _Error: _ => _,
  /* c8 ignore next */
  _Value: _ => _
};
/** @internal */
const ConsumerCacheSymbolKey = "effect/ConsumerCache";
/** @internal */
export const ConsumerCacheTypeId = /*#__PURE__*/Symbol.for(ConsumerCacheSymbolKey);
const consumerCacheVariance = {
  /* c8 ignore next */
  _Key: _ => _,
  /* c8 ignore next */
  _Error: _ => _,
  /* c8 ignore next */
  _Value: _ => _
};
/** @internal */
export const makeCacheStats = options => options;
/** @internal */
export const makeEntryStats = loadedMillis => ({
  loadedMillis
});
class CacheImpl {
  capacity;
  context;
  fiberId;
  lookup;
  timeToLive;
  [CacheTypeId] = cacheVariance;
  [ConsumerCacheTypeId] = consumerCacheVariance;
  cacheState;
  constructor(capacity, context, fiberId, lookup, timeToLive) {
    this.capacity = capacity;
    this.context = context;
    this.fiberId = fiberId;
    this.lookup = lookup;
    this.timeToLive = timeToLive;
    this.cacheState = initialCacheState();
  }
  get(key) {
    return core.map(this.getEither(key), Either.merge);
  }
  get cacheStats() {
    return core.sync(() => makeCacheStats({
      hits: this.cacheState.hits,
      misses: this.cacheState.misses,
      size: MutableHashMap.size(this.cacheState.map)
    }));
  }
  getOption(key) {
    return core.suspend(() => Option.match(MutableHashMap.get(this.cacheState.map, key), {
      onNone: () => {
        const mapKey = makeMapKey(key);
        this.trackAccess(mapKey);
        this.trackMiss();
        return core.succeed(Option.none());
      },
      onSome: value => this.resolveMapValue(value)
    }));
  }
  getOptionComplete(key) {
    return core.suspend(() => Option.match(MutableHashMap.get(this.cacheState.map, key), {
      onNone: () => {
        const mapKey = makeMapKey(key);
        this.trackAccess(mapKey);
        this.trackMiss();
        return core.succeed(Option.none());
      },
      onSome: value => this.resolveMapValue(value, true)
    }));
  }
  contains(key) {
    return core.sync(() => MutableHashMap.has(this.cacheState.map, key));
  }
  entryStats(key) {
    return core.sync(() => {
      const option = MutableHashMap.get(this.cacheState.map, key);
      if (Option.isSome(option)) {
        switch (option.value._tag) {
          case "Complete":
            {
              const loaded = option.value.entryStats.loadedMillis;
              return Option.some(makeEntryStats(loaded));
            }
          case "Pending":
            {
              return Option.none();
            }
          case "Refreshing":
            {
              const loaded = option.value.complete.entryStats.loadedMillis;
              return Option.some(makeEntryStats(loaded));
            }
        }
      }
      return Option.none();
    });
  }
  getEither(key) {
    return core.suspend(() => {
      const k = key;
      let mapKey = undefined;
      let deferred = undefined;
      let value = Option.getOrUndefined(MutableHashMap.get(this.cacheState.map, k));
      if (value === undefined) {
        deferred = Deferred.unsafeMake(this.fiberId);
        mapKey = makeMapKey(k);
        if (MutableHashMap.has(this.cacheState.map, k)) {
          value = Option.getOrUndefined(MutableHashMap.get(this.cacheState.map, k));
        } else {
          MutableHashMap.set(this.cacheState.map, k, pending(mapKey, deferred));
        }
      }
      if (value === undefined) {
        this.trackAccess(mapKey);
        this.trackMiss();
        return core.map(this.lookupValueOf(key, deferred), Either.right);
      } else {
        return core.flatMap(this.resolveMapValue(value), Option.match({
          onNone: () => this.getEither(key),
          onSome: value => core.succeed(Either.left(value))
        }));
      }
    });
  }
  invalidate(key) {
    return core.sync(() => {
      MutableHashMap.remove(this.cacheState.map, key);
    });
  }
  invalidateWhen(key, when) {
    return core.sync(() => {
      const value = MutableHashMap.get(this.cacheState.map, key);
      if (Option.isSome(value) && value.value._tag === "Complete") {
        if (value.value.exit._tag === "Success") {
          if (when(value.value.exit.value)) {
            MutableHashMap.remove(this.cacheState.map, key);
          }
        }
      }
    });
  }
  get invalidateAll() {
    return core.sync(() => {
      this.cacheState.map = MutableHashMap.empty();
    });
  }
  refresh(key) {
    return effect.clockWith(clock => core.suspend(() => {
      const k = key;
      const deferred = Deferred.unsafeMake(this.fiberId);
      let value = Option.getOrUndefined(MutableHashMap.get(this.cacheState.map, k));
      if (value === undefined) {
        if (MutableHashMap.has(this.cacheState.map, k)) {
          value = Option.getOrUndefined(MutableHashMap.get(this.cacheState.map, k));
        } else {
          MutableHashMap.set(this.cacheState.map, k, pending(makeMapKey(k), deferred));
        }
      }
      if (value === undefined) {
        return core.asVoid(this.lookupValueOf(key, deferred));
      } else {
        switch (value._tag) {
          case "Complete":
            {
              if (this.hasExpired(clock, value.timeToLiveMillis)) {
                const found = Option.getOrUndefined(MutableHashMap.get(this.cacheState.map, k));
                if (Equal.equals(found, value)) {
                  MutableHashMap.remove(this.cacheState.map, k);
                }
                return core.asVoid(this.get(key));
              }
              // Only trigger the lookup if we're still the current value, `completedResult`
              return pipe(this.lookupValueOf(key, deferred), effect.when(() => {
                const current = Option.getOrUndefined(MutableHashMap.get(this.cacheState.map, k));
                if (Equal.equals(current, value)) {
                  const mapValue = refreshing(deferred, value);
                  MutableHashMap.set(this.cacheState.map, k, mapValue);
                  return true;
                }
                return false;
              }), core.asVoid);
            }
          case "Pending":
            {
              return Deferred.await(value.deferred);
            }
          case "Refreshing":
            {
              return Deferred.await(value.deferred);
            }
        }
      }
    }));
  }
  set(key, value) {
    return effect.clockWith(clock => core.sync(() => {
      const now = clock.unsafeCurrentTimeMillis();
      const k = key;
      const lookupResult = Exit.succeed(value);
      const mapValue = complete(makeMapKey(k), lookupResult, makeEntryStats(now), now + Duration.toMillis(Duration.decode(this.timeToLive(lookupResult))));
      MutableHashMap.set(this.cacheState.map, k, mapValue);
    }));
  }
  get size() {
    return core.sync(() => {
      return MutableHashMap.size(this.cacheState.map);
    });
  }
  get values() {
    return core.sync(() => {
      const values = [];
      for (const entry of this.cacheState.map) {
        if (entry[1]._tag === "Complete" && entry[1].exit._tag === "Success") {
          values.push(entry[1].exit.value);
        }
      }
      return values;
    });
  }
  get entries() {
    return core.sync(() => {
      const values = [];
      for (const entry of this.cacheState.map) {
        if (entry[1]._tag === "Complete" && entry[1].exit._tag === "Success") {
          values.push([entry[0], entry[1].exit.value]);
        }
      }
      return values;
    });
  }
  get keys() {
    return core.sync(() => {
      const keys = [];
      for (const entry of this.cacheState.map) {
        if (entry[1]._tag === "Complete" && entry[1].exit._tag === "Success") {
          keys.push(entry[0]);
        }
      }
      return keys;
    });
  }
  resolveMapValue(value, ignorePending = false) {
    return effect.clockWith(clock => {
      switch (value._tag) {
        case "Complete":
          {
            this.trackAccess(value.key);
            if (this.hasExpired(clock, value.timeToLiveMillis)) {
              MutableHashMap.remove(this.cacheState.map, value.key.current);
              return core.succeed(Option.none());
            }
            this.trackHit();
            return core.map(value.exit, Option.some);
          }
        case "Pending":
          {
            this.trackAccess(value.key);
            this.trackHit();
            if (ignorePending) {
              return core.succeed(Option.none());
            }
            return core.map(Deferred.await(value.deferred), Option.some);
          }
        case "Refreshing":
          {
            this.trackAccess(value.complete.key);
            this.trackHit();
            if (this.hasExpired(clock, value.complete.timeToLiveMillis)) {
              if (ignorePending) {
                return core.succeed(Option.none());
              }
              return core.map(Deferred.await(value.deferred), Option.some);
            }
            return core.map(value.complete.exit, Option.some);
          }
      }
    });
  }
  trackHit() {
    this.cacheState.hits = this.cacheState.hits + 1;
  }
  trackMiss() {
    this.cacheState.misses = this.cacheState.misses + 1;
  }
  trackAccess(key) {
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
        if (key !== undefined) {
          if (MutableHashMap.has(this.cacheState.map, key.current)) {
            MutableHashMap.remove(this.cacheState.map, key.current);
            size = size - 1;
            loop = size > this.capacity;
          }
        } else {
          loop = false;
        }
      }
      MutableRef.set(this.cacheState.updating, false);
    }
  }
  hasExpired(clock, timeToLiveMillis) {
    return clock.unsafeCurrentTimeMillis() > timeToLiveMillis;
  }
  lookupValueOf(input, deferred) {
    return effect.clockWith(clock => core.suspend(() => {
      const key = input;
      return pipe(this.lookup(input), core.provideContext(this.context), core.exit, core.flatMap(exit => {
        const now = clock.unsafeCurrentTimeMillis();
        const stats = makeEntryStats(now);
        const value = complete(makeMapKey(key), exit, stats, now + Duration.toMillis(Duration.decode(this.timeToLive(exit))));
        MutableHashMap.set(this.cacheState.map, key, value);
        return core.zipRight(Deferred.done(deferred, exit), exit);
      }), core.onInterrupt(() => core.zipRight(Deferred.interrupt(deferred), core.sync(() => {
        MutableHashMap.remove(this.cacheState.map, key);
      }))));
    }));
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
export const makeWith = options => core.map(fiberRuntime.all([core.context(), core.fiberId]), ([context, fiberId]) => new CacheImpl(options.capacity, context, fiberId, options.lookup, exit => Duration.decode(options.timeToLive(exit))));
/** @internal */
export const unsafeMakeWith = (capacity, lookup, timeToLive) => new CacheImpl(capacity, Context.empty(), none, lookup, exit => Duration.decode(timeToLive(exit)));
//# sourceMappingURL=cache.js.map