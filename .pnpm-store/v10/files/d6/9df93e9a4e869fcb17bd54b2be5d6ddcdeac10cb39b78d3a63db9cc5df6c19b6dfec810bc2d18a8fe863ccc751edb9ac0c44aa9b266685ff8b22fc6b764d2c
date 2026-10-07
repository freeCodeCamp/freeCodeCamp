import * as Context from "../Context.js";
import * as Duration from "../Duration.js";
import { constant, dual, flow, identity } from "../Function.js";
import * as MutableHashMap from "../MutableHashMap.js";
import { pipeArguments } from "../Pipeable.js";
import * as coreEffect from "./core-effect.js";
import * as core from "./core.js";
import * as circular from "./effect/circular.js";
import * as fiberRuntime from "./fiberRuntime.js";
/** @internal */
export const TypeId = /*#__PURE__*/Symbol.for("effect/RcMap");
const variance = {
  _K: identity,
  _A: identity,
  _E: identity
};
class RcMapImpl {
  lookup;
  context;
  scope;
  idleTimeToLive;
  capacity;
  [TypeId];
  state = {
    _tag: "Open",
    map: /*#__PURE__*/MutableHashMap.empty()
  };
  semaphore = /*#__PURE__*/circular.unsafeMakeSemaphore(1);
  constructor(lookup, context, scope, idleTimeToLive, capacity) {
    this.lookup = lookup;
    this.context = context;
    this.scope = scope;
    this.idleTimeToLive = idleTimeToLive;
    this.capacity = capacity;
    this[TypeId] = variance;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
}
/** @internal */
export const make = options => core.withFiberRuntime(fiber => {
  const context = fiber.getFiberRef(core.currentContext);
  const scope = Context.get(context, fiberRuntime.scopeTag);
  const idleTimeToLive = options.idleTimeToLive === undefined ? undefined : typeof options.idleTimeToLive === "function" ? flow(options.idleTimeToLive, Duration.decode) : constant(Duration.decode(options.idleTimeToLive));
  const self = new RcMapImpl(options.lookup, context, scope, idleTimeToLive, Math.max(options.capacity ?? Number.POSITIVE_INFINITY, 0));
  return core.as(scope.addFinalizer(() => core.suspend(() => {
    if (self.state._tag === "Closed") {
      return core.void;
    }
    const map = self.state.map;
    self.state = {
      _tag: "Closed"
    };
    return core.forEachSequentialDiscard(map, ([, entry]) => core.scopeClose(entry.scope, core.exitVoid)).pipe(core.tap(() => {
      MutableHashMap.clear(map);
    }), self.semaphore.withPermits(1));
  })), self);
});
/** @internal */
export const get = /*#__PURE__*/dual(2, (self_, key) => {
  const self = self_;
  return core.uninterruptibleMask(restore => getImpl(self, key, restore));
});
const getImpl = /*#__PURE__*/core.fnUntraced(function* (self, key, restore) {
  if (self.state._tag === "Closed") {
    return yield* core.interrupt;
  }
  const state = self.state;
  const o = MutableHashMap.get(state.map, key);
  let entry;
  if (o._tag === "Some") {
    entry = o.value;
    entry.refCount++;
  } else if (Number.isFinite(self.capacity) && MutableHashMap.size(self.state.map) >= self.capacity) {
    return yield* core.fail(new core.ExceededCapacityException(`RcMap attempted to exceed capacity of ${self.capacity}`));
  } else {
    entry = yield* self.semaphore.withPermits(1)(acquire(self, key, restore));
  }
  const scope = yield* fiberRuntime.scopeTag;
  yield* scope.addFinalizer(() => entry.finalizer);
  return yield* restore(core.deferredAwait(entry.deferred));
});
const acquire = /*#__PURE__*/core.fnUntraced(function* (self, key, restore) {
  const scope = yield* fiberRuntime.scopeMake();
  const deferred = yield* core.deferredMake();
  const acquire = self.lookup(key);
  const contextMap = new Map(self.context.unsafeMap);
  yield* restore(core.mapInputContext(acquire, inputContext => {
    inputContext.unsafeMap.forEach((value, key) => {
      contextMap.set(key, value);
    });
    contextMap.set(fiberRuntime.scopeTag.key, scope);
    return Context.unsafeMake(contextMap);
  })).pipe(core.exit, core.flatMap(exit => core.deferredDone(deferred, exit)), circular.forkIn(scope));
  const idleTimeToLive = self.idleTimeToLive ? self.idleTimeToLive(key) : Duration.zero;
  const entry = {
    deferred,
    scope,
    finalizer: undefined,
    idleTimeToLive,
    fiber: undefined,
    expiresAt: 0,
    refCount: 1
  };
  entry.finalizer = release(self, key, entry);
  if (self.state._tag === "Open") {
    MutableHashMap.set(self.state.map, key, entry);
  }
  return entry;
});
const release = (self, key, entry) => coreEffect.clockWith(clock => {
  entry.refCount--;
  if (entry.refCount > 0) {
    return core.void;
  } else if (self.state._tag === "Closed" || !MutableHashMap.has(self.state.map, key) || Duration.isZero(entry.idleTimeToLive)) {
    if (self.state._tag === "Open") {
      MutableHashMap.remove(self.state.map, key);
    }
    return core.scopeClose(entry.scope, core.exitVoid);
  }
  if (!Duration.isFinite(entry.idleTimeToLive)) {
    return core.void;
  }
  entry.expiresAt = clock.unsafeCurrentTimeMillis() + Duration.toMillis(entry.idleTimeToLive);
  if (entry.fiber) return core.void;
  return core.interruptibleMask(function loop(restore) {
    const now = clock.unsafeCurrentTimeMillis();
    const remaining = entry.expiresAt - now;
    if (remaining <= 0) {
      if (self.state._tag === "Closed" || entry.refCount > 0) return core.void;
      MutableHashMap.remove(self.state.map, key);
      return restore(core.scopeClose(entry.scope, core.exitVoid));
    }
    return core.flatMap(clock.sleep(Duration.millis(remaining)), () => loop(restore));
  }).pipe(fiberRuntime.ensuring(core.sync(() => {
    entry.fiber = undefined;
  })), circular.forkIn(self.scope), core.tap(fiber => {
    entry.fiber = fiber;
  }), self.semaphore.withPermits(1));
});
/** @internal */
export const keys = self => {
  const impl = self;
  return core.suspend(() => impl.state._tag === "Closed" ? core.interrupt : core.succeed(MutableHashMap.keys(impl.state.map)));
};
/** @internal */
export const invalidate = /*#__PURE__*/dual(2, /*#__PURE__*/core.fnUntraced(function* (self_, key) {
  const self = self_;
  if (self.state._tag === "Closed") return;
  const o = MutableHashMap.get(self.state.map, key);
  if (o._tag === "None") return;
  const entry = o.value;
  MutableHashMap.remove(self.state.map, key);
  if (entry.refCount > 0) return;
  yield* core.scopeClose(entry.scope, core.exitVoid);
  if (entry.fiber) yield* core.interruptFiber(entry.fiber);
}));
/** @internal */
export const has = /*#__PURE__*/dual(2, (self_, key) => {
  const self = self_;
  return core.sync(() => {
    if (self.state._tag === "Closed") return false;
    return MutableHashMap.has(self.state.map, key);
  });
});
/** @internal */
export const touch = /*#__PURE__*/dual(2, (self_, key) => coreEffect.clockWith(clock => {
  const self = self_;
  if (self.state._tag === "Closed") return core.void;
  const o = MutableHashMap.get(self.state.map, key);
  if (o._tag === "None") return core.void;
  const entry = o.value;
  if (Duration.isZero(entry.idleTimeToLive)) return core.void;
  entry.expiresAt = clock.unsafeCurrentTimeMillis() + Duration.toMillis(entry.idleTimeToLive);
  return core.void;
}));
//# sourceMappingURL=rcMap.js.map