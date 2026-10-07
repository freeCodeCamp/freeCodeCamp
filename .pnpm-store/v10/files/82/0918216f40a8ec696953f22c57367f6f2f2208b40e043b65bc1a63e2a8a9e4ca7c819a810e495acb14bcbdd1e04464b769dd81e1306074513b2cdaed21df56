"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zipWithFiber = exports.zipRightFiber = exports.zipLeftFiber = exports.zipFiber = exports.updateSomeAndGetEffectSynchronized = exports.unsafeMakeSynchronized = exports.unsafeMakeSemaphore = exports.unsafeMakeLatch = exports.timeoutTo = exports.timeoutOption = exports.timeoutFailCause = exports.timeoutFail = exports.timeout = exports.synchronizedVariance = exports.supervised = exports.raceFirst = exports.makeSynchronized = exports.makeSemaphore = exports.makeLatch = exports.fromFiberEffect = exports.fromFiber = exports.forkScoped = exports.forkIn = exports.forkAll = exports.ensuringChildren = exports.ensuringChild = exports.cachedInvalidateWithTTL = exports.cachedFunction = exports.cached = exports.bindAll = exports.awaitAllChildren = exports.SynchronizedTypeId = void 0;
var Duration = _interopRequireWildcard(require("../../Duration.js"));
var Effectable = _interopRequireWildcard(require("../../Effectable.js"));
var Equal = _interopRequireWildcard(require("../../Equal.js"));
var Exit = _interopRequireWildcard(require("../../Exit.js"));
var FiberId = _interopRequireWildcard(require("../../FiberId.js"));
var _Function = require("../../Function.js");
var Hash = _interopRequireWildcard(require("../../Hash.js"));
var MutableHashMap = _interopRequireWildcard(require("../../MutableHashMap.js"));
var Option = _interopRequireWildcard(require("../../Option.js"));
var _Pipeable = require("../../Pipeable.js");
var Predicate = _interopRequireWildcard(require("../../Predicate.js"));
var Readable = _interopRequireWildcard(require("../../Readable.js"));
var _Scheduler = require("../../Scheduler.js");
var internalCause = _interopRequireWildcard(require("../cause.js"));
var effect = _interopRequireWildcard(require("../core-effect.js"));
var core = _interopRequireWildcard(require("../core.js"));
var internalFiber = _interopRequireWildcard(require("../fiber.js"));
var fiberRuntime = _interopRequireWildcard(require("../fiberRuntime.js"));
var _fiberScope = require("../fiberScope.js");
var internalRef = _interopRequireWildcard(require("../ref.js"));
var supervisor = _interopRequireWildcard(require("../supervisor.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
class Semaphore {
  permits;
  waiters = /*#__PURE__*/new Set();
  taken = 0;
  constructor(permits) {
    this.permits = permits;
  }
  get free() {
    return this.permits - this.taken;
  }
  take = n => core.asyncInterrupt(resume => {
    if (this.free < n) {
      const observer = () => {
        if (this.free < n) return;
        this.waiters.delete(observer);
        resume(core.suspend(() => {
          if (this.free < n) return this.take(n);
          this.taken += n;
          return core.succeed(n);
        }));
      };
      this.waiters.add(observer);
      return core.sync(() => {
        this.waiters.delete(observer);
      });
    }
    resume(core.suspend(() => {
      if (this.free < n) return this.take(n);
      this.taken += n;
      return core.succeed(n);
    }));
  });
  updateTakenUnsafe(fiber, f) {
    this.taken = f(this.taken);
    if (this.waiters.size > 0) {
      fiber.getFiberRef(_Scheduler.currentScheduler).scheduleTask(() => {
        const iter = this.waiters.values();
        let item = iter.next();
        while (item.done === false && this.free > 0) {
          item.value();
          item = iter.next();
        }
      }, fiber.getFiberRef(core.currentSchedulingPriority), fiber);
    }
    return core.succeed(this.free);
  }
  updateTaken(f) {
    return core.withFiberRuntime(fiber => this.updateTakenUnsafe(fiber, f));
  }
  resize = permits => core.asVoid(core.withFiberRuntime(fiber => {
    this.permits = permits;
    if (this.free < 0) {
      return core.void;
    }
    return this.updateTakenUnsafe(fiber, taken => taken);
  }));
  release = n => this.updateTaken(taken => taken - n);
  releaseAll = /*#__PURE__*/this.updateTaken(_ => 0);
  withPermits = n => self => core.uninterruptibleMask(restore => core.flatMap(restore(this.take(n)), permits => fiberRuntime.ensuring(restore(self), this.release(permits))));
  withPermitsIfAvailable = n => self => core.uninterruptibleMask(restore => core.suspend(() => {
    if (this.free < n) {
      return effect.succeedNone;
    }
    this.taken += n;
    return fiberRuntime.ensuring(restore(effect.asSome(self)), this.release(n));
  }));
}
/** @internal */
const unsafeMakeSemaphore = permits => new Semaphore(permits);
/** @internal */
exports.unsafeMakeSemaphore = unsafeMakeSemaphore;
const makeSemaphore = permits => core.sync(() => unsafeMakeSemaphore(permits));
exports.makeSemaphore = makeSemaphore;
class Latch extends Effectable.Class {
  isOpen;
  waiters = [];
  scheduled = false;
  constructor(isOpen) {
    super();
    this.isOpen = isOpen;
  }
  commit() {
    return this.await;
  }
  unsafeSchedule(fiber) {
    if (this.scheduled || this.waiters.length === 0) {
      return core.void;
    }
    this.scheduled = true;
    fiber.currentScheduler.scheduleTask(this.flushWaiters, fiber.getFiberRef(core.currentSchedulingPriority), fiber);
    return core.void;
  }
  flushWaiters = () => {
    this.scheduled = false;
    const waiters = this.waiters;
    this.waiters = [];
    for (let i = 0; i < waiters.length; i++) {
      waiters[i](core.exitVoid);
    }
  };
  open = /*#__PURE__*/core.withFiberRuntime(fiber => {
    if (this.isOpen) {
      return core.void;
    }
    this.isOpen = true;
    return this.unsafeSchedule(fiber);
  });
  unsafeOpen() {
    if (this.isOpen) return;
    this.isOpen = true;
    this.flushWaiters();
  }
  release = /*#__PURE__*/core.withFiberRuntime(fiber => {
    if (this.isOpen) {
      return core.void;
    }
    return this.unsafeSchedule(fiber);
  });
  await = /*#__PURE__*/core.asyncInterrupt(resume => {
    if (this.isOpen) {
      return resume(core.void);
    }
    this.waiters.push(resume);
    return core.sync(() => {
      const index = this.waiters.indexOf(resume);
      if (index !== -1) {
        this.waiters.splice(index, 1);
      }
    });
  });
  unsafeClose() {
    this.isOpen = false;
  }
  close = /*#__PURE__*/core.sync(() => {
    this.isOpen = false;
  });
  whenOpen = self => {
    return core.zipRight(this.await, self);
  };
}
/** @internal */
const unsafeMakeLatch = open => new Latch(open ?? false);
/** @internal */
exports.unsafeMakeLatch = unsafeMakeLatch;
const makeLatch = open => core.sync(() => unsafeMakeLatch(open));
/** @internal */
exports.makeLatch = makeLatch;
const awaitAllChildren = self => ensuringChildren(self, fiberRuntime.fiberAwaitAll);
/** @internal */
exports.awaitAllChildren = awaitAllChildren;
const cached = exports.cached = /*#__PURE__*/(0, _Function.dual)(2, (self, timeToLive) => core.map(cachedInvalidateWithTTL(self, timeToLive), tuple => tuple[0]));
/** @internal */
const cachedInvalidateWithTTL = exports.cachedInvalidateWithTTL = /*#__PURE__*/(0, _Function.dual)(2, (self, timeToLive) => {
  const duration = Duration.decode(timeToLive);
  return core.flatMap(core.context(), env => core.map(makeSynchronized(Option.none()), cache => [core.provideContext(getCachedValue(self, duration, cache), env), invalidateCache(cache)]));
});
/** @internal */
const computeCachedValue = (self, timeToLive, start) => {
  const timeToLiveMillis = Duration.toMillis(Duration.decode(timeToLive));
  return (0, _Function.pipe)(core.deferredMake(), core.tap(deferred => core.intoDeferred(self, deferred)), core.map(deferred => Option.some([start + timeToLiveMillis, deferred])));
};
/** @internal */
const getCachedValue = (self, timeToLive, cache) => core.uninterruptibleMask(restore => (0, _Function.pipe)(effect.clockWith(clock => clock.currentTimeMillis), core.flatMap(time => updateSomeAndGetEffectSynchronized(cache, option => {
  switch (option._tag) {
    case "None":
      {
        return Option.some(computeCachedValue(self, timeToLive, time));
      }
    case "Some":
      {
        const [end] = option.value;
        return end - time <= 0 ? Option.some(computeCachedValue(self, timeToLive, time)) : Option.none();
      }
  }
})), core.flatMap(option => Option.isNone(option) ? core.dieMessage("BUG: Effect.cachedInvalidate - please report an issue at https://github.com/Effect-TS/effect/issues") : restore(core.deferredAwait(option.value[1])))));
/** @internal */
const invalidateCache = cache => internalRef.set(cache, Option.none());
/** @internal */
const ensuringChild = exports.ensuringChild = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => ensuringChildren(self, children => f(fiberRuntime.fiberAll(children))));
/** @internal */
const ensuringChildren = exports.ensuringChildren = /*#__PURE__*/(0, _Function.dual)(2, (self, children) => core.flatMap(supervisor.track, supervisor => (0, _Function.pipe)(supervised(self, supervisor), fiberRuntime.ensuring(core.flatMap(supervisor.value, children)))));
/** @internal */
const forkAll = exports.forkAll = /*#__PURE__*/(0, _Function.dual)(args => Predicate.isIterable(args[0]), (effects, options) => options?.discard ? core.forEachSequentialDiscard(effects, fiberRuntime.fork) : core.map(core.forEachSequential(effects, fiberRuntime.fork), fiberRuntime.fiberAll));
/** @internal */
const forkIn = exports.forkIn = /*#__PURE__*/(0, _Function.dual)(2, (self, scope) => core.withFiberRuntime((parent, parentStatus) => {
  const scopeImpl = scope;
  const fiber = fiberRuntime.unsafeFork(self, parent, parentStatus.runtimeFlags, _fiberScope.globalScope);
  if (scopeImpl.state._tag === "Open") {
    const finalizer = () => core.fiberIdWith(fiberId => Equal.equals(fiberId, fiber.id()) ? core.void : core.asVoid(core.interruptFiber(fiber)));
    const key = {};
    scopeImpl.state.finalizers.set(key, finalizer);
    fiber.addObserver(() => {
      if (scopeImpl.state._tag === "Closed") return;
      scopeImpl.state.finalizers.delete(key);
    });
  } else {
    fiber.unsafeInterruptAsFork(parent.id());
  }
  return core.succeed(fiber);
}));
/** @internal */
const forkScoped = self => fiberRuntime.scopeWith(scope => forkIn(self, scope));
/** @internal */
exports.forkScoped = forkScoped;
const fromFiber = fiber => internalFiber.join(fiber);
/** @internal */
exports.fromFiber = fromFiber;
const fromFiberEffect = fiber => core.suspend(() => core.flatMap(fiber, internalFiber.join));
exports.fromFiberEffect = fromFiberEffect;
const memoKeySymbol = /*#__PURE__*/Symbol.for("effect/Effect/memoizeFunction.key");
class Key {
  a;
  eq;
  [memoKeySymbol] = memoKeySymbol;
  constructor(a, eq) {
    this.a = a;
    this.eq = eq;
  }
  [Equal.symbol](that) {
    if (Predicate.hasProperty(that, memoKeySymbol)) {
      if (this.eq) {
        return this.eq(this.a, that.a);
      } else {
        return Equal.equals(this.a, that.a);
      }
    }
    return false;
  }
  [Hash.symbol]() {
    return this.eq ? 0 : Hash.cached(this, Hash.hash(this.a));
  }
}
/** @internal */
const cachedFunction = (f, eq) => {
  return (0, _Function.pipe)(core.sync(() => MutableHashMap.empty()), core.flatMap(makeSynchronized), core.map(ref => a => (0, _Function.pipe)(ref.modifyEffect(map => {
    const result = (0, _Function.pipe)(map, MutableHashMap.get(new Key(a, eq)));
    if (Option.isNone(result)) {
      return (0, _Function.pipe)(core.deferredMake(), core.tap(deferred => (0, _Function.pipe)(effect.diffFiberRefs(f(a)), core.intoDeferred(deferred), fiberRuntime.fork)), core.map(deferred => [deferred, (0, _Function.pipe)(map, MutableHashMap.set(new Key(a, eq), deferred))]));
    }
    return core.succeed([result.value, map]);
  }), core.flatMap(core.deferredAwait), core.flatMap(([patch, b]) => (0, _Function.pipe)(effect.patchFiberRefs(patch), core.as(b))))));
};
/** @internal */
exports.cachedFunction = cachedFunction;
const raceFirst = exports.raceFirst = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => (0, _Function.pipe)(core.exit(self), fiberRuntime.race(core.exit(that)), effect => core.flatten(effect)));
/** @internal */
const supervised = exports.supervised = /*#__PURE__*/(0, _Function.dual)(2, (self, supervisor) => {
  const supervise = core.fiberRefLocallyWith(fiberRuntime.currentSupervisor, s => s.zip(supervisor));
  return supervise(self);
});
/** @internal */
const timeout = exports.timeout = /*#__PURE__*/(0, _Function.dual)(2, (self, duration) => timeoutFail(self, {
  onTimeout: () => core.timeoutExceptionFromDuration(duration),
  duration
}));
/** @internal */
const timeoutFail = exports.timeoutFail = /*#__PURE__*/(0, _Function.dual)(2, (self, {
  duration,
  onTimeout
}) => core.flatten(timeoutTo(self, {
  onTimeout: () => core.failSync(onTimeout),
  onSuccess: core.succeed,
  duration
})));
/** @internal */
const timeoutFailCause = exports.timeoutFailCause = /*#__PURE__*/(0, _Function.dual)(2, (self, {
  duration,
  onTimeout
}) => core.flatten(timeoutTo(self, {
  onTimeout: () => core.failCauseSync(onTimeout),
  onSuccess: core.succeed,
  duration
})));
/** @internal */
const timeoutOption = exports.timeoutOption = /*#__PURE__*/(0, _Function.dual)(2, (self, duration) => timeoutTo(self, {
  duration,
  onSuccess: Option.some,
  onTimeout: Option.none
}));
/** @internal */
const timeoutTo = exports.timeoutTo = /*#__PURE__*/(0, _Function.dual)(2, (self, {
  duration,
  onSuccess,
  onTimeout
}) => core.fiberIdWith(parentFiberId => core.uninterruptibleMask(restore => fiberRuntime.raceFibersWith(restore(self), core.interruptible(effect.sleep(duration)), {
  onSelfWin: (winner, loser) => core.flatMap(winner.await, exit => {
    if (exit._tag === "Success") {
      return core.flatMap(winner.inheritAll, () => core.as(core.interruptAsFiber(loser, parentFiberId), onSuccess(exit.value)));
    } else {
      return core.flatMap(core.interruptAsFiber(loser, parentFiberId), () => core.exitFailCause(exit.cause));
    }
  }),
  onOtherWin: (winner, loser) => core.flatMap(winner.await, exit => {
    if (exit._tag === "Success") {
      return core.flatMap(winner.inheritAll, () => core.as(core.interruptAsFiber(loser, parentFiberId), onTimeout()));
    } else {
      return core.flatMap(core.interruptAsFiber(loser, parentFiberId), () => core.exitFailCause(exit.cause));
    }
  }),
  otherScope: _fiberScope.globalScope
}))));
// circular with Synchronized
/** @internal */
const SynchronizedSymbolKey = "effect/Ref/SynchronizedRef";
/** @internal */
const SynchronizedTypeId = exports.SynchronizedTypeId = /*#__PURE__*/Symbol.for(SynchronizedSymbolKey);
/** @internal */
const synchronizedVariance = exports.synchronizedVariance = {
  /* c8 ignore next */
  _A: _ => _
};
/** @internal */
class SynchronizedImpl extends Effectable.Class {
  ref;
  withLock;
  [SynchronizedTypeId] = synchronizedVariance;
  [internalRef.RefTypeId] = internalRef.refVariance;
  [Readable.TypeId] = Readable.TypeId;
  constructor(ref, withLock) {
    super();
    this.ref = ref;
    this.withLock = withLock;
    this.get = internalRef.get(this.ref);
  }
  get;
  commit() {
    return this.get;
  }
  modify(f) {
    return this.modifyEffect(a => core.succeed(f(a)));
  }
  modifyEffect(f) {
    return this.withLock((0, _Function.pipe)(core.flatMap(internalRef.get(this.ref), f), core.flatMap(([b, a]) => core.as(internalRef.set(this.ref, a), b))));
  }
}
/** @internal */
const makeSynchronized = value => core.sync(() => unsafeMakeSynchronized(value));
/** @internal */
exports.makeSynchronized = makeSynchronized;
const unsafeMakeSynchronized = value => {
  const ref = internalRef.unsafeMake(value);
  const sem = unsafeMakeSemaphore(1);
  return new SynchronizedImpl(ref, sem.withPermits(1));
};
/** @internal */
exports.unsafeMakeSynchronized = unsafeMakeSynchronized;
const updateSomeAndGetEffectSynchronized = exports.updateSomeAndGetEffectSynchronized = /*#__PURE__*/(0, _Function.dual)(2, (self, pf) => self.modifyEffect(value => {
  const result = pf(value);
  switch (result._tag) {
    case "None":
      {
        return core.succeed([value, value]);
      }
    case "Some":
      {
        return core.map(result.value, a => [a, a]);
      }
  }
}));
// circular with Fiber
/** @internal */
const zipFiber = exports.zipFiber = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => zipWithFiber(self, that, (a, b) => [a, b]));
/** @internal */
const zipLeftFiber = exports.zipLeftFiber = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => zipWithFiber(self, that, (a, _) => a));
/** @internal */
const zipRightFiber = exports.zipRightFiber = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => zipWithFiber(self, that, (_, b) => b));
/** @internal */
const zipWithFiber = exports.zipWithFiber = /*#__PURE__*/(0, _Function.dual)(3, (self, that, f) => ({
  ...Effectable.CommitPrototype,
  commit() {
    return internalFiber.join(this);
  },
  [internalFiber.FiberTypeId]: internalFiber.fiberVariance,
  id: () => (0, _Function.pipe)(self.id(), FiberId.getOrElse(that.id())),
  await: (0, _Function.pipe)(self.await, core.flatten, fiberRuntime.zipWithOptions(core.flatten(that.await), f, {
    concurrent: true
  }), core.exit),
  children: self.children,
  inheritAll: core.zipRight(that.inheritAll, self.inheritAll),
  poll: core.zipWith(self.poll, that.poll, (optionA, optionB) => (0, _Function.pipe)(optionA, Option.flatMap(exitA => (0, _Function.pipe)(optionB, Option.map(exitB => Exit.zipWith(exitA, exitB, {
    onSuccess: f,
    onFailure: internalCause.parallel
  })))))),
  interruptAsFork: id => core.zipRight(self.interruptAsFork(id), that.interruptAsFork(id)),
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
}));
/* @internal */
const bindAll = exports.bindAll = /*#__PURE__*/(0, _Function.dual)(args => core.isEffect(args[0]), (self, f, options) => core.flatMap(self, a => fiberRuntime.all(f(a), options).pipe(core.map(record => Object.assign({}, a, record)))));
//# sourceMappingURL=circular.js.map